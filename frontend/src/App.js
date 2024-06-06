import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import FileList from './components/FileList';
import Homescreen from './screens/Homescreen'
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' Component={Homescreen} exact />
        <Route path='/login' Component={Loginscreen} />
        <Route path='/register' Component={Registerscreen} />
        <Route path='/files' Component={FileList} />

        </Routes>
      </Router>
      <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      
    </div>
  );
}

export default App;
