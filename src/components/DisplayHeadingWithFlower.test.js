import { render, screen } from "@testing-library/react";
import DisplayHeadingWithFlower from "./DisplayHeadingWithFlower";

test("renders text with lovely flower", () => {
  render(<DisplayHeadingWithFlower text="Hello World!" />);
  const linkElement = screen.getByText(/🌸/i);
  expect(linkElement).toBeInTheDocument();
});
