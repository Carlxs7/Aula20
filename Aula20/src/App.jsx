import { useState } from "react";
import Card from "./components/Card";

const App = () => {

  const [produtos, setProdutos] = useState([]);

  async function buscarProdutos(){
    const request = await fetch("https://fakestoreapi.com/products");
    const response = await request.json();

    setProdutos(response);
  }

  return (
    <div>
      <header className="flex justify-between px-15 py-4 bg-yellow-300">
        <input type="text"
        placeholder="🔍 Digite o nome do produto" 
        className="h-12 bg-white pl-4 w-100 rounded-xl focus:outline-0"
        />

        <div className="flex gap-4">
          <select className="h-12 bg-white px-3 rounded-xl focus:outline-0">
            <option value="">Escolha a categoria</option>
          </select>

          <select className="h-12 bg-white px-3 rounded-xl focus:outline-0">
            <option value="">Escolha a ordem</option>
          </select>
        </div>

      </header>

      <div>
      

      </div>
    </div>
  );
}

export default App;