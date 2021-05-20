Feature: Validating add board API
Scenario: Verify if add board API creating
Given add board payload
When send post request
Then assert status code
@getboard
Scenario: Verify if GET board API request
Given GET board 
When send GET request
Then assert reponse

Scenario: Verify if Delete board API request
Given Delete board 
When send Post request for delete
Then assert reponse for delete

