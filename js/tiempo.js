const url = "https://api.openweathermap.org/data/2.5/weather?lat=-24.1836945&lon=-65.331915&appid=6b554fdc1e9a503f1a909b9a07d6fb66"
const div = document.querySelector('.clima');

fetch(url)
    .then(response => response.json())
    .then(response => {
        datosClimas(response);
        console.log(response);
    })
    .catch(err => console.error(err));


const datosClimas = (clima) => {
    div.innerHTML += `
                        <div class="clima_description_texto">
                            <h3>${clima.name}</h3>
                            <div class="temperatura">
                            <h2>${temperatura(clima.main.temp)} °C</h2>
                            <img src="http://openweathermap.org/img/wn/${clima.weather[0].icon}.png" alt="" />
                            </div>
                            <h3>Humedad: ${clima.main.humidity} %</h3>
                            <h3>Presión: ${clima.main.pressure} hPa</h3>
                            <h3>Temperarura max: ${temperatura(clima.main.temp_max)} °C</h3>
                            <h3>Temperatura min: ${temperatura(clima.main.temp_min)} °C</h3>
                            <h3>Velocidad del viento: ${clima.wind.speed} m/s</h3>
                            <h3>Dirección del viento: ${clima.wind.deg}°</h3>
                        </div>
                        <div class="clima_description_maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1819.8369511290678!2d
                        ${clima.coord.lon}!3d
                        ${clima.coord.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0ee2033f07f3%3A0xc77a811c6a4b0561!
                        2sCiudad%20Cultural!5e0!3m2!1ses!2sar!4v1661100943276!5m2!1ses!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                               </div>

                    `;

}

function temperatura(grado) {
    return Math.trunc(grado - 273.15);
}