import axios from "axios";
import { useState, useEffect } from "react";
import SeriesSingleContent from "../../components/SingleContent/SeriesSingleContent";
import { Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeries } from "../../Store/Slices/Seriesslice";
import { useParams } from "react-router-dom";
import { RootState } from "../../Store/Store";

const Series = () => {
  const [page, setPage] = useState(1);
  const [loadings, setLoadings] = useState<boolean>(true);
  // const [series, setSeries] = useState([] as ResultsEntity[]);

  const dispatch: any = useDispatch();
  const series = useSelector((state: RootState) => state.series.series);

  useEffect(() => {
    setLoadings(true);
    dispatch(fetchSeries(page));
  }, [dispatch, page]);

  return (
    <div>
      <span className="pageTitle">TV Series</span>
      <Container>
        <Grid
          container
          rowSpacing={3}
          spacing={3}
          justifyContent="center"
          alignItems="center"
          marginBottom={20}
        >
          {series &&
            series.map((series: any) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={2.4}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <SeriesSingleContent
                  key={series.id}
                  id={series.id}
                  poster={series.poster_path}
                  title={series.name}
                  date={series.first_air_date}
                  vote_average={series.vote_average}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        marginTop={3}
      >
        <Button
          variant="contained"
          color="inherit"
          onClick={() => {
            if (page === 1) return;
            setPage(page - 1);
          }}
        >
          <Typography
            variant="subtitle1"
            color="black"
            fontSize="50"
            fontWeight="700"
            fontFamily="Merriweather, serif"
          >
            Prev
          </Typography>
        </Button>
        <Button
          color="inherit"
          variant="contained"
          onClick={() => setPage(page + 1)}
        >
          <Typography
            variant="subtitle1"
            color="black"
            fontSize="50"
            fontWeight="700"
            fontFamily="Merriweather, serif"
          >
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
