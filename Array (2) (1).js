/*map() function*/
let array=[1,2,3,4,5];
let mapped=array.map(element=>element+30);
console.log(mapped);

/*Filter array*/
let array1=[3.5,2,4,1.7,2.76,2.47];
let filtered=array1.filter(element=>element>2.5);
console.log(filtered);

/*Sort array*/
let array2=[3,8,45,67,32];
let descend=array2.sort((ele1,ele2)=>ele1>ele2?-1:1);
console.log(descend);
let asscend=array2.sort((ele1,ele2)=>ele1>ele2?-1:1);
console.log(asscend);
/*concat array*/
let str1=["Aiman","Munnaza"];
let str2=["Mahnoor","Aqsa"];
console.log(str1.concat(str2));
/* every() method*/
let lessthan5=array1.every(element=>element<5) ;
console.log(lessthan5);

let greaterthan5=array1.every(element=>element>5) ;
console.log(greaterthan5);

/* some method*/
let greaterthan3=array1.some(element=>element>3) ;
console.log(greaterthan3);

/* includes method*/
let equalto=array1.includes(2.76) ;
console.log(equalto);

/*join method*/
let str3=["a","i","m","a","n"];
console.log(str3.join(''));

/* reduce method*/
let red=array1.reduce((x,y)=>x+y);
console.log(red);

/*find method*/
let test=array1.find(x=>x>1.7);
console.log(test);

/*findindex method*/
let fi=str3.findIndex(x=>x==="m");
console.log(fi);

/*indexof method*/
let str4=["a","i","m","a","n"];
let inof=str4.indexOf("a");
console.log(inof);

/*fill() method*/
let ar=new Array(4);
console.log(ar.fill("Aiman"));

/*slice method*/
console.log(str4.slice(1,3));

/*reverse method*/
console.log(str4.reverse());

/*push method*/
console.log(str3.push("y"));
console.log(str3);

/*Pop method*/
console.log(str4.pop());
console.log(str4);

/*shift method*/
console.log(array.shift());
console.log(array);

/*unshift method*/
console.log(array.unshift(10));
console.log(array);





