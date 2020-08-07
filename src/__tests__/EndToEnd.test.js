import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  beforeEach(async () => {
    jest.setTimeout(40000)
  })

  test('An event element is collapsed by default', async () => {
    const browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-extensions']
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.Event');
    const extra = await page.$('.Event .extra');
    expect(extra).toBeNull();
    browser.close();
  });
});