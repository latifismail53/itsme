const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Link = sequelize.define('Link', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'aff_links',
  timestamps: false
});

module.exports = Link;
