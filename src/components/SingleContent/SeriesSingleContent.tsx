import { img_400, unavailable } from "../../Config/Config";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function SeriesSingleContent(props: Props) {
  const link = props.title.split(" ").join("");
  return (
    <Link to={`/series/${link}`} style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={props.poster ? `${img_400}${props.poster}` : unavailable}
            alt={props.title?.toString()}
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
              {props.title}
            </Typography>
            <Grid display="flex" justifyContent="space-between">
              <Typography variant="subtitle1">SERIES</Typography>
              <Typography variant="subtitle1">{props.date}</Typography>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default SeriesSingleContent;

interface Props {
  id: number;
  key: number;
  title: string;
  poster: string;
  date?: string | null;
  vote_average: number;
}
