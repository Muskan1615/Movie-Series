import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  styled,
  Typography,
  Rating,
} from "@mui/material";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { img_400, unavailable } from "../Config/Config";
import { fetchSeriesData } from "../Store/Slices/Seriesslice";
import { RootState } from "../Store/Store";

const seriesPaper = styled(Paper)(
  ({ theme }) =>
    `background-color:rgba(57, 68, 90,0.8);
    margin:8px 0;`
);

const SeriesData = () => {
  // const [loading, setLoading] = useState<boolean>(true);
  const { link } = useParams();
  const dispatch: any = useDispatch();
  const SeriesData = useSelector((state: RootState) => state.seriesData.series);
  const [value, setValue] = useState<number | null>(2);

  useEffect(() => {
    // setLoading(false);
    if (link) {
      dispatch(fetchSeriesData(+link));
    }
  }, [dispatch, link]);

  console.log(SeriesData);
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
                SeriesData.poster_path
                  ? `${img_400}${SeriesData.poster_path}`
                  : unavailable
              }
              alt={SeriesData.name?.toString()}
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
          {SeriesData.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {SeriesData.first_air_date}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {SeriesData.overview}
        </Typography>
        <Rating
          name="read-only"
          value={SeriesData.vote_average / 2}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          readOnly
        />
      </Grid>
    </Box>
  );
};

export default SeriesData;
