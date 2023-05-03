import { Link } from 'preact-router';
import { TiTick } from 'react-icons/ti'
import Appbar from '../shared/Appbar';

import './../../assets/scss/components/pages/email-success.scss';

const EmailSuccess = (props: any) => {
    return(
        <div className="form-container">
            <Appbar />
            <div className="form">
                <header className="form-header">Forgot Password ?</header>
                <form className="form-body">
                    <div className="email-success-section">
                        <p className="email-success-message">Email Sent Successfully</p>
                        <span className="form-input-icon">
                            <TiTick />
                        </span>
                    </div>
                    <Link className="form-submit-link" href="/">Return To Home</Link>
                </form>
            </div>
        </div>
    )
}

export default EmailSuccess;