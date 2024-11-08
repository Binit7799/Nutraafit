import React from 'react';
import './exercises.css';

const About_Exercise = () => {
  return (
    <div className="exercise-container">
      <h1>Exercise</h1>

      {/* Upper Body Workouts */}
      <section>
        <h2>Upper Body Workouts</h2>
        
        <h3>1. Push-ups</h3>
        <div className="exercise-row">
          <img
            src="https://th.bing.com/th/id/OIP.-izra7THJfnqVtkCV3p8QgHaE8?rs=1&pid=ImgDetMain"
            alt="Push-up"
            className="exercise-image"
          />
          <p>Push-ups are a fundamental bodyweight exercise for strengthening your chest, shoulders, triceps, and core.</p>
        </div>
        
        <h3>2. Pull-ups</h3>
        <div className="exercise-row">
          <img
            src="https://th.bing.com/th/id/OIP.Z4F9N6Z5Y402MT9Cv7ETywHaEK?rs=1&pid=ImgDetMain"
            alt="Pull-up"
            className="exercise-image"
          />
          <p>Pull-ups target the back muscles, particularly the lats, as well as biceps and shoulders. A great compound exercise.</p>
        </div>
      </section>

      {/* Lower Body Workouts */}
      <section>
        <h2>Lower Body Workouts</h2>

        <h3>1. Squats</h3>
        <div className="exercise-row">
          <img
            src="https://th.bing.com/th/id/OIP.tvQNpAnMi4WeJqljeQQKEgHaE7?rs=1&pid=ImgDetMain"
            alt="Squats"
            className="exercise-image"
          />
          <p>Squats are a must for building strength in your legs, glutes, and core. They also help improve overall balance and stability.</p>
        </div>

        <h3>2. Lunges</h3>
        <div className="exercise-row">
          <img
            src="https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/media/walking-lunge-square.jpg"
            alt="Lunges"
            className="exercise-image"
          />
          <p>Lunges are great for targeting quads, hamstrings, and glutes while improving balance and coordination.</p>
        </div>
      </section>

      {/* Core Workouts */}
      <section>
        <h2>Core Workouts</h2>

        <h3>1. Planks</h3>
        <div className="exercise-row">
          <img
            src="https://th.bing.com/th/id/OIP.GfBBWd9NusKuPzKL0I2NfAHaEK?rs=1&pid=ImgDetMain"
            alt="Plank"
            className="exercise-image"
          />
          <p>Planks are excellent for strengthening your core, back, and shoulders while enhancing endurance and posture.</p>
        </div>

        <h3>2. Crunches</h3>
        <div className="exercise-row">
          <img
            src="https://www.shutterstock.com/image-vector/man-doing-crunches-abdominals-exercise-600w-1842272014.jpg"
            alt="Crunches"
            className="exercise-image"
          />
          <p>Crunches are one of the most popular ab exercises, helping to tone and strengthen your abdominal muscles.</p>
        </div>
      </section>

      {/* Full Body Workouts */}
      <section>
        <h2>Full Body Workouts</h2>

        <h3>1. Burpees</h3>
        <div className="exercise-row">
          <img
            src="https://entrainement-sportif.fr/burpee-pompe.gif"
            alt="Burpees"
            className="exercise-image"
          />
          <p>Burpees are a full-body exercise that works on strength, endurance, and cardiovascular fitness in one move.</p>
        </div>

        <h3>2. Mountain Climbers</h3>
        <div className="exercise-row">
          <img
            src="https://th.bing.com/th/id/OIP.d1LZlH20l5T5MKzGL-OhNQAAAA?rs=1&pid=ImgDetMain"
            alt="Mountain Climbers"
            className="exercise-image"
          />
          <p>Mountain Climbers are a great cardio move that also engages your entire body, especially the core and shoulders.</p>
        </div>
      </section>

      {/* Exercise Articles Section */}
      <section>
        <h2>Articles on Exercise and Fitness</h2>
        
        <article className="article">
          <h3>The Importance of Exercise for Overall Health</h3>
          <p>
            Exercise is one of the most important things you can do to keep your body healthy. Regular physical activity can help improve your heart health, boost energy, promote better sleep, and reduce the risk of chronic diseases.
            <a href="https://www.scientificworldinfo.com/2019/12/importance-of-good-health-in-our-life.html" target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </p>
        </article>

        <article className="article">
          <h3>How to Create a Balanced Workout Routine</h3>
          <p>
            A balanced workout routine includes both strength training and cardiovascular exercises. It helps in improving overall muscle strength, endurance, flexibility, and cardiovascular health.
            <a href="https://barbend.com/build-workout-program/" target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </p>
        </article>

        <article className="article">
          <h3>Benefits of Strength Training</h3>
          <p>
            Strength training is an essential part of fitness that helps build muscle, improve bone density, and increase metabolic rate. It can also prevent injuries and enhance overall physical performance.
            <a href="https://www.healthline.com/health/fitness/benefits-of-strength-training" target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </p>
        </article>
      </section>
    </div>
  );
};

export default About_Exercise;
