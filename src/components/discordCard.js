import React, { useState, useEffect } from "react";
import "../css/discordCard.css";
const CoverPhoto =
  "https://firebasestorage.googleapis.com/v0/b/gagan1337-a73b1.appspot.com/o/portfolio_cover.gif?alt=media&token=347002b3-a801-440a-9fd9-1bbe7aa7889f";

function DiscordCard() {
  const [discordData, setDiscordData] = useState();

  const fetchProfileDataFromLanyardApi = async () => {
    await fetch(
      `https://api.lanyard.rest/v1/users/${process.env.REACT_APP_DISCORD_PROFILE_ID}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.success && setDiscordData(data.data);
      });
  };

  useEffect(() => {
    fetchProfileDataFromLanyardApi();
  }, []);

  return (
    <div className="discordCard">
      <img src={CoverPhoto} className="discordCardHeader"></img>
      <div className="contentArea">
        <div className="discordCardProfileArea">
          <div className="discordCardProfile">
            <div className="discordCardProfileImage">
              <img
                className="profileImage"
                src={`https://cdn.discordapp.com/avatars/459273435827273738/${discordData?.discord_user.avatar}`}
              />
            </div>
          </div>
          <section className="onlineStatus">
            {discordData?.discord_status === "online" ? (
              <span className="statusOnline">
                <div
                  style={{
                    height: 16,
                    width: 16,
                    backgroundColor: "#43b581",
                    borderRadius: 50,
                    marginTop: 5,
                    marginLeft: 5,
                  }}
                ></div>
              </span>
            ) : discordData?.discord_status === "idle" ? (
              <span className="statusIdle">
                <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      fill="#faa61a"
                      d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
                    />
                  </g>
                </svg>
              </span>
            ) : discordData?.discord_status === "dnd" ? (
              <span>
                <div
                  style={{
                    height: 16,
                    width: 16,
                    backgroundColor: "#f04747",
                    borderRadius: 50,
                    marginTop: 5,
                    marginLeft: 5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: "rgb(21, 35, 99)",
                    }}
                  ></div>
                </div>
              </span>
            ) : (
              <span>
                <div
                  style={{
                    height: 16,
                    width: 16,
                    backgroundColor: "#747f8d",
                    borderRadius: 50,
                    marginTop: 5,
                    marginLeft: 5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 50,
                      backgroundColor: "rgb(21, 35, 99)",
                    }}
                  ></div>
                </div>
              </span>
            )}
          </section>
        </div>
        <div className="discordCardDetailArea">
          <h1 className="displayName">Gagan</h1>
          <h1 className="bannerName">{discordData?.discord_user.username}</h1>
          <div className="bannerDivider"></div>
          <h5 className="bannerSectionTitle">About Me</h5>
          <p className="bannerAbout">Web Developer // React // Node</p>
          <h5 className="bannerSectionTitle">Member Since</h5>
          <div className="bannerHorizontalSection">
            <svg
              className="discordIcon"
              style={{ marginTop: "auto" }}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="rgb(166 ,172 ,179)"
                d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z"
              />
            </svg>
            <p className="bannerAbout" style={{ marginBottom: 0 }}>
              June 21, 2018
            </p>
          </div>
          {discordData?.listening_to_spotify && (
            <>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h5 className="bannerSectionTitle">Listening to spotify</h5>
                <div
                  style={{
                    height: 25,
                    width: 25,
                    marginTop: 20,
                    position: "absolute",
                    right: 15,
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <title>background</title>
                      <rect
                        fill="none"
                        id="canvas_background"
                        height="24"
                        width="24"
                        y="-1"
                        x="-1"
                      />
                    </g>
                    <g>
                      <title>Layer 1</title>
                      <rect
                        id="svg_1"
                        width="128"
                        height="128"
                        fill-rule="evenodd"
                        fill="none"
                        clip-rule="evenodd"
                      />
                      <path
                        stroke="null"
                        id="Spotify"
                        fill-rule="evenodd"
                        fill="#10BC4C"
                        d="m10.966428,0c-6.031536,0 -10.966429,4.934893 -10.966429,10.966429s4.934893,10.966429 10.966429,10.966429s10.966429,-4.934893 10.966429,-10.966429s-4.880061,-10.966429 -10.966429,-10.966429m5.044557,15.846489c-0.219329,0.328993 -0.603154,0.438657 -0.932146,0.219329c-2.577111,-1.590132 -5.812207,-1.919125 -9.650457,-1.041811c-0.383825,0.109664 -0.712818,-0.164496 -0.822482,-0.493489c-0.109664,-0.383825 0.164496,-0.712818 0.493489,-0.822482c4.167243,-0.932146 7.786164,-0.548321 10.637436,1.206307c0.383825,0.164496 0.438657,0.603154 0.274161,0.932146m1.315971,-3.015768c-0.274161,0.383825 -0.76765,0.548321 -1.151475,0.274161c-2.960936,-1.809461 -7.457171,-2.357782 -10.911596,-1.261139c-0.438657,0.109664 -0.932146,-0.109664 -1.041811,-0.548321c-0.109664,-0.438657 0.109664,-0.932146 0.548321,-1.041811c4.002746,-1.206307 8.937639,-0.603154 12.337232,1.480468c0.328993,0.164496 0.493489,0.712818 0.219329,1.096643m0.109664,-3.0706c-3.509257,-2.083621 -9.376296,-2.30295 -12.721057,-1.261139c-0.548321,0.164496 -1.096643,-0.164496 -1.261139,-0.657986c-0.164496,-0.548321 0.164496,-1.096643 0.657986,-1.261139c3.893082,-1.151475 10.308443,-0.932146 14.366021,1.480468c0.493489,0.274161 0.657986,0.932146 0.383825,1.425636c-0.274161,0.383825 -0.932146,0.548321 -1.425636,0.274161"
                        clip-rule="evenodd"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="spotifyContent">
                <img
                  className="spotifyAlbumArt"
                  src={discordData?.spotify.album_art_url}
                />
                <div className="spotifySongDetails">
                  <div className="bannerAbout spotifySongName spotifySongText">
                    {discordData?.spotify.song}
                  </div>
                  <div className="bannerAbout spotifySongText">
                    by {discordData?.spotify.artist}
                  </div>
                  <div className="bannerAbout spotifySongText">
                    on {discordData?.spotify.album}
                  </div>
                </div>
              </div>
            </>
          )}
          <h5 className="bannerSectionTitle">Note</h5>
          <p className="bannerAbout">
            This website is made with React, Firebase & Lanyard API
          </p>
          <h5 className="bannerSectionTitle">Connections</h5>
          <section className="connections">
            <div className="connectionsBtn">
              <div className="connectionBtnLeft">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="githubSVG"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <h5 className="githubHandle">GitHub</h5>
                <svg
                  aria-hidden="false"
                  role="img"
                  width="16"
                  height="16"
                  viewBox="0 0 16 15.2"
                  className="discordVerifiedSVG"
                >
                  <path
                    fill="hsl(217, calc(var(--saturation-factor, 1) * 7.6%), 33.5%)"
                    fill-rule="evenodd"
                    d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                  ></path>
                  <path
                    d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <div data-cursor-exclusion data-cursor-size="100px">
                <a
                  href="https://github.com/gagantripathi22"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    className="githubRedirect"
                    aria-hidden="true"
                    role="img"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <polygon
                      fill="white"
                      fill-rule="nonzero"
                      points="13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
                    ></polygon>
                  </svg>
                </a>
              </div>
            </div>
            {/* <div className='connectionsBtn'>
							<div className='connectionBtnLeft'>
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
								width="20" height="20" viewBox="0 0 192 192">
								{
								<g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
								<path d="M0,192v-192h192v192z" fill="none"></path>
								<g fill="#ffffff"><g id="surface1">
								<path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
								</g>
								</g>
								</g>
								}
							</svg>
								<h5 className='githubHandle'>LinkedIn</h5>
								<svg aria-hidden="false" role="img" width="16" height="16" viewBox="0 0 16 15.2" className='discordVerifiedSVG'>
									<path fill="hsl(217, calc(var(--saturation-factor, 1) * 7.6%), 33.5%)" fill-rule="evenodd" d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"></path>
									<path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="white"></path>
								</svg>
							</div>
							<div>
								<a href="https://www.linkedin.com/in/gagantripathi22/" rel="noopener noreferrer" target="_blank">
									<svg className='githubRedirect' aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24">
										<polygon fill="white" fill-rule="nonzero" points="13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"></polygon>
									</svg>
								</a>
							</div>
						</div> */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default DiscordCard;
