function solve(s,k){
	letters = "abcdefghijklmnopqrstuvwxyz"
	cnt = 0
	for (var i=0; i < letters.length && cnt < k; i++){
		while (s.includes(letters[i]) && cnt < k){
			s = s.replace(letters[i], '')
			cnt +=1
		}
	}
	return s
}