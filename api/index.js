//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require('axios');
const sequelize = require('sequelize');//cargue sequelize porque uso el metodo FindOrCreate


// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  
    try {
      const getApiData = await axios.get("http://restcountries.com/v3.1/all");
      console.log(getApiData.data) 
      getApiData.data.forEach(pais => {
          //console.log(getApiData.data) Me revento la Terminal, me parecio necesario saber que llegaba.
          //Quizas tendria que haberlo hecho una linea mas arriba.
        Country.findOrCreate(
          {
            where: { name: pais.name.common },
            where: { nameOfficial: pais.name.official },
            defaults: {
              id: pais.cca3,
              name: pais.name.common,
              nameOfficial: pais.name.official,
              continents: pais.continents,
              subregion: pais.subregion || 'empty',
              capital: pais.capital || ['empty'],
              flags: pais.flags.svg,
              borders: pais.borders || 'empty',
              area: pais.area,
              population: pais.population,
              languages: pais.languages.spa,
            }
          } 
        ) 
      });

  //console.log( Country);

    } catch (error) {
      res.status(404).json({error});
    }
  
    console.log('Countries loaded to the database.');

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
