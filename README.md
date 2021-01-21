# Volvo Cars - Save A Million More Lives Campaign Page Testing Automation

We would try to automate testing of one of campaign page in Volvo Cars website using Selenium Webdriver.io, Cucumber &Docker

## Features

- Dockerised solution
- Parallel execution
- Detailed reporting
- Documentation

## Requirements

- To run *Firefox* and *Chrome* browsers with docker selenium you need:
  - `docker`
  - `docker-compose`

- Tests are executed with Node.js, requires:
  - `Node.js` version 10 or higher
  - `npm` version 6 or higher

## Quick start

1. Install dependencies required to run the tests:

```sh
npm install
```

2. Start docker selenium containers with `docker-compose`:

```sh
# starts the selenium hub and browser nodes in docker containers
npm run selenium
```

3. Run the tests and view the report:

```sh
# run tests and open the report
npm run test
```

To stop all the docker containers from step 2:

```sh
npm run selenium:stop
```

Note that selenium containers can be started once and then used across multiple sessions of running and debugging tests.

## Adding tests

Tests are written using [Gherkin syntax](https://cucumber.io/docs/gherkin/) in a fashion that can be used as feature documentation:

```gherkin
# This is a single line comment
Feature: Performing a Google Search

    As a user on the Google search page
    I want to search for Selenium-Webdriver
    Because I want to learn more about it

    Background:
        Given I open the url "https://google.com"

    Scenario: Searching for Selenium Webdriver
        When I set "Selenium Webdriver" to the inputfield "[name=q]"
        And  I press "Enter"
        Then I expect that element "#search" becomes displayed
```

All tests should be located in `./src/features/*` directory with extension `.feature` (configured in `./config/tests.config.ts`).  
For a list of predefined and supported steps see files:
- `./src/steps/given.ts` 
- `./src/steps/when.ts` 
- `./src/steps/then.ts`.  


### Browser specific tests
To run a test against a specific browser use predefined [tags](https://cucumber.io/docs/cucumber/api/#tags):

```gherkin
Feature: Performing a Google Search

    ...

    # This scenario will run only in Chrome browser
    @OnlyChrome
    Scenario: Searching in chrome browser
    ...

    # This scenario will run only in Firefox browser
    @OnlyFirefox
    Scenario: Searching in Firefox browser
    ...
```

### Pending tests

To skip a test, use the `@Pending` tag:
```gherkin
Feature: Performing a Google Search

    ...

    # This scenario will be skipped
    @Pending
    Scenario: Searching for WebdriverIO
    ...
```

### Verbose tests

Currently, a screenshot is attached only for a failing test. In case you want screenshots for a test regardless of its completion status,
use the `@Verbose` tag:

```gherkin
Feature: Performing a Google Search

    ...

    # A screenshot and additional test details will be attached to the report
    @Verbose
    Scenario: Searching for WebdriverIO
    ...
```

### Hooks

Hooks are blocks of code that can run at various points in the Cucumber execution cycle. It is possible to write conditional hooks.  
See examples of scenario hooks in `./src/steps/hooks.ts`. For a more advanced usage, configure hooks in 
`./config/hooks.config.ts`.  

You can customize existing hooks or implement your own.
See the WebdriverIO [documentation]((https://webdriver.io/docs/options.html#hooks)) about hooks. 

## Configurations

### Environment variables 

The configurable options are set in the `.env` file.

|Variable|Usage|
|--|--|
|`SELENIUM_VERSION`|Configure the version of selenium hub and nodes. Change this version if you want to run tests against a specific browser version. See the [list](https://github.com/SeleniumHQ/docker-selenium/releases) of available selenium releases and browser versions.|
|`SCREEN_WIDTH` `SCREEN_HEIGHT`|Configure browser window size.|

### WebdriverIO options

WebdriverIO specific [options](https://webdriver.io/docs/options.html) are all in `./config` directory.  
For example, to configure a default url change the `baseUrl` option in `./config/index.ts`:  

```typescript
export const config = {
  runner: 'local',
  baseUrl: 'https://webdriver.io',
  ...
```