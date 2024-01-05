import api from '../API/donadores.js';

////////////////////////////////////////////////////////////////////////////////
//                               GET Controller                               //
////////////////////////////////////////////////////////////////////////////////`

const getDonadores = async (req, res) => {
    const donadores = await api.getDonadores();
    res.json(donadores);
};

const getDonador = async (req, res) => {
    const id = req.params.id;

    const comedor = await api.getComedor(id);
    res.json(Donador);
};


///////////////////////////////////////////////////////////////////////////////
//                              POST Controller                              //
///////////////////////////////////////////////////////////////////////////////

const postDonador = async (req, res) => {
    const {nombre, apellido, telefono, email, donaciones, cantidadDonaciones} = req.body;
    const donador = { nombre, apellido, telefono, email, donaciones, cantidadDonaciones};

    const newDonador = await api.createDonador(donador);
    res.json(newDonador);
};

//                               PUT Controller                               //

const putDonador = async (req, res) => {
    const id = req.params.id;

    const {nombre, apellido, telefono, email, donaciones, cantidadDonaciones} = req.body;
    const donador = { nombre, apellido, telefono, email, donaciones, cantidadDonaciones};

    const updatedDonador = await api.updateDonador(id, donador);
    res.json(updatedDonador);
};

//                             DELETE Controller                             //


const deleteDonador = async (req, res) => {
    const id = req.params.id;

    const removedDonador = await api.deleteDonador(id);
    res.json(removedDonador);
};

export default {
    // getdonadores: getdonadores,
    getDonadores,
    getDonador,
    postDonador,
    putDonador,
    deleteDonador
};