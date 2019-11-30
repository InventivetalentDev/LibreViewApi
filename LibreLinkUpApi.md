
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
      "Timestamp": "11/30/2019 10:59:27 PM",
      "FactoryTimestamp": "11/30/2019 9:59:27 PM",
      "ValueInMgPerDl": 115,
      "TrendArrow": 3,
      "TrendMessage": null,
      "MeasurementColor": 1,
      "GlucoseUnits": 1,
      "Value": 115
    },
    {
      "Timestamp": "11/30/2019 10:51:50 PM",
      "FactoryTimestamp": "11/30/2019 9:51:50 PM",
      "ValueInMgPerDl": 115,
      "TrendArrow": 3,
      "TrendMessage": null,
      "MeasurementColor": 1,
      "GlucoseUnits": 1,
      "Value": 115
    },

    {
      "Timestamp": "11/26/2019 8:54:40 AM",
      "FactoryTimestamp": "11/26/2019 7:54:40 AM",
      "ValueInMgPerDl": 156,
      "TrendArrow": 3,
      "TrendMessage": null,
      "MeasurementColor": 2,
      "GlucoseUnits": 1,
      "Value": 156
    },
    {
      "Timestamp": "11/26/2019 3:36:08 AM",
      "FactoryTimestamp": "11/26/2019 2:36:08 AM",
      "ValueInMgPerDl": 281,
      "TrendArrow": 3,
      "TrendMessage": null,
      "MeasurementColor": 3,
      "GlucoseUnits": 1,
      "Value": 281
    }
  ]
}
```
