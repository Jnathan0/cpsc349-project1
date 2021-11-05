import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { storage, db } from "./firebase";
import firebase from "firebase";
import "./ImageUpload.css";
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

function ImageUpload({ username }) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        // complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username,
            });
            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <div style={modalStyle} className={classes.paper}>
    <div className="imageupload">
      <div class="file-upload-wrapper" data-text={ image ? image.name : "Select an image!" }>
        <input name="file-upload-field" type="file" className="file-upload-field" value="" onChange={handleChange} />
      </div>
      <textarea
        rows="5"
        placeholder="Enter a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      ></textarea>
      {image ? (
          <progress className="imageupload__progress" value={progress} max="100" />
        ) : (
          ''
        )}
      {image ? (
        <Button class="create-post-btn" onClick={handleUpload}>CREATE POST</Button>
      ) : ('')}
    </div>
    </div>
  );
}

export default ImageUpload;
