package continuum.cucumber.Page;

import continuum.cucumber.Locator;
import continuum.cucumber.WebdriverWrapper;

public class HomePage {
	WebdriverWrapper wd= new WebdriverWrapper();

	public Locator welcomeMsg= new Locator("Welcome msg","//span[contains(text(),'Welcome')]");
	public void verifyLoggedId() {
		wd.waitFor(3000);
		wd.verifyElementPresent(welcomeMsg);
		
	}

}
