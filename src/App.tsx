import Box from "@mui/material/Box";
import { DataGridPro, GridSlotsComponentsProps } from "@mui/x-data-grid-pro";

// augment the props for the toolbar slot
declare module "@mui/x-data-grid" {
  interface ToolbarPropsOverrides {
    someCustomString: string;
    someCustomNumber: number;
  }
}

function CustomGridToolbar(props: GridSlotsComponentsProps["toolbar"]) {
  props?.someCustomNumber;
  props?.someCustomString;
  return null;
}

export default function BasicColumnsGrid() {
  return (
    <Box sx={{ height: 250, width: "100%" }}>
      <DataGridPro
        columns={[{ field: "username" }, { field: "age" }]}
        rows={[
          {
            id: 1,
            username: "@MUI",
            age: 20,
          },
        ]}
        slots={{
          // custom component passed to the toolbar slot
          toolbar: CustomGridToolbar,
        }}
        slotProps={{
          toolbar: {
            // props required by CustomGridToolbar
            someCustomString: "Hello",
            someCustomNumber: 42,
          },
        }}
      />
    </Box>
  );
}
