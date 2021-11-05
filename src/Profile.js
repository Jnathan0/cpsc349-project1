import React, { useState } from "react";
import "./ImageUpload.css";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";

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

function Profile({ user, email }) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <div style={modalStyle} className={classes.paper}>
    <div className="imageupload">
        <Avatar
            className="post__avatar"
            alt={user.displayName.charAt(0)}
            src="/static/images/avatar/1.jpg"
        />
        <h3>Username: {user.displayName}</h3>
        <h3>Email: {user.email}</h3>
    </div>
    </div>
  );
}

export default Profile;
