package continuum.cucumber.Page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import continuum.cucumber.Locator;
import continuum.cucumber.Utilities;
import continuum.cucumber.WebdriverWrapper;

public class LoginPage {

	
	WebdriverWrapper wd= new WebdriverWrapper();
		
	public Locator emailId=new Locator("Username name text box","user_txt","id");
	public Locator password=new Locator("Password  text box","user_pass","id");
	public Locator submit=new Locator("submit btn","Submit","id");
    public Locator rememberMeCheckbox=new Locator("Remember me checkbox","//span[@class='cust_checkbox checkbox cust_checkbox_off']");
		
		public void login(String email, String pwd){
		wd.waitForElementToBeClickable(emailId, 3000);
		wd.clearandSendKeys(email,emailId );
		wd.sendKeys(pwd, password);
		wd.changeCheckboxStatus( rememberMeCheckbox,"check");
		wd.clickElement(submit);
		wd.waitFor(3000);	
          }

		public void openApplication() {
			wd.openApplication(Utilities.getMavenProperties("applicationUrl"));
			
		}

		

}
