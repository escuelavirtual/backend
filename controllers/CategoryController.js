const Category = require('../sequelize/models/category')


//list category
exports.listcategory = async (req, res) => {
   try{
       // Category. por limit 3 and order by name
      const category = await Category.findAll({
        limit:3,order:[
          ['name']
        ]
      })
       // console.log(category)
       if(category){
           return res.status(200).json(category)
       }

   }catch(error){
        console.log(error);
        res.status(500).json({msg:error});
   }
}