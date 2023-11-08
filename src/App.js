// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';

import Page from './page/default/Default';
import Overview from './page/overview/Overview';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </div>
  );
}

export default App;
