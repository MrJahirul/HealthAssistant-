
    // Age Calculation function
    const calculateAge = (birthDate) => {
        const today = new Date();
        const birthDateObj = new Date(birthDate);

        let years = today.getFullYear() - birthDateObj.getFullYear();
        let months = today.getMonth() - birthDateObj.getMonth();
        let days = today.getDate() - birthDateObj.getDate();

        // Adjust months and years if necessary
        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months, days };
    };

    // Event listener for the age form submission
    const ageForm = document.querySelector('#age-form');
    const ageResult = document.querySelector('#age-result');

    ageForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const birthDate = event.target.elements['birthdate'].value;
        const { years, months, days } = calculateAge(birthDate);
        ageResult.textContent = `Your age is: ${years} years, ${months} months, and ${days} days.`;
    });
   