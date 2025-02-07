import app from './src/app.js'

const PORT = 3000

//escutar a porta padrão
app.listen(PORT, () => {
    console.log(`Servidor Rodando no endereço http://localhost:${PORT}`)
})
