import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const CustomTheme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: "#d87d4a",
    },
  },
});
