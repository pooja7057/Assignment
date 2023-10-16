async function fetchCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();
    const countryDropdown = document.getElementById('country');

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name.common;
        option.text = country.name.common;
        countryDropdown.appendChild(option);
    });
}

fetchCountries();

function submitForm() {
    
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;
    var gender = '';
    if (document.getElementById('male').checked) {
        gender += 'Male, ';
    }
    if (document.getElementById('female').checked) {
        gender += 'Female, ';
    }
    if (document.getElementById('other').checked) {
        gender += 'Other, ';
    }
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;

    // Display the values in the popup
    // var popupData = document.getElementById('popup-data');
    // popupData.innerHTML = "First Name: " + firstName + "<br>" +
    //     "Last Name: " + lastName + "<br>" +
    //     "Date of Birth: " + dob + "<br>" +
    //     "Country: " + country + "<br>" +
    //     "Gender: " + gender + "<br>" +
    //     "Profession: " + profession + "<br>" +
    //     "Email: " + email + "<br>" +
    //     "Mobile Number: " + mobile;

    // // Show the popup
    // var popup = document.getElementById('popup');
    // popup.style.display='block';

    alert("Survey Form Data:\n\n" +
        "First Name: " + firstName + "\n" +
        "Last Name: " + lastName + "\n" +
        "Date of Birth: " + dob + "\n" +
        "Country: " + country + "\n" +
        "Gender: " + gender + "\n" +
        "Profession: " + profession + "\n" +
        "Email: " + email + "\n" +
        "Mobile Number: " + mobile);

    // Reset the form
    resetForm();
}

function resetForm() {
    var surveyForm = document.getElementById('surveyForm');
    surveyForm.reset();
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
    resetForm();
}





