import infoData from "../jsonData/infoData";

const AboutMe = () => {
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
          <p>{infoData.aboutMe}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
