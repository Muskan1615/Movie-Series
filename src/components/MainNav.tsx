import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
	const [value, setValue] = React.useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		// if (value == 0) navigate("/");
		// else if (value == 1) navigate("/movies");
		// else if (value == 2) navigate("/series");
		// else if (value == 3) navigate("/search");
	}, [value, navigate]);

	return (
		<Box width='100%' position='fixed' bottom='0'>
			<BottomNavigation
				showLabels
				// value={value}
				// onChange={(event, newValue) => {
				// 	setValue(newValue);
				// }}
			>
				<Link to='/'>
					<BottomNavigationAction label='Trending' icon={<WhatshotIcon />} />
				</Link>
				<Link to='/movies'>
					<BottomNavigationAction label='Movies' icon={<MovieCreationIcon />} />
				</Link>
				<Link to='/series'>
					<BottomNavigationAction label='TV Series' icon={<TvIcon />} />
				</Link>
				<Link to='/search'>
					<BottomNavigationAction label='Search' icon={<SearchIcon />} />
				</Link>
			</BottomNavigation>
		</Box>
	);
}
