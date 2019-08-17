module.exports = (app) => {

    app.get('/api/series', (req, res) => {
        app.Controllers.Series.seriesController.allSeries(app, req, res)
    })

    app.post('/api/series', (req, res) => {
        app.Controllers.Series.seriesController.insertSerie(app, req, res)
    })

    app.put('/api/series/:id', (req, res) => {
        app.Controllers.Series.seriesController.updateSerie(app, req, res)
    })

    app.delete('/api/series/:id', (req, res) => {
        app.Controllers.Series.seriesController.deleteSerie(app, req, res)
    })

}