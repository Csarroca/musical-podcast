import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../test-utils/render/Wrapper";
import Header from "./Header";
import userEvent from "@testing-library/user-event";

describe("Given a Header component", () => {
  describe("When it is instanciated", () => {
    test("Then it should show a heading with 'Podcaster' inside", () => {
      render(<Header />, {
        wrapper: Wrapper,
      });

      const heading = screen.getByRole("heading", { name: "Podcaster" });

      expect(heading).toBeInTheDocument();
    });
  });
  test("And the page changes then it should set the loading", () => {});
  test("When it's clicked then it should return to the home page", () => {
    const mockLocation = {
      pathname: "http://localhost/",
      Location: "",
      key: "",
      search: "",
      hash: "",
      state: "",
    };

    render(<Header />, {
      wrapper: Wrapper,
    });

    const link = screen.getByRole("link");
    userEvent.click(link);

    expect(link.href).toBe(mockLocation.pathname);
  });
});
