import express from 'express'

const app = express()

// indicar para o express ler o body com json
app.use(express.json())

//mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suíça', grupo: 'G'},
    {id: 3, selecao: 'Camarões', grupo: 'G'},
    {id: 4, selecao: 'Sérvia', grupo: 'G'},
]

function buscarSelecaoPorId(id){
    return selecoes.filter(selecao => selecao.id == id)
}

function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}

// criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.status(200).send('Olá Mundo!')
})

app.get('/selecoes/:id', (req, res) => {
    //let index = req.params.id
    res.json(buscarSelecaoPorId(req.params.id))
})

app.get('/selecoes', (req, res) => {
    res.send(selecoes)
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso!')
})

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send(`Seleçãocom id ${req.params.id}excluída com sucesso!`)
})

app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo   = req.body.grupo
    res.json(selecoes)
})

export default app
