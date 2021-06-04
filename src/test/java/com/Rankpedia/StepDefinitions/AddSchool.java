package com.Rankpedia.StepDefinitions;

import Resources.TestDataBuild;
import Resources.Utiles;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.given;

import java.io.IOException;

import org.testng.Assert;

public class AddSchool extends Utiles {

	public static RequestSpecification reqAddSchool;
	public static Response ResourceAddSchool;
	public static TestDataBuild data;
	
	@Given("^Add payload for school Api$")
	public void add_payload_for_school_api() throws IOException   {  
		data = new TestDataBuild();
		 reqAddSchool = given().log().all().spec(requestSpecification()).body(data.addSchoolPayload());
	}

	@When("^send the add resource resource$")
	public void send_the_add_resource_resource()   {
       
		ResourceAddSchool = reqAddSchool.when().log().all().post("/school/addSchool");
	}

	@Then("^validating the status code 200 for add school API$")
	public void validating_the_status_code_200_for_add_school_api()  {
		
		String ResponsebodyAddSchool=ResourceAddSchool.then().log().all().spec(responeSpecification()).extract().asString();
		JsonPath js = json(ResponsebodyAddSchool);
		String status = js.getString("status");
		System.out.println(status);
		Assert.assertEquals(status, "success");
		
	}

}
