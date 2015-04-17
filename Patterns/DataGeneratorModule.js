/**
 * Created by Michael on 16/04/15.
 */

var fnameArr = ['Michael','Lars','Mads','Hans','Mikkel'];
var lnameArr = ['Larsen','Madsen','Hansen','Jensen'];
var streetArr = ['Lyngbyvej','Hillerødvej','Ringvejen'];
var cityArr = ['Lyngby','Allerød','Odense','Aarhus'];
var zipArr = ['2800','3450','2730','2720'];

function createData(amount, string, callback){

    var split = string.split(',');
    split = split.map(function(element){

        return element.trim();
    })
    var dataArr = [];
    for(var i = 0; i<amount;i++){

        var obj = {};
        split.forEach(function(element){

            switch(element){

                case 'fname':
                    obj.fname = getRandom(fnameArr)
                    break;
                case 'lname':
                    obj.lname = getRandom(lnameArr)
                    break;
                case 'street':
                    obj.street = getRandom(streetArr)
                    break;
                case 'city':
                    obj.city = getRandom(cityArr)
                    break;
                case 'zip':
                    obj.zip = getRandom(zipArr)
                    break;
                default:
                    obj.UnknownType = element;
            }

        })
        dataArr.push(obj);
    }
    callback(dataArr)
}

function getRandom(arr){

    var rand = Math.floor(Math.random()*arr.length);
    return arr[rand];
}

module.exports = {

    getData: createData
}