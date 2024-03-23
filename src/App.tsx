import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import MiApi from './components/MiApi';
import Buscador from './components/Buscador';

const App: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  return (
    <div>
      <Buscador searchInput={searchInput} setSearchInput={setSearchInput} />
      <MiApi searchInput={searchInput} />
    </div>
  );
};

export default App;

