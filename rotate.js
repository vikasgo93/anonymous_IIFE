var array = [1,45,43,23,32,11,90];
var k =3;
for(i=0;i<k;i++){
	array.push(array.shift());
}

console.log(array);