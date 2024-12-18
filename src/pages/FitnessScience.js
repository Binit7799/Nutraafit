import React from 'react';
import styled from 'styled-components';
import { FaDumbbell, FaHeartbeat, FaRunning } from 'react-icons/fa';
import './fitnessscience.css';

const PageWrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 900px;
  line-height: 1.6;
  background-color: #f9f9f9;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #4caf50; /* Green Color */
  margin-bottom: 20px;
  font-weight: bold;
`;

const SubHeading = styled.h2`
  font-size: 1.75rem;
  color: #ff9800; /* Orange Color */
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 20px;
  padding-left: 10px;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #f44336; /* Red Color */
`;

const BulletPoint = styled.li`
  font-size: 1.1rem;
  margin-bottom: 10px;
  list-style: none;
  display: flex;
  align-items: center;
  
  &::before {
    content: '•';
    color: #2196f3;
    font-weight: bold;
    display: inline-block; 
    width: 1em;
  }
`;

const IconWrapper = styled.span`
  font-size: 2rem;
  margin-right: 10px;
  color: #3f51b5; /* Blue Color */
`;

const GraphicWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const FitnessGraphic = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const ScienceOfFitness = () => {
  return (
    <PageWrapper>
      <Heading>Science of Fitness</Heading>

      <SubHeading><IconWrapper><FaDumbbell /></IconWrapper>Physical Fitness</SubHeading>
      <Paragraph>
        <Highlight>Physical fitness</Highlight> is more than just looking fit or being able to run a mile. It refers to the body’s ability to efficiently and effectively function in work and leisure activities, resist disease, and cope with emergency situations. Scientifically, fitness is categorized into five main components:
      </Paragraph>
      <ul>
        <BulletPoint>Cardiovascular Endurance</BulletPoint>
        <BulletPoint>Muscle Strength</BulletPoint>
        <BulletPoint>Muscular Endurance</BulletPoint>
        <BulletPoint>Flexibility</BulletPoint>
        <BulletPoint>Body Composition</BulletPoint>
      </ul>

      <Paragraph>
        <Highlight>Cardiovascular Endurance</Highlight> The body’s ability to sustain prolonged exercise using large muscle groups, primarily by delivering oxygen through the cardiovascular and respiratory systems. Activities like running, swimming, and cycling improve cardiovascular endurance. Science suggests that regular cardiovascular exercise can improve heart health, lower blood pressure, and reduce the risk of chronic diseases like diabetes and heart disease.
      </Paragraph>

      <Paragraph>
        <Highlight>Muscle Strength</Highlight>The body’s ability to sustain prolonged exercise using large muscle groups, primarily by delivering oxygen through the cardiovascular and respiratory systems. Activities like running, swimming, and cycling improve cardiovascular endurance. Science suggests that regular cardiovascular exercise can improve heart health, lower blood pressure, and reduce the risk of chronic diseases like diabetes and heart disease.
      </Paragraph>

      <Paragraph>
        <Highlight>Muscular Endurance </Highlight> The ability of a muscle or muscle group to perform repeated actions without fatigue. For example, exercises like push-ups, squats, or sit-ups focus on muscular endurance. Research shows that enhancing muscular endurance supports daily physical activities and decreases the risk of injury.
      </Paragraph>

      <Paragraph>
        <Highlight>Flexibility</Highlight> Flexibility refers to the range of motion available in joints. Stretching exercises like yoga or Pilates can increase flexibility. Scientific studies suggest that maintaining good flexibility can help improve posture, reduce the risk of injury, and alleviate muscle tension.
      </Paragraph>

      <Paragraph>
        <Highlight>Body Composition</Highlight> The ratio of fat to lean mass (muscles, bones, organs, and fluids) in your body. Healthy body composition is associated with reduced risk of metabolic diseases, while excess body fat can lead to health issues like obesity, heart disease, and diabetes. Balanced diets, along with regular exercise, help maintain a healthy body composition.
      </Paragraph>

      <SubHeading><IconWrapper><FaHeartbeat /></IconWrapper>Fitness Backed by Science</SubHeading>
      <Paragraph>
        Scientific studies have proven the effectiveness of several practices for enhancing health and fitness:
      </Paragraph>



      <SubHeading><IconWrapper><FaRunning /></IconWrapper>Strength Training</SubHeading>
      <Paragraph>
        <div>
        <Highlight>Strength training </Highlight> improves muscle mass and strength, and increases metabolism. 
        </div>
        <div>
        <Highlight>Scientific evidence</Highlight> shows it also improves bone density and prevents age-related muscle loss.
        </div>
        <div>
        Strength training, also known as resistance training, involves exercises that cause your muscles to work against an external resistance. This could include weights, resistance bands, or even body weight. Studies show that strength training provides numerous benefits, such as:
        </div>
        <div>
        <Highlight>Improved Muscle Mass and Strength</Highlight> According to the American College of Sports Medicine (ACSM), muscle mass naturally decreases with age. However, regular strength training can reverse this loss, enhancing muscle strength and endurance.
        </div>
        <div>
     <Highlight>Bone Density Improvement</Highlight>  Research indicates that weight-bearing exercises can improve bone density and reduce the risk of osteoporosis, especially in older adults.
     </div>
     <div>    
     <Highlight> Metabolic Boost</Highlight> Strength training increases muscle mass, which in turn boosts the resting metabolic rate. This means your body burns more calories, even when at rest.
     </div>
      </Paragraph>

      
       <SubHeading> High-Intensity Interval Training (HIIT)</SubHeading>
      <Paragraph>
       HIIT has gained widespread popularity due to its efficiency in burning fat and improving cardiovascular health in a shorter time frame. HIIT involves alternating between short bursts of intense activity and periods of low-intensity recovery or rest. This workout method challenges both aerobic and anaerobic systems, enhancing overall fitness.
      </Paragraph>

      <Paragraph>
      <div>
      <div>
      <Highlight>Fat Burning Efficiency:</Highlight> HIIT has been shown to increase fat oxidation and boost metabolic rate for hours after the workout, leading to more effective fat loss.
      </div>
      <div>
      <Highlight>Improved Aerobic Capacity:</Highlight> Research indicates that as little as two weeks of HIIT can significantly improve aerobic capacity (the body’s ability to use oxygen). This improvement enhances cardiovascular endurance, leading to better performance in activities like running or cycling.
      </div>
      <Highlight>Time-Saving:</Highlight> HIIT workouts typically last between 15 to 30 minutes, making it a great option for those with limited time. Despite the shorter duration, it can provide results comparable to longer sessions of steady-state cardio.
      <div>
      <Highlight>Health Benefits:</Highlight> Studies show that HIIT can improve insulin sensitivity, lower blood pressure, and reduce the risk of cardiovascular diseases.
      </div>
      </div>
      <div>
      <Highlight>Example of HIIT Workouts:</Highlight>

      30 seconds of sprinting followed by 1 minute of walking, repeated for 20 minutes.
      Jumping jacks, squats, or burpees for 20 seconds, followed by 40 seconds of rest, repeated in cycles.
      </div>

</Paragraph>

      <SubHeading>Aerobic Exercise (Cardio)</SubHeading>
      <Paragraph>
        Cardio activities, such as running and swimming, improve heart health and boost mood by releasing endorphins. <Highlight>150 minutes of cardio</Highlight> weekly is associated with reduced risk of chronic diseases.
      </Paragraph>

      <SubHeading>Flexibility and Mobility Training</SubHeading>
      <Paragraph>
        Flexibility training helps prevent injuries and improves posture. Research indicates that increased flexibility improves joint health and prevents muscle imbalances.
      </Paragraph>

      <SubHeading>Core Strengthening</SubHeading>
      <Paragraph>
        Core exercises are essential for balance and stability. A <Highlight>strong core</Highlight> prevents back pain and improves athletic performance.
      </Paragraph>

      <SubHeading>Mind-Body Connection: Yoga and Meditation</SubHeading>
      <Paragraph>
        Yoga and meditation are scientifically proven to reduce stress, lower cortisol levels, and manage chronic conditions such as hypertension and arthritis.
      </Paragraph>

<div>
      <SubHeading>Anatomy & Muscles Introduction</SubHeading>
      <Paragraph>
      Understanding human anatomy and muscle structure is essential for performing exercises correctly and preventing injuries. It also helps in targeting the right muscle groups for strength training, flexibility, and overall fitness improvement.
      </Paragraph>
      <div>
      <h5>Human Anatomy Overview</h5>
      </div>
      <Paragraph>The human body is composed of several systems working in harmony to support movement, strength, and coordination. Key systems that play a role in exercise and fitness include:</Paragraph>
      <div>
      <Highlight>Skeletal System: </Highlight>The bones of the skeleton provide the framework for the body, supporting tissues, protecting organs, and acting as levers for muscles to create movement.
      </div>
      <div>
      <Highlight>Muscular System:</Highlight> Muscles are responsible for generating movement by contracting and relaxing. There are over 600 muscles in the human body, divided into three types:</div><div>
       <div><span style={{ fontWeight: 'bold', color: 'blue' }}>Skeletal Muscles</span>: Voluntary muscles attached to bones that move the body.</div>
       <div><span style={{ fontWeight: 'bold', color: 'blue' }}>Smooth Muscles</span>: Found in organs, like the stomach and intestines, and work involuntarily.</div>
       <div><span style={{ fontWeight: 'bold', color: 'blue' }}>Cardiac Muscles</span>: The muscle of the heart, working constantly and involuntarily to pump blood throughout the body.</div>
       </div>
      <div>
      <Highlight>Nervous System: </Highlight> The brain, spinal cord, and nerves coordinate movement and respond to internal and external stimuli, sending signals that tell the muscles to contract.
      </div>
      <div>
      <Highlight>Circulatory System:</Highlight> The heart and blood vessels deliver oxygen and nutrients to the muscles during exercise, which is critical for maintaining energy and endurance.</div>
      </div>
      <SubHeading>Major Muscle Groups</SubHeading>
      <div>
      When training or working out, it's important to understand the major muscle groups of the body to effectively target them:
      </div>
      <h5>
      Upper Body Muscles:
      </h5>
      <div>
      <span style={{ fontWeight: 'bold', color: 'blue' }}>Chest (Pectorals):</span> Includes the pectoralis major and minor, crucial for pushing movements.</div>
      <div><span style={{ fontWeight: 'bold', color: 'blue' }}>Back (Latissimus Dorsi, Trapezius, Rhomboids):</span> Helps with pulling movements and posture.</div>
      <div> <span style={{ fontWeight: 'bold', color: 'blue' }}>Shoulders (Deltoids):</span> Provides range of motion for the arms.</div>
      <div><span style={{ fontWeight: 'bold', color: 'blue' }}>Arms (Biceps, Triceps, Forearms)</span>Essential for pushing, pulling, and lifting.</div>
      <h5>Core Mucles</h5>

      <div>Abdominals: Includes the rectus abdominis (six-pack muscles), obliques, and transverse abdominis, which stabilize the torso and support posture.</div>
      <div><span style={{ fontWeight: 'bold', color: 'blue' }}>Lower Back (Erector Spinae):</span> Supports the spine and allows for bending and lifting.</div>
      
      <h5>Lower Body Muscles:</h5>
      <div><span style={{ fontWeight: 'bold', color: 'blue' }}>Quadriceps:</span> Located on the front of the thigh, essential for running, jumping, and squatting.</div>
      <div><span style={{ fontWeight: 'bold', color: 'blue' }}>Hamstrings:</span> Located on the back of the thigh, responsible for leg flexion and stability.</div>
      <div><span style={{ fontWeight: 'bold', color: 'blue' }}>Glutes (Gluteus Maximus, Medius, Minimus):</span> The largest muscles in the body, responsible for hip movement and stabilization.</div>
      <div><span style={{ fontWeight: 'bold', color: 'blue' }}>Calves (Gastrocnemius, Soleus):</span> Important for ankle movement and supporting weight while standing and walking.</div>
      
      <SubHeading>Conclusion</SubHeading>
      <Paragraph>
        Fitness science helps us understand the relationship between physical activity, nutrition, and overall health. By incorporating <Highlight>science-backed fitness practices</Highlight> into daily life, we can improve strength, endurance, and longevity while reducing the risk of chronic disease.
      </Paragraph>
    </PageWrapper>
  );
};

export default ScienceOfFitness;
