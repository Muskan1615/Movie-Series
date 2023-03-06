import { useState, useEffect } from "react";
import {
  createTheme,
  ThemeProvider,
  Paper,
  IconButton,
  InputBase,
  Tab,
  Tabs,
  Stack,
  Container,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../../Store/Slices/MovieSearchslice";
import { fetchSeriesSearch } from "../../Store/Slices/SeriesSearchslice";
import { useParams } from "react-router-dom";
import { RootState } from "../../Store/Store";
import MoviesSingleContent from "../../components/SingleContent/MoviesSingleContent";
import SeriesSingleContent from "../../components/SingleContent/SeriesSingleContent";

const Search = () => {
  const [value, setValue] = useState("one");
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState<string>("");
  const [content, setContent] = useState([]);
  const [loadings, setLoadings] = useState<boolean>(true);
  const [type, setType] = useState<string>("");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setPage(1);
  };

  const dispatch: any = useDispatch();
  const moviesearch = useSelector(
    (state: RootState) => state.searchmovie.moviesearch
  );

  const data = useSelector((state: RootState) => state.seriesdata.data);
  const loading = useSelector((state: RootState) => state.seriesdata.loading);

  console.log(data);
  console.log(loading);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("running");

    if (type === "tv") {
      console.log("tv running");
      dispatch(fetchSeriesSearch(searchText));
      return;
    }

    console.log("movie running");
    dispatch(fetchSearch(searchText));
  };

  // useEffect(() => {
  //   setLoadings(true);
  //   // dispatch(fetchSearch(searchText));
  // }, [dispatch, searchText]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#39445A",
        contrastText: "white",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Paper
          component="form"
          sx={{
            marginTop: "20px",
            marginBottom: "5px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        >
          <IconButton
            type="button"
            sx={{ p: "15px" }}
            aria-label="search"
            // onClick={fetchSearch}
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <CloseIcon />
          </IconButton>
        </Paper>

        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%", marginBottom: "15px" }}
        >
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            value={value}
            onChange={handleChange}
          >
            <Tab
              sx={{ width: "50%", whiteSpace: "nowrap" }}
              style={{ color: "white" }}
              value="one"
              label="SEARCH MOVIES"
              onClick={() => setType("movie")}
            />
            <Tab
              sx={{ width: "50%", whiteSpace: "nowrap" }}
              style={{ color: "white" }}
              value="two"
              label="SEARCH TV SERIES"
              onClick={() => setType("tv")}
            />
          </Tabs>
        </Stack>
      </ThemeProvider>
      <Container>
        <Grid
          container
          rowSpacing={3}
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {type === "movie" &&
            moviesearch.map((movie: any) => (
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
                <MoviesSingleContent
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  date={movie.release_date}
                  vote_average={movie.vote_average}
                />
              </Grid>
            ))}

          {type === 'tv' &&
            data.map((movie: any) => (
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
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  date={movie.release_date}
                  vote_average={movie.vote_average}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Search;

type Search = {
  page: number;
  results?: null[] | null;
  total_pages: number;
  total_results: number;
  searchText: string;
  type: "movie" | "tv";
};
