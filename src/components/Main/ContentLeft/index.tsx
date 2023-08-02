import React from "react";
import { Box } from "@mui/material";
import { makeStyles, styled } from "@material-ui/core";

// import { Container } from './styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    padding: "30px 20px",

    borderLeft: "1px solid #d9d9d9d9",
    width: 50,
    // paddingBottom: 100,
  },
}));

const ContentLeft: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} pb={5}>
      <h1>Tarefas de hoje</h1>
      <Box
        bgcolor="#d9d9d9d9"
        borderRadius={6}
        padding={5}
        height={180}
        width={350}
      >
        <Box height={30} bgcolor="#ffffff" borderRadius={6} width={130} />
      </Box>
      <Box
        bgcolor="#d9d9d9d9"
        borderRadius={6}
        padding={5}
        height={180}
        mt={3}
        width={350}
      >
        <Box height={30} bgcolor="#ffffff" borderRadius={6} width={130} />
      </Box>
      <Box
        bgcolor="#d9d9d9d9"
        borderRadius={6}
        padding={5}
        height={180}
        mt={3}
        width={350}
      >
        <Box height={30} bgcolor="#ffffff" borderRadius={6} width={130} />
      </Box>
      <h1>Projeto recente</h1>
      <Box
        bgcolor="#d9d9d9d9"
        borderRadius={6}
        padding={5}
        height={130}
        width={350}
      >
        <Box height={30} bgcolor="#ffffff" borderRadius={6} width={130} />
      </Box>
    </Box>
  );
};

export default ContentLeft;
