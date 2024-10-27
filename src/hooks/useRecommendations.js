import { useEffect, useState } from 'react';
import axios from 'axios'; // For API calls once backend is connected

const useRecommendations = (userId) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchRecommendations = async () => {
      setLoading(true);
      setError(null);
      try {
        // Replace the URL with the actual API endpoint
        const response = await axios.get(`https://api.example.com/recommendations?userId=${userId}`);
        setRecommendations(response.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch recommendations');
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [userId]);

  return { recommendations, loading, error };
};

export default useRecommendations;
