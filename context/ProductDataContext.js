// src/context/ProductDataContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchCompanyData } from '../services/api'; // Adjust based on your API file location

// Create a context
const ProductDataContext = createContext();

// Create a provider component
export const ProductDataProvider = ({ children }) => {
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch company data from the backend
  const loadCompanyData = async (companyId) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCompanyData(companyId);
      setCompanyData(data);
    } catch (err) {
      setError('Failed to load company data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Example: replace 'companyId' with the actual ID you're fetching data for
    loadCompanyData('companyId');
  }, []);

  return (
    <ProductDataContext.Provider value={{ companyData, loading, error, loadCompanyData }}>
      {children}
    </ProductDataContext.Provider>
  );
};

// Custom hook to use ProductDataContext
export const useProductData = () => {
  return useContext(ProductDataContext);
};
