Feature: Save A Million More Lives Campaign Cookie Policy

    As a tester
    I should test the cookie policy in Save A Million More Lives campaign page.

    Background: 
        Given I open the url "https://www.volvocars.com/intl/v/car-safety/a-million-more"

    @Verbose
    Scenario: Show Accept Cookies Policy Modal
        Then I expect that element "div.optanon-alert-box-bg" becomes displayed

    @Verbose
    Scenario: Show Cookie Settings Modal
        When I click on the button "button.optanon-toggle-display.cookie-settings-button"
        Then I expect that element "#optanon-popup-wrapper" becomes displayed
    
    @Verbose
    Scenario: Allow All Cookies
        When I click on the button "button.optanon-toggle-display.cookie-settings-button"
        And I click on the button "div.optanon-button-wrapper.optanon-allow-all-button.optanon-allow-all button"
        Then I expect that element "#optanon-popup-wrapper" becomes not displayed