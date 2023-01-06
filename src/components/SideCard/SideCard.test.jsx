import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../test-utils/render/Wrapper";
import SideCard from "./SideCard";
import { podcast } from "../../test-utils/mocks/mocks";
import userEvent from "@testing-library/user-event";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a SideCard component", () => {
  describe("When instantiated with a podcast as props", () => {
    test("Then it should show the image of the podcast, the name, the description and the author", async () => {
      render(<SideCard podcast={podcast} />, { wrapper: Wrapper });

      const image = screen.getByRole("img");
      const name = screen.getByRole("heading", { name: podcast.name });
      const author = screen.getByText(`by ${podcast.author}`);
      const description = screen.getByText(podcast.description);

      expect(image).toBeInTheDocument();
      expect(name).toBeInTheDocument();
      expect(author).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });

  test("When it's clicked then it should return no the episodeList view", () => {
    render(<SideCard podcast={podcast} />, { wrapper: Wrapper });

    const component = screen.getByRole("article");

    userEvent.click(component);

    expect(mockNavigate).toHaveBeenCalled();
  });
});
