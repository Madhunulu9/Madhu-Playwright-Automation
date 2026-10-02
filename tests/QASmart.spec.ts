import { expect, test } from '@playwright/test';

//september 06
test('opens New Browser Tab from the Window Handle practice lab', async ({ page,context}) => {
  
  await page.goto('https://qasmart.in/');

  await page.getByText('Practice Lab ▾').hover();
  await page.getByText('✅Window Handle').click();

  const [newTab] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button', { name: 'New Browser Tab', exact: true }).click(),
  ]);
  await newTab.waitForLoadState('domcontentloaded');
  await expect(newTab).toHaveTitle('Sign Up | LinkedIn')
});

test('Alert Practice' , async ({page , context})=>{
  await page.goto('https://qasmart.in/');
  await page.getByText('Practice Lab ▾').hover();
  await page.getByText('✅Alerts').click();
  await page.locator('#alert-button').click();
  page.once('dialog' , async dialog =>{
    console.log(dialog.message());
    await dialog .accept();
  });
});
test('drop down Handling' , async({page})=>{
  await page.goto('https://qasmart.in/');
  await page.getByText('Practice Lab ▾').hover();
  await page.getByText('✅DropDown').click();
  await page.locator('select').selectOption('js'); 
})
test('radio Button ' , async({page})=>{
    await page.goto('https://qasmart.in/');
    await page.getByText('Practice Lab ▾').hover();
    await page.getByText('✅Registration').click();
    await page.locator("//label[text()='Male']").check();
    await page.locator("//label[text()='Playwright']").check();
    await page.waitForTimeout(5000);
})





