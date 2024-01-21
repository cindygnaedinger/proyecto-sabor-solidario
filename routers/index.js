const routeDonadores = require('./donadores');
const routeComedores = require('./comedores');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Bienvenido a Sabor Solidario');
});

router.use('/api/comedores', routeComedores);
router.use('/api/donadores', routeDonadores);

module.exports = router;
