package com.Rankpedia.StepDefinitions;

import static io.restassured.RestAssured.given;

import java.io.IOException;

import org.junit.runner.RunWith;

import Resources.Utiles;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

@RunWith(Cucumber.class)
public class AddStudent extends Utiles {
	 
	public static Pojo.AddStudent addstudent;
	public static RequestSpecification addStudentReq;
	 public static Response addStudentPost ;
	
	 @Given("^student add student payload$")
	    public void student_add_student_payload() throws IOException  {
		   addstudent = new Pojo.AddStudent();
		   addStudentReq= given().spec(requestSpecification()).body(addstudent.addStudent());
	    }

	 @When("^student send post request for add student$")
	    public void student_send_post_request_for_add_student()  {
	     addStudentPost= addStudentReq.when().log().all().post("students/addStudent");
	    }

	 @Then("^Student assert status code for add student$")
	    public void student_assert_status_code_for_add_student() {
	        String body = addStudentPost.then().log().all().spec(responeSpecification()).extract().asString();
	       JsonPath js = json(body);
	    }


}
