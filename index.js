// Set the welcome message with the current date
const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

// Function to display workout routine
const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value.trim();
    const workoutList = document.querySelector('#workoutList');
    
    if (workoutInput === "") return; // Prevent adding empty workouts
    
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
    document.querySelector('#workoutInput').value = ""; // Clear input after adding
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// Function to add new fitness goals and prevent duplicates
const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value.trim();
    const goalList = document.querySelector('#goalList');

    if (goalInput === "") return; // Prevent adding empty goals

    // Check for duplicate goals
    const existingGoals = Array.from(goalList.getElementsByTagName('li')).map(li => li.textContent);
    
    if (existingGoals.includes(goalInput)) {
        alert("Goal already exists!"); // Display alert if duplicate is found
    } else {
        const newGoal = document.createElement('li');
        newGoal.textContent = goalInput;
        goalList.appendChild(newGoal);
    }
    
    document.querySelector('#goalInput').value = ""; // Clear input after adding
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

// Water intake update function
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

// Function to update progress charts (mockup)
const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

// Toggle theme between light and dark
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

// Submit meal plan form and prevent default submission behavior
const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
