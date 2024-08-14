import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// by default all the files of the project are loded in the browser which causes slowdown of the application, so we will load only necessary files.
import { lazy, Suspense } from "react"
import Loader from "./components/Loader"

const Home = lazy(() => import("./screens/Home"))
const Search = lazy(() => import("./screens/Search"))
const Cart = lazy(() => import("./screens/Cart"))

// import Home from "./screens/Home"
// import Search from "./screens/Search"
// import Cart from "./screens/Cart"

const App = () => {
  return (
    <Router>
      {/* Header */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/search" element={ <Search />} />
          <Route path="/cart" element={ <Cart />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
