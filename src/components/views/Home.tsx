import HomeBG from './../../assets/images/exertrack-bg.svg';

const Home = () => {
	return(
		<div className="home">
		<section className="home-title-section" style={{ backgroundImage: `url('${HomeBG}')` }}>
			<h1 className="home-title">Home View</h1>
		</section>
		<section className="features">
			<div className="feature-box"></div>
			<div className="feature-box"></div>
			<div className="feature-box"></div>
			<div className="feature-box"></div>
		</section>
		</div>
	)
}
export default Home;