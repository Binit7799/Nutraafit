import React from "react";
import './nutrition.css';


const Nutrition = () => {
  return (
    <div className="nutrition-container">
      <h1>Nutrition for Your Fitness Journey</h1>

      {/* Introduction Section */}
      <section>
        <h2>Why Nutrition is Important</h2>
        <p>
          Nutrition plays a critical role in your overall health and fitness journey. It supports physical activity, helps in weight management, prevents chronic diseases, and boosts the immune system. A well-balanced diet fuels your body for optimal performance and overall well-being.
        </p>
      </section>

      {/* Key Nutrients Section */}
      <section>
        <h2>Key Nutrients and Their Roles</h2>
        <h3>Macronutrients</h3>
        <ul>
          <li><strong>Carbohydrates:</strong> Provide energy for the body. Found in fruits, vegetables, grains, and legumes.</li>
          <li><strong>Proteins:</strong> Essential for muscle repair and growth. Sources include meat, fish, dairy, beans, and nuts.</li>
          <li><strong>Fats:</strong> Needed for brain health, energy storage, and hormone production. Healthy fats come from oils, avocados, nuts, and seeds.</li>
        </ul>
        <h3>Micronutrients</h3>
        <ul>
          <li><strong>Vitamins:</strong> Important for various bodily functions. Examples include Vitamin A (eye health), Vitamin D (bone health), and Vitamin C (immune support).</li>
          <li><strong>Minerals:</strong> Include calcium (bone health), iron (oxygen transport), and potassium (fluid balance).</li>
        </ul>
        <h3>Water</h3>
        <p>Hydration is critical for digestion, temperature regulation, and overall body function.</p>
      </section>

      {/* Nutrition and Fitness Section */}
      <section>
        <h2>Nutrition and Fitness</h2>
        <p>
          Nutrition plays a key role in fitness. Proper pre-workout meals (like complex carbs and proteins) provide sustained energy, while post-workout meals (rich in proteins) help in muscle recovery.
        </p>
      </section>

      {/* Balanced Diet Section */}
      <section>
        <h2>Creating a Balanced Diet</h2>
        <p>A balanced diet typically includes:</p>
        <ul>
          <li>50% vegetables and fruits</li>
          <li>25% lean proteins</li>
          <li>25% whole grains</li>
          <li>Healthy fats in moderation</li>
        </ul>
        <p>Portion control is essential for maintaining a healthy weight and avoiding overeating.</p>
      </section>

      {/* Personalized Nutrition Plans */}
      <section>
        <h2>Personalized Nutrition Plans</h2>
        <p>
          Our app creates personalized nutrition plans based on your body measurements, activity levels, and fitness goals. The plans include calorie calculation, macronutrient distribution, and meal suggestions tailored to your needs.
        </p>
      </section>

      {/* Common Diets Section */}
      <section>
        <h2>Common Diets and Their Benefits</h2>
        <ul>
          <li><strong>Ketogenic Diet:</strong> High in fats, low in carbs, helps in fat loss.</li>
          <li><strong>Mediterranean Diet:</strong> Rich in fruits, vegetables, and healthy fats, supports heart health.</li>
          <li><strong>Paleo Diet:</strong> Focuses on whole foods like lean meats, fish, and vegetables.</li>
          <li><strong>Plant-Based Diet:</strong> Emphasizes whole, plant-based foods.</li>
          <li><strong>Intermittent Fasting:</strong> Restricts eating windows, aids in fat loss and insulin sensitivity.</li>
        </ul>
      </section>

      {/* Special Diets Section */}
      <section>
        <h2>Special Diets for Health Conditions</h2>
        <p>Diet plans can also be tailored for specific health conditions such as:</p>
        <ul>
          <li><strong>Heart-Healthy Diet:</strong> Low in sodium and unhealthy fats, promotes heart health.</li>
          <li><strong>Diabetes-Friendly Diet:</strong> Focuses on low glycemic index foods and balanced carbohydrates.</li>
          <li><strong>Gluten-Free Diet:</strong> Suitable for those with celiac disease or gluten intolerance.</li>
        </ul>
      </section>

      {/* Healthy Eating Tips Section */}
      <section>
        <h2>Healthy Eating Tips</h2>
        <ul>
          <li><strong>Meal Prepping:</strong> Prepare meals in advance to save time and stay on track with your diet.</li>
          <li><strong>Mindful Eating:</strong> Pay attention to hunger cues and eat slowly to avoid overeating.</li>
          <li><strong>Avoid Processed Foods:</strong> Limit consumption of processed foods high in sugar, salt, and unhealthy fats.</li>
        </ul>
      </section>

      {/* Recipes Section */}
      <section>
        <h2>Healthy Recipes and Meal Ideas</h2>
        <p>Here are some easy-to-make, nutritious meals:</p>
        <ul>
          <li><strong>Breakfast:</strong> Oatmeal with fresh berries or avocado toast.</li>
          <li><strong>Lunch:</strong> Grilled chicken with quinoa and veggies.</li>
          <li><strong>Dinner:</strong> Baked salmon with sweet potatoes and steamed broccoli.</li>
          <li><strong>Snacks:</strong> Greek yogurt, mixed nuts, or fruit salad.</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2>User Testimonials</h2>
        <p>“The personalized nutrition plan helped me achieve my fitness goals in just 12 weeks! I feel stronger and healthier.” – John D.</p>
        <p>“I love the meal ideas and the balance of nutrition and exercise in this app.” – Sarah K.</p>
      </section>
    </div>
  );
};

export default Nutrition;
