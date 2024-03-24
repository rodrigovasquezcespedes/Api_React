import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../assets/img/logo.png'

interface Props {
    searchInput: string;
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador: React.FC<Props> = ({ searchInput, setSearchInput }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    return (
        <>
            <Container className='mw-100'>
                <Navbar className='bg-danger img-thumbnail m-1'>
                    <img src={Logo} alt="logo marvel" className='mx-5' />
                    <input type="search" placeholder=" Buscar Personaje"  value={searchInput} onChange={handleChange} className="w-50 rounded-pill border-warning form-control mx-5 " autoFocus/>
                </Navbar>
            </Container>
        </>
    );
};

export default Buscador;
