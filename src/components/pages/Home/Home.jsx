import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center" },
        alignItems: { xs: "center" },
        gap: "50px",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=360"
            alt="Mon"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pizza Napolitana
            </Typography>
            <Typography variant="body1" color="text.secondary">
              La mejor pizza de Muzzarela
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" color="secondary">
            Mas info
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=360"
            alt="Mon"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pizza Napolitana
            </Typography>
            <Typography variant="body1" color="text.secondary">
              La mejor pizza de Muzzarela
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" color="secondary">
            Mas info
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=360"
            alt="Mon"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pizza Napolitana
            </Typography>
            <Typography variant="body1" color="text.secondary">
              La mejor pizza de Muzzarela
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" color="secondary">
            Mas info
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
