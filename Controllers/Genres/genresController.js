module.exports.allGenres = (app, req, res) => {

    const connection = app.config.dbConnection()
    const GenresDAO = new app.Models.GenresDAO(connection)

    GenresDAO.allGenres((error, records) => {

        error ? res.status(500).json(error) : res.status(200).json(records.rows)
        connection.end()

    })

}

module.exports.insertGenre = (app, req, res) => {

    const data = req.body
    const connection = app.config.dbConnection()
    const GenresDAO = new app.Models.GenresDAO(connection)

    GenresDAO.insertGenre(data, (error, records) => {

        error ? res.status(500).json(error) : res.status(201).json({ msg: 'created'})
        connection.end()

    })

}

module.exports.updateGenre = (app, req, res) => {

    const id = req.params.id
    const data = req.body
    const connection = app.config.dbConnection()
    const GenresDAO = new app.Models.GenresDAO(connection)

    GenresDAO.updateGenre(id, data, (error, records) => {

        if (error) {
            res.status(500).json(error)
            connection.end()
        } else if (records.rowCount) {
            res.status(200).json({
                msg: 'updated',
                rows_affected: records.rowCount
            })
            connection.end()
        } else {
            res.status(204).json({ msg: 'data not found' })
            connection.end()
        }

    })

}

module.exports.deleteGenre = (app, req, res) => {

    const id = req.params.id
    const connection = app.config.dbConnection()
    const GenresDAO = new app.Models.GenresDAO(connection)

    GenresDAO.deleteGenre(id, (error, records) => {

        if (error) {
            res.status(500).json(error)
            connection.end()
        } else if (records.rowCount) {
            res.status(200).json({
                msg: 'deleted',
                rows_affected: records.rowCount
            })
            connection.end()
        } else {
            res.status(204).json({ msg: 'data not found' })
            connection.end()
        }

    })

}