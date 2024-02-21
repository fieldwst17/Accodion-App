import "./App.css";
import Item from "./components/Item"; // Assuming the correct path
import logo from "./assets/logo.png";
import content from "./components/data/content";

function App() {
  return (
    <div>
      <img src={logo} alt="logo" className="w-200 h-200 block mx-auto p-10 mt-5"/>
      <h1 className="text-3xl text-center text-red-600 font-bold m-10">Web Development Tools in 2023</h1>
      {content.map((content) => {
        return <Item key={content.id} {...content} />
      })}
    </div>
  );
}

export default App;
