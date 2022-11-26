type valueA = number;
type valueB = number;

function betweenValues(a: valueA, b: valueB) {
	return Math.floor(Math.random() * (b - a + 1)) + a;
}
export {betweenValues};
