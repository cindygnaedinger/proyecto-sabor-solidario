import express from 'express';
import controller from '../controllers/comedores.js';

const routerComedores = express.Router();

///////////////////////////////////////////////////////////////////////////////
//                                 Rutas GET                                 //
///////////////////////////////////////////////////////////////////////////////`

routerComedores.get('/', controller.getComedores);

routerComedores.get('/:id', controller.getComedor);


////////////////////////////////////////////////////////////////////////////////
//                                 Rutas POST                                 //
////////////////////////////////////////////////////////////////////////////////

routerComedores.post('/', controller.postComedor);


////////////////////////////////////////////////////////////////////////////////
//                                 Rutas PUT                                  //
////////////////////////////////////////////////////////////////////////////////

routerComedores.put('/:id', controller.putComedor);


////////////////////////////////////////////////////////////////////////////////
//                                Rutas DELETE                                //
////////////////////////////////////////////////////////////////////////////////

routerComedores.delete('/:id', controller.deleteComedor);


// Método con CommonJS:
// module.exports = router;

// Método con ES Modules:
export default routerComedores;