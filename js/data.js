

var database = firebase.database();
var databaseRef = database.ref('/');
var getValues = databaseRef.once('value').then(function(snapshot) {
    const databaseValues = snapshot.val();
    console.log(databaseValues);
    $("body").html(databaseValues.Blogs["blog 1 "].body);
   // return databaseValues;

});

export default getValues;