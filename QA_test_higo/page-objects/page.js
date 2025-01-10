const { browser } = require('@wdio/globals');

module.exports = class HigoPage {

    async open(path = '') {
        const baseUrl = 'https://higo.id/';
        return browser.url(`${baseUrl}${path}`);
    }

    async gotoLink(link) {
        return browser.url(link);
    }

    async validateNavbar() {
        const logoSelector = 'img[alt="HIGO"]';
        const logoDisplayed = await browser.$(logoSelector).isDisplayed();
        if (!logoDisplayed) {
            throw new Error('Higo logo is not displayed');
        }
    }

    async clickAboutHigo(path= '') {
        const baseUrlAboutUS = 'https://higo.id/about-us';
        return browser.url( `${baseUrlAboutUS}${path}`);
    }

    async scrollAboutHigo() {
        const selector = 'a[href="/about-us"]';
        const element = await browser.$(selector);

        const aboutUsExisting = await element.isExisting();
        if (!aboutUsExisting) {
            throw new Error(`Element with selector "${selector}" for ABOUT HIGO was not found.`);
        }

        await element.waitForExist({ timeout: 5000 });
        await element.scrollIntoView();
    }

    async clickCaseStudy(path = '') {
        const baseUrlStudyCases = 'https://higo.id/case-study';
        return browser.url( `${baseUrlStudyCases}${path}`);
    }

    async clickImageCaseStudy(path = '') {
        const selectorImageCaseStudyCases = 'img[alt="Kintaro Sushi"]'
        const imageDisplayed = await browser.$(selectorImageCaseStudyCases).isDisplayed();
        if (!imageDisplayed) {
            throw new Error('kintaro sushi is not found.');
        }
    }
    async selectorOtherImageCaseStudy(path = '') {
        const otherImageCaseStudy = 'img[alt="Devon"]'
        const imageDisplayed = await browser.$(otherImageCaseStudy).isDisplayed();
        if (!imageDisplayed) {
            throw new Error('davon is not found.');
        }
    }

    async scrollDavon(){
        const selector = 'a[href="/case-study/devon"]'
        const element = await browser.$(selector);

        const caseStudyDavon = await element.isExisting();
        if (!caseStudyDavon) {
            throw Error(`Element with selector "${selector}" not found.`);
        }
        await element.waitForExist({ timeout: 5000 });
        await element.scrollIntoView();
    }

    async clickButtonDigitalReports(path= '') {
        const selector = 'https://higo.id/annualreport2024';
        return browser.url( `${selector}${path}`);

    }

    async scrollDownDigitalReports(path= '') {
        const selector = 'a[href="/annualreport2024"]';
        const element = await browser.$(selector);

        const digitalReportsExisting = await element.isExisting();
        if (!digitalReportsExisting) {
            throw new Error(`Element with selector "${selector}" not found.`);
        }
        await element.waitForExist({ timeout: 5000 });
        await element.scrollIntoView();
    }

    async fillForm({ firstName, lastName, email, phone, company, jobTitle }) {
        const firstNameSelector = '/html/body/main/div/section[30]/div/div[2]/form/div[2]/div[1]/input';
        const lastNameSelector = '/html/body/main/div/section[30]/div/div[2]/form/div[2]/div[2]/input';
        const emailSelector = '/html/body/main/div/section[30]/div/div[2]/form/div[2]/div[3]/input';
        const phoneSelector = '/html/body/main/div/section[30]/div/div[2]/form/div[2]/div[4]/input';
        const companySelector = '/html/body/main/div/section[30]/div/div[2]/form/div[2]/div[5]/input';
        const jobTitleSelector = '/html/body/main/div/section[30]/div/div[2]/form/div[2]/div[6]/input';

        await (await browser.$(firstNameSelector)).setValue(firstName);
        await (await browser.$(lastNameSelector)).setValue(lastName);
        await (await browser.$(emailSelector)).setValue(email);
        await (await browser.$(phoneSelector)).setValue(phone);
        await (await browser.$(companySelector)).setValue(company);
        await (await browser.$(jobTitleSelector)).setValue(jobTitle);

        const submitButtonSelector = 'button[type="submit"]';
        const submitButton = await browser.$(submitButtonSelector);
        await submitButton.click();
    }
    async validateBanner() {
        const selector = 'div[id="radix-:R2bta:"]'
        const bannerDisplayed = await browser.$(selector).isDisplayed();
        if (!bannerDisplayed) {
            throw new Error('banner is not displayed');
        }
    }

    async clickButtonX() {
        const selector = '//*[@id="radix-:R2bta:"]/button'
        const buttonX = await browser.$(selector);
        await buttonX.click();
    }

    async clickCheckBox() {
        const selector = '//*[@id="HjQv3"]/div/label/input'
        const box = await browser.$(selector);
        await box.click()
    }

    async clickDownload() {
        const selector = '/html/body/main/div/section[30]/div/div[2]/form/div[3]/button[1]'
        const box = await browser.$(selector);
        await box.click();
    }

    async clickBlogHigo(path= ''){
        const baseUrlBlogHigo = 'https://blog.higo.id/';
        return browser.url( `${baseUrlBlogHigo}${path}`);
    }

    async validateBloghigoPage() {
        const selectorBlogExisting = '/html/body/main/div/section/h2'
        const isTrue = await browser.$(selectorBlogExisting).isExisting();
        if (!isTrue) {
            throw new Error(`Element with selector "${selectorBlogExisting}" not found.`);
        }
    }

    async clickNews(path= '') {
        const selector = 'img[alt="Video Hook: Cara Jitu Menarik Perhatian Audiens"]'
        const newsExisting = await browser.$(selector).click();
    }

    async validateNewsUpdate(path= '') {
        const selectorTitle = 'img[alt="Video Hook: Cara Jitu Menarik Perhatian Audiens"]'
        const newsExisting = await browser.$(selectorTitle).isExisting();
        if (!newsExisting) {
            throw new Error(`Element with selector "${selectorTitle}" not found.`);
        }
    }
};

