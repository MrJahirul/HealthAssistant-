document.addEventListener('DOMContentLoaded', () => {
    const lmpForm = document.querySelector('#lmp-form');
    const gestationalAgeElement = document.querySelector('#gestational-age');
    const dueDateElement = document.querySelector('#due-date');

    lmpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const lmpDate = new Date(event.target.elements['lmp-date'].value);
        const today = new Date();
        const gestationalAge = calculateGestationalAge(lmpDate, today);
        const dueDate = calculateDueDate(lmpDate);

        gestationalAgeElement.textContent = `Gestational Age: ${gestationalAge.weeks} weeks and ${gestationalAge.days} days`;
        dueDateElement.textContent = `Estimated Due Date: ${dueDate.toDateString()}`;
    });

    function calculateGestationalAge(lmpDate, currentDate) {
        const diffTime = Math.abs(currentDate - lmpDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const weeks = Math.floor(diffDays / 7);
        const days = diffDays % 7;
        return { weeks, days };
    }

    function calculateDueDate(lmpDate) {
        const dueDate = new Date(lmpDate);
        dueDate.setDate(dueDate.getDate() + 280); // 280 days = 40 weeks
        return dueDate;
    }
});
