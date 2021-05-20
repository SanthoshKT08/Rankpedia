package com.PageSpeed.StepDefinitions;

import static io.restassured.RestAssured.given;

import java.io.IOException;

import org.junit.runner.RunWith;
import org.testng.Assert;

import Pojo.GetStudentOTP;
import Resources.TestDataBuild;
import Resources.Utiles;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

@RunWith(Cucumber.class)
public class StudentLogin extends Utiles{

	public static TestDataBuild payload;
	public static  RequestSpecification sendreq;
	public static  Response resource;
	public static String OTP;
	@Given("^Student enter the phone number payload$")
	public void student_enter_the_phone_number_payload() throws IOException   {
		payload = new TestDataBuild();
		sendreq = given().spec(requestSpecification()).body(payload.studentloginPayload());
	}

	@When("^Student hit the post request$")
	public void student_hit_the_post_request()   {
		resource = sendreq.when().log().all().post("/students/sendOtp");
	}

	@Then("^Check the status code$")
	public void check_the_status_code()   {

		GetStudentOTP js1 = resource.then().log().all().spec(responeSpecification()).extract().as(GetStudentOTP.class); //Deserilization using Pojo
		OTP = js1.getOtp();
		String Status=js1.getStatus();
		System.out.println(OTP);
		Assert.assertEquals(Status, "success");
	}
}
