const mongooseDB = require('mongoose');
require('dotenv').config({ path: '.env' });

let connected = false;

const connectDB = async () => {
  try {
    await mongooseDB.connect(process.env.MONGO_DB_STR);
    console.log('Conexión con MongoDB exitosa');
    connected = true;
  } catch (error) {
    console.error(
      `Se produjo un error al intentar establecer la conexión con MongoDB: ${error.message}`
    );
  }
};

const comedoresSchema = mongooseDB.Schema({
  nombre: String,
  calle: String,
  altura: Number,
  barrio: String,
  telefono: Number,
  representante: String,
  horario_atencion: String,
  sitioweb: String,
  breve_descripcion: String,
  necesidades: Array,
  urgencia: Number,
  email: String,
});

const donadoresSchema = mongooseDB.Schema({
  nombre: String,
  apellido: String,
  telefono: Number,
  email: String,
  donaciones: Array,
  cantidadDonaciones: Number,
});

const comedoresModel = mongooseDB.model('comedores', comedoresSchema);
const donadoresModel = mongooseDB.model('donadores', donadoresSchema);

const createComedor = async (comedor) => {
  try {
    const newComedor = new comedoresModel(comedor);
    await newComedor.save();
    return newComedor;
  } catch (error) {
    console.error(
      `Se produjo un error al intentar dar de alta el comedor: ${error.message}`
    );
    return {};
  }
};

const createDonador = async (donador) => {
  try {
    const newDonador = new donadoresModel(donador);
    await newDonador.save();
    return newDonador;
  } catch (error) {
    console.error(
      `Se produjo un error al intentar dar de alta el donador: ${error.message}`
    );
    return {};
  }
};

const readComedores = async () => {
  try {
    const comedores = await comedoresModel.find({});
    return comedores;
  } catch (error) {
    console.error(
      `Se produjo un error al intentar obtener los comedores: ${error.message}`
    );
    return [];
  }
};

const readComedor = async (id) => {
  try {
    const comedor = (await comedoresModel.findById(id)) || {};
    return comedor;
  } catch (error) {
    console.error(
      `Se produjo un error al intentar obtener el comedor especificado: ${error.message}`
    );
    return {};
  }
};

const readDonadores = async () => {
  try {
    const donadores = await donadoresModel.find({});
    return donadores;
  } catch (error) {
    console.error(
      `Se produjo un error al intentar obtener los donadores: ${error.message}`
    );
    return [];
  }
};

const readDonador = async (id) => {
  try {
    const donador = (await donadoresModel.findById(id)) || {};
    return donador;
  } catch (error) {
    console.error(
      `Se produjo un error al intentar obtener el donador especificado: ${error.message}`
    );
    return {};
  }
};

const updateComedor = async (id, comedor) => {
  try {
    const updatedComedor = await comedoresModel.findByIdAndUpdate(
      id,
      { $set: comedor },
      {
        returnDocument: 'after',
      }
    );
    return updatedComedor;
  } catch (error) {
    console.error(
      `Se produjo un error al intentar modificar el comedor especificado: ${error.message}`
    );
    return {};
  }
};

const updateDonador = async (id, donador) => {
  try {
    const updatedDonador = await donadoresModel.findByIdAndUpdate(
      id,
      { $set: donador },
      {
        returnDocument: 'after',
      }
    );
    return updatedDonador;
  } catch (error) {
    console.error(
      `Se produjo un error al intentar modificar el donador especificado: ${error.message}`
    );
    return {};
  }
};

const deleteComedor = async (id) => {
  try {
    const removedComedor = (await comedoresModel.findByIdAndDelete(id)) || {};
    return removedComedor;
  } catch (error) {
    console.error(
      `Se produjo un error al intentar eliminar el comedor especificado: ${error.message}`
    );
  }
};

const deleteDonador = async (id) => {
  try {
    const removedDonador = (await donadoresModel.findByIdAndDelete(id)) || {};
    return removedDonador;
  } catch (error) {
    console.error(
      `Se produjo un error al intentar eliminar el donador especificado: ${error.message}`
    );
  }
};

module.exports = {
  createComedor,
  readComedores,
  readComedor,
  updateComedor,
  deleteComedor,
  createDonador,
  readDonadores,
  readDonador,
  deleteDonador,
  updateDonador,
  connectDB,
};
