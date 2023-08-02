import { makeStyles } from "@material-ui/core";

interface useStylesProps {}
const useStyles = ({}: useStylesProps) =>
  makeStyles((theme) => ({
    teste: {
      backgroundColor: "red",
    },
  }));

export default useStyles;
