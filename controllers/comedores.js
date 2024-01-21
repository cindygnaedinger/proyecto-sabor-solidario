const apiComedores = require('../API/comedores.js');

////////////////////////////////////////////////////////////////////////////////
//                               GET Controller                               //
////////////////////////////////////////////////////////////////////////////////`

const getComedoresController = async (req, res) => {
  const comedores = await apiComedores.getAllComedores();
  res.json(comedores);
};

const getComedorController = async (req, res) => {
  const id = req.params.id;

  const comedor = await apiComedores.getComedor(id);
  res.json(comedor);
};

///////////////////////////////////////////////////////////////////////////////
//                              POST Controller                              //
///////////////////////////////////////////////////////////////////////////////

const postComedorController = async (req, res) => {
  const {
    nombre,
    calle,
    altura,
    barrio,
    telefono,
    representante,
    horario_atencion,
    sitioweb,
    breve_descripcion,
    necesidades,
    urgencia,
    email,
  } = req.body;
  const comedor = {
    nombre,
    calle,
    altura,
    barrio,
    telefono,
    representante,
    horario_atencion,
    sitioweb,
    breve_descripcion,
    necesidades,
    urgencia,
    email,
  };

  const newComedor = await apiComedores.createComedor(comedor);
  res.json(newComedor);
};

//                               PUT Controller                               //

const putComedorController = async (req, res) => {
  const id = req.params.id;

  const {
    nombre,
    calle,
    altura,
    barrio,
    telefono,
    representante,
    horario_atencion,
    sitioweb,
    breve_descripcion,
    necesidades,
    urgencia,
    email,
  } = req.body;
  const comedor = {
    id,
    nombre,
    calle,
    altura,
    barrio,
    telefono,
    representante,
    horario_atencion,
    sitioweb,
    breve_descripcion,
    necesidades,
    urgencia,
    email,
  };

  const updatedComedor = await apiComedores.updateComedor(id, comedor);
  res.json(updatedComedor);
};

//                             DELETE Controller                             //

const deleteComedorController = async (req, res) => {
  const id = req.params.id;

  const removedComedor = await apiComedores.deleteComedor(id);
  res.json(removedComedor);
};

module.exports = {
  getComedoresController,
  getComedorController,
  postComedorController,
  putComedorController,
  deleteComedorController,
};
