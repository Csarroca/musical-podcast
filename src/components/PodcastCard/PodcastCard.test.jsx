import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { podcast } from "../../test-utils/mocks/mocks";
import { Wrapper } from "../../test-utils/render/Wrapper";
import PodcastCard from "./PodcastCard";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a PodcastCard component", () => {
  describe("When it's instanciated with a podcast as a prop", () => {
    test("Then it should show the image, the name and the author of the podcast", () => {
      render(<PodcastCard podcast={podcast} />, { wrapper: Wrapper });

      const image = screen.getByRole("img");
      const name = screen.getByRole("heading", { name: podcast.name });
      const author = screen.getByText(`Author: ${podcast.author}`);

      expect(image).toBeInTheDocument();
      expect(name).toBeInTheDocument();
      expect(author).toBeInTheDocument();
    });
  });

  test("When it's clicked then it should navigate to podcast detailed view", () => {
    render(<PodcastCard podcast={podcast} />, { wrapper: Wrapper });

    const component = screen.getByRole("img");

    userEvent.click(component);

    expect(mockNavigate).toHaveBeenCalled();
  });
});
