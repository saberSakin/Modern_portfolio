import React from "react";
import AnimatedNumbers from "react-animated-numbers";
import "./AchievementsSection.scss";


const achievementsList = [
  {
    metric: "Projects",
    value: "30",
    postfix: "+",
  },
  {
    metric: "Research",
    value: "6",
    postfix: "+",
  },
  {
    metric: "Publications",
    value: "4",
  },
  {
    metric: "Years of Experience",
    value: "2",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="achievements-section">
      <div className="achievements-container">
        {achievementsList.map((achievement, index) => (
          <div key={index} className="achievement-item">
            <h2 className="achievement-value">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value, 10)}
                locale="en-US"
                className="animated-number"
                configs={(_, index) => ({
                  mass: 1,
                  friction: 100,
                  tension: 140 * (index + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="achievement-metric">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;

