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

const firstListitem = listItemsUl.firstElementChild;
const lastListitem = listItemsUl.lastElementChild;


firstListitem.style.backgroundColor = 'lightskyblue';
lastListitem.style.backgroundColor = 'lightsteelblue';

// for (let i = 0; i < listItemsLi.length; i++) {
// 	listItemsLi[i].addEventListener('mouseover', () => {
// 		listItemsLi[i].textContent = listItemsLi[i].textContent.toUpperCase();
// 	});
// 	listItemsLi[i].addEventListener('mouseout', () => {
// 		listItemsLi[i].textContent = listItemsLi[i].textContent.toLowerCase();
// 	});
// }

// listItemsUl.addEventListener('mouseover', (event) => {
// 	if (event.target.tagName === 'LI') {
// 		event.target.textContent = event.target.textContent.toUpperCase();
// 	}
// });
// listItemsUl.addEventListener('mouseout', (event) => {
// 	if (event.target.tagName === 'LI') {
// 		event.target.textContent = event.target.textContent.toLowerCase();
// 	}
// });


function attachedListItemButtons(li) {
	let upButton = document.createElement('button');
	upButton.className = 'up';
	upButton.textContent = 'Up';
	li.appendChild(upButton);

	let downButton = document.createElement('button');
	downButton.className = 'down';
	downButton.textContent = 'Down';
	li.appendChild(downButton);

	let removeButton = document.createElement('button');
	removeButton.className = 'remove';
	removeButton.textContent = 'Remove';
	li.appendChild(removeButton);
}

for (var i = 0; i < listItemsLi.length; i++) {
	attachedListItemButtons(listItemsLi[i]);
}

listItemsUl.addEventListener('click', (event) => {
	if (event.target.tagName === 'BUTTON') {
		if (event.target.className === 'remove') {
			let parent = event.target.parentNode;
			listItemsUl.removeChild(parent);
		}
		if (event.target.className === 'up') {
			let parent = event.target.parentNode;
			let previousParent = parent.previousElementSibling;
			let upperParent = parent.parentNode;

			if (previousParent) {
				upperParent.insertBefore(parent, previousParent);
				previousParent.classname = 'highlight';
			}
		}
		if (event.target.className === 'down') {
			let parent = event.target.parentNode;
			let nextParent = parent.nextElementSibling;
			let upperParent = parent.parentNode;
			if (nextParent) {
				upperParent.insertBefore(nextParent, parent);
			}
		}
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
	attachedListItemButtons(li);
	listInput.value = '';
});

myRemoveButton.addEventListener('click', () => {
	let listUl = document.querySelector('.listUl');
	let li = document.querySelector('li');
	listUl.removeChild(li);
});