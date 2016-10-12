Feature: As a user I want to login to ITS portal

@Smoke
Scenario Outline: login test
Given ITS portal is application is open
When Enter credentails "<EmailId>" and "<Password>"
Then User to is logged in to Portal
And Verify Dashboard is displayed


Examples:
|EmailId                    |Password|
|automationBDD@continuum.net |Abc@12345|
