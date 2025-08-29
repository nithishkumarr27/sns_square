import { useParams, Link } from "react-router-dom";

const useCaseDetails = {
  ai: {
    title: "AI in Education",
    content: "We leverage AI to personalize learning and improve student outcomes...",
  },
  healthcare: {
    title: "Smart Healthcare",
    content: "Our healthcare solutions focus on remote monitoring and predictive care...",
  },
  fintech: {
    title: "FinTech Solutions",
    content: "We build secure and scalable solutions for modern banking...",
  },
};

export default function UseCaseDetail() {
  const { id } = useParams();
  const useCase = useCaseDetails[id];

  if (!useCase) {
    return <p className="text-center">Use case not found.</p>;
  }

  return (
    <section className="py-12 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">{useCase.title}</h2>
      <p className="text-gray-700 mb-6">{useCase.content}</p>

      <Link
        to="/usecase"
        className="text-blue-600 hover:underline"
      >
        ← Back to Use Cases
      </Link>
    </section>
  );
}
