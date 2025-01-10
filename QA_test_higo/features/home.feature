Feature: Homepage

    Scenario: Display the homepage correctly
        When 01_the user is on the homepage
        Then 01_a pop-up banner showed up
        Then 01_click x for close the banner
        Then 01_the user sees the Higo logo at the top
        When 02_user click button ABOUT HIGO
        Then 02_user is on ABOUT HIGO page
        When 03_user click button Case Study
        Then 03_user click colaboration image
        When 04_user click other colaboration image
        Then 04_user scrolling client higo
        When 05_user click button Digital Reports
        Then 05_user scroll Digital Reports
        When 06_user fills the form with valid data
#        Then 06_click checkbox
        Then 06_user click button download at the and of page
        When 07_user click blog higo
        Then 07_user is on blog higo page
        When 08_user click one of news update
        Then 08_user is on news update page
