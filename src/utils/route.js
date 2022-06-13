import path from 'path-browserify'

export const filterRoutes = routes => {
  const childrenRoutes = []
  routes.forEach(route => {
    if (route.children && route.children.length > 0) {
      childrenRoutes.push(...route.children)
    }
  })
  return routes.filter(route => {
    return !childrenRoutes.find(childrenRoute => {
      return childrenRoute.path === route.path
    })
  })
}

function isNull (data) {
  if (!data) return false
  if (JSON.stringify(data) === '{}') return false
  if (JSON.stringify(data) === '[]') return false
  return true
}
// !为空
export const generateRoutes = (routes, baseUrl = '') => {
  const result = []
  routes.forEach(route => {
    const routePath = path.resolve(baseUrl, route.path)
    if (!isNull(route.children) && !isNull(route.meta)) return
    if (isNull(route.children) && !isNull(route.meta)) {
      result.push(...generateRoutes(route.children))
      return
    }
    let data = result.find(route => route.path === routePath)
    if (!data) {
      data = {
        ...route,
        path: routePath,
        children: []
      }
      if (data.meta.sidebar) {
        result.push(data)
      }
    }
    if (isNull(route.children) && isNull(route.meta)) {
      data.children.push(...generateRoutes(route.children, route.path))
    }
  })
  return result
}
