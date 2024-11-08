document.getElementById('resume-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get values from the form
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let education = document.getElementById('education').value;
    let experience = document.getElementById('experience').value;
    let skills = document.getElementById('skills').value;

    // Display the resume
    let resumeDisplay = document.getElementById('resume-display');
    resumeDisplay.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <ul>
            ${skills.split('\n').map(skill => `<li>${skill}</li>`).join('')}
        </ul>
    `;
});
