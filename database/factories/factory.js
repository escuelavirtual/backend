const factory = (data, iterator, mods) => {

    console.log(mods);
    let list = [];
    if (mods != undefined){     
        data = Object.assign(data, mods);
    }

    for(let i = 0; i < iterator; i++){
        list.push(data); 
    };

    
   

    return list;
}

module.exports = factory;