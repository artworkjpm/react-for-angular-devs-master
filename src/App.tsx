import React from 'react';
import './App.css';
import TopNavBar from './components/TopNavBar/TopNavBar';
import useGetData from './hooks/useGetData';
import MusicList from './pages/MusicList';

const App: React.FC = () => {
  const { data } = useGetData(
    'https://my-json-server.typicode.com/artworkjpm/customer-db/db'
  );

  return (
    <div>
      <TopNavBar />
      <div className="px-4 mt-4 grid place-items-center">
        <MusicList data={data} />
      </div>
    </div>
  );
};

export default App;
