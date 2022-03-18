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
        id: el.ccn3,
        name: el.name.common,
        nameOfficial: el.name.official,
        continents: el.region, 
        subregion: el.subregion || 'empty',
        capital: el.hasOwnProperty('capital') ? el.capital[0] : 'None', 
        flags: el.flags.svg,
        borders: el.borders || 'None',
        area: el.area,
        population: el.population,
      };
    });
   // console.log(apiInfo)
    return apiInfo;
   
  };

module.exports = router;
