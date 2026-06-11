import EmployeeCard from "./components/EmployeeCard";
import ProductCard from "./components/ProductCard";
import MovieCard from "./components/MovieCard";
import Header from "./header";
import Navbar from "./navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />

      <MovieCard name="The Dark Knight" rating="9.2" year="2008" />
      <MovieCard name="Inception" rating="8.8" year="2010" />
      <MovieCard name="Interstellar" rating="8.7" year="2014" />

      <EmployeeCard
        name="John Doe"
        age="30"
        role="Software Engineer"
        address="123 Main St"
      />

      <ProductCard
        name="Rice"
        category="Food"
        price="50"
      />
    </>
  );
}

export default App;