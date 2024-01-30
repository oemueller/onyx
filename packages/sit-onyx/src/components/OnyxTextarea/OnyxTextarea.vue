<script lang="ts" setup>
import { computed, nextTick, ref, watch } from "vue";
import type { OnyxTextareaProps } from "./types";

const props = withDefaults(defineProps<OnyxTextareaProps>(), {
  modelValue: "",
  resize: false,
  autosize: false,
  rows: 3,
});

const emit = defineEmits<{
  /** emitted when the value changes. */
  "update:modelValue": [value: string];
  /** Emitted on blur when the input value changes */
  change: [value: string];
}>();

const textareaElement = ref<HTMLTextAreaElement | null>(null);

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("change", target.value);
};

/**
 * Calculates the rows/height of the textarea if autosize is enabled.
 * Otherwise props.rows will be used.
 */
const getCalculatedRows = () => {
  if (!props.autosize || !textareaElement.value) return props.rows;

  const styles = window.getComputedStyle(textareaElement.value);
  const padding = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
  const lineHeight = parseFloat(styles.lineHeight);
  const { scrollHeight } = textareaElement.value;
  const newRows = (scrollHeight - padding) / lineHeight;

  return Math.max(newRows, props.rows);
};

watch(
  [value, textareaElement, () => props.autosize, () => props.rows],
  async () => {
    if (!textareaElement.value) return;
    textareaElement.value.rows = props.rows;
    await nextTick();
    textareaElement.value.rows = getCalculatedRows();
  },
  { immediate: true },
);
</script>

<template>
  <label class="onyx-textarea">
    <p v-if="props.label" class="onyx-textarea__label">{{ props.label }}</p>
    <textarea
      ref="textareaElement"
      v-model="value"
      class="onyx-textarea__input"
      :class="{ 'onyx-textarea__input--resize': props.resize }"
      :name="props.name"
      :placeholder="props.placeholder"
      @change="handleChange"
    ></textarea>
  </label>
</template>

<style lang="scss">
.onyx-textarea {
  font-family: var(--onyx-font-family);
  display: block;

  &__label {
    margin-top: 0;
    margin-bottom: var(--onyx-spacing-2xs);
  }

  &__input {
    padding: var(--onyx-spacing-xs);
    resize: none;
    box-sizing: border-box;
    width: 100%;

    // line-height must be set here and can not be inherited by the parent for the autosize to work
    line-height: 1rem;

    &--resize {
      resize: vertical;
    }
  }
}
</style>
