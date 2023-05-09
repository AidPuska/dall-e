import Main from "./pages/Main"
import CreatePost from "./pages/CreatePost"
import RootLayout from "./layouts/RootLayout"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />} />
      <Route path="/create-post" element={<CreatePost />} />
    </Route>
  )
)

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App
