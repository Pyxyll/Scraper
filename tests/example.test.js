const puppeteer = require('puppeteer');

describe('My First Test', () => {
	it('Shoud launch the browser', async function () {
		const browser = await puppeteer.launch({
			headless: false,
			slowMo: 1,
			devtools: false,
			defaultViewport: null,
		});
		const page = await browser.newPage();
		await page.goto('http://studentssp.wit.ie/Timetables/StudentGroupTT.aspx');
		await page.select('#cboSchool', 'SS');
		await page.waitForNavigation();
		await page.select('#CboDept', '548715F70874B2B1561DDC98FE61E5C0');
		await page.waitForNavigation();
		await page.select('#CboPOS', '738D7481CCA7A0B7EE176DAFB2903FF3');
		await page.waitForNavigation();
		await page.select('#CboStudParentGrp', 'kcrco_b1-W_W');
		await page.click('#BtnRetrieve');
		const text = await page.$eval(
			'#divTT > table:nth-child(2) > tbody > tr:nth-child(3)',
			element => element.textContent
		);

		console.log(text);
	});
});
