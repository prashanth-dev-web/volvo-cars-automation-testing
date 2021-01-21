Feature: Save A Million More Lives Campaign Screenshot

    As a tester
    I would like to test if Save A Million More Lives campaign page screenshot matches the baseline screenshot.

    Background: 
        Given I open the url "https://www.volvocars.com/intl/v/car-safety/a-million-more"

    Scenario: Compare ScreenShot With BaseLine
        When I save a screenshot of "samml-campaign" page
        Then I expect that "samml-campaign" screenshot matches baseline page screenshot