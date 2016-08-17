#Introduction

Online service [openweathermap.org](https://openweathermap.org/) provides
retrial of weather reports all around the globe. This unofficial API written
in ECMA6 provides a way of accessing it, removes ambiguity and easier
conversion of units by using introducing [math.js](http://mathjs.org/index.html)
as a dependency.

#Usage

```
let weather = new OpenWeatherMapService('68d0d480aef21713ac9a46201def9301');

weather.current(44.82677, 20.45272)
    .then((weatherData) => {
        console.log(weatherData); // <-- Here is the weather report :)
    }).catch(error => {
        console.log(error);
    }
);
```