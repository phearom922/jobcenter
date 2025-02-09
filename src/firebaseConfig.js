// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCSV80A4moRh86puEMY5Mg1YIooaXNMpYg",
//   authDomain: "crud-images-a1953.firebaseapp.com",
//   projectId: "crud-images-a1953",
//   storageBucket: "crud-images-a1953.firebasestorage.app",
//   messagingSenderId: "386997931236",
//   appId: "1:386997931236:web:0c919f58f20c378756b0f1"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const storage = getStorage(app);

// export { db, storage };

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWR-hS_SxvaqEmsewKtvgH7N9YuhfvPJI",
  authDomain: "jobcenter-caebd.firebaseapp.com",
  projectId: "jobcenter-caebd",
  storageBucket: "jobcenter-caebd.firebasestorage.app",
  messagingSenderId: "482900106298",
  appId: "1:482900106298:web:356ecb3597c7731a8e6903",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
