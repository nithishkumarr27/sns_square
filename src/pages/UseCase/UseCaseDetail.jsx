import { useParams, Link } from "react-router-dom";
import useCaseData from "../../data/usecase.json";

export default function UseCaseDetail() {
  const { id } = useParams();
  const useCase = useCaseData[id];

  if (!useCase) {
    return <p className="text-center">Use case not found.</p>;
  }

  return (
    <section className="py-12 max-w-4xl mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{useCase.heroTitle || useCase.title}</h1>
        <p className="text-xl text-gray-600 mb-6">{useCase.description}</p>
        {useCase.tagline && (
          <p className="text-lg text-blue-600 font-medium">{useCase.tagline}</p>
        )}
      </div>

      {useCase.image && (
        <div className="mb-8">
          <img 
            src={useCase.image} 
            alt={useCase.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      )}

      <div className="space-y-8">
        {useCase.sections && useCase.sections.map((section, index) => (
          <div key={section.id || index} className="border-b border-gray-200 pb-6">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p className="text-gray-700 mb-4">{section.content}</p>
            
            {section.challenges && section.challenges.length > 0 && (
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Challenges:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {section.challenges.map((challenge, idx) => (
                    <li key={idx} className="text-gray-600">{challenge}</li>
                  ))}
                </ul>
              </div>
            )}

            {section.features && section.features.length > 0 && (
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Features:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {section.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {section.benefits && section.benefits.length > 0 && (
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Benefits:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {section.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-gray-600">{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            {section.additionalContent && (
              <p className="text-gray-700">{section.additionalContent}</p>
            )}
          </div>
        ))}
      </div>

      {useCase.relatedUseCases && useCase.relatedUseCases.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Related Use Cases:</h3>
          <div className="flex flex-wrap gap-2">
            {useCase.relatedUseCases.map((relatedId) => (
              <Link
                key={relatedId}
                to={`/usecase/${relatedId}`}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors"
              >
                {useCaseData[relatedId]?.title || relatedId}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8">
        <Link
          to="/usecase"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Back to Use Cases
        </Link>
      </div>
    </section>
  );
}
