import { Page , Locator, expect } from "@playwright/test"


export  class CommonMethods{
   
readonly page:Page;
readonly usernameInput :Locator;
readonly PasswrodInput :Locator;
readonly submitButton :Locator;
readonly dashBoardHeader :Locator;
readonly userAction :Locator;
readonly logoutButton :Locator;
readonly usernameSauceCode:Locator;
readonly passwordSauceCode:Locator;
readonly loginSauceCode :Locator;
constructor (page:Page){
    this.page = page;
    this.usernameInput = page.locator("//input[@name='username']");
    this.PasswrodInput = page.locator("//input[@name='password']");
    this.submitButton = page.locator("//button[@type='submit']");
    this.dashBoardHeader = page.locator("//h6[text()='Dashboard']")
    this.userAction = page.locator("//span[@class='oxd-userdropdown-tab']")
    this.logoutButton = page.locator("//a[text()='Logout']")
    this.usernameSauceCode = page.locator("//input[@id='user-name']")
    this.passwordSauceCode = page.locator("//input[@id='password']")
    this.loginSauceCode = page.locator("//input[@id='login-button']")
}

async login(username:string,password:string){
    await this.usernameInput.fill(username);
    await this.PasswrodInput.fill(password);
    await this.submitButton.click(); 
}
async verifyDashboard(){
    await expect(this.dashBoardHeader).toBeVisible();

}
async logout(){
     await this.userAction.click();
     await this.logoutButton.click();
}
async sauceCodeLlogin(username:string,password:string){
    await this.usernameSauceCode.fill(username);
    await this.passwordSauceCode.fill(password);
    await this.loginSauceCode.click(); 
}
async goto(){
  await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
}

}


