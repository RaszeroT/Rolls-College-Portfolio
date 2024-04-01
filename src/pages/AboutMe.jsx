import { useState } from "react";
import infoData from "../jsonData/infoData";

const AboutMe = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section>
      <div id="aboutMe-page">
        <aside className="rightImg">
          <img src="/assets/images/football/football6.jpg" />
        </aside>
        <div className="professionalSummary-container">
          <h3 className="heading">Professional Summary</h3>
          <p>{infoData.professionalSummary}</p>
        </div>

        <div className="aboutMe-container">
          <h3 className="heading">About Me</h3>
          <div className="img-container-left">
            <img src="/assets/images/personal/personal2.jpg" />
          </div>
          <p>
            {isExpanded
              ? infoData.aboutMe
              : `${infoData.aboutMe.slice(0, 1000)}...`}
          </p>
          <button
            id="seeMoreLessButton"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
