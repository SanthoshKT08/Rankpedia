Feature: Student login functionality
@studentLogin
Scenario: Verify if student can able to login with valid phone number
Given Student enter the phone number payload
When Student hit the post request
Then Check the status code