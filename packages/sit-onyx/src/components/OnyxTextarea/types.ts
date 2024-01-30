export type OnyxTextareaProps = {
  /** Current value. */
  modelValue?: string;
  /** Label to show above the textarea. */
  label?: string;
  /** Name of the associated data point submitted to the server when the form is submitted. */
  name?: string;
  /**
   * If `true`, the textarea height will adjust to the value.
   * Property `rows` will be used as minimum size.
   */
  autosize?: boolean;
  /**
   * If `true`, the user can manually resize the height of the textarea by dragging the bottom right corner.
   * If `autosize` is enabled, manual resizing will override and prevent any further auto resizing.
   */
  resize?: boolean;
  /**
   * Number of rows. Will determine the textarea height.
   * If `autosize` property is enabled, `rows` will determine the minimum height.
   */
  rows?: number;
  /**
   * Placeholder to show if the textarea is empty.
   */
  placeholder?: string;
};
