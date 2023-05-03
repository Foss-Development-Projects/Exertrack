import { Link } from 'preact-router'
import { BiUserCircle, BiLockAlt, BiEnvelope, BiUser } from 'react-icons/bi'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import Appbar from '../shared/Appbar';
import { useState } from 'preact/hooks';
const Signin = (props: any) => {
	const [ eye1, setEye1 ] = useState(true);
	const [ eye2, setEye2 ] = useState(true);
	return(
		<div className="form-container" style={{ paddingTop: "120px" }}>
			<Appbar />
			<div className="form">
				<header className="form-header">Register</header>
				<form className="form-body">
				<section className="form-input-section">
						<span className="form-input-icon">
							<BiUser />
						</span>
						<input type="text" className="form-input-field" name="register_fullname" placeholder="Fullname" />
					</section>
					<section className="form-input-section">
						<span className="form-input-icon">
							<BiUserCircle />
						</span>
						<input type="text" className="form-input-field" name="register_username" placeholder="Username" />
					</section>
					<section className="form-input-section">
						<span className="form-input-icon">
							<BiEnvelope />
						</span>
						<input type="text" className="form-input-field" name="register_email" placeholder="Email" />
					</section>
					<section className="form-input-section">
						<span className="form-input-icon">
							<BiLockAlt />
						</span>
						<input type={eye1 ? 'password' : 'text'} name="register_password" className="form-input-field" placeholder="Password..." />
						<span className="form-input-eye-icon" onClick={() => setEye1(!eye1)}>
							{ eye1 ? <AiOutlineEye /> : <AiOutlineEyeInvisible /> }
						</span>
					</section>
					<section className="form-input-section">
						<span className="form-input-icon">
							<BiLockAlt />
						</span>
						<input type={eye2 ? 'password' : 'text'} name="register_confirm_password" className="form-input-field" placeholder="Confirm Password..." />
						<span className="form-input-eye-icon" onClick={() => setEye2(!eye2)}>
							{ eye2 ? <AiOutlineEye /> : <AiOutlineEyeInvisible /> }
						</span>
					</section>
					<section className="form-submit-section">
						<button className="form-submit-button" type="submit">Register</button>
						<Link className="form-submit-link" href="/signin">Already Have An Account ? Login</Link>
						<Link className="form-submit-link" href="/forgot-password">Register With SAML SSO</Link>
					</section>
				</form>
			</div>
		</div>
	)
}
export default Signin;