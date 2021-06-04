Feature: Student verify OTP functionality
@VerifyOTP
Scenario: Verify if student can able to verify the OTP
Given Student enter the OTP payload
When Student hit the post request for OTP
Then Check the status code for verify OTP