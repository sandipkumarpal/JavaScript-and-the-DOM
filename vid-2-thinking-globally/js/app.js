const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i++) {
	myList[i].style.color = '#990077';
}


const myListNoOffClass = document.querySelectorAll('.no-off-color');

for (let i = 0; i < myListNoOffClass.length; i++) {
	myListNoOffClass[i].style.color = '#779900';
}

const listOdd = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < listOdd.length; i++) {
	listOdd[i].style.backgroundColor = '#989898';
}