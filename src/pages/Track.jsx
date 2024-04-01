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
              <img src={trackImg.img} style={imgSize} />
            </div>
          ))}
        </div>
        <h2 className="quintessential track">Track</h2>
        <div className="trackInfo-container">
          <h3 className="heading">Intro:</h3>
          <div className="trackInfoI">
            <p>{infoData.trackIntro}</p>
            <div className="img-container">
              <img src="/assets/images/track/track1.jpg" />
            </div>
          </div>
          <h3 className="heading right">Accomplishments:</h3>
          <div className="trackInfoII">
            <div className="img-container">
              <img src="/assets/images/track/track2.jpg" />
            </div>
            <p>{infoData.trackIntro}</p>
          </div>
          <h3 className="heading">Summary:</h3>
          <div className="trackInfoIII">
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
