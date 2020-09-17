//Sum of all numbers in an array

var array = [1,45,43,23,32,11,90];
var total= 0;
(function sumArray(arr){
	for(i=0;i<arr.length;i++){
		total+=arr[i];
	}
	console.log(total);
}(array));