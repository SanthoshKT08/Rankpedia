package Resources;

import Pojo.AddClass;
import Pojo.AddSchool;
import Pojo.AdminLogin;
import Pojo.OTPVerify;
import Pojo.Poc;
import Pojo.StudentLogin;

public class TestDataBuild {
	
	public String addBoardBody()
	{
		return "{\r\n" + 
				"	\"name\":\"Testing\",\r\n" + 
				"	\"description\":\"A national school students\",\r\n" + 
				"	\"logo\":\"NTSE.png\",\r\n" + 
				"	\"type\":\"competitive\"\r\n" + 
				"}";
	}
	
	public String deleteBoardBody(String id)
	{
		return "{\r\n" + 
				"	\"id\": \""+id+"\"\r\n" + 
				"}";
	}
	
	public AdminLogin adminLoginPayload()
	{
		AdminLogin al = new AdminLogin();
		al.setName("superadmin");
		al.setPassword("123456");
		return al;
	}
	
	public StudentLogin studentloginPayload()
	{
		StudentLogin login = new StudentLogin();
		login.setPhone_number("9788304403");
		return login;
	}
	
	public OTPVerify VerifyotpPayload(String phoneNumber, String OTP)
	{
		OTPVerify otp = new OTPVerify();
		otp.setPhone_number(phoneNumber);
		otp.setOtp(OTP);
		return otp;
	}
	
	public AddClass addClassPayload()
	{
		AddClass ac = new AddClass();
		ac.setName("Class 12 - Testing");
		ac.setDivision("A");
		ac.setBoard("60a54215042a18296c38b18e");
		return ac;
		
	}
	
	public AddSchool addSchoolPayload()
	{
		AddSchool add = new AddSchool();
		add.setAbout("abot");
		add.setAddress("address");
		add.setBoard("6080383d4f76e30009add9ed");
		add.setEmail("demo@gmail.com");
		add.setInstitute_type("HighSchool");
		add.setLocation("housr");
		add.setName("Quality Assurance");
		add.setPhone("9159977099");
		add.setType("private");
		
		Poc pc = new Poc();
		pc.setAddress("dassa");
		pc.setDesignation("QA");
		pc.setEmail("kre@gmail.com");
		pc.setName("Santhosh");
		pc.setPhone("9159977099");
		add.setPoc(pc);
		
		
		return add;
	}
		

}
