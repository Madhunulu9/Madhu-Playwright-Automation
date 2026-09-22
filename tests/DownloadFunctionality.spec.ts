import { test , expect } from "@playwright/test";



test('File download', async ({ page}) => {
await page.goto('https://the-internet.herokuapp.com/download');
// Wait for the download to start
const [download] = await Promise.all([
page.waitForEvent('download'), // wait for download to start
page.locator('a:has-text("some-file.txt")').click() // click download link
]);
//Save the file to a custom path
// const filePath = path.join( 'downloads', await download.suggestedFilename());
// await download.saveAs(filePath);
// console.log('File downloaded to:', filePath);
})