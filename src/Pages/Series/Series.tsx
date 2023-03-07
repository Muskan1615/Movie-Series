import { ButtonGroup, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SeriesSingleContent from '../../components/SingleContent/SeriesSingleContent';
import { fetchSeries, fetchSeriesByGenre } from '../../Store/Slices/Seriesslice';
import { RootState } from '../../Store/Store';

const Series = () => {
	const [page, setPage] = useState(1);
	// const [loadings, setLoadings] = useState<boolean>(true);
	// const [series, setSeries] = useState([] as ResultsEntity[]);
	const genres = [
		{ id: 10759, name: 'Action & Adventure' },
		{ id: 16, name: 'Animation' },
		{ id: 35, name: 'Comedy' },
		{ id: 80, name: 'Crime' },
		{ id: 99, name: 'Documentary' },
		{ id: 18, name: 'Drama' },
		{ id: 10751, name: 'Family' },
		{ id: 10762, name: 'Kids' },
		{ id: 9648, name: 'Mystery' },
		{ id: 10763, name: 'News' },
		{ id: 10764, name: 'Reality' },
		{ id: 10765, name: 'Sci-Fi & Fantasy' },
		{ id: 10766, name: 'Soap' },
		{ id: 10767, name: 'Talk' },
		{ id: 10768, name: 'War & Politics' },
		{ id: 37, name: 'Western' },
	];
	const dispatch: any = useDispatch();
	const series = useSelector((state: RootState) => state.series.series);

	useEffect(() => {
		// setLoadings(true);
		dispatch(fetchSeries(page));
	}, [dispatch, page]);
	const clickHandler = (id: number) => {
		dispatch(fetchSeriesByGenre(id));
	};

	return (
		<div>
			<span className='pageTitle'>TV Series</span>
			<ButtonGroup sx={{ flexWrap: 'wrap' }}>
				{genres.map((item: any) => (
					<Button onClick={() => clickHandler(item.id)}>{item.name}</Button>
				))}
			</ButtonGroup>
			<Container>
				<Grid container rowSpacing={3} spacing={3} justifyContent='center' alignItems='center' marginBottom={20}>
					{series &&
						series.map((series: any) => (
							<Grid item xs={12} sm={6} md={4} lg={2.4} display='flex' justifyContent='center' alignItems='center'>
								<SeriesSingleContent key={series.id} id={series.id} poster={series.poster_path} title={series.name} date={series.first_air_date} vote_average={series.vote_average} />
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

export default Series;

// export interface Series {
//   page: number;
//   results?: (ResultsEntity)[] | null;
//   total_pages: number;
//   total_results: number;
// }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ResultsEntity = {
	backdrop_path?: string | null;
	first_air_date?: string | null;
	genre_ids?: number[] | null;
	id: number;
	name: string;
	origin_country?: string[] | null;
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	vote_average: number;
	vote_count: number;
};
