import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Landing Page</h1>
      <button
        onClick={() => navigate("/verify")}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Login
      </button>
    </div>
  );
}
