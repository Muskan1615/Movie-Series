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
} from "@mui/material";
import { margin } from "@mui/system";
import { useEffect } from "react";
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
        height={"calc(100vh - 70px)"}
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"row"}
        alignItems={"center"}
      >
        <Card sx={{ maxWidth: "1080px", margin: "10px" }}>
          <CardActionArea>
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
          </CardActionArea>
        </Card>
      </Box>
      <Grid
        display={"flex"}
        flexDirection={"column"}
        alignItems={"left"}
        justifyContent={"center"}
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
      </Grid>
    </Box>
  );
};

export default MovieData;
