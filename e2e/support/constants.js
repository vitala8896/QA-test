const dataTable = table => table.hashes()[0];
const addText = str => `text=${str}`;
const URL_PECODE = 'https://www.pecodesoftware.com/qa-portal/greet.php';
const USER_NAME = 'input[name="username"]';
const PASSWORD = 'input[name="password"]';
const SUBMIT = 'input[type="submit"]';

module.exports = {
    dataTable,
    addText, 
    URL_PECODE,
    USER_NAME,
    PASSWORD,
    SUBMIT
}