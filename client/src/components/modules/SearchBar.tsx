import { BiSearchAlt } from 'react-icons/bi';
const SearchBar = () => {
	return(
		<form className="search-form" action="" method="GET">
			<input placeholder="Search" className="search-input" id="search-input" name="search" />
			<button type="submit" className="search-button">
				<BiSearchAlt className='search-button-icon' />
			</button>
		</form>
	)
}

export default SearchBar;