package com.Rankpedia.StepDefinitions;

import static io.restassured.RestAssured.given;

import java.io.IOException;

import org.junit.runner.RunWith;
import org.testng.Assert;

import Resources.TestDataBuild;
import Resources.Utiles;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

@RunWith(Cucumber.class)
public class AdminLogin extends Utiles {
	  String response;
	   TestDataBuild payload ;
	   Response postreq ;
	   RequestSpecification sendreq;
	   
	 @Given("^Admin username and password$")
	    public void admin_username_and_password() throws IOException   {
		 payload = new TestDataBuild();
	        sendreq = given().log().all().spec(requestSpecification()).body(payload.adminLoginPayload());
	    }
	 @When("^Admin calls post request$")
	    public void admin_calls_post_request() {
	          response = sendreq.when().log().all().post("/admin/adminLogin").then().log().all().assertThat().statusCode(200).
	        		extract().response().asString();
	    }	
	    @Then("^response got successfully$")
	    public void response_got_successfully()   {
	        JsonPath js = json(response);
	        String id = js.getString("admin._id");
	        System.out.println(id);
	        Assert.assertEquals(id, "60814422f9f6cb34941b539b");
	    }
}
