//Return median of two sorted arrays of same size 

	var ar1 = [1, 12, 15, 26, 38]; 
    var ar2 = [2, 13, 17, 30, 45]; 

    ar1.push(ar2);

(function median(arr){
//sorting using bubble sort
    var len = arr.length;
    var temp = 0,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    //Finding Median
    var middleIndex = (arr.length)/2-1;
    var median = (arr[middleIndex] + arr[middleIndex+1])/2;
    console.log("Median is " + median);
})(ar1.flat());