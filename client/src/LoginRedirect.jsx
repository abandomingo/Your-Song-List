import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';

const LoginRedirect = () => {
  return (
    <Container id='login'>
      <Row>
        <Col md={12} className="text-center">
          <h1 >Hello! Please login to Spotify to use this app.</h1>
          <Button variant="dark" href="http://localhost:8888/login">Login to Spotify</Button>{' '}
        </Col>
      </Row>
    </Container>
  );
};

export default LoginRedirect;