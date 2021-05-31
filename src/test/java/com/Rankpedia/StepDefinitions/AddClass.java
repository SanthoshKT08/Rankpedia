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
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

@RunWith(Cucumber.class)
public class AddClass extends Utiles {

	public static AddBoard ab;
	public static TestDataBuild data;
	public static RequestSpecification reqsa;
	public static Response responseClass;
	public static Response reqGetClass;
	public static String resGetClass;
	public static  String classId;
	public static RequestSpecification reqDeleteclass;
	public static  Response responseDeleteclass;
	public static 	String deleteClassResponse;
	
	 @Given("^add class payload$")
	    public void add_class_payload() throws IOException   {
		 data = new TestDataBuild();
		 ab = new AddBoard();
	       reqsa = given().log().all().spec(requestSpecification()).body(data.addClassPayload());
	    }

	    @When("^add class post request$")
	    public void add_class_post_request()   {
	    	responseClass = reqsa.when().log().all().post("/class/addClass");
	    }

	    @Then("^add class assert 200$")
	    public void add_class_assert_200()  {
	    	String satusBody = responseClass.then().log().all().spec(responeSpecification()).assertThat().extract().asString();
	    	JsonPath js = json(satusBody);
	    	String status = js.getString("status");
	    	Assert.assertEquals(status, "success");
	    }
	    
	    @Given("^Get resource for class$")
	    public void get_resource_for_class() throws IOException   {
	        reqGetClass = given().spec(requestSpecification()).when().log().all().get("/class/getAllClass");
	    }

	    @Then("^verify the Get class status code 200$")
	    public void verify_the_get_class_status_code_200()   {
	        resGetClass = reqGetClass.then().log().all().spec(responeSpecification()).extract().asString();
	        JsonPath js = json(resGetClass);
	        int countClass = js.getInt("class.size");
	        System.out.println(countClass);
	        for(int i=0;i<countClass;i++)
	        {
	        	 String className = js.getString("class["+i+"].name");
	        	 if(className.equalsIgnoreCase("Class 12 - Testing"))
	        	 {
	        		  classId = js.getString("class["+i+"]._id");
	        		 System.out.println(classId);
	        		 break;
	        	 }
	        }
	    }
	    

	    @Given("^send delete payload$")
	    public void send_delete_payload() throws IOException   {
	           reqDeleteclass = given().spec(requestSpecification()).body("{\r\n" + 
	          		"               \"id\":\""+classId+"\"\r\n" + 
	          		"}");
	    }

	    @When("^Set path resource fot Delete class$")
	    public void set_path_resource_fot_delete_class()   {
	         responseDeleteclass = reqDeleteclass.when().log().all().post("/class/deleteClass");
	    }

	    @Then("^Verify Delete class status code 200$")
	    public void verify_delete_class_status_code_200()   {
	    	deleteClassResponse = responseDeleteclass.then().log().all().spec(responeSpecification()).extract().asString();
	    	JsonPath js=json(deleteClassResponse);
	    	String status = js.getString("status");
	    	Assert.assertEquals(status, "success");
	      
	    }
	    
	    
}
