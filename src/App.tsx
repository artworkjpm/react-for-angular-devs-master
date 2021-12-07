import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import TopNavBar from './components/TopNavBar/TopNavBar';
import CustomerListPage from './pages/CustomerListPage';
import { customerListStore } from './redux/store/customerListStore';

const store = customerListStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <TopNavBar />
          <div className="px-4 mt-4 grid place-items-center">
            <Routes>
              <Route path="/customers" element={<CustomerListPage />} />
              <Route path="/" element={<Navigate to="/customers" />} />
            </Routes>
          </div>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
