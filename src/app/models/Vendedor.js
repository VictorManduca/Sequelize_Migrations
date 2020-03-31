module.exports = (sequelize, DataTypes) => {
  const Vendedor = sequelize.define("Vendedor", {
    Nome: DataTypes.STRING,
    Senha: DataTypes.STRING,
  }, {
    timestamps: false,
    freezeTableName: true,
  });

  return Vendedor;
};