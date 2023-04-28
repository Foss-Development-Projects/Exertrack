import { Switch } from "@mui/material";
import { BsDot } from 'react-icons/bs';


const data: Array<Object> = [
	{ name: "notifications", content: "Enable Notifications" },
	{ name: "public_profile", content: "Make Your Profile Public" },
	{ name: "workouts", content: "Make Your Workouts Visible" },
]

const Settings = () => {
	return(
		<div className="settings">
			<ul className="feature-settings-section">
				{data.map((item: any, index: number) => {
					return(
						<li className="feature-settings" key={index}>
							<p className="feature-settings-title">
								<BsDot size={36} />{item.content}
							</p>
							<span className="feature-settings-switch">
								<Switch name={item.name} size="medium" color="success" className="setting-switch" />
							</span>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
export default Settings;