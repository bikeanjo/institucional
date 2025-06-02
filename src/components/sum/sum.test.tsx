import { render, screen } from "@testing-library/react";
import Sum from "./sum";

test("loads and displays greeting", () => {
  // ARRANGE
  render(<Sum />);

  // ACT
  const h1 = screen.getByRole("heading");
  const button = screen.getByRole("button");

  // ASSERT
  expect(h1).toHaveTextContent("Hello World!");
  expect(button).toBeDisabled();
});
