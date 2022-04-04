import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { LanesProvider } from './context/LanesContext'
import BoardsPage from './pages/BoardsPage'

export const Content = () => (
  <LanesProvider>
    <Router>
      <>
        <div className="h-full">
          <Routes>
            <Route exact path="/" element={<BoardsPage/>}/>
          </Routes>
        </div>
      </>
    </Router>
  </LanesProvider>
);

const App = () => <Content/>;

export default App;
