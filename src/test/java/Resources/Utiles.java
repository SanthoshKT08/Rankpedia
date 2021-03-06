package Resources;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;

public class Utiles {
	
	
	public static RequestSpecification req;
	public static ResponseSpecification res;
	public static ReadConfigProperties read;
	public static RequestSpecification requestSpecification() throws IOException
	{
		if(req==null)
		{
			//Create a object for Print Stream class.
			read = new ReadConfigProperties();
			PrintStream log = new PrintStream(new FileOutputStream("Logging.txt"));
			req = new RequestSpecBuilder().setBaseUri(read.getUrl())
					.addFilter(RequestLoggingFilter.logRequestTo(log)).addFilter(ResponseLoggingFilter.logResponseTo(log))
					.setContentType(ContentType.JSON).build();
		}
		return req;
	}

	public static ResponseSpecification responeSpecification()
	{
		res = new ResponseSpecBuilder().expectStatusCode(200).expectContentType(ContentType.JSON).build();
		return res;
	}
	
	public static JsonPath json(String value)
	{
	     return new JsonPath(value);	
	}

}
