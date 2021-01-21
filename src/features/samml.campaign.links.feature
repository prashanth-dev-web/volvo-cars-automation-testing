Feature: Save A Million More Lives Campaign Page Links

    As a tester
    I should test the navigation menu in Save A Million More Lives campaign page.

    Background: 
        Given I open the url "https://www.volvocars.com/intl/v/car-safety/a-million-more"

    @Verbose
    Scenario: Accept cookies Modal
        When I click on the button "button.optanon-allow-all.accept-cookies-button"
        Then I expect that element "div.optanon-alert-box-wrapper" becomes not displayed

    @Verbose
    Scenario: Open site navigation
        When I click on the button "button[data-autoid='nav:siteNavHamburgerIcon']"
        Then I expect that element "div[data-autoid='nav:sideNavigationContainer']" is displayed
    
    @Verbose
    Scenario: Open learn more about car safety
        When I click on the button "a[data-autoid='iconCallouts:cta']"
        Then I expect that element "section[data-autoid='ModelIntro']" becomes displayed
        And I expect that the title is "Car safety | Volvo Cars"