import { textColorDecorator } from "@/utils/storybook";
import { defineStorybookActionsAndVModels } from "@sit-onyx/storybook-utils";
import type { Meta, StoryObj } from "@storybook/vue3";
import OnyxLoadingIndicator from "./OnyxLoadingIndicator.vue";

/**
 * The loading indicator can be used to show that some long-running action is currently
 * loading/running.

 * The color will be inherited by the current text color.
 */
const meta: Meta<typeof OnyxLoadingIndicator> = {
  title: "components/OnyxLoadingIndicator",
  ...defineStorybookActionsAndVModels({
    component: OnyxLoadingIndicator,
    events: [],
    decorators: [textColorDecorator],
  }),
};

export default meta;
type Story = StoryObj<typeof OnyxLoadingIndicator>;

export const Circle = { args: {} } satisfies Story;

export const Dots = {
  args: {
    type: "dots",
  },
} satisfies Story;
