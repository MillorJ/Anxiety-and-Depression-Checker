// script.js
let currentSection = 1;

function showSection(sectionNumber) {
    const totalSections = 3;

// Hide current section
document.getElementById(`section${currentSection}`).classList.remove('active');
document.getElementById(`section${currentSection}`).classList.add('hidden');


document.getElementById(`section${sectionNumber}`).classList.remove('hidden');
document.getElementById(`section${sectionNumber}`).classList.add('active');

currentSection = sectionNumber;
}

document.getElementById('assessmentForm').addEventListener('submit', function(e) {
    e.preventDefault();