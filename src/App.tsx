import useRouteElements from './useRouteElements'

function App() {
  const routeElement = useRouteElements()
  return <div className='App'>{routeElement}</div>
}

export default App
