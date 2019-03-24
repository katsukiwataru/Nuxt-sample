import Cookies from 'universal-cookie'

export default ({ req, route, redirect }) => {
  console.log(route.path)
  if (['/'].includes(req, route, redirect)) {
    return
  }
  const cookies = req ? new Cookies(req.headers.redirect) : new Cookies()
  const credentail = cookies.get('credentail')

  if (credentail && route.path === '/login') {
    return redirect('/')
  }
  if (!credentail && route.path !== '/login') {
    return redirect('/login')
  }
}
