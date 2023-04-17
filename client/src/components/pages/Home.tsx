import { AiOutlineArrowRight, AiFillAccountBook } from 'react-icons/ai';

import HomeBG from './../../assets/images/exertrack-bg.svg';
import Footer from '../shared/Footer';
import Appbar from '../shared/Appbar';
import { Link } from 'preact-router';

const data: Array<Object> = [
	{ 
		title: "TiTlE", 
		content: "kyscraper vehicle j-pop beef noodles carbon towards modem Kowloon monofilament. Car dolphin physical dissident sub-orbital weathered office computer chrome long-chain hydrocarbons ",
		icon: AiFillAccountBook
	},
	{ 
		title: "TiTlE", 
		content: "kyscraper vehicle j-pop beef noodles carbon towards modem Kowloon monofilament. Car dolphin physical dissident sub-orbital weathered office computer chrome long-chain hydrocarbons ",
		icon: AiFillAccountBook
	},
	{ 
		title: "TiTlE", 
		content: "kyscraper vehicle j-pop beef noodles carbon towards modem Kowloon monofilament. Car dolphin physical dissident sub-orbital weathered office computer chrome long-chain hydrocarbons ",
		icon: AiFillAccountBook
	},
	{ 
		title: "TiTlE", 
		content: "kyscraper vehicle j-pop beef noodles carbon towards modem Kowloon monofilament. Car dolphin physical dissident sub-orbital weathered office computer chrome long-chain hydrocarbons ",
		icon: AiFillAccountBook
	}
]



const Home = () => {
	return (
		<div className="home">
			<section className="home-title-section" style={{ backgroundImage: `url('${HomeBG}')` }}>
				<Appbar />
				<h1 className="home-title">Exertrack</h1>
				<p className="home-intro">Best App To Track Your Workout Progress</p>
			<section className="home-button-section">
				<button className="home-button home-login-button">
					<Link href="#">Login</Link>
				</button>
				<button className="home-button home-register-button">
					<Link href="#">Register</Link>
				</button>
			</section>
			</section>
			
			<section className="features">
			{data.map((item: any, index: number) => {
				return(
					<div className="feature-card" key={index}>
						<header className="feature-card-header">
							<span className="feature-card-header-icon">
								<item.icon size={30} />
							</span>
							<h2 className="feature-card-header-title">{item.title}</h2>
						</header>
						<section className="feature-card-body">
							<p className="feature-card-body-content">{item.content}</p>
						</section>
					</div>
				)
			})}
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