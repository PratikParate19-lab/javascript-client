export const style = theme => ({
    "@global": {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#fff",
      borderRadius: "2px",
      padding: "8px",
      boxShadow: "1px 2px 1px #d1d1d1"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      boxShadow: " 10px 10px 5px 0px rgba(250,250,250,1)",
      marginLeft:250
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  });
  
  export default style;
  