package continuum.cucumber.stepDefinations;


import static org.testng.AssertJUnit.assertEquals;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.testng.Reporter;

import continuum.cucumber.DatabaseUtility;
import continuum.cucumber.DriverFactory;
import continuum.cucumber.Utilities;

import continuum.cucumber.Page.PageFactory;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Given;

public class StepDefinations extends PageFactory {
	@Given("^ITS portal is application is open$")
	public void its_portal_is_application_is_open() throws Throwable {
	    loginPage.openApplication();
	}

	@When("^Enter credentails \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_credentails_and(String emailId, String pwd) throws Throwable {
   loginPage.login(emailId,pwd);
	}



	@Then("^User to is logged in to Portal$")
	public void user_to_is_logged_in_to_Portal() throws Throwable {
	   homePage.verifyLoggedId();
	}

	@Then("^Verify Dashboard is displayed$")
	public void verify_Dashboard_is_displayed() throws Throwable {
	   
	}

	
	
}
