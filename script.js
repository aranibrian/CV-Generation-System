function generateCV() {
    const cvContainer = document.getElementById('cvContainer');

    const fullName = document.getElementById('fullName').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const aboutMe = document.getElementById('aboutMe').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const degree = document.getElementById('degree').value;
    const university = document.getElementById('university').value;
    const year = document.getElementById('year').value;

    const cvHTML = `
        <h2>${fullName}</h2>
        <h3>${jobTitle}</h3>
        <p>${aboutMe}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <h3>Education</h3>
        <p>${degree} from ${university}, ${year}</p>
    `;

    cvContainer.innerHTML = cvHTML;
}
