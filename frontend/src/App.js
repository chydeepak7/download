import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Upload from './components/Upload';
import Header from './components/Header';
import Homescreen from './screens/Homescreen'

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' Component={Homescreen} exact />

        </Routes>
      </Router>
      <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      
    </div>
  );
}

export default App;
