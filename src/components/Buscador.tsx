import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../assets/img/logo.png'

interface NavbarMarvelProps {
    searchInput: string;
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const NavbarMarvel: React.FC<NavbarMarvelProps> = ({ searchInput, setSearchInput }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    return (
        <>
            <Navbar  className='containerNav bg-danger img-thumbnail m-1'>
                <Container>
                    <Navbar.Brand>
                        <h1 className='text-white'>Api Marvel</h1>
                    </Navbar.Brand>
                        <input type="search" placeholder=" Buscar Personaje" className="w-50 rounded-pill border-warning form-control" autoFocus value={searchInput} onChange={handleChange} />
                    <img src={Logo} alt="logo marvel" width="100" height="50" />
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarMarvel;
