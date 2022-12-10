// while 


let w=0
while(w>5){
    console.log(w)
    w--
}


// this is while loop
let i=5
while(i>0){
    console.log(i)
    i--
}

// if in upper we put  i++ it will print infinite loop  when i<5 because every time  i will be printed


let k=5
while(k){ //k!=0
    console.log(k)
    k--
}


let m=5
while(m) console.log(m--)

// do while loop
let s=0
do{
    console.log(s)
    s++
}while (s<5)


//uppper had a same output as below one

let q=0
while(q<5){
    console.log(q)
    q++
}




do{
    console.log('hello world')
}while(false)



// while(false){
//     console.log('hello machine world')
// }



//for loop
for (let i=0;i<5;i++){
    console.log(i)
}


let j=0
for(;j<5;j++){
    console.log(j)
}

let h=0
for(;h<10;){
    console.log(h++)
}



let sum=0
while(true){
    let value=prompt("enter a number",'')
    sum=sum+value
    break
}
alert('sum:'+sum)







let r=0
while(r<50){
    if(r==5) break
    console.log(r)
    r++
}

for (let t=0;t<10;t++) {
    if (t==5) continue
    console.log(t)
}

// for or we use || like for example in above we can use  if(t==5 ||  t==7)