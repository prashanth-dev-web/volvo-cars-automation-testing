import { Then } from 'cucumber';
import { waitForDisplayed } from '../support/action/waitForDisplayed';
import { checkTitle } from '../support/check/checkTitle';
import { isDisplayed } from '../support/check/isDisplayed';
import { checkScreenShot } from '../support/check/checkScreenShot';

Then(
  /^I expect that the title is( not)* "([^"]*)?"$/,
  checkTitle,
);

Then(
  /^I expect that element "([^"]*)?" is( not)* displayed$/,
  isDisplayed,
);

Then(
  /^I expect that element "([^"]*)?" becomes( not)* displayed$/,
  waitForDisplayed,
);

Then(
  /^I expect that "([^"]*)?" screenshot matches baseline page screenshot$/,
  checkScreenShot,
);