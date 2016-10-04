Feature: As a user I can login to ITS portal with valid credentials 

@Login
Scenario Outline: Verify authorized login

 Given User can navigate to ITS Portal for "<Environment>"
 When Enter Login credentials "<EmailId>" and  "<Password>"
 Then Verify user is logged in
 Examples: 
 |      EmailId                |  Password  |TestCaseId|Environment|
 | automationBDD@continuum.net |  Abc@12345 | 12345    |DT|
