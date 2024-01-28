// Question no:2
// Use the rest countries API URL->https://restcountries.com/v3.1/all and diplay all the contries flag in the console
// Solution
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
    for(var i=0;i<result.length;i++){
        console.log(result[i].flags.png);
    }
}

//Question no:3
//Use the same rest countries API and print all countries names,regions,sub-region and population
//Solution
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
    for(var i=0;i<res.length;i++){
        if(res[i].subregion){
        console.log("common name "+res[i].name.common+" region "+res[i].region+" subregion "+res[i].subregion+" population "+res[i].population);
    }
    else{
        console.log("common name "+res[i].name.common+" region "+res[i].region+ " no subregion"+" population "+res[i].population);
    }
}
}