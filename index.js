var yaml = require('js-yaml');
var fs = require('fs');

exports.parse = function (typeIdPath, groupIdPath, categoryIdPath, blueprintsPath) {

    try {
        console.log("reading type ids ");
        var typeIDs = yaml.safeLoad(fs.readFileSync( typeIdPath, 'utf8'));
        console.log("reading group ids ");
        var groupIDs = yaml.safeLoad(fs.readFileSync( groupIdPath, 'utf8'));
        console.log("reading category ids ");
        var categoryIDs = yaml.safeLoad(fs.readFileSync( categoryIdPath, 'utf8'));
        console.log("reading blueprints ");
        var blueprints = yaml.safeLoad(fs.readFileSync( blueprintsPath, 'utf8'));

        var output = {};
        // map blueprints
        var bpMap = {};
        for (var bp in blueprints){

            if (blueprints[bp]['activities']['manufacturing']) {
                var products = blueprints[bp]['activities']['manufacturing']['products'];
                if (products) {
                    for (var i = 0; i < products.length; i++) {
                        bpMap[products[i].typeID] = bp;
                    }
                }
            }
        }

        for (var catID in categoryIDs){
            output[categoryIDs[catID].name.en] = {};
        }

        for (var grpID in groupIDs){
            var catID = groupIDs[grpID].categoryID;
            var catName = categoryIDs[catID].name.en;
            output[catName][groupIDs[grpID].name.en] = {};
        }

        for (var typID in typeIDs){
            var currType = typeIDs[typID];
            var grpID    = currType.groupID;
            var catID    = groupIDs[grpID].categoryID;

            var catName = categoryIDs[catID].name.en;
            var grpName = groupIDs[grpID].name.en;
            output[catName][grpName][currType.name.en] = currType;
            output[catName][grpName][currType.name.en].id = typID;
            if( bpMap[typID]){
                output[catName][grpName][currType.name.en].blueprintID = {};

            }
        }

        return output;

    } catch (e){
        console.log(e);
    }
};
