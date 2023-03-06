const Genres = ({
}) => {
  return (
    <div>Genres</div>
  )
}

export default Genres;

interface Props {
    id: number;
    key: number;
    title?: string | null;
    poster: string;
    date?: string | null;
    vote_average: number;
  }