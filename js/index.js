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
        $("#main").append(
            '<div class="col-md-6">' +
            '<div class="card flex-md-row mb-4 shadow-sm h-md-250">'+
              '<div class="card-body d-flex flex-column align-items-start">'+
                // '<strong class="d-inline-block mb-2 text-primary">World</strong>'+
                '<h3 class="mb-0">'+
                  '<a class="text-dark" href="#">'+ databaseValues.Blogs[key].title +'</a>'+
                '</h3>'+
                // '<div class="mb-1 text-muted">Nov 12</div>'+
                '<p class="card-text mb-auto">'+ databaseValues.Blogs[key].body +'</p>'+
                '<a href="#">Continue reading</a>'+
              '</div>'+
              '<img class="card-img-right flex-auto d-none d-lg-block" src='+  databaseValues.Blogs[key].image +' alt="Card image cap">'+
            '</div>'+
          '</div>'
        )
        // $("#main").append("<h1> "+ databaseValues.Blogs[key].title + "</h1>" +"<br>");
        // $("#main").append("<img class='imgs' src=" +  databaseValues.Blogs[key].image +" >"+"<br>");
        // $("#main").append("<p class= 'text'>" + databaseValues.Blogs[key].body +"</p>" +"<br>");

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