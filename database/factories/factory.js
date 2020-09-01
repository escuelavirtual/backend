
exports.factory = (name, records) =>{
    const NameFactory = tipname(name)
    let rows = [];
   for (let i = 1; i <= records; i++) {
       console.log(records)
       console.log('data',i)
     rows.push(NameFactory);
   }
   return rows;

    
 };
