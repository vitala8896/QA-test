const { Given, When, Then } = require("@cucumber/cucumber");
const { 
  login,
  emptyUser,
  emptyPassword,
  generalError
} = require('../page_object/code.page');


Given('I open page on ui', async () => {  
    await login('Vitaliy','123');
});

Given(
    "I check the field for empty user name:", async data => { 
    await emptyUser(data);
});

When(
  "I check the field for an empty password:", async data => { 
    await emptyPassword(data);
});

Then(
  "General login error:", async data => { 
    await generalError(data)
});