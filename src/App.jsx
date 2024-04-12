import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import DataTable from "./components/Table/Table";
import { ButtonOutline, ButtonWithIcon } from "./components/Buttons/Buttons";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CardProduct } from "./components/Card/Card";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <main>
        <h2 className="title">Lista de Materiales</h2>
        <div className="container">
          <div style={{ height: 680, width: "70%" }}>
            <DataTable />
          </div>
          <aside>
            <ButtonWithIcon 
              name="Agregar artículo"
              icon={<AddCircleIcon/>}
            />
            <CardProduct/>
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
