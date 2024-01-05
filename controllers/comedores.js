import api from '../API/comedores.js';

////////////////////////////////////////////////////////////////////////////////
//                               GET Controller                               //
////////////////////////////////////////////////////////////////////////////////`

const getComedores = async (req, res) => {
    const comedores = await api.getComedores();
    res.json(comedores);
};

const getComedor = async (req, res) => {
    const id = req.params.id;

    const comedor = await api.getComedor(id);
    res.json(comedor);
};


///////////////////////////////////////////////////////////////////////////////
//                              POST Controller                              //
///////////////////////////////////////////////////////////////////////////////

const postComedor = async (req, res) => {
    const {nombre, calle, altura, barrio, telefono, representante, horario_atencion, sitioweb, breve_descripcion, necesidades, urgencia, email} = req.body;
    const comedor = { nombre, calle, altura, barrio, telefono, representante, horario_atencion, sitioweb, breve_descripcion, necesidades, urgencia, email};

    const newComedor = await api.createComedor(comedor);
    res.json(newComedor);
};

//                               PUT Controller                               //

const putComedor = async (req, res) => {
    const id = req.params.id;

    const {nombre, calle, altura, barrio, telefono, representante, horario_atencion, sitioweb, breve_descripcion, necesidades, urgencia, email,} = req.body;
    const comedor = {id, nombre, calle, altura, barrio, telefono, representante, horario_atencion, sitioweb, breve_descripcion, necesidades, urgencia, email};

    const updatedComedor = await api.updateComedor(id, comedor);
    res.json(updatedComedor);
};

//                             DELETE Controller                             //


const deleteComedor = async (req, res) => {
    const id = req.params.id;

    const removedComedor = await api.deleteComedor(id);
    res.json(removedComedor);
};

export default {
    // getcomedores: getcomedores,
    getComedores,
    getComedor,
    postComedor,
    putComedor,
    deleteComedor
};