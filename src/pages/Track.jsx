import trackImgs from "../jsonData/trackImgData.json";
import infoData from "../jsonData/infoData.json";

const Track = () => {

  return (
    <section>
      <div id="track-container">
        {/* hero */}
        <div className="trackImgMotion-container">
          {trackImgs.map((trackImg, index) => (
            <div key={index} className="trackImg">
              <img src={trackImg.img} />
            </div>
          ))}
        </div>
        <h2 className="quintessential track">Track</h2>
        <div className="trackInfo-container">
          <div className="trackInfoI">
          <h3 className="heading">Intro:</h3>
            <div className="img-container">
              <img src="/assets/images/track/track1.jpg" />
            </div>
            <p>{infoData.trackIntro}</p>
          </div>
          <div className="trackInfoII">
          <h3 className="heading">Accomplishments:</h3>
            <div className="img-container">
              <img src="/assets/images/track/track2.jpg" />
            </div>
            <p>{infoData.trackIntro}</p>
          </div>
          <div className="trackInfoIII">
          <h3 className="heading">Summary:</h3>
            <p>{infoData.trackIntro}</p>
          </div>
            <div className="summaryImg-container">
              <img src="/assets/images/track/track6.jpg" alt="" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Track;
