import { test,expect} from "@playwright/test"

test('Handling Dropdowns' ,async({page})=>{
    await page.goto('https://qasmart.in/')
    await page.getByText('Practice Lab').hover();
 const options = page.locator(".dropdown-content a");

    const count = await options.count();

    for (let i = 0; i < count; i++) {
        const text = await options.nth(i).innerText();
        console.log(text);
      if (text === "✅DropDown") {
            await options.nth(i).click();
        }
    }
    await page.waitForTimeout(3000);
      const header =await page.getByText("Dropdown Practice")
      await expect(header).toContainText("Dropdown Practice")
});