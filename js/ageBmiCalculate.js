document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

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

    // BMI Calculation function
    const calculateBMI = (height, weight) => {
        // Convert height from cm to meters
        const heightInMeters = height / 100;
        // Calculate BMI
        const bmi = weight / (heightInMeters * heightInMeters);
        return bmi.toFixed(2); // Round to 2 decimal places
    };

    // BMI Category function
    const getBMICategory = (bmi) => {
        if (bmi < 18.5) return "Underweight";
        if (bmi >= 18.5 && bmi < 24.9) return "Normal weight";
        if (bmi >= 25 && bmi < 29.9) return "Overweight";
        return "Obese";
    };

    // Event listener for the BMI form submission
    const bmiForm = document.querySelector('#bmi-form');
    const bmiResult = document.querySelector('#bmi-result');

    bmiForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const height = parseFloat(event.target.elements['height'].value);
        const weight = parseFloat(event.target.elements['weight'].value);
        const bmi = calculateBMI(height, weight);
        const category = getBMICategory(bmi);
        bmiResult.textContent = `Your BMI is: ${bmi} (${category}).`;
    });
});
