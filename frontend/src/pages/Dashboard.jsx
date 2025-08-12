import { useEffect, useRef } from "react";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

export default function Dashboard() {
  const { userInfo, logout } = useUser();
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const mainRef = useRef(null);

  // Function to format tanggal_masuk
  const formatDate = (dateString) => {
    if (!dateString || dateString === "N/A") return "N/A";
    try {
      const date = new Date(dateString);
      if (isNaN(date)) return "N/A";
      const day = date.getDate();
      const monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
      ];
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    } catch (error) {
        console.error("Error verifying:", error);
        return "N/A";
    }
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/verify");
    }
  }, [userInfo, navigate]);

  // GSAP animations
  useEffect(() => {
    gsap.fromTo(
      sidebarRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
    );
    gsap.fromTo(
      mainRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.2 }
    );
  }, []);

  if (!userInfo) return null;

  return (
    <div className="min-h-screen bg-[#FFF8E1] font-sora flex flex-col md:flex-row">
      {/* Sidebar: User Info */}
      <aside
        ref={sidebarRef}
        className="w-full md:w-[30%] md:min-w-[330px] md:max-w-[400px] p-6 bg-white border-b-3 md:border-b-0 md:border-r-3 border-black shadow-[0_5px_0_rgba(0,0,0,1)] md:min-h-screen"
      >
        <h2 className="text-2xl font-extrabold text-black mb-4">My Profile</h2>
        <div className="bg-[#F75B2B] text-white p-4 rounded-xl border-3 border-black shadow-[0_4px_0_rgba(0,0,0,1)]">
          <ul className="text-sm md:text-base space-y-4">
            <li className="grid grid-cols-[minmax(120px,auto)_1fr] gap-2 items-baseline">
              <strong className="font-semibold">Nama</strong>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">: {userInfo.name || userInfo.nama || "N/A"}</span>
            </li>
            <li className="grid grid-cols-[minmax(120px,auto)_1fr] gap-2 items-baseline">
              <strong className="font-semibold">NIM</strong>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">: {userInfo.nim || "N/A"}</span>
            </li>
            <li className="grid grid-cols-[minmax(120px,auto)_1fr] gap-2 items-baseline">
              <strong className="font-semibold">Jenis Kelamin</strong>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">: {userInfo.jenis_kelamin || "N/A"}</span>
            </li>
            <li className="grid grid-cols-[minmax(120px,auto)_1fr] gap-2 items-baseline">
              <strong className="font-semibold">Jenis Daftar</strong>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">: {userInfo.jenis_daftar || "N/A"}</span>
            </li>
            <li className="grid grid-cols-[minmax(120px,auto)_1fr] gap-2 items-baseline">
              <strong className="font-semibold">Nama PT</strong>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">: {userInfo.nama_pt || "N/A"}</span>
            </li>
            <li className="grid grid-cols-[minmax(120px,auto)_1fr] gap-2 items-baseline">
              <strong className="font-semibold">Prodi</strong>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">: {userInfo.nama_prodi || "N/A"}</span>
            </li>
            <li className="grid grid-cols-[minmax(120px,auto)_1fr] gap-2 items-baseline">
              <strong className="font-semibold">Jenjang</strong>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">: {userInfo.jenjang || "N/A"}</span>
            </li>
            <li className="grid grid-cols-[minmax(120px,auto)_1fr] gap-2 items-baseline">
              <strong className="font-semibold">Tanggal Masuk</strong>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">: {formatDate(userInfo.tanggal_masuk)}</span>
            </li>
            <li className="grid grid-cols-[minmax(120px,auto)_1fr] gap-2 items-baseline">
              <strong className="font-semibold">Status</strong>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">: {userInfo.status || "N/A"}</span>
            </li>
          </ul>
        </div>
        <button
          onClick={() => {
            logout();
            navigate("/verify");
          }}
          className="mt-6 w-full border-2 border-black bg-[#FF4911] text-white font-semibold py-2.5 px-4 rounded-xl shadow-[0_4px_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[0_6px_0_rgba(0,0,0,1)] active:-translate-y-0 active:shadow-[0_4px_0_rgba(0,0,0,1)] transition-all duration-200"
        >
          Logout
        </button>
      </aside>

      {/* Main Content: Social Feed */}
      <main ref={mainRef} className="flex-1 p-6">
        <h1 className="text-4xl font-extrabold text-black mb-6">
          Cacio Community
        </h1>
        <div className="space-y-4">
          {/* Example Post Card */}
          <div className="bg-white border-3 border-black shadow-[0_5px_0_rgba(0,0,0,1)] rounded-2xl p-6">
            <h3 className="text-lg font-bold text-black">John Doe</h3>
            <p className="text-sm text-gray-800">Just graduated from [nama_pt]! 🎉 Check out my NFT diploma!</p>
            <button className="mt-2 px-4 py-1 bg-[#FFA6F6] text-black font-semibold border-2 border-black rounded-full shadow-[0_3px_0_rgba(0,0,0,1)] hover:-translate-y-1">
              View NFT
            </button>
          </div>
          {/* Example Marketplace Card */}
          <div className="bg-white border-3 border-black shadow-[0_5px_0_rgba(0,0,0,1)] rounded-2xl p-6">
            <h3 className="text-lg font-bold text-black">Jane Smith</h3>
            <p className="text-sm text-gray-800">Selling textbooks for [nama_prodi]. DM for details!</p>
            <button className="mt-2 px-4 py-1 bg-[#FFC730] text-black font-semibold border-2 border-black rounded-full shadow-[0_3px_0_rgba(0,0,0,1)] hover:-translate-y-1">
              Contact Seller
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}