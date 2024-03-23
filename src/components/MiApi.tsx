import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CardComponent from './CardComponent'
import SpinnerComponent from './SpinnerComponent'


interface Props {
    searchInput: string;
}

const MiApi: React.FC<Props> = ({ searchInput }) => {
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
            url = `${apiUrl}?nameStartsWith=${searchInput}&ts=1&apikey=${apiKey}&hash=${hashKey}&limit=30`;
        } else {
            url = `${apiUrl}?ts=1&apikey=${apiKey}&hash=${hashKey}&limit=30`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setCards(data.data.results);
        setLoading(false);
    };

    const renderContent = () => {
        if (isLoading) {
            return <SpinnerComponent />;
        } else {
            return (
                <Container>
                    <Row xs="auto">
                        {cards.map((card) => (
                            <CardComponent key={card.id} card={card} />
                        ))}
                    </Row>
                </Container>
            );
        }
    };
    return (
        <div className="contentCard ">
            {renderContent()}
        </div>
    );
};

export default MiApi;
