import Spinner from 'react-bootstrap/Spinner'

const SpinnerComponent: React.FC = () => (
    <div className="spinnerContent text-center p-5">
        <Spinner animation="border" variant="light" role="status" />
        <h1 className='text-center text-danger border-dark'>CARGANDO...</h1>
    </div>
);

export default SpinnerComponent;