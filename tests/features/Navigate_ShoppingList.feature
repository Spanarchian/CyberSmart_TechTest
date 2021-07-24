Feature: Navigate Shopping Lists App
    As a housekeeper
    I want to be able to move around the app
    So that I can orchestrate my shopping better


    Scenario: Navigate to a list from the home page
        Given I am on the HomePage
        And I can see the List of shopping lists
        When I select a list
        Then I am navigated to that list page