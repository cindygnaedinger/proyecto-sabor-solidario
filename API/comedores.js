import model from '../models/comedores-mongodb.js';


///////////////////////////////////////////////////////////////////////////////
//                                API Get All                                //
///////////////////////////////////////////////////////////////////////////////

const getComedores = async () => await model.readComedores();


///////////////////////////////////////////////////////////////////////////////
//                                API Get One                                //
///////////////////////////////////////////////////////////////////////////////

const getComedor = async id => {
    const Comedor = await model.readComedor(id);
    return Comedor;
};


////////////////////////////////////////////////////////////////////////////////
//                                 API Create                                 //
////////////////////////////////////////////////////////////////////////////////

const createComedor = async Comedor => {
    const createdComedor = await model.createComedor(Comedor);
    return createdComedor;
};


////////////////////////////////////////////////////////////////////////////////
//                                 API Update                                 //
////////////////////////////////////////////////////////////////////////////////

const updateComedor = async (id, Comedor) => {
    const updatedComedor = await model.updateComedor(id, Comedor);
    return updatedComedor;
};


////////////////////////////////////////////////////////////////////////////////
//                                 API Delete                                 //
////////////////////////////////////////////////////////////////////////////////`

const deleteComedor = async id => {
    const removedComedor = await model.deleteComedor(id);
    return removedComedor;
};
export default {
    getComedores,
    getComedor,
    createComedor,
    updateComedor,
    deleteComedor
};