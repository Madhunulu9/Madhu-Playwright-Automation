import {Page , Locator, expect} from "@playwright/test"

export class SauceDemoMethods{
readonly page:Page;
readonly usernameInput :Locator;
readonly PasswrodInput :Locator;
readonly submitButton :Locator;
readonly addToCart : Locator;
readonly cartButton :Locator;
readonly checkOutButton : Locator;
readonly firstName : Locator;
readonly lastname : Locator;
readonly pincode : Locator;
readonly continueButton :Locator;
readonly finishButton :Locator;
readonly orderCompletemessage : Locator;



constructor (page:Page){
    this.page = page;
    this.usernameInput = page.locator("#user-name");
    this.PasswrodInput = page.locator("#password");
    this.submitButton = page.locator("#login-button");
    this.addToCart = page.getByRole('button' , {name :'Add to cart'})
    this.cartButton = page.locator('//a[@class="shopping_cart_link"]')
    this.checkOutButton = page.locator('#checkout')
    this.firstName = page.locator('#first-name')
    this.lastname = page.locator('#last-name')
    this.pincode = page.locator('#postal-code')
    this.continueButton = page.locator('#continue')
    this.finishButton = page.locator('#finish')
    this.orderCompletemessage = page.getByRole('heading' , {name :'Thank you for your order!'})
}

async login(username :string , password :string){
    await this.usernameInput.fill(username);
    await this.PasswrodInput.fill(password);
    await this.submitButton.click(); 
}
getProductCard(product: string): Locator {
  return this.page.locator('.inventory_item').filter({hasText: product});
}
getAddToCartButton(product: string): Locator {
  return this.getProductCard(product).getByRole('button', { name: 'Add to cart' });
}
async itemAddingToCart(product: string) {
  await this.getAddToCartButton(product).click();20
}
async checkOut(firstname :string,lastname:string,pincode:string){
    await this.cartButton.click();
    await this.checkOutButton.click();
    await this.firstName.fill(firstname)
    await this.lastname.fill(lastname)
    await this.pincode.fill(pincode)
    await this.continueButton.click();
    await this.finishButton.click()
}
async verifyOrderCompleteMesssage(){
    await expect(this.orderCompletemessage).toBeVisible();
}

}











