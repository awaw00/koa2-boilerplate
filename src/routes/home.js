import Router from 'koa-router'

const homeRouter = new Router()

homeRouter.get('/', async (ctx, next) => {
  await ctx.render('home', {
    msg: 'koa'
  })
})

export default homeRouter
