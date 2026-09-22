import {test,expect,request} from "@playwright/test"

test('API Testing' , async()=>{
      const requestContext = await request.newContext();
      const response= await requestContext.get('http://localhost:8080/api/users/1')
      expect(response.status()).toBe(200);

})