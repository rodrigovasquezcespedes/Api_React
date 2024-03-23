import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Cards from './Cards'

interface MiAppProps {
    searchInput: string;
}

const MiApp: React.FC<MiAppProps> = ({ searchInput }) => {
    const [cards, setCards] = useState<any[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getCardsMarvelApi();
    }, [searchInput]);

    const getCardsMarvelApi = async () => {
        setLoading(true);

        const apiKey = '2e7833fa3306fdbfeff831a6ede55741';
        const hashKey = '61e8b6d2d1b850fe7b48907828e6fea1';
        const apiUrl = 'https://gateway.marvel.com/v1/public/characters';

        let url;
        if (searchInput !== '') {
            url = `${apiUrl}?nameStartsWith=${searchInput}&ts=1&apikey=${apiKey}&hash=${hashKey}&limit=20`;
        } else {
            url = `${apiUrl}?ts=1&apikey=${apiKey}&hash=${hashKey}&limit=30`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setCards(data.data.results);
        setLoading(false);
    };

    const LoadingCard: React.FC = () => (
        <div className="spinnerContent text-center p-5">
            <Spinner animation="border" variant="light" role="status" />
            <h1 className='text-center text-danger border-dark'>CARGANDO...</h1>
        </div>
    );

    return (
        <div className="contentCard ">
            {isLoading ? (<LoadingCard />):(<Container><Row xs="auto">{cards.map((card) => (<Cards key={ card.id} card={card} />))}</Row></Container>)}
        </div>
    );
};

export default MiApp;
