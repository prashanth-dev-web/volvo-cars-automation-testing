import { When } from 'cucumber';
import { saveScreenShot } from '../support/action/saveScreenShot';
import { clickElement } from '../support/action/clickElement';


When(
  /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
  clickElement,
);

When(
  /^I save a screenshot of "([^"]*)?" page$/,
  saveScreenShot
)