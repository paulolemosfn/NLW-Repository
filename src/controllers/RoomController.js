const Database = require("../db/config")

module.exports = {

    async create(req, res) {
        const db = await Database();
        const pass = req.body.password
       
        let roomId;
        let isRoom = true;

        while (isRoom){
            /*Define o numero da sala*/
            for (var i = 0; i < 6; i++) {
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
                roomId += Math.floor(Math.random() * 10).toString();
            }
            /* verifica se o numero da sala já existe*/
            const roomsExistIds = await db.all(`SELECT id FROM rooms`)
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
        }
        await db.close();

        res.redirect(`/room/${roomId}`);
        // console.time('inicio')
        // const roomsExistIds = await db.all(`SELECT id FROM rooms`);

        // do {
        //     for (let i = 0; i < 6; i++) {
        //         i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
        //             roomId += Math.floor(Math.random() * 10).toString();
        //     }

        // } while (roomsExistIds.some(roomsExistId => roomsExistId === roomId));

        // await db.run(`INSERT INTO rooms(
        //                  id,
        //                  pass     
        //              ) VALUES(
        //                  ${parseInt(roomId)}, 
        //                  '${pass}'
        //              )`); /*Primeiro você deve passar a ordem dos items na tabela e logo depois os valores dela.*/


        // console.timeEnd('inicio')

        /*Insere a sala no banco*/

    },

    async open(req, res) {
        const db = await Database();
        const roomId= req.params.room;
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`);
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`);


        res.render("room", {roomId: roomId, questions: questions, questionsRead: questionsRead});
    },

    enter(req, res) {
        const roomId = req.body.roomId;

        res.redirect(`/room/${roomId}`);
    }
}