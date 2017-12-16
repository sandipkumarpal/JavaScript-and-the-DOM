function say(something) {
	console.log(something);
}

say('Hi, sandip');

function exec(func, arg) {
	func(arg);
}

exec(say, 'Hello, exec function run');

window.setTimeout((something) => {
	console.log(something);
}, 3000, 'Geeting Massage!');

function add(num1, num2) {
  console.log(num1 + num2);
}

window.setTimeout((num1, num2) => {
	console.log(num1 + num2);
}, 3000, 2, 2);