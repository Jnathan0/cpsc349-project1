# BlackMail Blog made with React

[hostedSite](https://instagram-clone-3b95e.web.app/)

Team Members: 
Lauren Martinez 
Christopher McDonnell
Lyba Batla 
Joshua Nathan

### To make it run locally:

1. Add a firebase.js file in src folder
2. Import firebase from npm
3. Add code similar to this:

```javascript
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "your api key",
  authDomain: "your auth domain",
  databaseURL: "your database URL",
  projectId: "your project ID",
  storageBucket: "your storage bucket",
  messagingSenderId: "your messaging SenderId",
  appId: "your app Id",
  measurementId: "your measurement ID",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
```

4. Configure your firebase database
5. run `npm start` in terminal


How to use the BlackMail Application
 
1. In order to post, a user must be logged in.
2. If the don't have an account, they can sign up for one
3. Once logged in, a user can use the upload image button in order to post.
4. A user can comment on any posts
5. A user can delete their posts and comments via the x button. 
6. A user can log out
7. A user can view their profile
8. As the administrator, you can use Firebase to view all users and their data. 
