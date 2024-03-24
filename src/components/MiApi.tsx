import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CardComponent from './CardComponent'
import SpinnerComponent from './SpinnerComponent'

//problemas con el eslinter
interface Props {
    searchInput: string
}

const MiApi: React.FC<Props> = ({ searchInput }) => {
    const [cards, setCards] = useState<any[]>([])
    const [isLoading, setLoading] = useState(true)
    const [reverseOrder, setReverseOrder] = useState(false);

    const CardApi = async () => {
        const apiKey = '2e7833fa3306fdbfeff831a6ede55741'
        const hashKey = '61e8b6d2d1b850fe7b48907828e6fea1'
        const apiUrl = 'https://gateway.marvel.com/v1/public/characters'
        const limits = '30'

        let url;
        if (searchInput !== '') {
            url = `${apiUrl}?nameStartsWith=${searchInput}&ts=1&apikey=${apiKey}&hash=${hashKey}&limit=${limits}`;
        } else {
            url = `${apiUrl}?ts=1&apikey=${apiKey}&hash=${hashKey}&limit=${limits}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setCards(data.data.results);
        setLoading(false);
    };


    useEffect(() => {
        CardApi();
        console.log(cards)
    }, [searchInput]);


    const toggleReverseOrder = () => {
        setReverseOrder(!reverseOrder);
    };

    const renderContent = () => {
        if (isLoading) {
            return <SpinnerComponent />;
        } else {
            let sortedCards = [...cards].sort((b, a) => a.name.localeCompare(b.name));
            sortedCards.reverse();

            if (reverseOrder) {
                sortedCards = sortedCards.reverse();
            }

            return (
                <Container>
                    <Row xs="auto">
                        {sortedCards.length === 0 ? (
                            <div className='container'>
                                <h2 className='text-center text-danger border-dark p-5'>No se encontraron Personajes</h2>
                            </div>
                        ) : (
                            sortedCards.map((card) => {
                                return <CardComponent key={card.id} card={card} />;
                            })
                        )}
                    </Row>
                </Container>
            );
        }
    };


    return (
        <div className="contentCard ">
            <div className="d-flex justify-content-end mb-3">
                <button onClick={toggleReverseOrder} className="position-relative m-2 p-2 bg-danger text-white">Invertir Orden</button>
            </div>
            {renderContent()}
        </div>
    );
};

export default MiApi;
