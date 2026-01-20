import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

// 👇 PUNE DATELE REALE AICI (doar pentru test)
const firebaseConfig = {
  apiKey: "AIzaSyDpVh5UVj8BKyuWOoD0uy-LlAbuZbWvMFg",
  authDomain: "shop-chat-662e0.firebaseapp.com",
  projectId: "shop-chat-662e0",
  storageBucket: "shop-chat-662e0.firebasestorage.app",
  messagingSenderId: "559425131083",
  appId: "1:559425131083:web:6f0348603a36d2ca9a33ce",
  measurementId: "G-L55RXH3WDY"
};
const app = initializeApp(firebaseConfig);

// Păstrăm setarea pentru conexiune stabilă
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

console.log("Firebase conectat la proiectul:", firebaseConfig.projectId);