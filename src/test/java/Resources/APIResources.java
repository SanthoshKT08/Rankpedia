package Resources;

public enum APIResources {
	
    //Define methods like this syntax..
	AddBoardAPI("/board/addBoard"),
	GetBoardAPI(""),
	DeleteBoardAPI("/board/deleteBoard");
	
	
	
	public String resource;
	
	APIResources(String resource) 
	{
       this.resource=resource;
	}
	
	public String getResource()
	{
		return resource;
	}

}
