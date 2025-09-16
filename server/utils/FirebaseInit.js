import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOX8VbsVeJQtsFQkI0z9Vd2cDc4FNS_Zg",
  authDomain: "hello-world-messages.firebaseapp.com",
  projectId: "hello-world-messages",
  storageBucket: "hello-world-messages.firebasestorage.app",
  messagingSenderId: "818249141417",
  appId: "1:818249141417:web:92b0b6ecfc40ff41c3edb8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);