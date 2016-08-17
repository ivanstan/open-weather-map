/**
 * OpenWeatherMapService
 */
class OpenWeatherMapService {

    /**
     * @constructor
     *
     * @param key API key
     */
    constructor(key) {
        this.key = key;
    }

    /**
     * Return current weather report for location.
     * @see http://openweathermap.org/current
     *
     * @param latitude
     * @param longitude
     * @returns {Promise}
     */
    current(latitude, longitude) {
        let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.key}`;

        return new Promise((resolve, reject) => {
            $.ajax({
                url    : url,
                success: (data) => {
                    resolve({
                        windDirection  : math.unit(data.wind.deg, 'deg'),
                        windSpeed      : math.unit(data.wind.speed, 'm/s'),
                        sunrise        : new Date(data.sys.sunrise),
                        sunset         : new Date(data.sys.sunset),
                        time           : new Date(data.dt),
                        clouds         : data.clouds.all,
                        humidity       : data.main.humidity,
                        temp           : math.unit(data.main.temp, 'K'),
                        temp_min       : math.unit(data.main.temp_min, 'K'),
                        temp_max       : math.unit(data.main.temp_max, 'K'),
                        pressure       : math.unit(data.main.pressure, 'hPa'),
                        pressure_sea   : math.unit(data.main.sea_level, 'hPa'),
                        pressure_ground: math.unit(data.main.grnd_level, 'hPa')
                    });
                },
                error  : (jqXHR, textStatus, errorThrown) => {
                    reject(textStatus);
                }
            });

        });
    }
}
