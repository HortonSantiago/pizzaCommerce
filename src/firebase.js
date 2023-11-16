// Importa las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCkEH5o2zg8i1oL-pULb6-yWgJA47_pLx8",
  authDomain: "pizzacommerce.firebaseapp.com",
  projectId: "pizzacommerce",
  storageBucket: "pizzacommerce.appspot.com",
  messagingSenderId: "935079041298",
  appId: "1:935079041298:web:104bbd165b03c9692bfbcb",
};

// Inicializa Firebase y obtén la referencia de Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporta la referencia de Firestore
export { db };
