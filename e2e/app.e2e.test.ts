import test, { expect } from "@playwright/test";

test("Add item to TODO", async ({ page }) => {
  await page.goto("http://localhost:4173");

  const btn = page.getByText("Add");
  const list = page.getByTestId("list");
  const input = page.getByPlaceholder("Add a todo");

  const nameText = page.getByTestId("name");

  await input.fill("Hello");
  await btn.click();

  console.log(nameText.textContent);

  await expect(list).toHaveCount(1);
  await expect(nameText).toHaveText("Hello");
});
