import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyC_VrGuTYKgng-rx7brWrYCP1DXlIKIXAI",
  authDomain: "telotengo-db.firebaseapp.com",
  projectId: "telotengo-db",
  storageBucket: "telotengo-db.firebasestorage.app",
  messagingSenderId: "640537557743",
  appId: "1:640537557743:web:8009f67e7f057fc517391a"
}

export const app = initializeApp(firebaseConfig)
