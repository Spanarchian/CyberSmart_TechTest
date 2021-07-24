Feature: Manage Access to Shopping Lists
    As an application administratior
    I want to control access to the Lists
    So that only authenicated users can add and remove items

    Scenario:  Ensure that a List creator is automatically authorised
        Given I have created a list
        When I expand the top textbox
        Then I see it contains 'You created this document.'
        And I see it contains 'You are authorized to write to this document.'

    Scenario:  Ensure that a guest(URL Link) is automatically not authorised
        Given I have connected to a link while incognito mode
        And the URL link is valid
        When I am navigated to the list
        And I expand the top textbox
        Then I see it contains 'You joined this document.'
        And I see it contains 'You are not currently authorized to write to this document.'

    Scenario:  Allow a guest(URL Link) to be authorised
        Given I have passed my key to the owner
        And the is added to the writer
        When I am navigated to the list
        And I expand the top textbox
        Then I see it contains 'You joined this document.'
        And I see it contains 'You are authorized to write to this document.'
