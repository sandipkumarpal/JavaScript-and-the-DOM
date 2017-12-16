const input = document.querySelector('.descriptionInput');
const p = document.querySelector('.description');
const button = document.querySelector('.myButton');

const myToggleButton = document.querySelector('.myToggleButton');
const listDiv = document.querySelector('.list');

const listInput = document.querySelector('.listInput');
const myListButton = document.querySelector('.myListButton');
const myRemoveButton = document.querySelector('.myRemoveButton');

const listItemsLi = document.getElementsByTagName('li');
const listItemsUl = document.querySelector('ul');

// for (let i = 0; i < listItemsLi.length; i++) {
// 	listItemsLi[i].addEventListener('mouseover', () => {
// 		listItemsLi[i].textContent = listItemsLi[i].textContent.toUpperCase();
// 	});
// 	listItemsLi[i].addEventListener('mouseout', () => {
// 		listItemsLi[i].textContent = listItemsLi[i].textContent.toLowerCase();
// 	});
// }

listItemsUl.addEventListener('mouseover', (event) => {
	if (event.target.tagName === 'LI') {
		event.target.textContent = event.target.textContent.toUpperCase();
	}
});
listItemsUl.addEventListener('mouseout', (event) => {
	if (event.target.tagName === 'LI') {
		event.target.textContent = event.target.textContent.toLowerCase();
	}
});

button.addEventListener('click', () => {
	p.innerHTML = input.value + ':';
	input.value = '';
});

myToggleButton.addEventListener('click', () => {
	if (listDiv.style.display === 'none') {
		listDiv.style.display = 'block';
		myToggleButton.textContent = 'Hide List';
	} else {
		listDiv.style.display = 'none';
		myToggleButton.textContent = 'Show List';
	}
});

myListButton.addEventListener('click', () => {
	let listUl = document.querySelector('.listUl');
	let li = document.createElement('li');
	li.textContent = listInput.value;
	listUl.appendChild(li);
	listInput.value = '';
});

myRemoveButton.addEventListener('click', () => {
	let listUl = document.querySelector('.listUl');
	let li = document.querySelector('li');
	listUl.removeChild(li);
});