import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const LikeSchema = new Schema({
  userEmail: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  restauranteId: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurante',
    required: true,
    
  },
  cantidad: {
    type: Number,
    default: 1,
    min: 1,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

const Like = model('Like', LikeSchema);

export default Like;
