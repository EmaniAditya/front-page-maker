// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, onValue } from "firebase/database";

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to update visitor count
export const updateVisitorCount = async () => {
  const countRef = ref(database, 'visitorCount');
  
  try {
    // Get current count
    const snapshot = await get(countRef);
    let count = 0;
    
    if (snapshot.exists()) {
      count = snapshot.val();
    }
    
    // Increment count
    await set(countRef, count + 1);
    return count + 1;
  } catch (error) {
    console.error("Error updating visitor count:", error);
    return null;
  }
};

// Function to get current visitor count
export const getVisitorCount = (callback) => {
  const countRef = ref(database, 'visitorCount');
  
  // Set up a listener for real-time updates
  return onValue(countRef, (snapshot) => {
    const count = snapshot.val() || 0;
    callback(count);
  }, {
    onlyOnce: true // Only fetch once, not for real-time updates
  });
};

export { database };
