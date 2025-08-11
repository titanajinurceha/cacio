import { useEffect } from "react";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { userInfo, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/verify");
    }
  }, [userInfo, navigate]);

  if (!userInfo) return null;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-sora">
        <h1 className="text-3xl font-extrabold text-black mb-6">Dashboard</h1>
        <div className="bg-white border-3 text-black border-black shadow-[0px_5px_0px_rgba(0,0,0,1)] rounded-2xl p-8 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-center">User Information</h2>
            <ul className="text-sm space-y-2">
            <li><strong>Nama:</strong> {userInfo.name || userInfo.nama || "N/A"}</li>
            <li><strong>NIM:</strong> {userInfo.nim || "N/A"}</li>
            <li><strong>Jenis Kelamin:</strong> {userInfo.jenis_kelamin || "N/A"}</li>
            <li><strong>Jenis Daftar:</strong> {userInfo.jenis_daftar || "N/A"}</li>
            <li><strong>Nama PT:</strong> {userInfo.nama_pt || "N/A"}</li>
            <li><strong>Prodi:</strong> {userInfo.nama_prodi || "N/A"}</li>
            <li><strong>Jenjang:</strong> {userInfo.jenjang || "N/A"}</li>
            <li><strong>Tanggal Masuk:</strong> {userInfo.tanggal_masuk || "N/A"}</li>
            <li><strong>Status:</strong> {userInfo.status || "N/A"}</li>
            </ul>
            <button
            onClick={() => {
                logout();
                navigate("/verify");
            }}
            className="mt-6 w-2/5 mx-auto block border-2 border-black bg-[#FF4911] shadow-[0px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[0px_6px_0px_rgba(0,0,0,1)] active:-translate-y-0 text-white font-semibold py-2.5 px-4 rounded-full transition duration-300"
            >
            Logout
            </button>
        </div>
        </div>
    );
}
