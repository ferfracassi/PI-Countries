const { Router } = require('express');
const axios = require('axios');
const { Sequelize } = require('sequelize');
const { Country, Activity } = require('./models');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () => {
    const apiUrl = await axios.get("https://breakingbadapi.com/api/characters");
    const apiInfo = await apiUrl.data.map(el => {
      return {
        id: el.id,
        name: el.name,
        flagImg: el.img,
        continente: el.region,
        capital: el.capital,
        subregion: el.subregion,
        area: el.area,
        population: el.population,
        
        occupation: el.occupation.map(el => el),
        appearance: el.appearance.map(el => el),
        createdInDb: false,
      };
    });
    return apiInfo;
    
  };

module.exports = router;
