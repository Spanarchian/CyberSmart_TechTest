# CyberSmart_TechTest
Language of choice - Python / Test framework: pytest-bdd
Reasoning: 
     To write the manual tests in a format that will eventually be automated.


1. Select target for the test  -  
   DAT Shopping List (https://github.com/jimpick/dat-shopping-list) Run locally in docker.

2. Exploritory testing will be used to outline the precieved functionality and documented 
   as features tests.

3. To implement the most valubale flow first and include as many functions in the E2E test.

Due to the state of the application to be tested and my phobia of usignxpaths in testing. even after deploying the docker container to Heroku.

I changed tack and used cypress to test the application.

To execute the tests: 
    Clone or download the repository  Zip and extract
    cd /cypress
    sh ./run_test.sh


The failing test is due to the current restriction (to the best of my knowledge) 
cypress cannot use incognito mode on chrome to allow it to appear as another user.