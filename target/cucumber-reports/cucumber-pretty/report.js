$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("StudentLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Student login functionality",
  "description": "",
  "id": "student-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify if student can able to login with valid phone number",
  "description": "",
  "id": "student-login-functionality;verify-if-student-can-able-to-login-with-valid-phone-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@studentLogin"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Student enter the phone number payload",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Student hit the post request",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Check the status code",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLogin.student_enter_the_phone_number_payload()"
});
formatter.result({
  "duration": 1994937200,
  "status": "passed"
});
formatter.match({
  "location": "StudentLogin.student_hit_the_post_request()"
});
formatter.result({
  "duration": 3390818400,
  "status": "passed"
});
formatter.match({
  "location": "StudentLogin.check_the_status_code()"
});
formatter.result({
  "duration": 261039100,
  "status": "passed"
});
formatter.uri("VerifyOTP.feature");
formatter.feature({
  "line": 1,
  "name": "Student verify OTP functionality",
  "description": "",
  "id": "student-verify-otp-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify if student can able to verify the OTP",
  "description": "",
  "id": "student-verify-otp-functionality;verify-if-student-can-able-to-verify-the-otp",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@VerifyOTP"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Student enter the OTP payload",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Student hit the post request for OTP",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Check the status code for verify OTP",
  "keyword": "Then "
});
formatter.match({
  "location": "VerifyOTP.student_enter_the_otp_payload()"
});
formatter.result({
  "duration": 9808900,
  "status": "passed"
});
formatter.match({
  "location": "VerifyOTP.student_hit_the_post_request_for_otp()"
});
formatter.result({
  "duration": 555768800,
  "status": "passed"
});
formatter.match({
  "location": "VerifyOTP.check_the_status_code_for_verify_otp()"
});
formatter.result({
  "duration": 980183600,
  "status": "passed"
});
});