import * as React from "react";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import LeftMenu from "./components/LeftMenu";
import Workspace from "./components/Main";
import ContentLeft from "./components/Main/ContentLeft";

export default function App() {
  return (
    <Box display="flex">
      <LeftMenu />
      <Workspace />
      <ContentLeft />
    </Box>
  );
}
