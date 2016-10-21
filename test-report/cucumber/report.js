$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoSprint/demo.feature");
formatter.feature({
  "id": "as-a-user-i-want-to-login-to-its-portal",
  "description": "",
  "name": "As a user I want to login to ITS portal",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "as-a-user-i-want-to-login-to-its-portal;login-test",
  "tags": [
    {
      "name": "@Smoke",
      "line": 3
    }
  ],
  "description": "",
  "name": "login test",
  "keyword": "Scenario Outline",
  "line": 4,
  "type": "scenario_outline"
});
formatter.step({
  "name": "ITS portal is application is open",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "Enter credentails \"\u003cEmailId\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "User to is logged in to Portal",
  "keyword": "Then ",
  "line": 7
});
formatter.step({
  "name": "Verify Dashboard is displayed",
  "keyword": "And ",
  "line": 8
});
formatter.examples({
  "id": "as-a-user-i-want-to-login-to-its-portal;login-test;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 11,
  "rows": [
    {
      "id": "as-a-user-i-want-to-login-to-its-portal;login-test;;1",
      "cells": [
        "EmailId",
        "Password"
      ],
      "line": 12
    },
    {
      "id": "as-a-user-i-want-to-login-to-its-portal;login-test;;2",
      "cells": [
        "automationBDD@continuum.net",
        "Abc@12345"
      ],
      "line": 13
    }
  ]
});
formatter.scenario({
  "id": "as-a-user-i-want-to-login-to-its-portal;login-test;;2",
  "tags": [
    {
      "name": "@Smoke",
      "line": 3
    }
  ],
  "description": "",
  "name": "login test",
  "keyword": "Scenario Outline",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "ITS portal is application is open",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "Enter credentails \"automationBDD@continuum.net\" and \"Abc@12345\"",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "User to is logged in to Portal",
  "keyword": "Then ",
  "line": 7
});
formatter.step({
  "name": "Verify Dashboard is displayed",
  "keyword": "And ",
  "line": 8
});
formatter.match({
  "location": "StepDefinations.its_portal_is_application_is_open()"
});
formatter.result({
  "duration": 4827862684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "automationBDD@continuum.net",
      "offset": 19
    },
    {
      "val": "Abc@12345",
      "offset": 53
    }
  ],
  "location": "StepDefinations.enter_credentails_and(String,String)"
});
