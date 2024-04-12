import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ButtonOutline, ButtonWithIcon } from "../Buttons/Buttons";
import "./Card.css";
export function CardProduct() {
  return (
    <div className="card">
      <h3>Cinta adhesiva</h3>
      <div className="card-img">
        <img
          src="https://acdn.mitiendanube.com/stores/001/175/039/products/cinta-ancha-transparente1-291557c26e0985d17815967556067768-1024-1024.webp"
          alt="image-product"
        />
      </div>
      <div className="info-product">
        <form action="">
          <div className="form-component">
            <label for="stock">Stock</label>
            <input
              className="form-item"
              type="number"
              name="stock"
              value="526"
              readonly
            />
          </div>
          <div className="form-component">
            <label for="rubro">Rubro</label>
            <i className="bi bi-caret-down-fill"></i>
            <select className="form-item" name="rubro" id="rubro" readonly>
              <option value="Insumos">Insumos</option>
            </select>
          </div>
          <div className="form-component">
            <label for="subrubro">Sub-rubro</label>
            <i className="bi bi-caret-down-fill"></i>
            <select className="form-item" name="subrubro" id="surubro" readonly>
              <option value="Cintas">Cintas</option>
            </select>
          </div>
          <div className="form-component">
            <label for="activo">Activo</label>
            <i className="bi bi-caret-down-fill"></i>
            <select className="form-item" name="activo" id="activo" readonly>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>
          </div>
        </form>
        <div className="buttons-action">
            <ButtonOutline
            name={'editar'}
            id={'edit'}
            >Editar</ButtonOutline>
            <ButtonOutline
            name={'eliminar'}
            id={'delete'}
            >Eliminar</ButtonOutline>
        </div>
      </div>
    </div>
  );
}
