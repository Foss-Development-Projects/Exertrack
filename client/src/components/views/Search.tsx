
import SearchBar from '../modules/SearchBar';
import UserLogo from './../../assets/images/user.png';

const data : Array<Object> = [
	 { 
	 	uname: "Foster0123", 
	 	bio: "content of something from somewhere", 
	 	picture: UserLogo
	 },
	 { 
	 	uname: "Monster0123", 
	 	bio: "content of this thing from anywhere", 
	 	picture: UserLogo
	 },
	 { 
	 	uname: "Monster0123", 
	 	bio: "content of this thing from anywhere", 
	 	picture: UserLogo
	 },
	 { 
	 	uname: "Monster0123", 
	 	bio: "content of this thing from anywhere", 
	 	picture: UserLogo
	 },
	 { 
	 	uname: "Monster0123", 
	 	bio: "content of this thing from anywhere", 
	 	picture: UserLogo
	 },
	 { 
	 	uname: "Monster0123", 
	 	bio: "content of this thing from anywhere", 
	 	picture: UserLogo
	 },
	 { 
	 	uname: "Monster0123", 
	 	bio: "content of this thing from anywhere", 
	 	picture: UserLogo
	 },
	 { 
	 	uname: "Monster0123", 
	 	bio: "content of this thing from anywhere", 
	 	picture: UserLogo
	 },
	 { 
	 	uname: "Monster0123", 
	 	bio: "content of this thing from anywhere", 
	 	picture: UserLogo
	 }
] 

const Search = (props: any) => {
	return(
		<div className="search">
			<SearchBar />
			<ul className="search-result-list">
				{data.map((item: any, index: number) => {
					return(
						<li className="search-result-item" key={index}>
							<a className="search-result-item-link" href="#">
								<img 
									className="search-result-item-link-profile-picture"
									src={item.picture}
									alt="Profile Picture"
									loading="lazy"
								/>
								<h4 className="search-result-item-link-username">{item.uname}</h4>
								<p className="search-result-item-link-content">{item.bio}</p>
							</a>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
export default Search;