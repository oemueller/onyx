import { defineStorybookActionsAndVModels } from "@sit-onyx/storybook-utils";
import type { Meta, StoryObj } from "@storybook/vue3";
import OnyxTextarea from "./OnyxTextarea.vue";

/**
 * A textarea is an input component for entering multiline text.
 */
const meta: Meta<typeof OnyxTextarea> = {
  title: "components/OnyxTextarea",
  ...defineStorybookActionsAndVModels({
    component: OnyxTextarea,
    events: ["update:modelValue", "change"],
  }),
};

export default meta;
type Story = StoryObj<typeof OnyxTextarea>;

/**
 * This example shows the default textarea.
 */
export const Default = {
  args: {
    label: "Label",
  },
} satisfies Story;

/**
 * This example shows a textarea that can be manually resized by dragging the bottom right corner.
 */
export const Resize = {
  args: {
    label: "Label",
    placeholder: "Drag the bottom right corner to manually adjust the height...",
    resize: true,
  },
} satisfies Story;

/**
 * This example shows a textarea that adjust its height based on the current value.
 */
export const Autosize = {
  args: {
    label: "Label",
    placeholder: "Type more than 3 rows to see the auto resizing...",
    autosize: true,
  },
} satisfies Story;
