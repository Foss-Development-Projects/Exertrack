import { AiOutlineArrowRight } from 'react-icons/ai';

import HomeBG from './../../assets/images/exertrack-bg.svg';
import Footer from '../shared/Footer';

const Home = () => {
	return(
		<div className="home">
		<section className="home-title-section" style={{ backgroundImage: `url('${HomeBG}')` }}>
			<h1 className="home-title">Exertrack</h1>
		</section>
		<section className="features">
			<div className="feature-box">a</div>
			<div className="feature-box">b</div>
			<div className="feature-box">c</div>
			<div className="feature-box">d</div>
		</section>
		<section className="get-started">
			<a href="/user" className="home-get-started">
				<i className="get-started-icon">
					<AiOutlineArrowRight size={70} />
				</i>
			</a>
			<p className="get-started-tooltip">GET STARTED</p>
		</section>
		<Footer />
		</div>
	)
}
export default Home;