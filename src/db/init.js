const Database= require('./config');

const initDb={
    async init(){
        const db = await Database(); /* a propriedade 'await' obriga o JS a esperar o retorno da função antes de executar a proxima linha */

        /*Comandos na linguagem do SQL sempre são em LETRA MAIÚSCULA  */
        await db.exec(`
        CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);  
        /*Comandos na linguagem do SQL sempre são em LETRA MAIÚSCULA  */

        await db.exec(`CREATE TABLE questions(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            check INT
        )`);/*PRIMARY KEY é o comando que garante que o id solicitado vai ser único*/
    }
}

initDb.init();

