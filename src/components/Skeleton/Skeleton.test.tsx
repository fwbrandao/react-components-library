import React from "react";
import { render } from "@testing-library/react";
import SkeletonElement from "./SkeletonElement";

describe("Skeleton", () => {
  it("renders the skeleton component", () => {
    render(<SkeletonElement elementType="text"/>);
  });
});