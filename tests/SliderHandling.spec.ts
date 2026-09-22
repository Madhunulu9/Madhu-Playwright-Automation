import { test , expect } from "@playwright/test";


test('handlingSliders' ,async ({page})=>{
    await page.goto("https://jqueryui.com/resources/demos/slider/default.html");
  const slider=  await page.locator("//span[@class='ui-slider-handle ui-corner-all ui-state-default']");
 // await page.locator("//span[@class='ui-slider-handle ui-corner-all ui-state-default']").screenshot({path:'Screenshot/slider.png'});
   const boundingBox=  await slider.boundingBox();
  //await page.getByRole('button' , {name : 'Madhu'}).click();

   if(boundingBox){
  const startX=  boundingBox.x+boundingBox.width/2;
  const startY=  boundingBox.y+boundingBox.height/2;

  await page.mouse.move(startX,startY);
  await page.mouse.down();
  await page.mouse.move(startX+400 , startY);
  await page.mouse.up();
   }
})

test.only('move slider dynamically', async ({ page }) => {
  const targetPrice = 145;
  const minPrice = 100;
  await page.goto('https://testautomationpractice.blogspot.com/');
  const minSlider = page.locator('#slider-range span').first();
  await minSlider.focus();
  await minSlider.press('Home'); // slider ni $100 ki reset chestundi
  const movesRequired = targetPrice - minPrice;
  for (let i = 0; i < movesRequired; i++) {
  await minSlider.press('ArrowRight');
  }
});

test.only('move slider dynamically 2', async ({ page }) => {
  
});

