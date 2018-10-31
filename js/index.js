// Write your JS here
//import test from './script2.js';

// console.log('test');

// test();
import {getValues} from './data.js'
getValues();
// var database = firebase.database();
// var databaseRef = database.ref('/');
var values = databaseRef.once('value').then(function(snapshot) {
    const databaseValues = snapshot.val();
    console.log(databaseValues);
    $("body").html(databaseValues.Blogs["blog 1 "].body);
   // return databaseValues;

});

//console.log("what is this value?", values);