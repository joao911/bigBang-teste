import React from "react";
import { makeStyles, styled } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    padding: "30px 40px",
    backgroundColor: "#Eff3f6",
    borderLeft: "1px solid #d9d9d9d9",
  },
  item: {
    backgroundColor: "red",
  },
  iconContainer: {
    borderRadius: 6,
    border: "1px solid #000",
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 25,
  },
}));

const Workspace = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Painel</h1>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <span>Ultimas atualizações de hoje</span>
        <Box display="flex" mb={6}>
          <Box className={classes.iconContainer}>
            <SearchIcon />
          </Box>
          <Box className={classes.iconContainer}>
            <TurnedInNotIcon />
          </Box>
        </Box>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box bgcolor="#d9d9d9d9" borderRadius={6} padding={5}>
            <Box height={30} width={200} bgcolor="#ffffff" borderRadius={6} />
            <Box
              height={30}
              width={250}
              bgcolor="#ffffff"
              borderRadius={6}
              mt={3}
            />
            <Box
              height={30}
              width={250}
              bgcolor="#ffffff"
              borderRadius={6}
              mt={3}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box bgcolor="#d9d9d9d9" borderRadius={6} padding={5}>
            <Box height={30} width={200} bgcolor="#ffffff" borderRadius={6} />
            <Box
              height={30}
              width={250}
              bgcolor="#ffffff"
              borderRadius={6}
              mt={3}
            />
            <Box
              height={30}
              width={250}
              bgcolor="#ffffff"
              borderRadius={6}
              mt={3}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box bgcolor="#d9d9d9d9" p={2} borderRadius={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={2}>
                <Box height={30} bgcolor="#ffffff" borderRadius={6} p={2} />
              </Grid>

              <Grid item xs={12} lg={2}>
                <Box height={30} bgcolor="#ffffff" borderRadius={6} p={2} />
              </Grid>

              <Grid item xs={12} lg={2}>
                <Box height={30} bgcolor="#ffffff" borderRadius={6} p={2} />
              </Grid>

              <Grid item xs={12} lg={2}>
                <Box height={30} bgcolor="#ffffff" borderRadius={6} p={2} />
              </Grid>

              <Grid item xs={12} lg={2}>
                <Box height={30} bgcolor="#ffffff" borderRadius={6} p={2} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid item xs={12} lg={6}>
          <Box
            bgcolor="#d9d9d9d9"
            p={2}
            borderRadius={6}
            mt={6}
            style={{ height: "calc(100vh - 600px)" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  height={30}
                  bgcolor="#fff"
                  borderRadius={6}
                  p={2}
                  width={150}
                />
              </Grid>

              <Grid item xs={12}>
                <Box
                  height={30}
                  bgcolor="#fff"
                  borderRadius={6}
                  p={2}
                  width={350}
                />
              </Grid>

              <Grid item xs={12}>
                <Box
                  height={30}
                  bgcolor="#ffff"
                  borderRadius={6}
                  p={2}
                  width={350}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Workspace;
