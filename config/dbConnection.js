const pg = require('pg')
require('dotenv/config')

const connPG = () => {

    const connString = process.env.DATABASE_URL
    const conexao = new pg.Client(connString)
    return conexao

}

module.exports = () => {
    return connPG
}