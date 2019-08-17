function SeriesDAO(connection) {
    this._connection = connection
    this._connect = this._connection.connect()
}

SeriesDAO.prototype.allSeries = function(callback) {
    
    const sql = `SELECT * FROM public.series ORDER BY id_serie`

    this._connection.query(sql, callback)

}

SeriesDAO.prototype.insertSerie = function(data, callback) {

    const nameSerie = data.name_serie
    const status = data.status_serie
    const nameGenre = data.name_genre

    const sql = `INSERT INTO public.series (name_serie, status_serie, name_genre) VALUES ('${nameSerie}', '${status}', '${nameGenre}')`

    this._connection.query(sql, callback)

}

SeriesDAO.prototype.updateSerie = function(id, data, callback) {
    
    const nameSerie = data.name_serie
    const status = data.status_serie
    const nameGenre = data.name_genre

    const sql = `UPDATE public.series SET name_serie = '${nameSerie}', status_serie = '${status}', name_genre = '${nameGenre}' WHERE id_serie = ${id}`

    this._connection.query(sql, callback)

}

SeriesDAO.prototype.deleteSerie = function(id, callback) {

    const sql = `DELETE FROM public.series WHERE id_serie = ${id}`

    this._connection.query(sql, callback)

}

module.exports = () => {
    return SeriesDAO
}