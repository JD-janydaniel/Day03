// Question no:1
// How to compare two JSON have the same properties without order?
// solution
var obj1 = {name:"jany daniel",age:27};
var obj2 = {age:27,name:"jany daniel"};
var result=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(i in obj1) { 
        if(obj1[i] == obj2[i]) {
            continue;
        }
        else {
            result=false;
            break;
        }
    }
}
else {
    result=false;
}
console.log("Both Objects Are Equal "+result);