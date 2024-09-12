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

        // Get user responses
        const responses = [
            parseInt(document.getElementById('q1').value),
            parseInt(document.getElementById('q2').value),
            parseInt(document.getElementById('q3').value),
            parseInt(document.getElementById('q4').value),
            parseInt(document.getElementById('q5').value),
            parseInt(document.getElementById('q6').value),
            parseInt(document.getElementById('q7').value),
        ];

// Calculate total score
const totalScore = responses.reduce((acc, curr) => acc + curr, 0);

// Determine result based on score
let resultText = '';
if (totalScore <= 7) {
    resultText = 'Your responses suggest minimal anxiety and depression. If you have concerns, consider talking to a healthcare professional.';