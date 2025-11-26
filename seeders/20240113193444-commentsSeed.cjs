'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('comments', [{
      comentario: 'Deberías pasármela más, Michael',
      puntuacion: 4,
      userId : 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      comentario: 'Es que soy un poco chupón...',
      puntuacion: 5,
      userId : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      comentario: 'Que jugamos los 5!!!!',
      puntuacion: 2,
      userId : 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('comments', null, {});
  }
};
