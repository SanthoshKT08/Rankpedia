Feature: Validating add student API
@addStudent
Scenario: Verify if add student API creating
Given student add student payload
When student send post request for add student
Then Student assert status code for add student