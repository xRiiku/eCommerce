import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'rikucommerce.firebaseapp.com',
    projectId: 'rikucommerce',
    storageBucket: 'rikucommerce.appspot.com',
    messagingSenderId: '375708470519',
    appId: '1:375708470519:web:08c2dc32a51e31464c97f2',
};

export const app = initializeApp(firebaseConfig);