import Koa from 'koa'
import co from 'co'
import render from 'koa-ejs'
import routes from './routes'
import bodyParser from 'koa-bodyparser'
import morgan from 'koa-morgan'
import path from 'path'

const app = new Koa()

app.use(morgan('combined'))
app.use(bodyParser())

render(app, {
  root: path.resolve(__dirname, './views'),
  viewExt: 'ejs',
  layout: false
})
app.context.render = co.wrap(app.context.render)

routes.forEach((r) => app.use(r))

const port = 8088
app.listen(port, () => {
  console.log('Server listening at ' + port)
})
