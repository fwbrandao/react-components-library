import type { Meta, StoryObj } from "@storybook/react";

import SkeletonElement from "./SkeletonElement";

const meta: Meta<typeof SkeletonElement> = {
  title: "ReactComponentsLibrary/Skeleton",
  component: SkeletonElement,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SkeletonElement>;

export const Skeleton: Story = {
  args: {
    elementType: "title",
    theme: "light"
  },
};
