import { test, expect  } from "@playwright/test";

test('launching Browser' , async({page})=>{
    await page.goto("https://qasmart.in/");
    await page.setViewportSize({width:1820 , height:1080})
   const title = await page.title();
   console.log(title);
   await expect(title).toContain('QAsmart');
   await page.locator("//a[text()='Interview Q&A']").nth(0).click();
   const title2 = await page.title();
   await expect(title2).toContain('Interview');
  
});

test('login functionality' , async({page})=>{

    await page.goto("https://qasmart.in/");
    await page.setViewportSize({width:1820 , height:1080})
})
