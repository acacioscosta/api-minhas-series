module.exports = (app) => {

    app.get('/api/genres', (req, res) => {
        app.Controllers.Genres.genresController.allGenres(app, req, res)
    })

    app.post('/api/genres', (req, res) => {
        app.Controllers.Genres.genresController.insertGenre(app, req, res)
    })

    app.put('/api/genres/:id', (req, res) => {
        app.Controllers.Genres.genresController.updateGenre(app, req, res)
    })

    app.delete('/api/genres/:id', (req, res) => {
        app.Controllers.Genres.genresController.deleteGenre(app, req, res)
    })

}