//const { assert } = require('chai');
const config = require('../framework/config/config.js')
const expect = require('chai').expect;

Feature('Авторизация');

Before(({ loginPage }) => {
    loginPage.visit()
})

Scenario('Успешная авторизация пользователя',  async ({ I, loginPage }) => {
    loginPage.login(config.credentials.user)
    I.dontSeeCurrentUrlEquals('https://1001dress.ru/auth/')
    
});

Scenario('Нельзя авторизоваться без пароля',  async ({ I, loginPage }) => {
   
    loginPage.login({
        email: config.credentials.user.email,
        password: ''
    })
    await expect(await loginPage.getPasswordError()).to.be.equal('test')
    I.dontSeeCurrentUrlEquals('https://1001dress.ru/')
    
});

Scenario('Нельзя авторизоваться с неверным паролем',  async ({ I, loginPage }) => {
   
    loginPage.login({
        email: config.credentials.user.email,
        password: ''
    })
    await expect(await loginPage.getPasswordError()).to.be.equal('test')
    I.dontSeeCurrentUrlEquals('https://1001dress.ru/')
    
});

Scenario('Нельзя авторизоваться без email',  async ({ I, loginPage }) => {
   
    loginPage.login({
        email: '',
        password: config.credentials.user.password
    })
    await expect(await loginPage.getPasswordError()).to.be.equal('test')
    I.dontSeeCurrentUrlEquals('https://1001dress.ru/')
    
});