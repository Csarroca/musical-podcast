import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../test-utils/render/Wrapper";
import LoadingIndicator from "./LoadingIndicator";

describe("Given a LoadingIndicator component", () => {
  describe("When it's instanciated with a isLoading props", () => {
    test("Then it should render an image of a loader if isLoading it's true", () => {
      render(<LoadingIndicator isLoading={true} />, { wrapper: Wrapper });

      const loader = screen.getByAltText("Loading...");

      expect(loader).toBeInTheDocument();
    });
  });
});
