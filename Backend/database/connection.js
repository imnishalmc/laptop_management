const{Sequelize,DataTypes}=require("sequelize")


// password of supabase hellonish
const sequelize = new Sequelize("postgresql://postgres.nvafbpsbbvauuepndohq:hellonisha123456bh@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres")

sequelize.authenticate()
.then(()=>{
    console.log("database connected sucessfully")
})
.catch((err)=>{
    console.log("something went wrong " ,err)
})

const db={}
db.sequelize=sequelize
db.Sequelize=Sequelize

db.laptops=require("./models/laptopModel")(sequelize,DataTypes)//laptops is the name of the table 
module.exports=db

//this is the code of the migration
sequelize.sync({alter:true}).then(()=>{
    console.log("migrated sucessfully ")
})



