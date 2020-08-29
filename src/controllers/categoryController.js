const Category = require('../models/category')


//list category
exports.listCategories = async (req, res) => {

    // const id = req.params.id
   try{
      let page = req.query.page 
      if(page == undefined){
        page = 1
      }
      mostrarpaginas=2
      start = (page - 1) * mostrarpaginas  
      const category = await Category.findAndCountAll({
        offset:start,limit:mostrarpaginas,order:[
          ['name']
        ]
      })
       if(category){
           return res.status(200).json(category)
       }

   }catch(error){
        console.log(error);
        res.status(500).json({msg:error});
   }
}