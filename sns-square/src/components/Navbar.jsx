import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">SNS Square</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/usecase" className="hover:text-gray-300">Use Case</Link>
        <Link to="/life-at-sns" className="hover:text-gray-300">Life at SNS</Link>
      </div>
    </nav>
  );
}
