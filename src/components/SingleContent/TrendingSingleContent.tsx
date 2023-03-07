import { img_400, unavailable } from "../../Config/Config";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function TrendingSingleContent(props: Props) {
  const link = props.id;
  const type = props.media_type;
  return (
    <>
      <Link to={`/${link}`} style={{ textDecoration: 'none' }}>
        <Card sx={{ maxWidth: 250 }} elevation={3}>
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
                  marginBottom:"5px",
                }}
              >
                {props.title}
              </Typography>
              <Grid display="flex" justifyContent="space-between" marginBottom="0px">
                <Typography variant="subtitle2">
                  {props.media_type.toUpperCase()}
                </Typography>
                <Typography variant="subtitle2">{props.date}</Typography>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  );
}

export default TrendingSingleContent;

interface Props {
  id: number;
  key: number;
  title: string;
  poster: string;
  media_type: string;
  date?: string | null;
  vote_average: number;
}
