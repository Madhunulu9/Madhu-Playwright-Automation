import { test , expect } from "@playwright/test";

test('Orange HRM Login' , async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.locator("//div[contains(@class,'login-action')]").click();
    const dashboard=await page.locator("//h6[text()='Dashboard']")
    await expect(dashboard).toHaveText("Dashboard");
})

test('Forgot Password test case' , async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('Adminn')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.locator("//div[contains(@class,'login-action')]").click();
    const InvalidCredsErrorMessage=await page.locator("//p[text()='Invalid credentials']")
    await expect(InvalidCredsErrorMessage).toBeVisible();
})
test('User Creation' , async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.setViewportSize({width:1280,height:720})
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.locator("//div[contains(@class,'login-action')]").click();
    const dashboard=await page.locator("//h6[text()='Dashboard']")
    await expect(dashboard).toHaveText("Dashboard");
    await page.locator("//span[text()='Admin']").click();
    const adminHeader = await page.locator("//h6[text()='Admin']")
    await expect(adminHeader).toBeVisible();
    await page.getByText(' Add ').click()
    const required =await page.locator("//p[text()=' * Required']")
    await expect(required).toBeVisible()
    await page.locator("//div[@class='oxd-select-text-input']").nth(0).click()
    await page.locator("//div[@role='option']//span[text()='Admin']").click()
})



