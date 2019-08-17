const app = require('./config/server')

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`API ON na porta: ${port}`)
})