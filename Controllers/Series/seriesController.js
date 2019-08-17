module.exports.allSeries = (app, req, res) => {

    const connection = app.config.dbConnection()
    const SeriesDAO = new app.Models.SeriesDAO(connection)

    SeriesDAO.allSeries((error, records) => {

        error ? res.status(500).json(error) : res.status(200).json(records.rows)
        connection.end()

    })

}

module.exports.insertSerie = (app, req, res) => {

    const data = req.body
    const connection = app.config.dbConnection()
    const SeriesDAO = new app.Models.SeriesDAO(connection)

    SeriesDAO.insertSerie(data, (error, records) => {

        error ? res.status(500).json(error) : res.status(201).json({ msg: 'created'})
        connection.end()

    })

}

module.exports.updateSerie = (app, req, res) => {

    const id = req.params.id
    const data = req.body
    const connection = app.config.dbConnection()
    const SeriesDAO = new app.Models.SeriesDAO(connection)

    SeriesDAO.updateSerie(id, data, (error, records) => {

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

module.exports.deleteSerie = (app, req, res) => {

    const id = req.params.id
    const connection = app.config.dbConnection()
    const SeriesDAO = new app.Models.SeriesDAO(connection)

    SeriesDAO.deleteSerie(id, (error, records) => {

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