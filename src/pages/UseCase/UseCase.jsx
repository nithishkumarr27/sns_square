import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UseCaseList() {
  const [useCases, setUseCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUseCases = async () => {
      try {
        const response = await fetch('/usecases.json');
        if (!response.ok) {
          throw new Error('Failed to fetch use cases');
        }
        const data = await response.json();
        
        // Convert object to array format
        const useCasesArray = Object.values(data);
        setUseCases(useCasesArray);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUseCases();
  }, []);

  if (loading) {
    return (
      <section className="py-12 text-center">
        <div className="animate-pulse">
          <h2 className="text-3xl font-bold mb-6">Our Use Cases</h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-32"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Use Cases</h2>
        <p className="text-red-600">Error loading use cases: {error}</p>
      </section>
    );
  }

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Use Cases</h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Discover how our AI-powered solutions transform industries and drive measurable results across various business domains.
      </p>
      <div className="grid gap-6 max-w-4xl mx-auto md:grid-cols-2 lg:grid-cols-3">
        {useCases.map((useCase) => (
          <Link
            key={useCase.id}
            to={`/usecase/${useCase.id}`}
            className="group block bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300 text-left border border-gray-100 hover:border-blue-200"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-3">
                {useCase.category}
              </span>
              {useCase.image && (
                <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {useCase.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {useCase.summary}
            </p>
            <span className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
              Learn More 
              <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
