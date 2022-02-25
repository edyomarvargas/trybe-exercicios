function createDaysOfTheWeek() {
	const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
	const weekDaysList = document.querySelector('.week-days');

	for (let index = 0; index < weekDays.length; index += 1) {
		const days = weekDays[index];
		const dayListItem = document.createElement('li');
		dayListItem.innerHTML = days;

		weekDaysList.appendChild(dayListItem);
	};
};

createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function addDays(daysList) {
	let days = document.getElementById('days');
	for (let index = 0; index < daysList.length; index += 1) {
		let dayOfTheWeek = daysList[index];

		if (dayOfTheWeek === 24 || dayOfTheWeek === 31) {
			let newListItem = document.createElement('li');
			newListItem.className = 'day holiday';
			newListItem.innerText = dayOfTheWeek;
			days.appendChild(newListItem);
		}
		else if (dayOfTheWeek === 4 || dayOfTheWeek === 11 || dayOfTheWeek === 18) {
			let newListItem = document.createElement('li');
			newListItem.className = 'day friday';
			newListItem.innerText = dayOfTheWeek;
			days.appendChild(newListItem);
		}
		else if (dayOfTheWeek === 25) {
			let newListItem = document.createElement('li');
			newListItem.className = 'day holiday friday';
			newListItem.innerText = dayOfTheWeek;
			days.appendChild(newListItem);
		}
		else {
			let newListItem = document.createElement('li');
			newListItem.className = 'day';
			newListItem.innerText = dayOfTheWeek;
			days.appendChild(newListItem);
		}
	}
}

addDays(dezDaysList);

function createHolidayBtn(buttonName) {
	let getDiv = document.querySelector('.buttons-container');
	let newButton = document.createElement('button');
	newButton.id = 'btn-holiday';
	newButton.innerText = buttonName;
	getDiv.appendChild(newButton);
}

createHolidayBtn("Feriados");

function changeHolidaysColor() {
	let holidayBtn = document.querySelector('#btn-holiday');
	holidayBtn.addEventListener('click', function () {
		let holidays = document.querySelectorAll('.holiday');

		for (let index = 0; index < holidays.length; index += 1) {
			if (holidays[index].style.background = 'rgb(238,238,238)') {
				holidays[index].style.background = 'red';
			}
			else {
				holidays[index].style.background = 'rgb(238,238,238)';
			}
		}
	})
}
changeHolidaysColor();

function createFridayBtn(buttonName) {
	let getDiv = document.querySelector('.buttons-container');
	let newButton = document.createElement('button');
	newButton.id = 'btn-friday';
	newButton.innerText = buttonName;
	getDiv.appendChild(newButton);
}

createFridayBtn('Sexta-Feira');

function changeTextFriday() {
	let fridayBtn = document.querySelector('#btn-friday');
	fridayBtn.addEventListener('click', function () {
		let fridays = document.querySelectorAll('.friday');
		let arrControl = [4, 11, 18, 25];

		for (let index = 0; index < fridays.length; index += 1) {
			if (fridays[index].innerText === 'SEXTOU!') {
				fridays[index].innerText = arrControl[index];
			}
			else {
				fridays[index].innerText = 'SEXTOU!';
			}
		}
	})
}

changeTextFriday();

