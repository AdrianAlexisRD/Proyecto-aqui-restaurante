import mongoose from "mongoose";

const EstrellasSchema = new mongoose.Schema({
    restauranteId: {type: String, required: true },
    puntosEstrellas:{type: [Number], required: true}
});

const Estrellas = mongoose.model('Estrellas', EstrellasSchema);

export default Estrellas;