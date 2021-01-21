export const capabilitiesChromeConfig = {
  'maxInstances': 2,
  'browserName': 'chrome',
  'goog:chromeOptions': {
    args: [
      '--no-sandbox',
      '--headless',
      '--disable-gpu',
    ],
  },
  'cjson:metadata': {
    device: process.env.SELENIUM_VERSION,
  },
};
