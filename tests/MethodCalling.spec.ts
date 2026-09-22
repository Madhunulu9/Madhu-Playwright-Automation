import {test} from "@playwright/test"
import { CommonMethods } from "../pages/Methods"
import loginData from '../data/loginData.json'

test('login functionality' , async({page})=>{
    const methods = new CommonMethods(page);
    await methods.goto();
    await methods.login(loginData.username,loginData.password);
    await methods.verifyDashboard();
    await methods.logout();
}) 

