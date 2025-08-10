import { useState, useEffect } from "react";
import gsap from "gsap";

const VerifyForm = () => {
  const [formData, setFormData] = useState({ nama: "", nim: "" });
  const [formErrors, setFormErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error while typing
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.nama.trim()) errors.nama = "Nama wajib diisi";
    if (!formData.nim.trim()) errors.nim = "NIM wajib diisi";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("http://127.0.0.1:5000/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.nama,
          nim: formData.nim,
        }),
      });

      const data = await res.json();
      setResult(data);
      setShowModal(true);
    } catch (error) {
      console.error("Error verifying:", error);
      setResult({ status: "error", message: "Server error" });
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      gsap.fromTo(
        ".modal",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.6, ease: "elastic.out(1,0.5)", }
      );
    }
  }, [showModal]);

  const handleClose = () => {
    gsap.to(".modal", {
      opacity: 0,
      y: 100,
      duration: 0.3,
      onComplete: () => setShowModal(false) // only hide after animation finishes
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-sora">
      <form
        onSubmit={handleSubmit}
        className="bg-white border-3 shadow-[0px_3px_0px_rgba(0,0,0,1)] border-black rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-extrabold text-black text-center">
          Verify Your Information
        </h2>
        <h2 className="text-xl font-medium mb-4 text-gray-600 text-center">
          One more step
        </h2>

        {/* Nama */}
        <div className="m-5">
          <label htmlFor="nama">
            <span className="text-sm pl-2 font-semibold text-black"> NAMA<span className="text-[#ff4911]">*</span> </span>
            <input
              type="text"
              name="nama"
              id="nama"
              value={formData.nama}
              onChange={handleChange}
              className={`text-black font-medium bg-white px-4 py-3 mt-0.5 w-full rounded-xl border-3 shadow-[0px_3px_0px_rgba(0,0,0,1)] sm:text-sm
                ${formErrors.nama ? "border-[#ff4911]" : "border-black"}
                focus:bg-[#FFA6F6]`}
              placeholder="Masukkan Nama"
            />
            {formErrors.nama && (
            <p className="text-[#ff4911] pl-2 text-xs mt-1">{formErrors.nama}</p>
          )}
          </label>
        </div>

        {/* NIM */}
        <div className="m-5">
          <label htmlFor="nim">
            <span className="text-sm pl-2 font-semibold text-black"> NIM<span className="text-[#ff4911]">*</span> </span>
            <input
              type="text"
              name="nim"
              id="nim"
              value={formData.nim}
              onChange={handleChange}
              className={`text-black bg-white font-medium px-4 py-3 mt-0.5 w-full rounded-xl border-3 shadow-[0px_3px_0px_rgba(0,0,0,1)] sm:text-sm
                ${formErrors.nim ? "border-[#ff4911]" : "border-black"}
                focus:bg-[#FFA6F6]`}
              placeholder="Masukkan NIM"
            />
            {formErrors.nim && (
            <p className="text-[#ff4911] pl-2 text-xs mt-1">{formErrors.nim}</p>
          )}
          </label>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-2/5 mx-auto block border-2 border-black bg-[#FFC730]
          shadow-[0px_2px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[0px_4px_0px_rgba(0,0,0,1)] 
          active:-translate-y-0 disabled:-translate-y-0
          active:shadow-[0px_2px_0px_rgba(0,0,0,1)] disabled:shadow-[0px_2px_0px_rgba(0,0,0,1)]
        text-black font-semibold py-2.5 px-4 rounded-full transition duration-300 disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="modal fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#F75B2B] border-3 border-black shadow-[0px_2px_0px_rgba(0,0,0,1)] p-6 text-white rounded-xl w-96">
            {result?.status === "success" ? (
              <>
                <h3 className="text-xl text-center font-bold mb-4">Verification Success</h3>
                <ul className="text-sm space-y-1">
                  <li><strong>Nama:</strong> {result.data.name}</li>
                  <li><strong>NIM:</strong> {result.data.nim}</li>
                  <li><strong>Jenis Kelamin:</strong> {result.data.jenis_kelamin}</li>
                  <li><strong>Jenis Daftar:</strong> {result.data.jenis_daftar}</li>
                  <li><strong>Nama PT:</strong> {result.data.nama_pt}</li>
                  <li><strong>Prodi:</strong> {result.data.nama_prodi}</li>
                  <li><strong>Jenjang:</strong> {result.data.jenjang}</li>
                  <li><strong>Tanggal Masuk:</strong> {result.data.tanggal_masuk}</li>
                  <li><strong>Status:</strong> {result.data.status}</li>
                </ul>
              </>
            ) : (
              <>
                <h3 className="text-xl text-center font-bold mb-4">Verification Failed</h3>
                <p className="text-white text-center">Data tidak cocok</p>
              </>
            )}
            <button
              onClick={handleClose}
              className="bg-black w-2/5 mt-4 mx-auto block border-2 border-black
              shadow-[0px_2px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[0px_4px_0px_rgba(0,0,0,1)] 
              active:-translate-y-0 disabled:-translate-y-0
              active:shadow-[0px_2px_0px_rgba(0,0,0,1)] disabled:shadow-[0px_2px_0px_rgba(0,0,0,1)]
            text-white font-semibold py-2.5 px-4 rounded-full transition duration-300 disabled:opacity-50"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyForm;
