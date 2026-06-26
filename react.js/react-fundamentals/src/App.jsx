import EmployeeCard from "./components/EmployeeCard";
import ProductCard from "./components/ProductCard";
import MovieCard from "./components/MovieCard";
import Header from "./header";
import Navbar from "./navbar";
import ClickLogger from "./components/events/ClickLogger";
import DoubleCLick from "./components/events/DoubleClickEvent";
import InputLogger from "./components/events/InputLogger";
import SearchBox from "./components/events/SearchBox";
import FormSubmit from "./components/events/FormSubmit";

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

      <ProductCard name="Rice" category="Food" price="50" inStock={true} />
      <ProductCard name="Shirt" category="Clothing" price="1200" inStock={false} />
      <ProductCard name="Shoes" category="Footwear" price="800" inStock={true} />
      <ClickLogger />
      <DoubleCLick />
      <InputLogger />
      <SearchBox />
      <FormSubmit />
      
    </>
  );
} 

export default App;