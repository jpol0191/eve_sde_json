# Eve Static Data to JSON.

This is a very minimal tool that converts Eve Online static data exports from .yaml into .json. 

## Installation 
Install with npm.

```
npm i evetaticdata-json 
```

## Usage 
```javascript 
var staticData = require('evestaticdata-json');

// each argument refers to the .yaml file Eve Online static export 
var staticDataJSON = staticData.parse (typeIdPath, groupIdPath, categoryIdPath, blueprintsPath);
```


I have only exported the information that is useful for my own projects. If you have a request, email me at 
jpol.dev@gmail.com. Please include contact information and a detailed explanation on how you would like the information
structured.