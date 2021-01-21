// https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities

export const capabilitiesFirefoxConfig = {
  'maxInstances': 1,
  'browserName': 'firefox',
  'moz:firefoxOptions': {
    args: [
        '-headless',
    ],
  },
  'acceptInsecureCerts': true,
  'cjson:metadata': {
    device: process.env.SELENIUM_VERSION,
  },
};
