import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext=createContext()  //context oluşturuldu
export const ThemeProvider=({children})=>{  
const [theme,setTheme]=useState(localStorage.getItem("theme"))  //değerler local storagedan alındı.
useEffect(()=>{
    localStorage.setItem("theme",theme) //değerler local storage a kaydedildi.
},[theme])

const values={//değerleri objecte kaydetme
 theme,
 setTheme,
}
    return <ThemeContext.Provider  value={values}>{children}</ThemeContext.Provider> 
}

export const useTheme=()=>useContext(ThemeContext)