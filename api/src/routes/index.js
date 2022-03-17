const { Router } = require('express');
const axios = require('axios');
const { Sequelize, Model, DataTypes } = require('sequelize');
//const { Country, Activity } = require('./models');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () => {
    const apiUrl = await axios.get("https://restcountries.com/v3/all");
    const apiInfo = await apiUrl.data.map(el => {
      return {
        id: el.id,
        name: el.name,
        flagImg: el.img,
        continente: el.region,
        capital: country.hasOwnProperty('capital') ? country.capital[0] : 'None',
        subregion: el.subregion,
        area: el.area,
        population: el.population
      };
    });
    console.log(apiInfo)
    return apiInfo;
   
  };

module.exports = router;
