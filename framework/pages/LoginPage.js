const { I } = inject();

module.exports = {

    fields: {
        email: "//input[@id='USER_LOGIN']",
        password: "//input[@id='USER_PASSWORD']"
    },
    submitButton: locate('button').withText('Войти'),
    errors: {
        password: ''
    },


visit () {
    I.amOnPage('https://1001dress.ru/auth/')
    I.see('Войти')
},

fillEmail (email) {
    I.fillField(this.fields.email, email)
  },
  fillPassword (password) {
    I.fillField(this.fields.password, password)
  },
  submitForm () {
    I.click(this.submitButton)
  },

login ({ email, password }) {
    this.visit()
    this.fillEmail(email)
    this.fillPassword(password)
    this.submitForm()   
}
}