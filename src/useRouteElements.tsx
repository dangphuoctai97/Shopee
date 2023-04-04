import { useRoutes } from 'react-router-dom'
import RegisterLayout from './layouts/RegisterLayout'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'

const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElements
}

export default useRouteElements
