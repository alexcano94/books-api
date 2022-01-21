const { validateRoute } = require('express-ajv-middleware');

const validateCreateBook = validateRoute({
  body: {
    type: 'object',
    properties: {
      titulo: {
        type: 'string'
      },
      precio: {
        type: 'number'
      },
      releaseDate: {
        type: 'string'
      },
      editorialId: {
        type: 'string'
      },
      genero: {
        type: 'array',
        minItems: 1,
      },
      descripcion: {
        type: 'string'
      },
      numPag: {
        type: 'number'
      },
      valoraciones: {
        type: 'array'
      },
      iban: {
        type: 'string'
      },
      stock: {
        type: 'number'
      }
    },
    required: [
      'titulo',
      'precio',
      'releaseDate',
      'editorialId',
      'genero',
      'descripcion',
      'numPag',
      'valoraciones',
      'iban',
      'stock'
    ]
  }
});

const validateUpdateBook = validateRoute({
  body: {
    type: 'object',
    properties: {
      titulo: {
        type: 'string'
      },
      precio: {
        type: 'number'
      },
      releaseDate: {
        type: 'string'
      },
      editorialId: {
        type: 'string'
      },
      genero: {
        type: 'array',
        minItems: 1,
      },
      descripcion: {
        type: 'string'
      },
      numPag: {
        type: 'number'
      },
      valoraciones: {
        type: 'array'
      },
      iban: {
        type: 'string'
      },
      stock: {
        type: 'number'
      }
    },
    required: [
      'titulo',
      'precio',
      'releaseDate',
      'editorialId',
      'genero',
      'descripcion',
      'numPag',
      'valoraciones',
      'iban',
      'stock'
    ]
  }
});

const validatePatchBook = validateRoute({
  body: {
    type: 'object',
    properties: {
      titulo: {
        type: 'string'
      },
      precio: {
        type: 'number'
      },
      releaseDate: {
        type: 'string'
      },
      editorialId: {
        type: 'string'
      },
      genero: {
        type: 'array',
        minItems: 1,
      },
      descripcion: {
        type: 'string'
      },
      numPag: {
        type: 'number'
      },
      valoraciones: {
        type: 'array'
      },
      iban: {
        type: 'string'
      },
      stock: {
        type: 'number'
      }
    },
    required: []
  }
});

module.exports = {
  validateCreateBook,
  validatePatchBook,
  validateUpdateBook,
} 