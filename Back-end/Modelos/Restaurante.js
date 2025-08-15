import mongoose from 'mongoose';

const restauranteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  status: { type: String, enum: ['activo', 'inactivo'], default: 'activo' },
  horario: {
        apertura: { type: String, required: true },
        cierre: { type: String, required: true }
    },
  fotos: {
  type: [String],
  validate: {
        validator: function (arr) {
            return arr.length <= 5; // máximo 5 fotos
            },
            message: 'No puedes subir más de 5 fotos.'
            }
        },
  descripcion: { type: String, required: true },
  ubicacion: String,
  whatsapp:  String ,
  telefono:  String ,
  location: {
    type: [Number],
    required: true
  }
,
  likes: {
    type: Number, 
    default: 0,
    min: 0
  },
  tipoComida: { type: String, required: true },
  calificacion: { type: Number, min: 0, max: 5, default: 0 },
  comentarios: [{
    usuario: { type: String},
    texto: { type: String },
    fecha: { type: Date, default: Date.now }
  }]
});

const Restaurante = mongoose.model('Restaurante', restauranteSchema);

export default Restaurante;
