import axios from "axios";
import { useState, useEffect } from "react";
import TrendingSingleContent from "../../components/SingleContent/TrendingSingleContent";
import { Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrending } from "../../Store/Slices/Trendingslice";
import { useParams } from "react-router-dom";
import { RootState } from "../../Store/Store";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [loadings, setLoadings] = useState<boolean>(true);
  // const [trendings, setTrendings] = useState<boolean>(true);
  const { id } = useParams();

  const dispatch: any = useDispatch();
  const trendings = useSelector((state: RootState) => state.trending.trending);

  useEffect(() => {
    setLoadings(true);
    dispatch(fetchTrending(page));
  }, [dispatch, page]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <Container>
        <Grid
          container
          rowSpacing={3}
          spacing={3}
          justifyContent="center"
          alignItems="center"
          marginBottom={20}
        >
          {trendings &&
            trendings.map((trending: any) => (
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
                <TrendingSingleContent
                  key={trending.id}
                  id={trending.id}
                  poster={trending.poster_path}
                  title={trending.title || trending.name}
                  date={trending.first_air_date || trending.release_date}
                  media_type={trending.media_type}
                  vote_average={trending.vote_average}
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

export default Trending;

// type ApiType = {
//     page: number;
//     total_pages: number;
//     results?: (ResultsEntity)[] | null;
//     total_results: number;
//   }
type ResultsEntity = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name?: string | null;
  original_language: string;
  original_name?: string | null;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids?: number[] | null;
  popularity: number;
  first_air_date?: string | null;
  vote_average: number;
  vote_count: number;
  origin_country?: string[] | null;
  title?: string | null;
  original_title?: string | null;
  release_date?: string | null;
  video?: boolean | null;
  page: number;
  total_pages: number;
};
