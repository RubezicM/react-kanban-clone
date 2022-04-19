import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanesProvider } from './context/LanesContext'
import BoardsPage from './pages/BoardsPage'
import { DragDropContainer } from './context/DragDropContext'

export const Content = () => (
  <LanesProvider>
  <DragDropContainer>
      <Router>
        <>
          <div>
            <Routes>
              <Route exact path="/" element={<BoardsPage/>}/>
            </Routes>
          </div>
        </>
      </Router>
  </DragDropContainer>
    </LanesProvider>
);

const App = () => <Content/>;

export default App;
