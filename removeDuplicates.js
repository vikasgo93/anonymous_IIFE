var ar1 = [1, 12, 15, 26, 38, 26, 12, 1];
var ar2 =[];
(function removeDuplicates(arr){
	console.log(Array.from(new Set(arr)));
}(ar1));