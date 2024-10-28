// Function to display welcome message with the current date
const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

// Function to add a new workout to the list
const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    if (workoutInput.trim() !== '') {
        const newWorkout = document.createElement('li');
        newWorkout.textContent = workoutInput;
        workoutList.appendChild(newWorkout);
        // Clear input field
        document.querySelector('#workoutInput').value = '';
    }
};

// Add event listener to the workout submit button
document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// Function to add new fitness goals and prevent duplicates
const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelectorAll('#goalList li');
    
    // Check for duplicates by iterating through existing goals
    let isDuplicate = false;
    goalList.forEach(goal => {
        if (goal.textContent.toLowerCase() === goalInput.toLowerCase()) {
            isDuplicate = true;
        }
    });

    // If a duplicate is found, display an alert
    if (isDuplicate) {
        alert('This goal already exists! Please enter a new goal.');
    } else if (goalInput.trim() !== '') {
        // If no duplicate is found, proceed with adding the new goal
        const newGoal = document.createElement('li');
        newGoal.textContent = goalInput;
        document.querySelector('#goalList').appendChild(newGoal);
        // Clear input field
        document.querySelector('#goalInput').value = '';
    }
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

// Function to update water intake and display it
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

// Add event listeners to the water intake buttons
document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

// Function to update the progress charts (mockup)
const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

// Update progress charts on page load
updateProgressCharts();

// Function to toggle dark and light themes
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

// Add event listener to the theme toggle button
document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

// Function to handle meal plan form submission
const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

// Add event listener to the meal plan form
document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
