$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Sample.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Created by NhatDell at 30-Aug-17"
    }
  ],
  "line": 2,
  "name": "Sample Test",
  "description": "This one is just for test if framework is worked or not",
  "id": "sample-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login to facebook",
  "description": "",
  "id": "sample-test;login-to-facebook",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I navigate to facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \u003cuser\u003e and \u003cpass\u003e for login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see Newfeed Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "sample-test;login-to-facebook;",
  "rows": [
    {
      "cells": [
        "user",
        "pass"
      ],
      "line": 12,
      "id": "sample-test;login-to-facebook;;1"
    },
    {
      "cells": [
        "hangnhat57@me.com",
        "123456"
      ],
      "line": 13,
      "id": "sample-test;login-to-facebook;;2"
    },
    {
      "cells": [
        "hangnhat67@me.com",
        "123456"
      ],
      "line": 14,
      "id": "sample-test;login-to-facebook;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4263956893,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login to facebook",
  "description": "",
  "id": "sample-test;login-to-facebook;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I navigate to facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter hangnhat57@me.com and 123456 for login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see Newfeed Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Sample_Test_Steps.iNavigateToFacebook()"
});
formatter.result({
  "duration": 2607123479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hangnhat57@me.com",
      "offset": 8
    },
    {
      "val": "123456",
      "offset": 30
    }
  ],
  "location": "Sample_Test_Steps.iEnterAndForLogin(String,String)"
});
formatter.result({
  "duration": 380084676,
  "status": "passed"
});
formatter.match({
  "location": "Sample_Test_Steps.iClickLoginButton()"
});
formatter.result({
  "duration": 51059145,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@data-testid\u003d\u0027royallogin_button\u0027]\"}\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027NN\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\NhatDell\\AppData\\Local\\Temp\\scoped_dir1304_17506}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 28b2444fe8a080a5c2ce393da8e9ed6c\n*** Element info: {Using\u003dxpath, value\u003d//input[@data-testid\u003d\u0027royallogin_button\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:513)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat Steps.Sample_Test_Steps.iClickLoginButton(Sample_Test_Steps.java:37)\r\n\tat ✽.And I click Login button(Sample.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Sample_Test_Steps.iShouldSeeNewfeedPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1501013075,
  "status": "passed"
});
formatter.before({
  "duration": 2170737704,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login to facebook",
  "description": "",
  "id": "sample-test;login-to-facebook;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I navigate to facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter hangnhat67@me.com and 123456 for login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see Newfeed Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Sample_Test_Steps.iNavigateToFacebook()"
});
formatter.result({
  "duration": 1998458111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hangnhat67@me.com",
      "offset": 8
    },
    {
      "val": "123456",
      "offset": 30
    }
  ],
  "location": "Sample_Test_Steps.iEnterAndForLogin(String,String)"
});
formatter.result({
  "duration": 893010182,
  "status": "passed"
});
formatter.match({
  "location": "Sample_Test_Steps.iClickLoginButton()"
});
formatter.result({
  "duration": 41972032,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@data-testid\u003d\u0027royallogin_button\u0027]\"}\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027NN\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir\u003dC:\\Users\\NhatDell\\AppData\\Local\\Temp\\scoped_dir13124_29576}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 2d1750634776e9d94265df616eaf4665\n*** Element info: {Using\u003dxpath, value\u003d//input[@data-testid\u003d\u0027royallogin_button\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:513)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat Steps.Sample_Test_Steps.iClickLoginButton(Sample_Test_Steps.java:37)\r\n\tat ✽.And I click Login button(Sample.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Sample_Test_Steps.iShouldSeeNewfeedPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1461897153,
  "status": "passed"
});
});