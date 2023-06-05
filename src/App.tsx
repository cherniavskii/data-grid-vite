import "./App.css";
import { DataGridPremium } from "@mui/x-data-grid-premium";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import type {} from "@mui/lab/themeAugmentation";
import type {} from "@mui/x-data-grid-premium/themeAugmentation";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ width: 600, height: 400 }}>
        <DataGridPremium columns={[{ field: "id" }]} rows={[{ id: 1 }]} />
      </div>
    </ThemeProvider>
  );
}

export default App;
