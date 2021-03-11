import path from 'path'
import express from 'express'
import config from '../config/config'
import { getMatchListByPuuid } from './services/match'

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'back/views'))

app.get('/', async (req, res) => {
  res.render('home', {
    matchList: JSON.stringify(await getMatchListByPuuid()),
  })
})

app.listen(config.SERVER_PORT, () => {
  console.log('Example app listening on port 3000!')
})
