package com.PageSpeed.StepDefinitions;

import static io.restassured.RestAssured.given;

import java.io.IOException;

import org.junit.runner.RunWith;
import org.testng.Assert;

import Resources.APIResources;
import Resources.ReadConfigProperties;
import Resources.TestDataBuild;
import Resources.Utiles;
import Resources.jsonPath;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

@RunWith(Cucumber.class)
public class AddBoard extends Utiles {
	//public static ReadConfigProperties read;
	//public static RequestSpecification pre;
	public static String response;
	public static  Response getpre;
	public static String getresponse;
	public static String Board_id;
	public static RequestSpecification deletepre;
	public static  String delete_Response;
	public static TestDataBuild data;
	public static RequestSpecification sendreq;
//	public static APIResources resourceAPI;
	
	@Given("add board payload")
	public void add_board_payload() throws IOException {
		data = new TestDataBuild();
		//read = new ReadConfigProperties();
		//RestAssured.baseURI=read.getUrl();
		 sendreq = given().spec(requestSpecification()).body(data.addBoardBody());
		//pre = given().log().all().header("Content-Type","application/json").body(data.addBoardBody());

	}

	@When("send post request")
	public void send_post_request() {
		//response =sendreq.when().post("/board/addBoard").then().log().all().assertThat().statusCode(200).extract().asString();
		response =sendreq.when().post("/board/addBoard").then().spec(responeSpecification()).extract().asString();
	}
	

	@Then("assert status code")
	public void assert_status_code() {
        JsonPath js = jsonPath.json(response);
        String status = js.getString("status");
        System.out.println(status);
        Assert.assertEquals(status, "success");
	}
	
	@Given("GET board")
	public void get_board() {
		read = new ReadConfigProperties();
		RestAssured.baseURI=read.getUrl();
		getpre = given().log().all().when().get("/board/getCompetitiveBoards");
	}

	@When("^send GET request$")
	public void send_get_request()   {
		getresponse = getpre.then().log().all().spec(responeSpecification()).extract().asString();
	}

	@Then("^assert reponse$")
	public void assert_reponse()   {
		JsonPath js = jsonPath.json(getresponse);
		int boards = js.getInt("boards.size()");
		System.out.println(boards);

		for(int i=0;i<boards;i++)
		{
			String boardNames = js.get("boards["+i+"].name");
			if(boardNames.equalsIgnoreCase("Testing"))
			{
				System.out.println("checking");
				Board_id = js.getString("boards["+i+"]._id");
				System.out.println(Board_id);
				break;
			}
			System.out.println(boardNames);
		}
	}
	
	@Given("Delete board")
	public void delete_board() throws IOException   {
		 read = new ReadConfigProperties();
		 data = new TestDataBuild();
			RestAssured.baseURI=read.getUrl();
			 deletepre = given().log().all().spec(requestSpecification()).body(data.deleteBoardBody(Board_id));
	    }

	@When("^send Post request for delete$")
    public void send_post_request_for_delete()   {
	       delete_Response = deletepre.when().post("/board/deleteBoard").then().log().all().spec(responeSpecification()).extract().asString();
	    }

	    @Then("^assert reponse for delete$")
	    public void assert_reponse_for_delete()   {
	     JsonPath js = jsonPath.json(delete_Response);
	     String response = js.getString("status");
	     Assert.assertEquals(response, "success");
	    }
	
	
	
	
}
