import { useState } from "react";
import { Link } from "react-router-dom";

import ImgNoSound from "../assets/images/sound.jpg";

function TechSupport() {
  const [activeView, setActiveView] = useState();

  return (
    <>
      <button
        className="tech-accordion fs-4"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#tech"
        aria-expanded="false"
        aria-controls="tech"
      >
        Tech Support
      </button>

      <div id="tech" className="collapse">
        <div className="menu">
          <button className="tech-btns" onClick={() => setActiveView()}>
            <h3 className="fs-5 p-0 m-0">Show All</h3>
          </button>
          <button className="Single tech-btns" onClick={() => setActiveView(1)}>
            <h3 className="fs-5 p-0 m-0">General Info</h3>
          </button>
          <button className="Single tech-btns" onClick={() => setActiveView(2)}>
            <h3 className="fs-5 p-0 m-0">Live Streams</h3>
          </button>
          <button className="Single tech-btns" onClick={() => setActiveView(4)}>
            <h3 className="fs-5 p-0 m-0">The Break Room</h3>
          </button>
          <button className="Single tech-btns" onClick={() => setActiveView(3)}>
            <h3 className="fs-5 p-0 m-0">Tech Support Email</h3>
          </button>
        </div>

        <h1 className="text-center fs-3 fw-bold secondary-color mt-5">
          HAVING TECHNICAL DIFFICULTIES?
        </h1>

        <section className="target_box">
          {(!activeView || activeView === 1) && (
            <div id="div1" className="target">
              <h2 className="fs-3 mt-4">General Info</h2>
              <div className="tech-section-indent">
                <h4 className="fs-4 my-3">Browsers</h4>
                <p>
                  Please use the latest versions of{" "}
                  <a
                    className="tech-link"
                    href="https://www.google.com/chrome/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chrome
                  </a>
                  ,{" "}
                  <a
                    className="tech-link"
                    href="https://www.mozilla.org/en-US/firefox/new/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Firefox
                  </a>
                  ,{" "}
                  <a
                    className="tech-link"
                    href="https://www.opera.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Opera
                  </a>
                  , or{" "}
                  <a
                    className="tech-link"
                    href="https://www.microsoft.com/en-us/edge"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Edge
                  </a>
                  .
                </p>
                <p>
                  <span className="text-primary">Helpful tip!</span> Always try
                  a 2nd browser as a test. This can immediately determine if
                  your issue is browser related.
                </p>
                <p>
                  <span className="text-danger">
                    Please do <strong>NOT</strong> use Internet Explorer.
                  </span>{" "}
                  The browser is no longer supported.
                </p>
                <p>
                  We recommend using the most recent browser version. However,
                  we remain compatible with the older ones, excluding Internet
                  Explorer 8 and below. Important note for Windows 7 users
                  Internet Explorer (IE11 v11.0.9600.xxxxxx) has changed its way
                  of working with Windows 7. Therefore, this shift led to the
                  need to install the flash plugin and enable it to play videos.
                  Does the broadcast require native html5 playback? Or, are you
                  unable to install or enable the flash plugin? In both cases,
                  we recommend that viewers who still use Windows 7 to choose a
                  different browser, such as Chrome or Firefox.
                </p>
                <h4 className="fs-4 my-3">Mobile?</h4>
                <p>
                  While many device types are compatible with this event
                  platform, some aspects of the event may not be. Your best
                  viewing experience will be with a desktop or laptop running
                  the latest version of Chrome.
                </p>
                <h4 className="fs-4 my-3">RUN THE GOOGLE TEST</h4>
                <p>
                  It's useful to try Google's browser test. It detects browser
                  issues that may affect your performance and/or ability to
                  interact with the event tool sets. This test is for your
                  browser in general (not specific to video calls only), so it
                  can be used for other browser-related tasks.
                </p>
                <p>To perform the test:</p>
                <ul>
                  <li>
                    Open the test page{" "}
                    <a
                      className="tech-link"
                      href="https://test.webrtc.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      here
                    </a>
                    .
                  </li>
                  <li>Click Start</li>
                  <li>
                    Check if there are any problems, and resolve accordingly.
                  </li>
                </ul>
              </div>
            </div>
          )}
          {(!activeView || activeView === 2) && (
            <div id="div2" className="target">
              <h2 className="fs-3 mt-3">Live Streams</h2>
              <div className="tech-section-indent">
                <h4 className="fs-4 my-3">No Sound?</h4>
                <p>
                  Please check the player audio controls. It could be on mute.
                </p>
                <div className="image">
                  <img className="img-fluid" src={ImgNoSound} alt="No Sound" />
                </div>
                <h4 className="fs-4 my-3">Network Issues?</h4>
                <p>
                  <strong>
                    Choppy video? No video and sound OR a frozen image?
                  </strong>
                </p>
                <p>
                  Have you tested your connection speed? We recommend at least a
                  solid 10 Mbps DOWN connection. If you are on a shared network
                  or running multiple programs in the background, your speeds
                  could fluctuate considerably during broadcast. Please use the
                  speed test provided below to double check your connection.
                </p>
                {/* <!--OST Widget code start--> */}
                <div className="image text-right">
                  <div style={{ minHeight: 360 }}>
                    <div
                      style={{
                        width: "100%",
                        height: 0,
                        paddingBottom: "50%",
                        position: "relative",
                      }}
                    >
                      <iframe
                        style={{
                          border: "none",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          minHeight: 360,
                          overflow: "hidden !important",
                        }}
                        title="openspeedtest"
                        src="https://openspeedtest.com/Get-widget.php"
                      />
                    </div>
                  </div>
                  Provided by{" "}
                  <a href="https://openspeedtest.com">OpenSpeedtest.com</a>
                </div>
                {/* <!-- OST Widget code end --> */}
                <p>
                  <span className="text-primary">Helpful tip!</span> Always try
                  a 2nd browser as a test. This can immediately determine if
                  your issue is browser related.
                </p>
                <p>
                  Please make sure you have turned off (or logged off) your
                  company VPN.
                </p>
                <p>
                  <strong>You may have momentarily lost connection.</strong>{" "}
                  Refresh the page or close the application and open it again.
                  No sound? The live stream player also has a volume control.
                  Most of the time, the player will load on MUTE as default.
                  Please check there first, then your device settings.
                </p>

                <h4 className="fs-4 my-3">Backup Live Stream</h4>
                <p>
                  If you are experiencing techincal difficulties with the
                  General Session live stream you can view the backup live
                  stream page by clicking <Link to="/home-backup">here</Link>.
                </p>
              </div>
            </div>
          )}

          {(!activeView || activeView === 4) && (
            <div id="div4" className="target">
              {/* <h2 className="fs-3 mt-3">Wonder Support</h2>
              <div className="tech-section-indent">
                <h4 className="fs-4 my-3">Please go here if you have any issues with Wonder:</h4>
                <p>
                  <a target="_blank" href="https://help.wonder.me/en/articles/4947040-troubleshooting-guide">Wonder Support Page</a>
                </p>
                <div><br /> */}
                <div>
                  <h2 className="target">The Break Room:</h2>
                    <p className="tech-section-indent">Is designed for use on desktop and laptop computers only.<br />
                    Must be used on Google Chrome, Firefox, or Microsoft Edge.<br />
                    Is not currently supported on tablets including ipads.<br />
                    Does not currently support mobile access.</p>
                </div>
                <div>
                  <h3 className="target">The most common issues:</h3>
                  <p className="tech-section-indent">
                    Network Administrators, Firewalls, and Corporate Networks often block video/audio transmission.<br />
                    Your browser must have the appropriate permissions including <a target="_blank" href="https://help.wonder.me/en/articles/4947053-browser-permissions-mic-camera-and-screen-sharing-access">access to the camera and mic.</a><br />
                    The Break Room is only accessible via a laptop/desktop computer from Chrome, Firefox, or Edge.</p>
              </div>
              <div>
                  <h3 className="target">Other things to consider:</h3>
                    <p className="tech-section-indent">Make sure the Break Room is the only conference/communication tool you have open (Zoom, Microsoft teams, Google Hangout, etc).<br />
                    Make sure your camera or microphone isn’t in use by another application or website.<br />
                    Ensure you have a stable internet connection (we generally suggest no less than 15mbps).  <a target="_blank" href="https://www.speedtest.net/">Test your speed.</a>*<br />
                    Sometimes a simple refresh works wonders.</p>
                </div>
            </div>
          )}

          {(!activeView || activeView === 3) && (
            <div id="div4" className="target">
              <h2 className="fs-3 mt-3">Tech Support Email</h2>
              <div className="tech-section-indent">
                <h4 className="fs-4 my-3">Maybe we can help.</h4>
                <p>
                  Send an email{" "}
                  <strong>
                    <a
                      className="tech-link"
                      target="_blank"
                      href="mailto:support@atlantamediaservices.com?subject=HMC All Hands Technical Support"
                      rel="noreferrer"
                    >
                      HERE
                    </a>
                  </strong>{" "}
                  and give a brief description of your situation
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default TechSupport;
