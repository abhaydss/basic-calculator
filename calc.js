var a = '';
var b = '';
var arr = [];

function displaynumber(digit){
    arr.push(digit);
    var n = arr.length;
    if(n != 1){
        a = '';
        document.getElementById('screen').innerHTML = a;
    }
    for(i=0; i< n ; i++){
        a=a+arr[i];
    }
    console.log(a);
    document.getElementById('screen').innerHTML = '';
    document.getElementById('screen').innerHTML = a;
}
function clearScreen(){
    document.getElementById('screen').innerHTML = '';
    arr=[];
    a ='';  
    b ='';
}
function result(){
    var ans = 0;
    document.getElementById('screen').innerHTML = '';
    for(i=0; i<arr.length; i++){
        b += arr[i];
    }
    console.log(b);
    ans = eval(b);
    b='';
    document.getElementById('screen').innerHTML = ans;
    arr= [];
    arr.push(ans.toString());
}