import { Switch } from "@mui/material";
import { BsDot, BsGear } from 'react-icons/bs';


const data: Array<Object> = [
	{ name: "notifications", content: "Enable Notifications" },
	{ name: "public_profile", content: "Make Your Profile Public" },
	{ name: "workouts", content: "Make Your Workouts Visible" },
	{ name: "workouts", content: "Make Your Workouts Visible" },
	{ name: "workouts", content: "Make Your Workouts Visible" },
	{ name: "workouts", content: "Make Your Workouts Visible" },
	{ name: "workouts", content: "Make Your Workouts Visible" },
]

const Settings = (props: any) => {
	return(
		<div className="settings">
		<header className="form-header">Settings</header>
			<ul className="feature-settings-section">
				{data.map((item: any, index: number) => {
					return(
						<li className="feature-settings" key={index}>
							<p className="feature-settings-title">
								<BsGear size={16} className="feature-settings-title-icon" /> {item.content}
							</p>
							<span className="feature-settings-switch">
								<Switch name={item.name} size="medium" color="warning" className="setting-switch" />
							</span>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
export default Settings;