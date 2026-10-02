import {test , expect} from "@playwright/test"

test('locator practice Dynamic ELement' , async ({page})=>{
await page.goto("http://uitestingplayground.com/?utm_source=chatgpt.com")
await page.locator("//a[text()='Dynamic ID']").click();
await page.getByRole("button" , {name : 'Button with Dynamic ID'}).click();
})

test('locator practice load delay locator ' , async ({page})=>{
await page.goto("http://uitestingplayground.com/?utm_source=chatgpt.com")
await page.locator("//a[text()='Client Side Delay']").click();
await page.getByRole("button" , {name : "Button Triggering Client Side Logic"}).click();
//await page.waitForTimeout(12000)
await expect(page.locator('//p[@class="bg-success"]')).toBeVisible({timeout : 20000});
});

test('IPL' , async ({page})=>{
    const linkText = 'Governing Council'
    const Header = 'Governing Council'
// await page.goto("https://www.iplt20.com/")
// await page.pause()
// await page.setViewportSize({width : 1280, height : 720})
// await page.locator('//span[@data-testid="content-super-hero-small-card-title" and (text()="IPL 2026 Final: RCB vs GT - Match Highlights")]').click();
await page.setViewportSize({ width: 1280, height: 720 });

//await page.goto('https://www.iplt20.com/videos/s-ipl-2026-final-rcb-vs-gt-match-highlights-o1hffe');

// await expect(page.locator("//button[@aria-label='Pause']")).toBeVisible({timeout :20000});
// await expect(page.locator('//button[@aria-label="Skip back 10 seconds"]')).toBeVisible()
// await expect(page.locator('//button[@aria-label="Skip forward 10 seconds"]')).toBeVisible();
// await expect(page.locator('//button[@aria-label="Mute"]')).toBeVisible();
// await expect(page.locator('//button[@aria-label="Settings"]')).toBeVisible();
// await expect(page.locator('//button[@aria-label="Picture in picture"]')).toBeVisible();
// await expect(page.locator('//button[@aria-label="Fullscreen"]')).toBeVisible();
//await page.getByRole('link' , {name : linkText}).click();
await page.goto('https://www.iplt20.com/videos/s-ipl-2026-final-rcb-vs-gt-match-highlights-o1hffe');
  await page.getByRole('button', { name: 'About' }).click();
  //await page.locator(`//span[text()="${linkText}"]`).click();
  await page.getByText(linkText).click();
  await expect(page.getByTestId('about-page-title')).toHaveText(Header);
});


