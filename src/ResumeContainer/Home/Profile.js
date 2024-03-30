import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
	return (
		<div className="profile-container">
			<div className="profile-parent">
				<div className="profile-details">
					<div className="colz">
						<div className="colz-icon">
							<a href="https://www.facebook.com/profile.php?id=61553724877842">
								<i className="fa fa-facebook-square"></i>
							</a>
							<a href="https://myaccount.google.com/?pli=1">
								<i className="fa fa-google-plus-square"></i>
							</a>
							<a href="https://www.instagram.com/abdu1ak1mov/?hl=ru">
								<i className="fa fa-instagram"></i>
							</a>
							<a href="https://www.youtube.com/channel/UCF8NP9LNJshUP76viTTlZ3A">
								<i className="fa fa-youtube-square"></i>
							</a>
							<a href="https://twitter.com/jsku5a8">
								<i className="fa fa-twitter-square"></i>
							</a>
						</div>
					</div>
					<div className="profile-details-name">
						<span className="primary-text">
							{""}
							Hello, I'M <span className="highlighted-text">Kubanych</span>
						</span>
					</div>
					<div className="profile-details-role">
						<span className="primary-text">
							{""}
							<h1>
								{""}
								<Typical
									loop={Infinity}
									steps={[
										"JavaScript Developer 💻",
										1000,
										"JavaScript Developer 💻",
										1000,
										"JavaScript Developer 💻",
										1000,
										"JavaScript Developer 💻",
										1000,
									]}
								/>
							</h1>
							<span className="profile-role-tagline">
								I'm just a Javascript developer
							</span>
						</span>
					</div>
					<div className="profile-options">
						<button className="btn primary-btn">
							{""}
							Hire Me{""}
						</button>
						<a href="resume.pdf" download="Resume resume.pdf">
							<button className="btn highlighted-btn">Get Resume</button>
						</a>
					</div>
				</div>
				<div className="profile-picture">
					<div className="profile-picture-background"></div>
				</div>
			</div>
		</div>
	);
}
