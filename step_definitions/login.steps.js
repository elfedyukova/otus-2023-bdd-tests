/// <reference types='codeceptjs' />
const config = require('../framework/config/config.js')
const expect = require('chai').expect;

const { I, loginPage } = inject();

Given('Пользователь открывает страницу авторизации', () => {
  loginPage.visit();
});

When('Пользователь вводит правильные учетные данные', () => {
  const { user } = config.credentials;
  loginPage.login(user);
});

Then('Пользователь успешно авторизован и перенаправлен на страницу личного кабинета', async () => {
  I.seeCurrentUrlEquals('https://1001dress.ru/personal/')
});

When('Пользователь не вводит пароль', () => {
  const { user } = config.credentials;
  loginPage.login({
    email: user.email,
    password: ''
  });
});

Then('Пользователь остается на странице авторизации', async () => {
  const expectedErrorMessage = 'Введите пароль.';
  //await expect(await loginPage.getPasswordError()).to.be.equal(expectedErrorMessage);
  I.seeCurrentUrlEquals('https://1001dress.ru/auth/')
});
