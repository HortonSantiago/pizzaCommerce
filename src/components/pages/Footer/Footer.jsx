import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1E1E1E",
        color: "white",
        py: 3,
      }}
    >
      <Container>
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              ¡Disfruta de nuestras deliciosas pizzas!
            </Typography>
            <Typography variant="body1">
              En Pizzería Artesanal, nos esforzamos por ofrecer las mejores
              pizzas con ingredientes frescos y de alta calidad. ¡Haz tu pedido
              hoy mismo!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Horario de Atención
            </Typography>
            <Typography variant="body1">
              Lunes a Viernes: 11:00 AM - 10:00 PM
            </Typography>
            <Typography variant="body1">
              Sábado y Domingo: 12:00 PM - 11:00 PM
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              REDES
            </Typography>
            <IconButton
              color="inherit"
              aria-label="Instagram"
              href="https://www.instagram.com/pizzacommerce"
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="YouTube"
              href="https://www.youtube.com/c/pizzacommerce"
              target="_blank"
            >
              <YouTubeIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
