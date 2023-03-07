import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoviesSingleContent from '../../components/SingleContent/MoviesSingleContent';
import { fetchMovies } from '../../Store/Slices/Movieslice';
import { RootState } from '../../Store/Store';

const Movies = () => {
	const [page, setPage] = useState(1);
	// const [loadings, setLoadings] = useState<boolean>(true);
	// const { id } = useParams();
	// const [movies, setMovies] = useState([] as ResultsEntity[]);
	// const [selectedGenres, setSelectedGenres] = useState([]);
	// const [genres, setGenres] = useState([]);

	const dispatch: any = useDispatch();
	const movies = useSelector((state: RootState) => state.movies.movie);

	useEffect(() => {
		// setLoadings(true);
		dispatch(fetchMovies(page));
	}, [dispatch, page]);

	return (
		<div>
			<span className='pageTitle'>Movies</span>
			<Container>
				<Grid container rowSpacing={3} spacing={3} justifyContent='center' alignItems='center' marginBottom={20}>
					{movies &&
						movies.map((movie: any) => (
							<Grid item xs={12} sm={6} md={4} lg={2.4} display='flex' justifyContent='center' alignItems='center'>
								<MoviesSingleContent key={movie.id} id={movie.id} poster={movie.poster_path} title={movie.title} date={movie.release_date} vote_average={movie.vote_average} />
							</Grid>
						))}
				</Grid>
			</Container>
			<Stack direction='row' justifyContent='center' alignItems='center' spacing={3} marginTop={3}>
				<Button
					variant='contained'
					color='inherit'
					onClick={() => {
						if (page === 1) return;
						setPage(page - 1);
					}}
				>
					<Typography variant='subtitle1' color='black' fontSize='50' fontWeight='700' fontFamily='Merriweather, serif'>
						Prev
					</Typography>
				</Button>
				<Button color='inherit' variant='contained' onClick={() => setPage(page + 1)}>
					<Typography variant='subtitle1' color='black' fontSize='50' fontWeight='700' fontFamily='Merriweather, serif'>
						More
					</Typography>
				</Button>
			</Stack>
		</div>
	);
};

export default Movies;

// export interface Movies {
//   page: number;
//   results?: (ResultsEntity)[] | null;
//   total_pages: number;
//   total_results: number;
// }
type ResultsEntity = {
	adult: boolean;
	backdrop_path: string;
	genre_ids?: number[] | null;
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};
