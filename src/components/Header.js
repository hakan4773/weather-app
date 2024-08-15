import React, {useState} from 'react'
import { useTheme } from '../context/Theme'
function Header() {
const {theme,setTheme}=useTheme();
const [city, SetCity] = useState(theme || "");

const handleChange=(e)=> {
  SetCity(e.target.value);
  setTheme(e.target.value);
}

    return (

   <select className='options' onChange={handleChange} value={city}>
               <option value="istanbul" >istanbul</option>
                <option value="ankara">ankara</option>
                <option value="izmir">izmir</option>
                <option value="bursa">bursa</option>
                <option value="adana">adana</option>
                <option value="gaziantep">gaziantep</option>
                <option value="kayseri">kayseri</option>
                <option value="konya">konya</option>
                <option value="antalya">antalya</option>
                <option value="kastamonu">kastamonu</option>
                <option value="Mardin">Mardin</option>
                <option value="Mardin">Mardin</option>
                <option value="Şırnak">Şırnak</option>
                <option value="Kars">Kars</option>
                <option value="Rize">Rize</option>
                <option value="Sivas">Sivas</option>
    </select>



      
  )
}

export default Header
