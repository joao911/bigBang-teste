import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";

import Logo from "../../assets/logo.png";

import useStyles from "./styles";
import { Box } from "@mui/material";

const LeftMenu: React.FC = () => {
  const [active, setActive] = useState("");

  const props = {
    active,
  };
  const classes = useStyles(props)();

  return (
    <Paper sx={{ width: 420, maxWidth: "100%", backgroundColor: "#Eff3f6" }}>
      <MenuList className={classes.teste}>
        <img src={Logo} alt="" />
        <Box pl={5} mt={6}>
          <Box
            bgcolor="#4c4c4c"
            borderRadius={6}
            height={50}
            width={230}
            display="flex"
            alignItems="center"
            pl={3}
          >
            <MenuItem>
              <ListItemText style={{ color: "#ffff" }}>Painel</ListItemText>
            </MenuItem>
          </Box>
          <Box
            borderRadius={6}
            height={50}
            width={230}
            display="flex"
            alignItems="center"
            pl={3}
          >
            <MenuItem>
              <ListItemText>Projeto</ListItemText>
            </MenuItem>
          </Box>
          <Box
            borderRadius={6}
            height={50}
            width={230}
            display="flex"
            alignItems="center"
            pl={3}
          >
            <MenuItem>
              <ListItemText>Leads</ListItemText>
            </MenuItem>
          </Box>
          <Box
            borderRadius={6}
            height={50}
            width={230}
            display="flex"
            alignItems="center"
            pl={3}
          >
            <MenuItem>
              <ListItemText>Campanhas</ListItemText>
            </MenuItem>
          </Box>
          <Box
            borderRadius={6}
            height={50}
            width={230}
            display="flex"
            alignItems="center"
            pl={3}
          >
            <MenuItem>
              <Box display="flex" justifyContent="space-between">
                <ListItemText>Notificações</ListItemText>
              </Box>
            </MenuItem>
            <Box
              height={20}
              width={20}
              bgcolor="#80ff80"
              borderRadius={50}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              1
            </Box>
          </Box>
        </Box>
      </MenuList>
      {/* <Box
        pl={5}
        pr={20}
        display="flex"
        alignItems="center"
        flexDirection="column"
        style={{ marginTop: "90%" }}
      >
        <Box height={70} width={70} borderRadius={60} bgcolor="#727874" />
        <b>usuário teste</b>
        <p style={{ padding: 0, margin: 0 }}>teste@teste.com</p>
      </Box> */}
    </Paper>
  );
};

export default LeftMenu;
