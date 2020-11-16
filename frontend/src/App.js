import { Container } from 'react-bootstrap';
import Header from './component/Header';
import Footer from './component/Footer';
function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Blooms Hair Shop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
