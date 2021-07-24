Feature: Manage Shopping Lists
    As a housekeeper
    I want to add and remove items
    So that I can be on top of my shopping

    Scenario: Create a shopping list
        Given the application is active
        And I am on the HomePage
        When I select 'Create a new Shoppinglist'
        And Submit with 'My Shopping List'
        Then I am Shown the pre-populated 'My Shopping List' page

    Scenario: Delete a list
        Given I am on the 'List' page
        When I select the 'Delete List' link
        And I confirm I want to Delete
        Then I am returned to the home page
        And the 'List' is no longer visible

    Scenario: Add a new Item to the List
        Given I am on the 'My Shopping List' page
        When I type 'Chilli powder' in the textbox
        And press the ADD button
        Then I see 'Chilli powder' added to the bottom of the list

    Scenario: Remove an Item from the list
        Given I am on the 'My Shopping List' page
        When I select the x button in the 'Chilli powder' item
        Then I see 'Chilli powder' has been removed from the list



