import mongoose from 'mongoose';
import config from '../config.js';

let connected = false;

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB_CONNECTION_STR, {
            serverSelectionTimeoutMS: config.MONGODB_CONNECTION_TIMEOUT
        });
        console.log('Conexión con MongoDB exitosa');
        connected = true;
    } catch (error) {
        console.error(`Se produjo un error al intentar establecer la conexión con MongoDB: ${error.message}`);
    }
};

const comedoresSchema = mongoose.Schema({
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
    email: String
});

const donadoresSchema = mongoose.Schema({
    nombre: String,
    apellido: String,
    telefono: Number,
    email: String,
    donaciones: Array,
    cantidadDonaciones: Number
});

const comedoresModel = mongoose.model('comedores', comedoresSchema);
const donadoresModel = mongoose.model('donadores', donadoresSchema);


////////////////////////////////////////////////////////////////////////////////
//                              CRUD - C: Create                              //
////////////////////////////////////////////////////////////////////////////////`

const createComedor = async comedor => {
    if (!connected) {
        console.error('Conexión no establecida');
        return {};
    }
    try {
        const newComedor = new comedoresModel(comedor);
        await newComedor.save();
        return newComedor;
    } catch (error) {
        console.error(`Se produjo un error al intentar dar de alta el comedor: ${error.message}`);
        return {};
    }
};

const createDonador = async donador => {
    if (!connected) {
        console.error('Conexión no establecida');
        return {};
    }
    try {
        const newDonador = new donadoresModel(donador);
        await newDonador.save();
        return newDonador;
    } catch (error) {
        console.error(`Se produjo un error al intentar dar de alta el comedor: ${error.message}`);
        return {};
    }
};

///////////////////////////////////////////////////////////////////////////////
//                               CRUD: R: Read                               //
///////////////////////////////////////////////////////////////////////////////

const readComedores = async () => {
    if (!connected) {
        console.error('Conexión no establecida');
        return [];
    }
    try {
        const comedores = await comedoresModel.find({});
        return comedores;
    } catch (error) {
        console.error(`Se produjo un error al intentar obtener los comedores: ${error.message}`);
        return [];
    }
};

const readComedor = async id => {
    if (!connected) {
        console.error('Conexión no establecida');
        return {};
    }
    try {
        const comedor = await comedoresModel.findById(id) || {};
        return comedor;        
    } catch (error) {
        console.error(`Se produjo un error al intentar obtener el comedor especificado: ${error.message}`);
        return {};
    }
}

const readDonadores = async () => {
    if (!connected) {
        console.error('Conexión no establecida');
        return [];
    }
    try {
        const donadores = await donadoresModel.find({});
        return donadores;
    } catch (error) {
        console.error(`Se produjo un error al intentar obtener los comedores: ${error.message}`);
        return [];
    }
};

const readDonador = async id => {
    if (!connected) {
        console.error('Conexión no establecida');
        return {};
    }
    try {
        const donador = await donadoresModel.findById(id) || {};
        return donador;        
    } catch (error) {
        console.error(`Se produjo un error al intentar obtener el comedor especificado: ${error.message}`);
        return {};
    }
}


////////////////////////////////////////////////////////////////////////////////
//                              CRUD - U: Update                              //
////////////////////////////////////////////////////////////////////////////////`

const updateComedor = async (id, comedor) => {
    if (!connected) {
        console.error('Conexión no establecida');
        return {};
    }
    try {
        const updatedComedor = await comedoresModel.findByIdAndUpdate(id, { $set: comedor }, {
            returnDocument: 'after'
        });
        return updatedComedor;
    } catch (error) {
        console.error(`Se produjo un error al intentar modificar el comedor especificado: ${error.message}`);
        return {};
    }
};

const updateDonador = async (id, donador) => {
    if (!connected) {
        console.error('Conexión no establecida');
        return {};
    }
    try {
        const updatedDonador = await donadoresModel.findByIdAndUpdate(id, { $set: donador }, {
            returnDocument: 'after'
        });
        return updatedDonador;
    } catch (error) {
        console.error(`Se produjo un error al intentar modificar el comedor especificado: ${error.message}`);
        return {};
    }
};


////////////////////////////////////////////////////////////////////////////////
//                              CRUD - D: Delete                              //
////////////////////////////////////////////////////////////////////////////////`

const deleteComedor = async id => {
    if (!connected) {
        console.error('Conexión no establecida');
        return {};
    }

    try {
        const removedComedor = await comedoresModel.findByIdAndDelete(id) || {};
        return removedComedor;
    } catch (error) {
        console.error(`Se produjo un error al intentar eliminar el comedor especificado: ${error.message}`);
    }
};

const deleteDonador = async id => {
    if (!connected) {
        console.error('Conexión no establecida');
        return {};
    }

    try {
        const removedDonador = await donadoresModel.findByIdAndDelete(id) || {};
        return removedDonador;
    } catch (error) {
        console.error(`Se produjo un error al intentar eliminar el comedor especificado: ${error.message}`);
    }
};


export default {
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
    connectDB
};