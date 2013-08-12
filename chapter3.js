function juggle() {
	var sum = 0;
	for (i = 0; i < arguments.length; i++) {
		sum = sum + arguments[i];
	}
	return sum;
}

var ninja1 = {};
var ninja2 = {};

juggle.apply(ninja1, [1,2,3,4]);
juggle.call(ninja2, 5,6,7,8);

assert(ninja1.sum === 10, "ninja1 is in scope");
assert(ninja2.sum === 26, "ninja2 is in scope");