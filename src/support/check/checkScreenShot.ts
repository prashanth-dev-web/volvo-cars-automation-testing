import { expect } from 'chai';

/**
 * Checks the given screenshot to the one saved in baseline.
 * @param {String} imageName ScreenShot name
 */
export function checkScreenShot(imageName) {
    expect(browser.checkScreen(imageName)).equal(0);
}