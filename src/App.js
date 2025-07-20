import './App.css';
import { Contact } from './contact/contact';
import Header from './headerFooter/Header';
import { Footer } from './headerFooter/footer';
import { Faq } from './faq/faq';
import { Team } from './team/team';
import { About } from './about/about';
import { BlogDetails } from './blogDetails/blogDetails';
import { Services } from './servicesPage/services';
import { ServiceSingle } from './serviceSingle/serviceSingle';
import Home from './home/Home';
import { Blog } from './blog/blog';
import { Project } from './project/project';
import { Terms } from './Allterms/terms';
import { Cookies } from './Allterms/cookies';
import { Privacy } from './Allterms/privacy';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { SmoothScroll } from './refresh/SmoothScroll';
import CatalogPage from './catalog/CatalogPage';
import AppointmentPage from './appointment/AppointmentPage';
import ProductPage from './product/ProductPage';
import CartPage from './cart/CartPage';
import Login from './auth/Login';
import Signup from './auth/Signup';
import OrderHistory from './order/OrderHistory';
import ProtectedRoute from './privateroute/ProtectedRoute';
import { AuthProvider } from './auth/AuthContext';
import ForgotPassword from './auth/ForgotPassword';
import ProfilePage from './profile/ProfilePage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <SmoothScroll />
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route
            path="/catalog"
            element={
              <ProtectedRoute>
                <CatalogPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointment"
            element={
              <ProtectedRoute>
                <AppointmentPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order-history"
            element={
              <ProtectedRoute>
                <OrderHistory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          <Route path="/faq" element={<Faq />} />
          <Route path="/team" element={<Team />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-single" element={<ServiceSingle />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies-policy" element={<Cookies />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
