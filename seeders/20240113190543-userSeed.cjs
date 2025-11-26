'use strict';
const bcrypt = require('bcrypt');
const {genUsers} = require('../factories/userFactory.cjs')

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
  //   await queryInterface.bulkInsert('users', [{
  //     firstName: 'Michael',
  //     lastName: 'Jordan',
  //     email: 'mj@bulls.com',
  //     password: await bcrypt.hash('23', 10),
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   },
  //   {
  //     firstName: 'Scottie',
  //     lastName: 'Pippen',
  //     email: 'sp@bulls.com',
  //     password: await bcrypt.hash('33', 10),
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   }], {});
  // },
  const users = await genUsers(4);
  await queryInterface.bulkInsert('users', users, {});
},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};

/*
El segundo argumento de la función hash, 10 en este caso, representa el "coste" o el número de rondas que el algoritmo de hash va a
realizar durante el proceso de hashing. Este coste determina cuánto tiempo tomará calcular el hash. Un coste más alto resultará en 
un hash más seguro, pero también requerirá más tiempo para calcular.

El valor de 10 es solo un ejemplo. Puedes ajustar este valor según tus necesidades de rendimiento y seguridad. Cuanto mayor sea
el coste, más segura será la contraseña, pero también requerirá más tiempo para calcular el hash. Por otro lado, un coste más bajo hará que 
el hash se calcule más rápidamente, pero también será menos seguro.

Es importante tener en cuenta que el coste debe ser un número entre 4 y 31. Si se proporciona un número fuera de este rango, bcrypt
lanzará un error
*/


/*
Para verificar una variable almacenada con bcrypt:
const storedHash = '$2b$10$Q4QD5XxnJyFZqvZGX/fzVuFHJfZ0I8L3u/LWU9V4w8H2JJZ6m/6'; 
const plainTextPassword = 'password'; 

bcrypt.compare(plainTextPassword, storedHash, (err, result) => {
   if (result) {
       console.log("La contraseña es válida");
   } else {
       console.log("La contraseña no es válida");
   }
});
*/