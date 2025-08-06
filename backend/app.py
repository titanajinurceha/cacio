from flask import Flask, request, jsonify
from flask_cors import CORS
from pddiktipy import api

app = Flask(__name__)
CORS(app)

@app.route("/verify", methods=["POST"])
def verify_student():
    data = request.json
    name = data.get("name")
    nim = data.get("nim")

    with api() as client:
        search_result = client.search_mahasiswa(name)
        print(search_result)

        if search_result:  # Just check if the list is not empty
            for student in search_result:
                if student.get("nim") == nim:
                    detail = client.get_detail_mhs(student["id"])
                    print(detail)
                    return jsonify({
                        "status": "success",
                        "data": {
                            "name": detail.get("nama", "Not available"),
                            "nim": detail.get("nim", "Not available"),
                            "jenis_kelamin":detail.get("jenis_kelamin","Not available"),
                            "jenis_daftar": detail.get("jenis_daftar", "Not available"),
                            "nama_pt": detail.get("nama_pt", "Not available"),
                            "nama_prodi": detail.get("prodi", "Not available"),
                            "jenjang": detail.get("jenjang", "Not available"),
                            "tanggal_masuk": detail.get("tanggal_masuk", "Not available"),
                            "status": detail.get("status_saat_ini", "Not available"),
                        }
                    })
    return jsonify({
    "status": "not_found",
    "hint": f"Found: {[s['nim'] for s in search_result]}"
    }), 404

@app.route("/")
def home():
    return "👋 Hello, this is the backend for verifying student data."

if __name__ == "__main__":
    app.run(debug=True)