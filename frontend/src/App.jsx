import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import ItemCard from "./components/ItemCard";
import { useSelector } from "react-redux";
import Searchbar from "./components/Searchbar";
function App() {
  const selectedItem = useSelector((state) => state.item.selectedItem);

  return (
    <>
      <Navbar />
      <div className="main">
        <Sidebar />
        {!selectedItem ? <Homepage /> : <ItemCard item={selectedItem} />}
      </div>

      <Footer />
    </>
  );
}

export default App;
