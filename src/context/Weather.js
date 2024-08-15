import { createContext, useContext, useState,useEffect } from "react";
import axios from 'axios'
import { useTheme } from "./Theme";
const WeatherContext=createContext(); //context oluşturuldu.
export const WeatherProvider=({children})=>{

const [weather,SetWeather]=useState([]); 
const [loading, setLoading] = useState(true); 
const { theme: city, setTheme } = useTheme(); //city değişenini aldık Header dan

const apiKey = 'af380e96783ea3d2eb344da02864b224'; 
useEffect(() => {
    
    if (!city) return; //şehir yoksa boş döndürür.

    axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=en&appid=${apiKey}&cnt=40`)//5 günlük hava durumu verisi çekildi
      .then((response) => {
        SetWeather(response.data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); 
      });
  }, [city]);//şehir her değiştiğinde veriler güncellenir.

const values={
    weather,SetWeather,loading
}
return <WeatherContext.Provider value={values} >{children}</WeatherContext.Provider>
}

export const useWeather=()=>useContext(WeatherContext)