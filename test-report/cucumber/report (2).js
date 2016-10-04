$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoSprint/ITSBanner.feature");
formatter.feature({
  "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can",
  "description": "view the banner on Dashboard page.",
  "name": "As a user of any role I can login to ITS portal with valid credentials so that only authorized user can",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-on-dashboard",
  "tags": [
    {
      "name": "@SmokeTest",
      "line": 4
    }
  ],
  "description": "",
  "name": "Verify Banner on dashboard",
  "keyword": "Scenario Outline",
  "line": 5,
  "type": "scenario_outline"
});
formatter.step({
  "name": "User can navigate to ITS Portal for \"\u003cEnvironment\u003e\"",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "Enter Login credentials \"\u003cEmailId\u003e\" and  \"\u003cPassword\u003e\"",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "Verify banner is available for authorised \"\u003croles\u003e\"",
  "keyword": "Then ",
  "line": 9
});
formatter.step({
  "name": "Verify user is able to logout",
  "keyword": "And ",
  "line": 10
});
formatter.examples({
  "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-on-dashboard;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 12,
  "rows": [
    {
      "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-on-dashboard;;1",
      "cells": [
        "roles",
        "EmailId",
        "Password",
        "Environment"
      ],
      "line": 13
    },
    {
      "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-on-dashboard;;2",
      "cells": [
        "Super User",
        "sandeep.kale@dtsu.net",
        "Abc@12345",
        "DT"
      ],
      "line": 14
    },
    {
      "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-on-dashboard;;3",
      "cells": [
        "Manager",
        "sandeep.kale@dtsdm1.net",
        "Abc@12345",
        "DT"
      ],
      "line": 15
    },
    {
      "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-on-dashboard;;4",
      "cells": [
        "Technician",
        "sandeep.kale@dttech.net",
        "Abc@1234",
        "DT"
      ],
      "line": 16
    },
    {
      "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-on-dashboard;;5",
      "cells": [
        "Client Site Manager",
        "sandeep.kale@dtcsm.net",
        "Abc@12345",
        "DT"
      ],
      "line": 17
    },
    {
      "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-on-dashboard;;6",
      "cells": [
        "Super User",
        "sandeep.kale@sksu.net",
        "Abc@12345",
        "PRE"
      ],
      "line": 18
    },
    {
      "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-on-dashboard;;7",
      "cells": [
        "Manager",
        "sandeep.kale@sksdm.net",
        "Abc@1234",
        "PRE"
      ],
      "line": 19
    },
    {
      "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-on-dashboard;;8",
      "cells": [
        "Technician",
        "sandeep.kale@sktech.net",
        "Abc@1234",
        "PRE"
      ],
      "line": 20
    },
    {
      "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-on-dashboard;;9",
      "cells": [
        "Client Site Manager",
        "sandeep.kale@skcsm.net",
        "Abc@1234",
        "PRE"
      ],
      "line": 21
    }
  ]
});
formatter.scenario({
  "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-on-dashboard;;2",
  "tags": [
    {
      "name": "@SmokeTest",
      "line": 4
    }
  ],
  "description": "",
  "name": "Verify Banner on dashboard",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "User can navigate to ITS Portal for \"DT\"",
  "keyword": "Given ",
  "line": 7,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "Enter Login credentials \"sandeep.kale@dtsu.net\" and  \"Abc@12345\"",
  "keyword": "When ",
  "line": 8,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.step({
  "name": "Verify banner is available for authorised \"Super User\"",
  "keyword": "Then ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Verify user is able to logout",
  "keyword": "And ",
  "line": 10
});
formatter.match({
  "arguments": [
    {
      "val": "DT",
      "offset": 37
    }
  ],
  "location": "StepDefinations.user_can_navigate_to_ITS_Portal(String)"
});
formatter.result({
  "duration": 3917020766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sandeep.kale@dtsu.net",
      "offset": 25
    },
    {
      "val": "Abc@12345",
      "offset": 54
    }
  ],
  "location": "StepDefinations.enter_Login_credentials(String,String)"
});
formatter.result({
  "duration": 13517832282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Super User",
      "offset": 43
    }
  ],
  "location": "StepDefinations.verify_banner_is_available_for_authorised(String)"
});
formatter.result({
  "duration": 3019809917,
  "status": "failed",
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:305)\r\n\tat org.testng.Assert.assertEquals(Assert.java:315)\r\n\tat continuum.cucumber.Page.HomePage.verifyDashboardBanner(HomePage.java:66)\r\n\tat continuum.cucumber.stepDefinations.StepDefinations.verify_banner_is_available_for_authorised(StepDefinations.java:70)\r\n\tat ✽.Then Verify banner is available for authorised \"Super User\"(DemoSprint/ITSBanner.feature:9)\r\n"
});
formatter.match({
  "location": "StepDefinations.verify_user_is_able_to_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-on-dashboard;;3",
  "tags": [
    {
      "name": "@SmokeTest",
      "line": 4
    }
  ],
  "description": "",
  "name": "Verify Banner on dashboard",
  "keyword": "Scenario Outline",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "User can navigate to ITS Portal for \"DT\"",
  "keyword": "Given ",
  "line": 7,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "Enter Login credentials \"sandeep.kale@dtsdm1.net\" and  \"Abc@12345\"",
  "keyword": "When ",
  "line": 8,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.step({
  "name": "Verify banner is available for authorised \"Manager\"",
  "keyword": "Then ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Verify user is able to logout",
  "keyword": "And ",
  "line": 10
});
formatter.match({
  "arguments": [
    {
      "val": "DT",
      "offset": 37
    }
  ],
  "location": "StepDefinations.user_can_navigate_to_ITS_Portal(String)"
});
formatter.result({
  "duration": 3271655208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sandeep.kale@dtsdm1.net",
      "offset": 25
    },
    {
      "val": "Abc@12345",
      "offset": 56
    }
  ],
  "location": "StepDefinations.enter_Login_credentials(String,String)"
});
formatter.result({
  "duration": 18858943281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 43
    }
  ],
  "location": "StepDefinations.verify_banner_is_available_for_authorised(String)"
});
formatter.result({
  "duration": 2035659825,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.verify_user_is_able_to_logout()"
});
formatter.result({
  "duration": 5426242086,
  "status": "passed"
});
formatter.scenario({
  "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-on-dashboard;;4",
  "tags": [
    {
      "name": "@SmokeTest",
      "line": 4
    }
  ],
  "description": "",
  "name": "Verify Banner on dashboard",
  "keyword": "Scenario Outline",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "User can navigate to ITS Portal for \"DT\"",
  "keyword": "Given ",
  "line": 7,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "Enter Login credentials \"sandeep.kale@dttech.net\" and  \"Abc@1234\"",
  "keyword": "When ",
  "line": 8,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.step({
  "name": "Verify banner is available for authorised \"Technician\"",
  "keyword": "Then ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Verify user is able to logout",
  "keyword": "And ",
  "line": 10
});
formatter.match({
  "arguments": [
    {
      "val": "DT",
      "offset": 37
    }
  ],
  "location": "StepDefinations.user_can_navigate_to_ITS_Portal(String)"
});
formatter.result({
  "duration": 3327964436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sandeep.kale@dttech.net",
      "offset": 25
    },
    {
      "val": "Abc@1234",
      "offset": 56
    }
  ],
  "location": "StepDefinations.enter_Login_credentials(String,String)"
});
formatter.result({
  "duration": 18467488745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Technician",
      "offset": 43
    }
  ],
  "location": "StepDefinations.verify_banner_is_available_for_authorised(String)"
});
formatter.result({
  "duration": 2040662377,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.verify_user_is_able_to_logout()"
});
formatter.result({
  "duration": 5435253631,
  "status": "passed"
});
formatter.scenario({
  "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-on-dashboard;;5",
  "tags": [
    {
      "name": "@SmokeTest",
      "line": 4
    }
  ],
  "description": "",
  "name": "Verify Banner on dashboard",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "User can navigate to ITS Portal for \"DT\"",
  "keyword": "Given ",
  "line": 7,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "Enter Login credentials \"sandeep.kale@dtcsm.net\" and  \"Abc@12345\"",
  "keyword": "When ",
  "line": 8,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.step({
  "name": "Verify banner is available for authorised \"Client Site Manager\"",
  "keyword": "Then ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Verify user is able to logout",
  "keyword": "And ",
  "line": 10
});
formatter.match({
  "arguments": [
    {
      "val": "DT",
      "offset": 37
    }
  ],
  "location": "StepDefinations.user_can_navigate_to_ITS_Portal(String)"
});
formatter.result({
  "duration": 3358647387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sandeep.kale@dtcsm.net",
      "offset": 25
    },
    {
      "val": "Abc@12345",
      "offset": 55
    }
  ],
  "location": "StepDefinations.enter_Login_credentials(String,String)"
});
formatter.result({
  "duration": 19776430604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Client Site Manager",
      "offset": 43
    }
  ],
  "location": "StepDefinations.verify_banner_is_available_for_authorised(String)"
});
formatter.result({
  "duration": 3015986992,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.verify_user_is_able_to_logout()"
});
formatter.result({
  "duration": 5402222092,
  "status": "passed"
});
formatter.scenario({
  "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-on-dashboard;;6",
  "tags": [
    {
      "name": "@SmokeTest",
      "line": 4
    }
  ],
  "description": "",
  "name": "Verify Banner on dashboard",
  "keyword": "Scenario Outline",
  "line": 18,
  "type": "scenario"
});
formatter.step({
  "name": "User can navigate to ITS Portal for \"PRE\"",
  "keyword": "Given ",
  "line": 7,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "Enter Login credentials \"sandeep.kale@sksu.net\" and  \"Abc@12345\"",
  "keyword": "When ",
  "line": 8,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.step({
  "name": "Verify banner is available for authorised \"Super User\"",
  "keyword": "Then ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Verify user is able to logout",
  "keyword": "And ",
  "line": 10
});
formatter.match({
  "arguments": [
    {
      "val": "PRE",
      "offset": 37
    }
  ],
  "location": "StepDefinations.user_can_navigate_to_ITS_Portal(String)"
});
formatter.result({
  "duration": 1970918,
  "status": "pending",
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat continuum.cucumber.stepDefinations.StepDefinations.user_can_navigate_to_ITS_Portal(StepDefinations.java:35)\r\n\tat ✽.Given User can navigate to ITS Portal for \"PRE\"(DemoSprint/ITSBanner.feature:7)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "sandeep.kale@sksu.net",
      "offset": 25
    },
    {
      "val": "Abc@12345",
      "offset": 54
    }
  ],
  "location": "StepDefinations.enter_Login_credentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Super User",
      "offset": 43
    }
  ],
  "location": "StepDefinations.verify_banner_is_available_for_authorised(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.verify_user_is_able_to_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-on-dashboard;;7",
  "tags": [
    {
      "name": "@SmokeTest",
      "line": 4
    }
  ],
  "description": "",
  "name": "Verify Banner on dashboard",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "User can navigate to ITS Portal for \"PRE\"",
  "keyword": "Given ",
  "line": 7,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "Enter Login credentials \"sandeep.kale@sksdm.net\" and  \"Abc@1234\"",
  "keyword": "When ",
  "line": 8,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.step({
  "name": "Verify banner is available for authorised \"Manager\"",
  "keyword": "Then ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Verify user is able to logout",
  "keyword": "And ",
  "line": 10
});
formatter.match({
  "arguments": [
    {
      "val": "PRE",
      "offset": 37
    }
  ],
  "location": "StepDefinations.user_can_navigate_to_ITS_Portal(String)"
});
formatter.result({
  "duration": 477224,
  "status": "pending",
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat continuum.cucumber.stepDefinations.StepDefinations.user_can_navigate_to_ITS_Portal(StepDefinations.java:35)\r\n\tat ✽.Given User can navigate to ITS Portal for \"PRE\"(DemoSprint/ITSBanner.feature:7)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "sandeep.kale@sksdm.net",
      "offset": 25
    },
    {
      "val": "Abc@1234",
      "offset": 55
    }
  ],
  "location": "StepDefinations.enter_Login_credentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 43
    }
  ],
  "location": "StepDefinations.verify_banner_is_available_for_authorised(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.verify_user_is_able_to_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-on-dashboard;;8",
  "tags": [
    {
      "name": "@SmokeTest",
      "line": 4
    }
  ],
  "description": "",
  "name": "Verify Banner on dashboard",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "User can navigate to ITS Portal for \"PRE\"",
  "keyword": "Given ",
  "line": 7,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "Enter Login credentials \"sandeep.kale@sktech.net\" and  \"Abc@1234\"",
  "keyword": "When ",
  "line": 8,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.step({
  "name": "Verify banner is available for authorised \"Technician\"",
  "keyword": "Then ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Verify user is able to logout",
  "keyword": "And ",
  "line": 10
});
formatter.match({
  "arguments": [
    {
      "val": "PRE",
      "offset": 37
    }
  ],
  "location": "StepDefinations.user_can_navigate_to_ITS_Portal(String)"
});
formatter.result({
  "duration": 444039,
  "status": "pending",
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat continuum.cucumber.stepDefinations.StepDefinations.user_can_navigate_to_ITS_Portal(StepDefinations.java:35)\r\n\tat ✽.Given User can navigate to ITS Portal for \"PRE\"(DemoSprint/ITSBanner.feature:7)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "sandeep.kale@sktech.net",
      "offset": 25
    },
    {
      "val": "Abc@1234",
      "offset": 56
    }
  ],
  "location": "StepDefinations.enter_Login_credentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Technician",
      "offset": 43
    }
  ],
  "location": "StepDefinations.verify_banner_is_available_for_authorised(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.verify_user_is_able_to_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-on-dashboard;;9",
  "tags": [
    {
      "name": "@SmokeTest",
      "line": 4
    }
  ],
  "description": "",
  "name": "Verify Banner on dashboard",
  "keyword": "Scenario Outline",
  "line": 21,
  "type": "scenario"
});
formatter.step({
  "name": "User can navigate to ITS Portal for \"PRE\"",
  "keyword": "Given ",
  "line": 7,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "Enter Login credentials \"sandeep.kale@skcsm.net\" and  \"Abc@1234\"",
  "keyword": "When ",
  "line": 8,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.step({
  "name": "Verify banner is available for authorised \"Client Site Manager\"",
  "keyword": "Then ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Verify user is able to logout",
  "keyword": "And ",
  "line": 10
});
formatter.match({
  "arguments": [
    {
      "val": "PRE",
      "offset": 37
    }
  ],
  "location": "StepDefinations.user_can_navigate_to_ITS_Portal(String)"
});
formatter.result({
  "duration": 478408,
  "status": "pending",
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat continuum.cucumber.stepDefinations.StepDefinations.user_can_navigate_to_ITS_Portal(StepDefinations.java:35)\r\n\tat ✽.Given User can navigate to ITS Portal for \"PRE\"(DemoSprint/ITSBanner.feature:7)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "sandeep.kale@skcsm.net",
      "offset": 25
    },
    {
      "val": "Abc@1234",
      "offset": 55
    }
  ],
  "location": "StepDefinations.enter_Login_credentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Client Site Manager",
      "offset": 43
    }
  ],
  "location": "StepDefinations.verify_banner_is_available_for_authorised(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.verify_user_is_able_to_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-is-not-visible-after-deletion",
  "tags": [
    {
      "name": "@SmokeTest1",
      "line": 24
    }
  ],
  "description": "",
  "name": "Verify Banner is not visible after deletion",
  "keyword": "Scenario Outline",
  "line": 25,
  "type": "scenario_outline"
});
formatter.step({
  "name": "User can navigate to ITS Portal for \"\u003cEnvironment\u003e\"",
  "keyword": "Given ",
  "line": 27
});
formatter.step({
  "name": "Enter Login credentials \"\u003cEmailId\u003e\" and  \"\u003cPassword\u003e\"",
  "keyword": "When ",
  "line": 28
});
formatter.step({
  "name": "Verify banner is available for authorised \"\u003croles\u003e\"",
  "keyword": "Then ",
  "line": 29
});
formatter.step({
  "name": "Verify banner can be deleted for \"\u003croles\u003e\"",
  "keyword": "And ",
  "line": 30
});
formatter.step({
  "name": "Verify user is able to logout",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "Enter Login credentials \"\u003cEmailId\u003e\" and  \"\u003cPassword\u003e\"",
  "keyword": "And ",
  "line": 32
});
formatter.step({
  "name": "Verify banner is not present \"\u003croles\u003e\"",
  "keyword": "And ",
  "line": 33
});
formatter.examples({
  "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-is-not-visible-after-deletion;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 35,
  "rows": [
    {
      "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-is-not-visible-after-deletion;;1",
      "cells": [
        "roles",
        "EmailId",
        "Password",
        "Environment"
      ],
      "line": 36
    },
    {
      "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-is-not-visible-after-deletion;;2",
      "cells": [
        "Manager",
        "sandeep.kale@dtsdm2.net",
        "Abc@12345",
        "DT"
      ],
      "line": 37
    },
    {
      "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-is-not-visible-after-deletion;;3",
      "cells": [
        "Manager",
        "sandeep.kale@sktech5.net",
        "Abc@12345",
        "PRE"
      ],
      "line": 38
    }
  ]
});
formatter.scenario({
  "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-is-not-visible-after-deletion;;2",
  "tags": [
    {
      "name": "@SmokeTest1",
      "line": 24
    }
  ],
  "description": "",
  "name": "Verify Banner is not visible after deletion",
  "keyword": "Scenario Outline",
  "line": 37,
  "type": "scenario"
});
formatter.step({
  "name": "User can navigate to ITS Portal for \"DT\"",
  "keyword": "Given ",
  "line": 27,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "Enter Login credentials \"sandeep.kale@dtsdm2.net\" and  \"Abc@12345\"",
  "keyword": "When ",
  "line": 28,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.step({
  "name": "Verify banner is available for authorised \"Manager\"",
  "keyword": "Then ",
  "line": 29,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Verify banner can be deleted for \"Manager\"",
  "keyword": "And ",
  "line": 30,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Verify user is able to logout",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "Enter Login credentials \"sandeep.kale@dtsdm2.net\" and  \"Abc@12345\"",
  "keyword": "And ",
  "line": 32,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.step({
  "name": "Verify banner is not present \"Manager\"",
  "keyword": "And ",
  "line": 33,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "DT",
      "offset": 37
    }
  ],
  "location": "StepDefinations.user_can_navigate_to_ITS_Portal(String)"
});
formatter.result({
  "duration": 3473796156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sandeep.kale@dtsdm2.net",
      "offset": 25
    },
    {
      "val": "Abc@12345",
      "offset": 56
    }
  ],
  "location": "StepDefinations.enter_Login_credentials(String,String)"
});
formatter.result({
  "duration": 19759103594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 43
    }
  ],
  "location": "StepDefinations.verify_banner_is_available_for_authorised(String)"
});
formatter.result({
  "duration": 2073862209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 34
    }
  ],
  "location": "StepDefinations.verify_banner_can_be_deleted(String)"
});
formatter.result({
  "duration": 4175220083,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.verify_user_is_able_to_logout()"
});
formatter.result({
  "duration": 5452482669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sandeep.kale@dtsdm2.net",
      "offset": 25
    },
    {
      "val": "Abc@12345",
      "offset": 56
    }
  ],
  "location": "StepDefinations.enter_Login_credentials(String,String)"
});
formatter.result({
  "duration": 15968264233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 30
    }
  ],
  "location": "StepDefinations.verify_banner_is_not_present(String)"
});
formatter.result({
  "duration": 1223999213,
  "status": "failed",
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:305)\r\n\tat org.testng.Assert.assertEquals(Assert.java:315)\r\n\tat continuum.cucumber.Page.HomePage.verifyBannerNotPresent(HomePage.java:80)\r\n\tat continuum.cucumber.stepDefinations.StepDefinations.verify_banner_is_not_present(StepDefinations.java:85)\r\n\tat ✽.And Verify banner is not present \"Manager\"(DemoSprint/ITSBanner.feature:33)\r\n"
});
formatter.scenario({
  "id": "as-a-user-of-any-role-i-can-login-to-its-portal-with-valid-credentials-so-that-only-authorized-user-can;verify-banner-is-not-visible-after-deletion;;3",
  "tags": [
    {
      "name": "@SmokeTest1",
      "line": 24
    }
  ],
  "description": "",
  "name": "Verify Banner is not visible after deletion",
  "keyword": "Scenario Outline",
  "line": 38,
  "type": "scenario"
});
formatter.step({
  "name": "User can navigate to ITS Portal for \"PRE\"",
  "keyword": "Given ",
  "line": 27,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "Enter Login credentials \"sandeep.kale@sktech5.net\" and  \"Abc@12345\"",
  "keyword": "When ",
  "line": 28,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.step({
  "name": "Verify banner is available for authorised \"Manager\"",
  "keyword": "Then ",
  "line": 29,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Verify banner can be deleted for \"Manager\"",
  "keyword": "And ",
  "line": 30,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Verify user is able to logout",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "Enter Login credentials \"sandeep.kale@sktech5.net\" and  \"Abc@12345\"",
  "keyword": "And ",
  "line": 32,
  "matchedColumns": [
    1,
    2
  ]
});
formatter.step({
  "name": "Verify banner is not present \"Manager\"",
  "keyword": "And ",
  "line": 33,
  "matchedColumns": [
    0
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "PRE",
      "offset": 37
    }
  ],
  "location": "StepDefinations.user_can_navigate_to_ITS_Portal(String)"
});
formatter.result({
  "duration": 496582,
  "status": "pending",
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat continuum.cucumber.stepDefinations.StepDefinations.user_can_navigate_to_ITS_Portal(StepDefinations.java:35)\r\n\tat ✽.Given User can navigate to ITS Portal for \"PRE\"(DemoSprint/ITSBanner.feature:27)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "sandeep.kale@sktech5.net",
      "offset": 25
    },
    {
      "val": "Abc@12345",
      "offset": 57
    }
  ],
  "location": "StepDefinations.enter_Login_credentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 43
    }
  ],
  "location": "StepDefinations.verify_banner_is_available_for_authorised(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 34
    }
  ],
  "location": "StepDefinations.verify_banner_can_be_deleted(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.verify_user_is_able_to_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sandeep.kale@sktech5.net",
      "offset": 25
    },
    {
      "val": "Abc@12345",
      "offset": 57
    }
  ],
  "location": "StepDefinations.enter_Login_credentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 30
    }
  ],
  "location": "StepDefinations.verify_banner_is_not_present(String)"
});
formatter.result({
  "status": "skipped"
});
});