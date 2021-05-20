Feature: Admin login functionality
@Adminlogin
Scenario: Verify if admin can able to login with valid credentials
Given Admin username and password
When Admin calls post request
Then response got successfully