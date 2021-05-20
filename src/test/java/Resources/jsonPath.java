package Resources;

import io.restassured.path.json.JsonPath;

public class jsonPath {
	
	public static JsonPath json(String value)
	{
		JsonPath js = new JsonPath(value);
		return js;
	}

}
