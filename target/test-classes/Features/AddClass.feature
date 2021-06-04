Feature: Validating add class API
@AddClass
Scenario: Verify if add class API creating
Given add class payload
When add class post request
Then add class assert 200

@GetAllClass
Scenario: Verify Get class API
Given  Get resource for class
Then verify the Get class status code 200

@DeleteClass
Scenario: Verify Delete class API
Given send delete payload
When Set path resource fot Delete class
Then Verify Delete class status code 200