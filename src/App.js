import SearchEngine from './SearchEnginePage/SearchEngine';
import { ToastContainer } from "react-toastify";
import {Container} from "react-bootstrap";

function App() {
  return (
    <Container>
      <SearchEngine />
      <ToastContainer autoClose={5000} hideProgressBar />
    </Container>
  );
}

export default App;
