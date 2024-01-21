const apiDonadores = require('../API/donadores.js');

////////////////////////////////////////////////////////////////////////////////
//                               GET Controller                               //
////////////////////////////////////////////////////////////////////////////////`

const getDonadoresController = async (req, res) => {
  const donadores = await apiDonadores.getDonadores();
  res.json(donadores);
};

const getDonadorController = async (req, res) => {
  const id = req.params.id;

  const comedor = await apiDonadores.getComedor(id);
  res.json(comedor);
};

///////////////////////////////////////////////////////////////////////////////
//                              POST Controller                              //
///////////////////////////////////////////////////////////////////////////////

const postDonadorController = async (req, res) => {
  const { nombre, apellido, telefono, email, donaciones, cantidadDonaciones } =
    req.body;
  const donador = {
    nombre,
    apellido,
    telefono,
    email,
    donaciones,
    cantidadDonaciones,
  };

  const newDonador = await apiDonadores.createDonador(donador);
  res.json(newDonador);
};

//                               PUT Controller                               //

const putDonadorController = async (req, res) => {
  const id = req.params.id;

  const { nombre, apellido, telefono, email, donaciones, cantidadDonaciones } =
    req.body;
  const donador = {
    nombre,
    apellido,
    telefono,
    email,
    donaciones,
    cantidadDonaciones,
  };

  const updatedDonador = await apiDonadores.updateDonador(id, donador);
  res.json(updatedDonador);
};

//                             DELETE Controller                             //

const deleteDonadorController = async (req, res) => {
  const id = req.params.id;

  const removedDonador = await apiDonadores.deleteDonador(id);
  res.json(removedDonador);
};

module.exports = {
  getDonadoresController,
  getDonadorController,
  postDonadorController,
  putDonadorController,
  deleteDonadorController,
};
