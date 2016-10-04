$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoSprint/LoginScenario.feature");
formatter.feature({
  "id": "as-a-user-i-can-login-to-its-portal-with-valid-credentials",
  "description": "",
  "name": "As a user I can login to ITS portal with valid credentials",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "as-a-user-i-can-login-to-its-portal-with-valid-credentials;verify-authorized-login",
  "tags": [
    {
      "name": "@Login",
      "line": 3
    }
  ],
  "description": "",
  "name": "Verify authorized login",
  "keyword": "Scenario Outline",
  "line": 4,
  "type": "scenario_outline"
});
formatter.step({
  "name": "User can navigate to ITS Portal for \"\u003cEnvironment\u003e\"",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "Enter Login credentials \"\u003cEmailId\u003e\" and  \"\u003cPassword\u003e\"",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "Verify user is logged in",
  "keyword": "And ",
  "line": 8
});
formatter.examples({
  "id": "as-a-user-i-can-login-to-its-portal-with-valid-credentials;verify-authorized-login;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 9,
  "rows": [
    {
      "id": "as-a-user-i-can-login-to-its-portal-with-valid-credentials;verify-authorized-login;;1",
      "cells": [
        "EmailId",
        "Password",
        "TestCaseId",
        "Environment"
      ],
      "line": 10
    },
    {
      "id": "as-a-user-i-can-login-to-its-portal-with-valid-credentials;verify-authorized-login;;2",
      "cells": [
        "automationBDD@continuum.net",
        "Abc@12345",
        "12345",
        "DT"
      ],
      "line": 11
    }
  ]
});
formatter.scenario({
  "id": "as-a-user-i-can-login-to-its-portal-with-valid-credentials;verify-authorized-login;;2",
  "tags": [
    {
      "name": "@Login",
      "line": 3
    }
  ],
  "description": "",
  "name": "Verify authorized login",
  "keyword": "Scenario Outline",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "User can navigate to ITS Portal for \"DT\"",
  "keyword": "Given ",
  "line": 6,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "Enter Login credentials \"automationBDD@continuum.net\" and  \"Abc@12345\"",
  "keyword": "When ",
  "line": 7,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "Verify user is logged in",
  "keyword": "And ",
  "line": 8
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});