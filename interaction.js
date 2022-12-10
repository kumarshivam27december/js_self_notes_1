// alert ('hello world')
 //alert in in-browser javascript

 alert('hello world')

 let askFromUser=prompt('Enter user number')
 console.log(askFromUser)




 let isprogramming=confirm("Are you a hacker")
 console.log(isprogramming)


//  single line comment
/*
this
is 
a 
multiline
comment
*/
// datatypes in javascripts
// string=>text
// numbers=int as well as float
//arrays=>ordered pair of collection  [10,20,30,40,44]
//object=>key value player pair     {name:'john'}
//boolean true or false
//  {} => a block
// a block matter more than indentation in javascript

//conditional statement
let year=prompt('year=')
if(year==2022){
    alert('you are so smart')
}
else{
    alert('you are so dumb')
}


let age=prompt("how much time had happen of your parent mistake")
if(age<18){
    alert('access not allowed')
}
else if(age<20){
    alert('you have limited access')
}else{
    alert('The mistake has grown so much , we could not do anything about it .....here is the pass of your theater now f*** off')
}






let sum=0
while(true){
    let value=prompt("enter a number",'')
    sum=sum+value
    break
}
alert('sum:'+sum)
//it will add string + int and concattenate it