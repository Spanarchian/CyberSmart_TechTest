import pytest
 
from pytest_bdd import scenarios, given, when, then, parsers
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
 
# Constants
SHOPPING_LISTS_HOME = 'http://localhost:5000/'
 
# Scenarios
scenarios('../features/Navigate_ShoppingList.feature')

# Fixtures
@pytest.fixture
def browser():
    b = webdriver.Chrome()
    b.implicitly_wait(100)
    yield b
    b.quit()
    
# Given Steps
@given('I am on the HomePage')
def ddg_home(browser):
    browser.get(SHOPPING_LISTS_HOME)
    
@when(parsers.parse('I select "{Create a new Shoppinglist}"'))
def search_phrase(browser, phrase):
    shoppingLists = browser.find_element_by_class("_656deb8a")
    shoppingLists.click()
    search_input = browser.find_element_by_id('search_form_input_homepage')
    search_input.send_keys(phrase + Keys.RETURN)
 



Given I am on the HomePage
        When I select 'Create a new Shoppinglist'
        And Submit with 'My Shopping List'
        Then I am Shown the pre-populated 'My Shopping List' page