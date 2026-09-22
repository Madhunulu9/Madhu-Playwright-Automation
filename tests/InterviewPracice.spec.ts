import {test,expect} from "@playwright/test"

test('Interview Scenario verify KPMG url' , async({page , context})=>{
     
    await page.goto("URL");
    const links = page.locator('a').filter({hasText:'KPMG'})
    const counts = await links.count();
    for(let i=0;i<counts;i++){
       const link = links.nth(i); 
       const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        link.click()
       ])
       await newPage.waitForLoadState('domcontentloaded')
       //verify correct page has been opened or not
       await expect(newPage).toHaveURL('https://example.com/kpmg');
       console.log(`Link ${i+1} opened the correct page`) 
       await newPage.close();
    }

})