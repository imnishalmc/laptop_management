const { DataTypes } = require("sequelize");

const laptopModel=(sequelize,DataTypes)=>{
    const laptop = sequelize.define("laptop",
        {//define bhitra table ko naam ra object hunxa 
        laptopModel:{
            type:DataTypes.STRING,
            allowNull:false
        },
        laptopPrice:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        laptopWarrenty:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        laptopColor:{
            type:DataTypes.STRING,
            
        },
        laptopCompany: {
        type:DataTypes.STRING
    }

    }
)
return laptop
}
module.exports=laptopModel
