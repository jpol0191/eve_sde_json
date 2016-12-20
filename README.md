# Eve Static Data to JSON.

This is a very minimal tool that converts Eve Online static data exports (SDE) from .yaml into .json. 

## Installation 
Install with npm.

```
npm i evetaticdata-json --save 
```

## Usage 
```javascript 
var staticData = require('evestaticdata-json');

// each argument refers to the .yaml file Eve Online static export 
var staticDataJSON = staticData.parse (typeIdPath, groupIdPath, categoryIdPath, blueprintsPath);
console.log(staticDataJSON.Ship.Frigate.Tristan) // Logs data for the Tristan 
```


I have only exported the information that is useful for my own projects. If you have a request, email me at 
jpol.dev@gmail.com. Please include contact information and a detailed explanation on how you would like the information
structured.