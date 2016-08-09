/**
 * Pokemon.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      unique: true,
      required: true
    },
    descripcion: {
      type: 'string',
      required: true
    },
    imagen: {
      type: 'string'
    },
    numeroDePokemon: {
      type: 'integer',
      required: true,
      unique: true
    },
    habilidad: {
      type: 'string',
      required: true
    },
    habilidadOculta: {
      type: 'string'
    },
    color: {
      type: 'string'
    },
    velocidad: {
      type: 'integer',
    },
    fortaleza: {
      type: 'integer'
    },
    precision: {
      type: 'integer'
    },
    resistencia: {
      type: 'integer'
    },
    salto: {
      type: 'integer'
    }
  }
};
