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
        $("#main").append("<h1> "+ databaseValues.Blogs[key].title + "</h1>" +"<br>");
        $("#main").append("<img class='imgs' src=" +  databaseValues.Blogs[key].image +" >"+"<br>");
        $("#main").append("<p class= 'text'>" + databaseValues.Blogs[key].body +"</p>" +"<br>");

    }
   // return databaseValues;

});

$("#submit").click(function(){
    var title= $("#title").val();
    var text= $("#text").val();
    var image= $("#image").val();
    var blogRef=database.ref('/Blogs');
    blogRef.push({
        body: text,
        image: image,
        title: title,
    });
})

//console.log("what is this value?", values);