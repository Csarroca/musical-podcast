import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import styles from "./styles/styles";
import App from "./App";

describe("Given a App Component", () => {
  describe("When it's rendered in  '/' path", () => {
    test("Then it should show a header with 'Podcaster' title", () => {
      const expectedTitle = "Podcaster";
      render(
        <ThemeProvider theme={styles}>
          <MemoryRouter initialEntries={["/"]}>{<App />}</MemoryRouter>
        </ThemeProvider>
      );

      const header = screen.getByRole("heading", { name: expectedTitle });

      expect(header).toBeInTheDocument();
    });
  });
});
