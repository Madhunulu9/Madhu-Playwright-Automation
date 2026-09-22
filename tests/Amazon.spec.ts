import {test,expect} from "@playwright/test"
import { CommonMethods } from "../pages/Methods";
import loginData from '../data/loginData.json'

test('amazon retrive test' , async({page})=>{
    const methods = new CommonMethods(page)
    await page.goto("https://www.amazon.in/gp/bestsellers/?ref_=nav_cs_bestsellers")
   const texts =  await page.locator("//li[@class='nav-li']").allTextContents();
   console.log(texts);
   await methods.login(loginData.username,loginData.password)
   
})



