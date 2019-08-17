function GenresDAO(connection) {
    this._connection = connection
    this._connect = this._connection.connect()
}

GenresDAO.prototype.allGenres = function(callback) {
    
    const sql = `SELECT * FROM public.genres ORDER BY id_genre`

    this._connection.query(sql, callback)

}

GenresDAO.prototype.insertGenre = function(data, callback) {

    const name = data.name_genre

    const sql = `INSERT INTO public.genres (name_genre) VALUES ('${name}')`

    this._connection.query(sql, callback)

}

GenresDAO.prototype.updateGenre = function(id, data, callback) {
    
    const name = data.name_genre

    const sql = `UPDATE public.genres SET name_genre = '${name}' WHERE id_genre = ${id}`

    this._connection.query(sql, callback)

}

GenresDAO.prototype.deleteGenre = function(id, callback) {

    const sql = `DELETE FROM public.genres WHERE id_genre = ${id}`

    this._connection.query(sql, callback)

}

module.exports = () => {
    return GenresDAO
}