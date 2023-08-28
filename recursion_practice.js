const myFunc = (a) => {
	let sum = a
  if(sum > 0){
  	sum = sum + myFunc(a - 1)
  }
	return sum
}

const myFunc2 = (a,b) => {
	//End case is when b == 0

  if(b == 0){
  	return 1
  } else {
  	return a * myFunc2(a, b-1)
  }
}

const myFunc3 = (a) => {
	if(a == 1){
  	return 1
  } else{
  	return a * myFunc3(a-1)
  }
}

const myFunc4 = (arr, func) => {
	let copy = [...arr]
  
  if(copy.length === 0){
  	return true
  } 
  
  if(func(copy[0])){
  	copy.shift()
  	return myFunc4(copy, func)
  } else {
 		return false
  }
}

const myFunc5 = (arr) => {
	let copy = [...arr]
  
  if(copy.length == 0){
  	return 1
  } else {
  	let copy2 = copy.shift()
    return copy2 * myFunc5(copy)
  }
}

