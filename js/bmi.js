document.addEventListener("DOMContentLoaded", function () {
    const bmiForm = document.getElementById("bmi-form");
    const bmiResult = document.getElementById("bmi-result");
    const bmiCategory = document.getElementById("bmi-category");

    bmiForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get height and weight values
        const height = parseFloat(document.getElementById("height").value);
        const weight = parseFloat(document.getElementById("weight").value);

        // Calculate BMI
        const bmi = calculateBMI(height, weight);

        // Display BMI result
        bmiResult.textContent = `Your BMI: ${bmi.toFixed(1)}`;

        // Determine BMI category
        let category;
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi < 30) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        // Display BMI category with colored circle
        displayCategory(category);
    });

    function calculateBMI(height, weight) {
        // BMI formula: weight (kg) / (height (m) * height (m))
        return weight / ((height / 100) * (height / 100));
    }

    function displayCategory(category) {
        // Clear previous category display
        bmiCategory.innerHTML = "";

        // Create and append colored circle
        const circle = document.createElement("div");
        circle.classList.add("circle");
        if (category === "Normal weight") {
            circle.classList.add("green");
        } else if (category === "Overweight") {
            circle.classList.add("yellow");
        } else if (category === "Underweight") {
            circle.classList.add("blue");
        } else if (category === "Obese") {
            circle.classList.add("red");
        }
        bmiCategory.appendChild(circle);

        // Display category text
        const categoryText = document.createElement("p");
        categoryText.textContent = category;
        bmiCategory.appendChild(categoryText);
    }
});
