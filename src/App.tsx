import { BrowserRouter, Route , Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Container from "@mui/material/Container";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import Series from "./Pages/Series/Series";
import MovieData from "./components/MovieData";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/:link" element={<MovieData />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:link" element={<MovieData />} />
            <Route path="/series" element={<Series />} />
            <Route path="/series/:link" element={<MovieData />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </>
  );
}

export default App;
