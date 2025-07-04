import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import { useAuth } from './context/AuthContext';
import AddProduct from './pages/AddProduct';
import AdminRoute from './components/AdminRoute';

const App = () => {
  const { user, logout } = useAuth(); // access user and logout from context

  return (
    <Router>
      <div className="p-4 bg-gray-100 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Ekomart</Link>
        <div className="space-x-4">
          {user ? (
            <>
              <span className="text-gray-600">Hi, {user.name}</span>
              <button
                onClick={logout}
                className="text-red-500 hover:underline"
              >
                Logout
              </button>
              <Link to="/cart" className="text-blue-600 hover:underline">🛒 Cart</Link>
              {user.isAdmin && (
                <Link to="/admin/add-product" className="text-blue-600 hover:underline">
                  Add Product
                </Link>
              )}
            </>
          ) : (
            <>
              <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
              <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
            </>
          )}
        </div>
      </div>

      <Routes>
        <Route path="/admin/add-product" element={<AdminRoute><AddProduct /></AdminRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><ProductList /></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
      </Routes>

    </Router>
  );
};

export default App;