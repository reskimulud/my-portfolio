import { BrowserRouter as Router } from 'react-router-dom';
import ProgressBar from './components/atoms/ProgressBar';

function App() {
  return (
    <Router>
      <ProgressBar progress={50} />
    </Router>
  );
}

export default App;
