import './NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ShapeDeco } from '../ShapeDeco/ShapeDeco';

export function NavBar() {
    return (
        <nav>
            <div className="deco">
              <ShapeDeco color="#1CA393"/>  
            </div>
            <div className="deco deco-plus">
              <ShapeDeco color="rgb(52,209,191,0.25)"/>  
            </div>
            
            <p>Sistema de Inventarios</p>
            <div className="menu-actions">
                <AccountCircleIcon fontSize='large'/>
                <MenuIcon fontSize='large'/>
            </div>
        </nav>        
    )
}