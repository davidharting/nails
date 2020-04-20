import React from "react";
import { render } from "@testing-library/react";

import Index from "~/pages/index";

test("renders Get Started link", () => {
  const { getByText } = render(<Index />);
  const button = getByText(/Get started/);
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute("href", "/home");
});
