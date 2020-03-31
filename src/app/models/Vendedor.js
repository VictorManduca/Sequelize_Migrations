module.exports = (sequelize, DataTypes) => {
  const Vendedor = sequelize.define("Vendedor", {
    ID: DataTypes.INTEGER,
    Nome: DataTypes.STRING,
    Senha: DataTypes.STRING,
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return Vendedor;
};