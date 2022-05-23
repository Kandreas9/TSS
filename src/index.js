import express from 'express'
import cors from 'cors'

import mongoConnection from './core/mongoConnection.js'
import parseRes from './core/parseRes.js'
import routes from './core/routes.js'
import server from './core/server.js'

const app = express()

app.disable('x-powered-by') //Disable Express Signature

app.use(
    cors({
        origin: 'https://true-self.netlify.app/',
    }),
)
mongoConnection()
parseRes(app)
routes(app)
server(app)
