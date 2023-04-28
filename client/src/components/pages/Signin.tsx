import { Link } from 'preact-router'
import { BiUserCircle, BiLockAlt } from 'react-icons/bi'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import Appbar from '../shared/Appbar';
import { useState } from 'preact/hooks';
const Signin = () => {
	const [ eye, setEye ] = useState(true);
	return(
		<div className="form-container">
			<Appbar />
			<div className="form">
				<header className="form-header">Login</header>
				<form className="form-body">
					<section className="form-input-section">
						<span className="form-input-icon">
							<BiUserCircle />
						</span>
						<input type="text" className="form-input-field" name="login_user" placeholder="Username" />
					</section>
					<section className="form-input-section">
						<span className="form-input-icon">
							<BiLockAlt />
						</span>
						<input type={eye ? 'password' : 'text'} name="login_password" className="form-input-field" placeholder="Password..." />
						<span className="form-input-eye-icon" onClick={() => setEye(!eye)}>
							{ eye ? <AiOutlineEye /> : <AiOutlineEyeInvisible /> }
						</span>
					</section>
					<section className="form-submit-section">
						<button className="form-submit-button" type="submit">Login</button>
						<Link className="form-submit-link" href="/register">First Time Here ? Register</Link>
						<Link className="form-submit-link" href="/forgot-password">Forgot Password ? Click Here</Link>
					</section>
				</form>
			</div>
		</div>
	)
}
export default Signin;