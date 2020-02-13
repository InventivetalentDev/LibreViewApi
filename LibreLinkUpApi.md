# LibreLinkUp API
A compilation of reverse engineering results of the LibreLinkUp API used by the mobile app


## Login
`POST` `https://api-eu.libreview.io/lsl/api/nisperson/getauthenticateduser`

### Headers
```
Content-Type: application/json
```

### Body
```json
{
    "Domain": "Libreview",
    "GatewayType": "LinkUp.Android",
    "Password": "...(plain)",
    "UserName": "...(plain)"
}
```

### Response
```json
{
  "status": 0,
  "result": {
    "UserToken": "......",
    "AccountId": "<User UUID>",
    "UserName": "<usually email>",
    "FirstName": "Haylee",
    "LastName": "Schäfer",
    "Email": "<email>",
    "Country": "DE",
    "Culture": "en-GB",
    "Timezone": "",
    "DateOfBirth": "",
    "IsHCP": false,
    "Validated": true,
    "NeedToAcceptPolicies": false,
    "CommunicationLanguage": "en-GB",
    "UiLanguage": "en-GB"
  }
}
```



## GetPatientGlucoseMeasurements
`GET` `https://api-eu.libreview.io/lsl/api/measurements/GetPatientGlucoseMeasurements?country=DE&patientId=<User UUID>` 

### Headers
```
Content-Type: application/json
UserToken: .... (token from login request)
Domain: Libreview
GatewayType: LinkUp.Android
```


### Response
```json
{
  "status": 0,
  "result": [
    {
      "FactoryTimestamp": "2/13/2020 5:29:23 PM",
      "Timestamp": "2/13/2020 6:29:23 PM",
      "ValueInMgPerDl": 296,
      "TrendArrow": 5,
      "TrendMessage": null,
      "MeasurementColor": 3,
      "GlucoseUnits": 1,
      "Value": 296,
      "isHigh": false,
      "isLow": false
    },
    {
      "FactoryTimestamp": "2/13/2020 5:12:57 PM",
      "Timestamp": "2/13/2020 6:12:57 PM",
      "alarmType": 1
    },
    {
      "FactoryTimestamp": "2/13/2020 4:51:17 PM",
      "Timestamp": "2/13/2020 5:51:17 PM",
      "ValueInMgPerDl": 172,
      "TrendArrow": 5,
      "TrendMessage": null,
      "MeasurementColor": 1,
      "GlucoseUnits": 1,
      "Value": 172,
      "isHigh": false,
      "isLow": false
    },
    {
      "FactoryTimestamp": "2/13/2020 3:53:38 PM",
      "Timestamp": "2/13/2020 4:53:38 PM",
      "ValueInMgPerDl": 113,
      "TrendArrow": 3,
      "TrendMessage": null,
      "MeasurementColor": 1,
      "GlucoseUnits": 1,
      "Value": 113,
      "isHigh": false,
      "isLow": false
    },
    {
      "FactoryTimestamp": "2/13/2020 2:02:25 PM",
      "Timestamp": "2/13/2020 3:02:25 PM",
      "ValueInMgPerDl": 224,
      "TrendArrow": 3,
      "TrendMessage": null,
      "MeasurementColor": 2,
      "GlucoseUnits": 1,
      "Value": 224,
      "isHigh": false,
      "isLow": false
    },
    {
      "FactoryTimestamp": "2/13/2020 1:27:28 PM",
      "Timestamp": "2/13/2020 2:27:28 PM",
      "ValueInMgPerDl": 257,
      "TrendArrow": 1,
      "TrendMessage": null,
      "MeasurementColor": 3,
      "GlucoseUnits": 1,
      "Value": 257,
      "isHigh": false,
      "isLow": false
    },
    {
      "FactoryTimestamp": "2/13/2020 12:40:41 PM",
      "Timestamp": "2/13/2020 1:40:41 PM",
      "ValueInMgPerDl": 311,
      "TrendArrow": 3,
      "TrendMessage": null,
      "MeasurementColor": 3,
      "GlucoseUnits": 1,
      "Value": 311,
      "isHigh": false,
      "isLow": false
    },
    {
      "FactoryTimestamp": "2/13/2020 11:41:41 AM",
      "Timestamp": "2/13/2020 12:41:41 PM",
      "ValueInMgPerDl": 261,
      "TrendArrow": 5,
      "TrendMessage": null,
      "MeasurementColor": 3,
      "GlucoseUnits": 1,
      "Value": 261,
      "isHigh": false,
      "isLow": false
    },
    {
      "FactoryTimestamp": "2/13/2020 11:36:28 AM",
      "Timestamp": "2/13/2020 12:36:28 PM",
      "alarmType": 1
    },
    {
      "FactoryTimestamp": "2/13/2020 11:17:09 AM",
      "Timestamp": "2/13/2020 12:17:09 PM",
      "ValueInMgPerDl": 190,
      "TrendArrow": 3,
      "TrendMessage": null,
      "MeasurementColor": 2,
      "GlucoseUnits": 1,
      "Value": 190,
      "isHigh": false,
      "isLow": false
    }
  ]
}
``` 
Since the late january 2020 update this also seems to list alarm notifications for the Libre 2
