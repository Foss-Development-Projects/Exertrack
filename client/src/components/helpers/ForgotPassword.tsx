import { Link } from 'preact-router'
import { BiEnvelope } from 'react-icons/bi'
import Appbar from '../shared/Appbar';
import classes from './../../assets/css/forgotpassword.module.css';

const ForgotPassword = () => {
	return(
		<div className="form-container">
			<Appbar />
			<div className="form">
				<header className="form-header">Forgot Password ?</header>
				<form className="form-body">
					<section className="form-input-section">
						<span className="form-input-icon">
							<BiEnvelope />
						</span>
						<input type="text" className="form-input-field" name="reset_password_email" placeholder="Email" />
					</section>
					<section className="form-submit-section">
						<button className={`form-submit-button ${classes.form_submit_button}`} type="submit">Reset Password</button>
						<Link className="form-submit-link" href="/">Return To Home</Link>
					</section>
				</form>
			</div>
		</div>
	)
}
export default ForgotPassword;