/**
 * Captures the current browser page as screenshot and save it with given image name
 * @param {String} imageName Screen shot name
 */
export function saveScreenShot(imageName) {
    browser.saveScreen(imageName);
}