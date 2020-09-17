var array = [1,3,4,5,6,7];
(function oddNumbers(arr){
	for(i=0;i<arr.length;i++){
		if(arr[i] % 2 !=0){
			console.log(arr[i]);
		}
	}
}(array));