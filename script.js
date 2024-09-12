// script.js
let currentSection = 1;

function showSection(sectionNumber) {
    const totalSections = 3;
    
    // Hide current section
    document.getElementById(`section${currentSection}`).classList.remove('active');
    
    // Show new section
    document.getElementById(`section${sectionNumber}`).classList.add('active');
    
    // Scroll to the top of the section
    document.querySelector('.question-wrapper').scrollTop = 0;
    
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
    let resultText;
    if (totalScore <= 6) {
        resultText = "Your results suggest minimal anxiety and depression.";
    } else if (totalScore <= 12) {
        resultText = "Your results suggest moderate anxiety and depression.";
    } else {
        resultText = "Your results suggest severe anxiety and depression. Consider seeking professional help.";
    }

    // Display result
    document.getElementById('result').innerText = resultText;
});
