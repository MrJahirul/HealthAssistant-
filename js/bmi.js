document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
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
