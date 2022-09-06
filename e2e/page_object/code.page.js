const { expect } = require('@playwright/test');
const { 
    addText,
    dataTable,
    URL_PECODE,
    USER_NAME,
    PASSWORD,
    SUBMIT,
} = require("../support/constants");


const navigate = async () =>{
    await page.goto(URL_PECODE);
}
const login = async(username, password) => {
    await page.fill(USER_NAME, username);
    await page.fill(PASSWORD, password);    
    await page.click(SUBMIT); 
    await page.screenshot({ path: 'screenshot/login.png' });  
}
const emptyUser = async (data) => {
    const row = dataTable(data);
    const locator = await page.locator(addText(row.Text));

    await page.fill(USER_NAME, row.UserName);
    await page.click(SUBMIT);
    await page.screenshot({ path: 'screenshot/user_error.png' });  
    await expect(locator).toBeVisible();
}
const emptyPassword = async (data) => {
    const row = dataTable(data);
    const locator = await page.locator(addText(row.Text));

    await page.fill(PASSWORD, row.Password); 
    await page.click(SUBMIT);
    await page.screenshot({ path: 'screenshot/password_error.png' });         
    await expect(locator).toBeVisible();
}

const generalError = async (data) => {
    const row = dataTable(data);
    const locator = await page.locator(addText(row.Text));

    await page.fill(PASSWORD, row.Password); 
    await page.fill(USER_NAME, row.UserName);
    await page.click(SUBMIT);
    await page.screenshot({ path: 'screenshot/general_error.png' });
    await expect(locator).toBeVisible();
}
 
module.exports = { 
    navigate,
    login, 
    emptyUser,
    emptyPassword,
    generalError
};