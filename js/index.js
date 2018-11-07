// Write your JS here
//import test from './script2.js';

// console.log('test');

// test();
//import {getValues} from './data.js'
//getValues();
 var database = firebase.database();
var databaseRef = database.ref('/');
var values = databaseRef.once('value').then(function(snapshot) {
    const databaseValues = snapshot.val();
    console.log(databaseValues);
    for(var key in databaseValues.Blogs){
        $("body").append(databaseValues.Blogs[key].body);
        $("body").append("<img src=" +  databaseValues.Blogs[key].image +" >");
        $("body").append("<h1> "+ databaseValues.Blogs[key].title + "</h1>");
    }
   // return databaseValues;

});

//console.log("what is this value?", values);