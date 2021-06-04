Feature: Validating add school
@addSchool
Scenario: Verify if admin can able to add the school
Given Add payload for school Api
When send the add resource resource
Then validating the status code 200 for add school API