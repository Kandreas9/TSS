// import baseRouter from '../modules/base/Router';
import truthMessageRouter from '../modules/truthMessage/Router.js'

const routes = (app) => {
    app.use('/truth-message', truthMessageRouter)
}

export default routes
