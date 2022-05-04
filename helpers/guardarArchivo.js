const fs = require('fs');
const archivo = './db/data.json';

const guardarDB = (data) => {
    fs.writeFileSync(archivo,JSON.stringify(data));//Ojo con eso
}

const leerDB =()=>{
    if(!fs.existsSync(archivo)){//En caso que no exista el archivo
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    const data = JSON.parse(info)
    console.log( data  );
    return  data ;
}

module.exports = {
    guardarDB,
    leerDB
}