const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventosSchema = new Schema({
  nomEvento: { type: String, required: true, max: 60 },
  descripcion: { type: String, required: true, max: 40 },
  fecha: { type: String, required: true, max: 40 },
  hora: { type: String, required: true, max: 15 },
  numAsistentes: { type: String, required: true, max: 70 }
  
});

module.exports = mongoose.model('eventos', EventosSchema);
