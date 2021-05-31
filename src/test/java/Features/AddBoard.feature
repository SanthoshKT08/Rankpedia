Feature: Validating add board API

@Add1
Scenario: Verify if add board API creating
Given add board payload
When send post request
Then assert status code
@Add2
Scenario: Verify if GET board API request
Given GET board 
When send GET request
Then assert reponse
@Add3
Scenario: Verify if Delete board API request
Given Delete board 
When send Post request for delete
Then assert reponse for delete

