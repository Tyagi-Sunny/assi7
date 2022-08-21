"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert(
      "Employees",
      [
        {
          firstName: "Deepak",
          middleName: "NA",
          lastName: "Kumar",
          email: "deepak.kumar@sourcefuse.com",
          contact: 8559010326,
          role: "Snr. Tech lead",
          address: "Mohali",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Sunny",
          middleName: "NA",
          lastName: "Tyagi",
          email: "sunny.tyagi@sourcefuse.com",
          contact: 6396786017,
          role: "Web-Apps Engineer",
          address: "GZB",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Samarpan",
          middleName: "NA",
          lastName: "Bhattacharya",
          email: "samarpan.bhattacharya@sourcefuse.com",
          contact: 9999909854,
          role: "Principal Architect",
          address: "Mohali",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
