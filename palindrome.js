var strings = ['malayalam', 'madam', 'vikas','radar'];

(function getPalindromes(strs){
	const palindromes = strs.filter((str) => {
		return str.split("").join("") == str.split("").reverse().join("");
	})
	console.log(palindromes.join(" "));

})(strings);