import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../test-utils/render/Wrapper";
import Filter from "./Filter";
import React from "react";

describe("Given a Filter component", () => {
  describe("When its instanciated with a search, a searcher and results", () => {
    test("Then it should show a input and the number of results", () => {
      const mockSearch = "revolt";

      const mockResults = 1;

      render(<Filter search={mockSearch} results={mockResults} />, {
        wrapper: Wrapper,
      });

      const filterInput = screen.getByPlaceholderText("Filter podcasts...");

      expect(filterInput).toBeInTheDocument();
      expect(mockResults).toStrictEqual(1);
    });
  });
});
