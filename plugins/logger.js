export default ({ app }) => {
  app.router.beforeEach((to, form, next) => {
    console.log(`[ROUTER] move to '${to.fullPath}'`)
    next()
  })
}
