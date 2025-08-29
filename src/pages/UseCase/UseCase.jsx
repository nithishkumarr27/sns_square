import { Link } from "react-router-dom";

const useCases = [
  { id: "ai", title: "AI in Education", summary: "How we use AI to transform learning." },
  { id: "healthcare", title: "Smart Healthcare", summary: "Innovations in patient care." },
  { id: "fintech", title: "FinTech Solutions", summary: "Modern finance reimagined." },
];

export default function UseCaseList() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Use Cases</h2>
      <div className="grid gap-6 max-w-3xl mx-auto">
        {useCases.map((useCase) => (
          <Link
            key={useCase.id}
            to={`/usecase/${useCase.id}`}
            className="block bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition text-left"
          >
            <h3 className="text-xl font-semibold">{useCase.title}</h3>
            <p className="text-gray-600">{useCase.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
