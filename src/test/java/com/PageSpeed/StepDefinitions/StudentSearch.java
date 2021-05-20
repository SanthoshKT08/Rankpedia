package com.PageSpeed.StepDefinitions;

import static io.restassured.RestAssured.given;

import org.junit.runner.RunWith;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

@RunWith(Cucumber.class)
public class StudentSearch {
	
	   public static RequestSpecification studentget;
	   public static Response sakth;
	
	    @Given("^preconditions params$")
	    public void preconditions_params()   {
	    	 RestAssured.baseURI="https://3k06rt8n4h.execute-api.ap-south-1.amazonaws.com/local/api";
	      studentget = given().log().all().queryParam("name", "Sakthi vel").header("Content-Type", "application/json");
	    }

	    @When("^teser calls GET request$")
	    public void teser_calls_get_request()   {
	      sakth = studentget.when().log().all().get("/students/searchForStudent");
	     
	    }

	    @Then("^response got successfully for search student$")
	    public void response_got_successfully_for_search_student()   {
	    String respose=sakth.then().log().all().statusCode(200).extract().asString();
	    System.out.println(respose);
	    JsonPath js = new JsonPath(respose);
	    int size = js.getInt("students.size()");
	    System.out.println(size);
	    for(int i=0;i<size;i++)
	    {
	    	long phone = js.getLong("students["+i+"].phone");
	    	System.out.println(phone);
	    }
	    }

}
