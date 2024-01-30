import { expect, test } from "../../playwright-axe";
import OnyxTextarea from "./OnyxTextarea.vue";

test("should autosize", async ({ mount }) => {
  // ARRANGE
  const component = await mount(<OnyxTextarea label="Autosize" autosize={true} />);
  const textarea = component.getByLabel("Autosize");

  const testCases = [
    { line: "Line 1", expectedRows: 3 },
    { line: "\nLine 2", expectedRows: 3 },
    { line: "\nLine 3", expectedRows: 3 },
    { line: "\nLine 4", expectedRows: 4 },
    { line: "\nLine 5", expectedRows: 5 },
  ];

  for (const testCase of testCases) {
    // ACT
    await textarea.pressSequentially(testCase.line);

    // ASSERT
    await expect(textarea).toHaveAttribute("rows", testCase.expectedRows.toString());
  }

  await expect(component).toHaveScreenshot("autosize.png");

  // ACT
  await textarea.clear();

  // ASSERT
  await expect(textarea).toHaveAttribute("rows", "3");
  await expect(component).toHaveScreenshot("autosize-cleared.png");
});
