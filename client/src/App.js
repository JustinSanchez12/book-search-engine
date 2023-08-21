import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo-client-instance'; // Import your Apollo Client instance
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import SignupForm from './components/SignupForm'; // Import your SignupForm component
import LoginForm from './components/LoginForm'; // Import your LoginForm component

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<SearchBooks />} />
            <Route path="/saved" element={<SavedBooks />} />
            <Route path="/signup" element={<SignupForm />} /> {/* Add a route for SignupForm */}
            <Route path="/login" element={<LoginForm />} /> {/* Add a route for LoginForm */}
            <Route
              path="*"
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
