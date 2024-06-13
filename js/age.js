// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Reference to the form and result element
    const form = document.getElementById('age-form');
    const ageResult = document.getElementById('age-result');

    // Add submit event listener to form
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Fetch day, month, and year values from inputs
        const day = parseInt(document.getElementById('day').value);
        const month = parseInt(document.getElementById('month').value);
        const year = parseInt(document.getElementById('year').value);

        // Validate inputs
        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            ageResult.textContent = 'Please enter valid day, month, and year.';
            return;
        }

        // Calculate current date
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1; // January is 0
        const currentDay = currentDate.getDate();

        // Calculate age in years, months, and days
        let ageYears = currentYear - year;
        let ageMonths = currentMonth - month;
        let ageDays = currentDay - day;

        // Adjust age calculation if current date is before birthdate
        if (ageDays < 0) {
            ageMonths--;
            ageDays += getDaysInMonth(currentMonth - 1, currentYear);
        }
        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        // Display age
        ageResult.textContent = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
    });

    // Function to get number of days in a month
    function getDaysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }
});
