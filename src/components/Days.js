import React, { useEffect } from 'react';
import { useWeather } from '../context/Weather';
import  '../App.css'
function Days() {
  const { weather, loading } = useWeather();

 

  if (loading) { //yüklenirken loading yazısı
    return <div>Loading...</div>; 
  }
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });//bulunduğun günü alma
console.log(currentDay); 

  return (
    <div className='days'>
    {weather.list.map((item, index) => {
      if (index % 8 === 0 || index === 39) { /* Bu, belirli aralıklarla hava durumu günlerini seçmek için kullanılır. */
       
          const weatherDay = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });//gün ismi alınır
          const isToday = weatherDay === currentDay;//mevcut günün ismi ile karşılaştırılır.
          const borderClass = isToday ? 'border-today' : '';//günler eşitse kenarlık kullanılır
          return ( <div key={index} className={`day-item ${borderClass}`}>
                <h3 className='mt-3'>{weatherDay }</h3> 
                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='weatherIMG' />  {/* hava durumu ikonları çekildi */}
                <p><span className='temp'>{item.main.temp_max.toFixed(1)}°  {item.main.temp_min.toFixed(1)}°</span></p> {/* en yüksek ve en düşük sıcaklıklar alınır. */}
            </div>
        );
      }
      return null;  
    })}

  </div>
);
}
export default Days;
