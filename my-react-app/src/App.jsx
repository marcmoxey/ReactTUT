import Header from './Header.jsx';
import Footer from './footer.jsx';
import Food from './Food.jsx';
function App() {
  return (
    <> // Need to return multiple elements, so we use a fragment
      <Header />
      <Food/>
      <Footer />
    </>
  );
}

export default App
