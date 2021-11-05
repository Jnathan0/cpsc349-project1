import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%) `,
    };
  }


  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

export default function Profile({ username }) {
    const [modalStyle] = useStyles(getModalStyle);
    const classes = useStyles();
    console.log("a;lsdfj;asldfj");

  return (
    <div style={modalStyle} className={classes.paper}>
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          CardContent example
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This Card's children are wrapped in a CardContent component, which
          adds 16px of padding around the edges. The last CardContent in a group
          of children will get 24px of padding on the bottom.
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

