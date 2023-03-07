import Container from '@mui/material/Container';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SimpleBottomNavigation from './components/MainNav';
import MovieData from './components/MovieData';
import TrendingData from './components/TrendingData';
import SeriesData from './components/SeriesData';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
import Trending from './Pages/Trending/Trending';

function App() {
	return (
		<>
			<Header />
			<div className='app'>
				<Container>
					<Routes>
						<Route path='/' element={<Trending />} />
						<Route path='/:link' element={<TrendingData />} />
						<Route path='/movies' element={<Movies />} />
						<Route path='/movies/:link' element={<MovieData />} />
						<Route path='/series' element={<Series />} />
						<Route path='/series/:link' element={<SeriesData />} />
						<Route path='/search' element={<Search />} />
					</Routes>
				</Container>
			</div>
			<SimpleBottomNavigation />
		</>
	);
}

export default App;
