import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, styled, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { img_400, unavailable } from '../Config/Config';
import { fetchMovieData } from '../Store/Slices/Movieslice';
import { RootState } from '../Store/Store';

const MoviePaper = styled(Paper)(
	({ theme }) =>
		`background-color:rgba(57, 68, 90,0.8);
    margin:8px 0;`,
);

const MovieData = () => {
	// const [loading, setLoading] = useState<boolean>(true);
	const { link } = useParams();
	const dispatch: any = useDispatch();
	const MovieData = useSelector((state: RootState) => state.movieData.movie);

	useEffect(() => {
		// setLoading(false);
		if (link) {
			dispatch(fetchMovieData(+link));
		}
	}, [dispatch, link]);

	console.log(MovieData);
	return (
		<Box height={'calc(100vh - 70px)'} display={'flex'} justifyContent={'center'} flexDirection={'column'}>
			<Card sx={{ maxWidth: 250 }}>
				<CardActionArea>
					<CardMedia component='img' height='100%' image={MovieData.poster_path ? `${img_400}${MovieData.poster_path}` : unavailable} alt={MovieData.title?.toString()}></CardMedia>
					<CardContent>
						<Typography
							variant='h6'
							component='div'
							sx={{
								whiteSpace: 'wrap',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								display: '-webkit-box',
								'-webkit-line-clamp': '1',
								'-webkit-box-orient': 'vertical',
								marginBottom: '5px',
							}}
						>
							{MovieData.title}
						</Typography>
						<Grid display='flex' justifyContent='space-between'>
							<Typography variant='subtitle1'>MOVIE</Typography>
							<Typography variant='subtitle1'>{MovieData.date}</Typography>
						</Grid>
					</CardContent>
				</CardActionArea>
			</Card>
		</Box>
	);
};

export default MovieData;
