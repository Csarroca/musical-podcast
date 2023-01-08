import { render, screen } from "@testing-library/react";
import { podcasts } from "../../test-utils/mocks/mocks";
import { Wrapper } from "../../test-utils/render/Wrapper";
import PodcastList from "./PodcastList";

describe("Given a PodcastList component", () => {
  describe("When it is instanciated with podcasts as a props", () => {
    test("Then it should show a list of 100 podcasts", () => {
      render(<PodcastList podcasts={podcasts} />, { wrapper: Wrapper });

      const list = screen.getAllByRole("list");

      expect(list[0]).toBeInTheDocument();
    });
  });
});
