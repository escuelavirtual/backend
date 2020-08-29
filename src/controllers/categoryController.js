const Category = require('../models/category')


//list category
exports.listCategories = async (req, res) => {

    try{
      let page = req.query.page 
      //set page default undefined
      if(page == undefined){
        page = 1
      }
      //only show 2 data
      let showData = 2
      start = (page - 1) * showData  
      const category = await Category.findAndCountAll({
        offset:start,limit:showData,order:[
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
