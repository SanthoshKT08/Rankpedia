package com.PageSpeed.StepDefinitions;

import org.junit.runner.RunWith;
import org.testng.Assert;

import Pojo.StudentLogin;

import static io.restassured.RestAssured.given;

import java.io.IOException;

import Resources.TestDataBuild;
import Resources.Utiles;
import Resources.jsonPath;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

@RunWith(Cucumber.class)
public class VerifyOTP extends Utiles {

	
	public static TestDataBuild data;
	public static StudentLogin login;
	public static   RequestSpecification verifyOTPreq;
	public static Response response;
	 @Given("^Student enter the OTP payload$")
	    public void student_enter_the_otp_payload() throws IOException   {
		data = new TestDataBuild();
		login = new StudentLogin();
	       verifyOTPreq= given().spec(requestSpecification().body(data.VerifyotpPayload("9788304403",com.PageSpeed.StepDefinitions.StudentLogin.OTP )));
	    }

	    @When("^Student hit the post request for OTP$")
	    public void student_hit_the_post_request_for_otp()   {
	      response = verifyOTPreq.when().log().all().post("students/verifyOtp");
	    }

	    @Then("^Check the status code for verify OTP$")
	    public void check_the_status_code_for_verify_otp()   {
	      String verify = response.then().spec(responeSpecification()).extract().asString();
	      JsonPath js = jsonPath.json(verify);
	    String  msg= js.getString("message");
	    System.out.println(msg);
	    Assert.assertEquals(msg, "OTP matched");
	    }

}
