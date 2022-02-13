const body = document.querySelector('body');
body.style.backgroundColor = '#F9F9F9';

const header = document.querySelector('#header-container');
header.style.backgroundColor = '#23B069';


const emergencyTasks = document.querySelector('.emergency-tasks');
emergencyTasks.style.backgroundColor = '#FC9F84'

const emergencyTitles = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergencyTitles.length; i += 1) {
    emergencyTitles[i].style.backgroundColor = '#A518F3';
}

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = '#F9DB5E';

const noEmergencyTitles = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noEmergencyTitles.length; i += 1) {
    noEmergencyTitles[i].style.backgroundColor = '#232525';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#043533';