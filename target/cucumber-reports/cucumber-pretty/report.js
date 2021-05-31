$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddBoard.feature");
formatter.feature({
  "line": 1,
  "name": "Validating add board API",
  "description": "",
  "id": "validating-add-board-api",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify if add board API creating",
  "description": "",
  "id": "validating-add-board-api;verify-if-add-board-api-creating",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Add1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "add board payload",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "send post request",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "assert status code",
  "keyword": "Then "
});
formatter.match({
  "location": "AddBoard.add_board_payload()"
});
formatter.result({
  "duration": 1240388000,
  "status": "passed"
});
formatter.match({
  "location": "AddBoard.send_post_request()"
});
formatter.result({
  "duration": 2011559700,
  "status": "passed"
});
formatter.match({
  "location": "AddBoard.assert_status_code()"
});
formatter.result({
  "duration": 1167916000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify if GET board API request",
  "description": "",
  "id": "validating-add-board-api;verify-if-get-board-api-request",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Add2"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "GET board",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "send GET request",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "assert reponse",
  "keyword": "Then "
});
formatter.match({
  "location": "AddBoard.get_board()"
});
formatter.result({
  "duration": 638729500,
  "status": "passed"
});
formatter.match({
  "location": "AddBoard.send_get_request()"
});
formatter.result({
  "duration": 11033000,
  "status": "passed"
});
formatter.match({
  "location": "AddBoard.assert_reponse()"
});
formatter.result({
  "duration": 334285300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify if Delete board API request",
  "description": "",
  "id": "validating-add-board-api;verify-if-delete-board-api-request",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Add3"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Delete board",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "send Post request for delete",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "assert reponse for delete",
  "keyword": "Then "
});
formatter.match({
  "location": "AddBoard.delete_board()"
});
formatter.result({
  "duration": 7715200,
  "status": "passed"
});
formatter.match({
  "location": "AddBoard.send_post_request_for_delete()"
});
formatter.result({
  "duration": 765012200,
  "status": "passed"
});
formatter.match({
  "location": "AddBoard.assert_reponse_for_delete()"
});
formatter.result({
  "duration": 19670200,
  "status": "passed"
});
formatter.uri("AddClass.feature");
formatter.feature({
  "line": 1,
  "name": "Validating add class API",
  "description": "",
  "id": "validating-add-class-api",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify if add class API creating",
  "description": "",
  "id": "validating-add-class-api;verify-if-add-class-api-creating",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@AddClass"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "add class payload",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "add class post request",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "add class assert 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AddClass.add_class_payload()"
});
formatter.result({
  "duration": 610628800,
  "status": "passed"
});
formatter.match({
  "location": "AddClass.add_class_post_request()"
});
formatter.result({
  "duration": 575948000,
  "status": "passed"
});
formatter.match({
  "location": "AddClass.add_class_assert_200()"
});
formatter.result({
  "duration": 17919300,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify Get class API",
  "description": "",
  "id": "validating-add-class-api;verify-get-class-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@GetAllClass"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Get resource for class",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "verify the Get class status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AddClass.get_resource_for_class()"
});
formatter.result({
  "duration": 627278600,
  "status": "passed"
});
formatter.match({
  "location": "AddClass.verify_the_get_class_status_code_200()"
});
formatter.result({
  "duration": 251700500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify Delete class API",
  "description": "",
  "id": "validating-add-class-api;verify-delete-class-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@DeleteClass"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "send delete payload",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Set path resource fot Delete class",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Verify Delete class status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "AddClass.send_delete_payload()"
});
formatter.result({
  "duration": 3465600,
  "status": "passed"
});
formatter.match({
  "location": "AddClass.set_path_resource_fot_delete_class()"
});
formatter.result({
  "duration": 557413500,
  "status": "passed"
});
formatter.match({
  "location": "AddClass.verify_delete_class_status_code_200()"
});
formatter.result({
  "duration": 17805400,
  "status": "passed"
});
formatter.uri("AddStudent.feature");
formatter.feature({
  "line": 1,
  "name": "Validating add student API",
  "description": "",
  "id": "validating-add-student-api",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify if add student API creating",
  "description": "",
  "id": "validating-add-student-api;verify-if-add-student-api-creating",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@addStudent"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "student add student payload",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "student send post request for add student",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Student assert status code for add student",
  "keyword": "Then "
});
formatter.match({
  "location": "AddStudent.student_add_student_payload()"
});
formatter.result({
  "duration": 3493800,
  "status": "passed"
});
formatter.match({
  "location": "AddStudent.student_send_post_request_for_add_student()"
});
formatter.result({
  "duration": 522942400,
  "status": "passed"
});
formatter.match({
  "location": "AddStudent.student_assert_status_code_for_add_student()"
});
formatter.result({
  "duration": 1955000,
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
  "duration": 8257200,
  "status": "passed"
});
formatter.match({
  "location": "AdminLogin.admin_calls_post_request()"
});
formatter.result({
  "duration": 512448800,
  "status": "passed"
});
formatter.match({
  "location": "AdminLogin.response_got_successfully()"
});
formatter.result({
  "duration": 25797700,
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
  "duration": 7987800,
  "status": "passed"
});
formatter.match({
  "location": "StudentSearch.teser_calls_get_request()"
});
formatter.result({
  "duration": 509373800,
  "status": "passed"
});
formatter.match({
  "location": "StudentSearch.response_got_successfully_for_search_student()"
});
formatter.result({
  "duration": 64378100,
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
  "duration": 6703700,
  "status": "passed"
});
formatter.match({
  "location": "StudentLogin.student_hit_the_post_request()"
});
formatter.result({
  "duration": 488472300,
  "status": "passed"
});
formatter.match({
  "location": "StudentLogin.check_the_status_code()"
});
formatter.result({
  "duration": 52004800,
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
  "duration": 7504100,
  "status": "passed"
});
formatter.match({
  "location": "VerifyOTP.student_hit_the_post_request_for_otp()"
});
formatter.result({
  "duration": 481368000,
  "status": "passed"
});
formatter.match({
  "location": "VerifyOTP.check_the_status_code_for_verify_otp()"
});
formatter.result({
  "duration": 13328700,
  "status": "passed"
});
});