const {client} = require('pg');

const client = new client ({
    host: "localHost",
     user: "postgres",
     port: 5432,
     password: "0000",
     database: "table1"
})

client.connect();

client.query(`Select * from users`,(res, err) => {
    if(!err){
        console.log(res, rows); 
    } else {console.log(err.message)}
    
    client.end(); 
})