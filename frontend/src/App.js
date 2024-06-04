import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import FileList from './components/FileList';
import Homescreen from './screens/Homescreen'

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' Component={Homescreen} exact />
        <Route path='/files' Component={FileList} />

        </Routes>
      </Router>
      <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      
    </div>
  );
}

export default App;
