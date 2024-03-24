import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import MiApi from './components/MiApi';
import Buscador from './components/Buscador';

interface Props{
  searchInput: string
}

const App: React.FC<Props> = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div>
      <Buscador searchInput={searchInput} setSearchInput={setSearchInput} />
      <MiApi searchInput={searchInput} />
    </div>
  );
};

export default App;

