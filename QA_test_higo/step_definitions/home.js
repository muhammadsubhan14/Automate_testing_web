const { When, Then } = require('@cucumber/cucumber');
const HigoPage = require('../page-objects/page');

const page = new HigoPage();

When(/^(.*)_the user is on the homepage$/, async (code) => {
    await page.open();
});

Then(/^(.*)_the user sees the Higo logo at the top$/, async (code) => {
    await page.validateNavbar()
});

When(/^(.*)_user click button ABOUT HIGO$/, async (code)  => {
await page.clickAboutHigo()
});

Then(/^(.*)_user is on ABOUT HIGO page$/, async (code) =>{
await page.scrollAboutHigo()
});

When(/^(.*)_user click button Case Study$/, async (code) =>{
await page.clickCaseStudy()
});

Then(/^(.*)_user click colaboration image$/, async (code) => {
await page.clickImageCaseStudy()
});

When(/^(.*)_user click other colaboration image$/, async (code) => {
await page.selectorOtherImageCaseStudy()
});

Then(/^(.*)_user scrolling client higo$/, async (code) => {
await page.scrollDavon()
});

When(/^(.*)_user click button Digital Reports$/, async (code) =>{
await page.clickButtonDigitalReports()
});

Then(/^(.*)_user scroll Digital Reports$/, async (code) => {
await page.scrollDownDigitalReports()
});

When(/^(.*)_user fills the form with valid data$/, async (code) => {
    await page.fillForm({
        firstName: 'muhammad',
        lastName: 'subhan',
        email: 'msubhan@gmail.com',
        phone: '08128786667',
        company: 'HigoTech',
        jobTitle: 'Software Engineer'
    });
});

Then(/^(.*)_a pop-up banner showed up$/, async (code) => {
    await page.validateBanner()
});

Then(/^(.*)_click x for close the banner$/, async (code) => {
    await page.clickButtonX()
});

Then(/^(.*)_click checkbox$/, async (code) =>{
await page.clickCheckBox()
});

Then(/^(.*)_user click button download at the and of page$/, async (code) =>{
await page.clickDownload()
});

When(/^(.*)_user click blog higo$/, async (code) =>{
await page.clickBlogHigo()
});

Then(/^(.*)_user is on blog higo page$/, async (code) =>{
await page.validateBloghigoPage()
});

When(/^(.*)_user click one of news update$/, async (code) =>{
await page.clickNews()
});

Then(/^(.*)_user is on news update page$/, async (code) => {
await page.validateNewsUpdate()
});