import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import Hero from "./Hero";
import { heroData } from "../../data/heroData";

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe("Hero Component", () => {
  // --------- Render Tests ---------
  test("renders main heading and subtitle", () => {
    render(<Hero data={heroData} />);

    expect(
      screen.getByText(/clean, modern web interfaces/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/I focus on translating ideas/i)
    ).toBeInTheDocument();
  });

  test("renders meta information", () => {
    render(<Hero data={heroData} />);

    heroData.meta.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test("renders core stack items", () => {
    render(<Hero data={heroData} />);

    const techSection = document.querySelector(".hero-tech");

    heroData.coreStack.forEach((tech) => {
      expect(within(techSection).getByText(tech)).toBeInTheDocument();
    });
  });

  test("renders stats correctly", () => {
    render(<Hero data={heroData} />);

    const statsSection = document.querySelector(".hero-stats");

    heroData.stats.forEach((stat) => {
      expect(within(statsSection).getByText(stat.value)).toBeInTheDocument();

      expect(within(statsSection).getByText(stat.label)).toBeInTheDocument();
    });
  });

  test("renders CTA buttons", () => {
    render(<Hero data={heroData} />);

    expect(
      screen.getByRole("button", { name: /view projects/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /contact me/i })
    ).toBeInTheDocument();
  });

  // --------- Interaction Tests ---------
  test("scrolls to projects section on button click", () => {
    const projectsSection = document.createElement("div");
    projectsSection.id = "projects";
    projectsSection.scrollIntoView = jest.fn();
    document.body.appendChild(projectsSection);

    render(<Hero data={heroData} />);

    fireEvent.click(screen.getByRole("button", { name: /view projects/i }));

    expect(projectsSection.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });
  });

  test("scrolls to contact section on button click", () => {
    const contactSection = document.createElement("div");
    contactSection.id = "contact";
    contactSection.scrollIntoView = jest.fn();
    document.body.appendChild(contactSection);

    render(<Hero data={heroData} />);

    fireEvent.click(screen.getByRole("button", { name: /contact me/i }));

    expect(contactSection.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });
  });

  // --------- Fallback / Defensive Tests ---------
  test("renders default heading when heading data is missing", () => {
    const mockData = { ...heroData, heading: null };
    render(<Hero data={mockData} />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  // --------- Accessibility / Semantic Checks ---------
  test("heading has correct semantic role", () => {
    render(<Hero data={heroData} />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test("stats container exists", () => {
    render(<Hero data={heroData} />);

    const statsContainer = document.querySelector(".hero-stats");
    expect(statsContainer).toBeInTheDocument();
  });
});
