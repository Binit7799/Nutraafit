import React, { useState } from 'react';
import * as XLSX from 'xlsx';

// Main Component for Health & Fitness Tracking
const Tracking = () => {
  const [meal, setMeal] = useState('');
  const [foodItems, setFoodItems] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fats, setFats] = useState('');
  const [exerciseType, setExerciseType] = useState('');
  const [duration, setDuration] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [photo, setPhoto] = useState(null);
  const [dietEntries, setDietEntries] = useState([]);
  const [exerciseEntries, setExerciseEntries] = useState([]);

  // Diet Form Submission Handler
  const handleDietSubmit = (e) => {
    e.preventDefault();
    const newDietEntry = { meal, foodItems, calories, protein, carbs, fats };
    setDietEntries([...dietEntries, newDietEntry]);
    setMeal(''); setFoodItems(''); setCalories(''); setProtein(''); setCarbs(''); setFats('');
    alert('Diet data saved!');
  };

  // Exercise Form Submission Handler
  const handleExerciseSubmit = (e) => {
    e.preventDefault();
    const newExerciseEntry = { exerciseType, duration, sets, reps, weight };
    setExerciseEntries([...exerciseEntries, newExerciseEntry]);
    setExerciseType(''); setDuration(''); setSets(''); setReps(''); setWeight('');
    alert('Exercise data saved!');
  };

  // Handle Progress Photo Upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));  // Display the uploaded photo
    }
  };

  // Function to export data as Excel sheet
  const exportToExcel = () => {
    const data = [
      ["Meal", "Food Items", "Calories", "Protein (g)", "Carbs (g)", "Fats (g)", "Exercise Type", "Duration (mins)", "Sets", "Reps", "Weight (kg)"]
    ];
    
    dietEntries.forEach(entry => {
      data.push([entry.meal, entry.foodItems, entry.calories, entry.protein, entry.carbs, entry.fats, '', '', '', '', '']);
    });
    
    exerciseEntries.forEach(entry => {
      data.push(['', '', '', '', '', '', entry.exerciseType, entry.duration, entry.sets, entry.reps, entry.weight]);
    });
    
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Tracking Data");

    // Create Excel file and trigger download
    XLSX.writeFile(wb, "Health_Fitness_Tracking.xlsx");
  };

  // Random Motivational Quote
  const quotes = [
    "Believe in yourself and all that you are.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "The only bad workout is the one that didn’t happen.",
    "Push yourself because no one else is going to do it for you."
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="app-container">
      <h1 className="app-title">Health & Fitness Tracker</h1>

      {/* Diet Form Section */}
      <section>
        <h2>Track Your Diet</h2>
        <form onSubmit={handleDietSubmit} className="form-container">
          <div>
            <label>Meal</label>
            <input type="text" value={meal} onChange={(e) => setMeal(e.target.value)} required />
          </div>
          <div>
            <label>Food Items</label>
            <input type="text" value={foodItems} onChange={(e) => setFoodItems(e.target.value)} required />
          </div>
          <div>
            <label>Calories</label>
            <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} required />
          </div>
          <div>
            <label>Protein (g)</label>
            <input type="number" value={protein} onChange={(e) => setProtein(e.target.value)} required />
          </div>
          <div>
            <label>Carbs (g)</label>
            <input type="number" value={carbs} onChange={(e) => setCarbs(e.target.value)} required />
          </div>
          <div>
            <label>Fats (g)</label>
            <input type="number" value={fats} onChange={(e) => setFats(e.target.value)} required />
          </div>
          <button type="submit" className="submit-btn">Save Diet</button>
        </form>
        <ul>
          {dietEntries.map((entry, index) => (
            <li key={index}>{entry.meal} - {entry.foodItems} | Calories: {entry.calories}</li>
          ))}
        </ul>
      </section>

      {/* Exercise Form Section */}
      <section>
        <h2>Track Your Exercises</h2>
        <form onSubmit={handleExerciseSubmit} className="form-container">
          <div>
            <label>Exercise Type</label>
            <input type="text" value={exerciseType} onChange={(e) => setExerciseType(e.target.value)} required />
          </div>
          <div>
            <label>Duration (mins)</label>
            <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />
          </div>
          <div>
            <label>Sets</label>
            <input type="number" value={sets} onChange={(e) => setSets(e.target.value)} required />
          </div>
          <div>
            <label>Reps</label>
            <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} required />
          </div>
          <div>
            <label>Weight (kg)</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
          </div>
          <button type="submit" className="submit-btn">Save Exercise</button>
        </form>
        <ul>
          {exerciseEntries.map((entry, index) => (
            <li key={index}>{entry.exerciseType} - {entry.duration} mins | Sets: {entry.sets}, Reps: {entry.reps}</li>
          ))}
        </ul>
      </section>

      {/* Progress Photos Section */}
      <section>
        <h2>Progress Photos</h2>
        <div className="photo-upload-container">
          <input type="file" accept="image/*" onChange={handlePhotoUpload} className="file-input" />
          {photo && <img src={photo} alt="Progress" className="progress-photo" />}
        </div>
      </section>

      {/* Motivation Section */}
      <section>
        <h2>Motivation</h2>
        <div className="motivation-container">
          <p className="quote-text">"{randomQuote}"</p>
        </div>
      </section>

      {/* Button to Download Data as Excel Sheet */}
      <button onClick={exportToExcel} className="export-btn">
        Download Data as Excel
      </button>
    </div>
  );
}

export default Tracking;
