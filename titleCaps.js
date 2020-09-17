//Convert all the strings to title caps in a string array

var array = ["hello","mini","anant","vikas"];

(function capitalise(arr){
	for(i=0;i<arr.length;i++){
		console.log(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
	}
}(array));