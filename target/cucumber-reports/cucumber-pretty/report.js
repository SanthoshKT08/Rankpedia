$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddBoard.feature");
formatter.feature({
  "line": 1,
  "name": "Validating add board API",
  "description": "",
  "id": "validating-add-board-api",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Verify if add board API creating",
  "description": "",
  "id": "validating-add-board-api;verify-if-add-board-api-creating",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "add board payload",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "send post request",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "assert status code",
  "keyword": "Then "
});
formatter.match({
  "location": "AddBoard.add_board_payload()"
});
formatter.result({
  "duration": 892202000,
  "status": "passed"
});
formatter.match({
  "location": "AddBoard.send_post_request()"
});
formatter.result({
  "duration": 1846963399,
  "status": "passed"
});
formatter.match({
  "location": "AddBoard.assert_status_code()"
});
formatter.result({
  "duration": 671801500,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify if GET board API request",
  "description": "",
  "id": "validating-add-board-api;verify-if-get-board-api-request",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@getboard"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "GET board",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "send GET request",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "assert reponse",
  "keyword": "Then "
});
formatter.match({
  "location": "AddBoard.get_board()"
});
formatter.result({
  "duration": 604144199,
  "status": "passed"
});
formatter.match({
  "location": "AddBoard.send_get_request()"
});
formatter.result({
  "duration": 9979800,
  "status": "passed"
});
formatter.match({
  "location": "AddBoard.assert_reponse()"
});
formatter.result({
  "duration": 282502601,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify if Delete board API request",
  "description": "",
  "id": "validating-add-board-api;verify-if-delete-board-api-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Delete board",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "send Post request for delete",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "assert reponse for delete",
  "keyword": "Then "
});
formatter.match({
  "location": "AddBoard.delete_board()"
});
formatter.result({
  "duration": 2155101,
  "status": "passed"
});
formatter.match({
  "location": "AddBoard.send_post_request_for_delete()"
});
formatter.result({
  "duration": 459381200,
  "status": "passed"
});
formatter.match({
  "location": "AddBoard.assert_reponse_for_delete()"
});
formatter.result({
  "duration": 30182701,
  "status": "passed"
});
formatter.uri("AdminLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Admin login functionality",
  "description": "",
  "id": "admin-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify if admin can able to login with valid credentials",
  "description": "",
  "id": "admin-login-functionality;verify-if-admin-can-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Adminlogin"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Admin username and password",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Admin calls post request",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "response got successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminLogin.admin_username_and_password()"
});
formatter.result({
  "duration": 621784001,
  "status": "passed"
});
formatter.match({
  "location": "AdminLogin.admin_calls_post_request()"
});
formatter.result({
  "duration": 519483699,
  "status": "passed"
});
formatter.match({
  "location": "AdminLogin.response_got_successfully()"
});
formatter.result({
  "duration": 41448999,
  "status": "passed"
});
formatter.uri("GetstudentBySearch.feature");
formatter.feature({
  "line": 1,
  "name": "Search student functionality",
  "description": "",
  "id": "search-student-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify if tester can able to search student",
  "description": "",
  "id": "search-student-functionality;verify-if-tester-can-able-to-search-student",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "preconditions params",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "teser calls GET request",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "response got successfully for search student",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentSearch.preconditions_params()"
});
formatter.result({
  "duration": 13615201,
  "status": "passed"
});
formatter.match({
  "location": "StudentSearch.teser_calls_get_request()"
});
formatter.result({
  "duration": 545610501,
  "status": "passed"
});
formatter.match({
  "location": "StudentSearch.response_got_successfully_for_search_student()"
});
formatter.result({
  "duration": 162641100,
  "status": "passed"
});
formatter.uri("StudentLogin.feature");
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
  "duration": 18271800,
  "status": "passed"
});
formatter.match({
  "location": "StudentLogin.student_hit_the_post_request()"
});
formatter.result({
  "duration": 618473500,
  "status": "passed"
});
formatter.match({
  "location": "StudentLogin.check_the_status_code()"
});
formatter.result({
  "duration": 168836600,
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
  "duration": 13331100,
  "status": "passed"
});
formatter.match({
  "location": "VerifyOTP.student_hit_the_post_request_for_otp()"
});
formatter.result({
  "duration": 548601300,
  "status": "passed"
});
formatter.match({
  "location": "VerifyOTP.check_the_status_code_for_verify_otp()"
});
formatter.result({
  "duration": 47842000,
  "status": "passed"
});
});