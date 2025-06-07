const { laptops } = require("../database/connection")

exports.fetchLaptop =async(req,res)=>{
  const datas= await laptops.findAll()
    res.json({
        message:"Laptop data fetched sucessfully",
        datas:datas
    })
  }
exports.fetchSingleLaptop=async(req,res)=>{
    const id=req.params.id
    const datas=  await laptops.findByPk(id)
    res.json({
        message:"single data fetched sucessfully",
        datas:datas
    })
}

exports.addLaptop = async(req,res)=>{
    const{laptopModel,laptopPrice,laptopWarrenty,laptopColor,laptopCompany }=req.body
    await laptops.create({
      laptopModel,
      laptopPrice,
      laptopWarrenty,
      laptopColor,
      laptopCompany
    })
    console.log(req.body,"yo respose")
res.json({
  message:"laptops info added sucessfully"
})
}

exports.deleteLaptop= async(req,res)=>{
 const id= req.params.id
 await laptops.destroy({
  where:{
    id
  }
 })
 res.json({
  message:"laptop info is deleted sucessfully"
 })
}

exports.editLaptop =async(req,res)=>{
  const id = req.params.id
 
  const{laptopModel,laptopPrice,laptopWarrenty,laptopColor,laptopCompany }=req.body

  await laptops.update({
    laptopModel,
    laptopPrice,
    laptopWarrenty,
    laptopColor,
    laptopCompany 
  },{
    where:{
      id
    }
  }
)
res.json({
  message:"message edited sucessfully"
})
}
// module.exports={fetchLaptop,fetchSingleLaptop,addLaptop,deleteLaptop,editLaptop}
