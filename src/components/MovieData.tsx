import {
  Box,
  capitalize,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { img_400, unavailable } from "../Config/Config";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import { fetchMovies } from "../Store/Slices/Movieslice";
import { useParams } from "react-router-dom";
import MoviesSingleContent from "../components/SingleContent/MoviesSingleContent";

const MoviePaper = styled(Paper)(
  ({ theme }) =>
    `background-color:rgba(57, 68, 90,0.8);
    margin:8px 0;`
);

const MovieData = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const dispatch: any = useDispatch();
  const MovieData = useSelector((state: RootState) => state.movies.movie);
  const { link } = useParams();

  useEffect(() => {
    setLoading(false);
    dispatch(fetchMovies(link));
  }, [dispatch, link]);

  console.log(MovieData);
  return (
    <Box
      height={"calc(100vh - 70px)"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={MovieData.poster ? `${img_400}${MovieData.poster}` : unavailable}
            alt={MovieData.title?.toString()}
          ></CardMedia>
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              sx={{
                whiteSpace: "wrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                "-webkit-line-clamp": "1",
                "-webkit-box-orient": "vertical",
                marginBottom: "5px",
              }}
            >
              {MovieData.title}
            </Typography>
            <Grid display="flex" justifyContent="space-between">
              <Typography variant="subtitle1">MOVIE</Typography>
              <Typography variant="subtitle1">{MovieData.date}</Typography>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default MovieData;
