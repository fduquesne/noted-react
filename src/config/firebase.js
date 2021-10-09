import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCkx91osQ8mlpOVt9kHr4CQP_kpdfLnIdQ',
  authDomain: 'noted-react.firebaseapp.com',
  databaseURL: 'https://noted-react-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'noted-react',
  storageBucket: 'noted-react.appspot.com',
  messagingSenderId: '1015105808896',
  appId: '1:1015105808896:web:97edd33f9f63aad45b86e5',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
