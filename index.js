document.addEventListener('DOMContentLoaded', function() {
    // Display the current date
    const dateElement = document.getElementById('date');
    const today = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    dateElement.textContent = `Today is ${today.toLocaleDateString('en-US', options)}`;

    // Workout functionality
    const workoutInput = document.getElementById('workout-input');
    const workoutList = document.getElementById('workout-list');
    const addWorkoutButton = document.getElementById('add-workout');

    addWorkoutButton.addEventListener('click', function() {
        if (workoutInput.value) {
            const li = document.createElement('li');
            li.textContent = workoutInput.value;
            workoutList.appendChild(li);
            workoutInput.value = '';
        }
    });

    // Goal functionality
    const goalInput = document.getElementById('goal-input');
    const goalList = document.getElementById('goal-list');
    const addGoalButton = document.getElementById('add-goal');

    addGoalButton.addEventListener('click', function() {
        if (goalInput.value) {
            const li = document.createElement('li');
            li.textContent = goalInput.value;
            goalList.appendChild(li);
            goalInput.value = '';
        }
    });

    // Water intake functionality
    let waterCount = 0;
    const waterCountElement = document.getElementById('water-count');
    const incrementWaterButton = document.getElementById('increment-water');
    const decrementWaterButton = document.getElementById('decrement-water');

    incrementWaterButton.addEventListener('click', function() {
        waterCount++;
        waterCountElement.textContent = `${waterCount} glasses`;
    });

    decrementWaterButton.addEventListener('click', function() {
        if (waterCount > 0) {
            waterCount--;
            waterCountElement.textContent = `${waterCount} glasses`;
        }
    });

    // Weekly Meal Plan functionality (Optional: Add any specific functionality)
    const submitMealPlanButton = document.getElementById('submit-meal-plan');
    submitMealPlanButton.addEventListener('click', function() {
        const mondayMeal = document.getElementById('monday-meal').value;
        const tuesdayMeal = document.getElementById('tuesday-meal').value;
        // You can save the meal plan or display it as needed
        alert(`Meal Plan Submitted:\nMonday: ${mondayMeal}\nTuesday: ${tuesdayMeal}`);
    });
});
