const Database = require("../db/config")

module.exports = {

    async create(req, res){
        const db = await Database();
        const pass= req.body.password
        let roomId;
        let isRoom = true;
        while(roomsExistIds){


        }

        for (let i = 0; i < 6; i++) {
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
            roomId += Math.floor(Math.random() * 10).toString();
        }
        /* verifica se o numero da sala já existe*/
        const roomsExistIds = await db.all(`SELECT id FROM  rooms`)
        isRoom = roomsExistIds.some(roomsExistId => roomsExistId === roomId);

        if (!isRoom){
            await db.run(`INSERT INTO rooms(
                id,
                pass     
            ) VALUES(
                ${parseInt(roomId)}, 
                ${pass}
            )`); /*Primeiro você deve passar a ordem dos items na tabela e logo depois os valores dela.*/
        }
        /*Insere a sala no banco*/

        await db.close();

        res.redirect(`/room/${roomId}`);
    }
}