import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  styled,
  Typography,
  Rating,
} from "@mui/material";
import { margin } from "@mui/system";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { img_400, unavailable } from "../Config/Config";
import { fetchMovieData } from "../Store/Slices/Movieslice";
import { RootState } from "../Store/Store";

const MoviePaper = styled(Paper)(
  ({ theme }) =>
    `background-color:transparent;border-radius:10px;
    margin:50px 8px;`
);

const MovieData = () => {
  // const [loading, setLoading] = useState<boolean>(true);
  const { link } = useParams();
  const dispatch: any = useDispatch();
  const MovieData = useSelector((state: RootState) => state.movieData.movie);
  const [value, setValue] = useState<number | null>(2);

  useEffect(() => {
    // setLoading(false);
    if (link) {
      dispatch(fetchMovieData(+link));
    }
  }, [dispatch, link]);

  console.log(MovieData);
  return (
    <Box display={"flex"} justifyContent={"space-around"} flexDirection={"row"}>
      <Box
        // height={"calc(100vh - 70px)"}
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"row"}
        alignItems={"center"}
      >
        <Card sx={{ width: "100%", margin: "10px" }}>
          <>
            <CardMedia
              component="img"
              height="100%"
              image={
                MovieData.poster_path
                  ? `${img_400}${MovieData.poster_path}`
                  : unavailable
              }
              alt={MovieData.title?.toString()}
            ></CardMedia>
          </>
        </Card>
      </Box>
      <Grid
        display={"flex"}
        flexDirection={"column"}
        alignItems={"left"}
        justifyContent={"center"}
		width={"50%"}
      >
        <Typography variant="h5" gutterBottom>
          {MovieData.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {MovieData.release_date}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {MovieData.overview}
        </Typography>
		<Rating
        name="read-only"
        value={MovieData.vote_average/2}
        onChange={(event, newValue) => {
          setValue(newValue);
        }} readOnly
      />
      </Grid>
    </Box>
  );
};

export default MovieData;
