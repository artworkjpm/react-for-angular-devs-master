import React from 'react';
import './App.css';
import TopNavBar from './components/TopNavBar/TopNavBar';
import CustomerListPage from './pages/CustomerListPage';

const App: React.FC = () => {
  return (
    <div>
      <TopNavBar />
      <div className="px-4 mt-4 grid place-items-center">
        <CustomerListPage />
      </div>
    </div>
  );
};

export default App;
