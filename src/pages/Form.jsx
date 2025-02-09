import { useState } from "react";
import { db, storage } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons/faUpload";
import Swal from "sweetalert2";

function Form({ onAdd }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !image) {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    const imageRef = ref(storage, `images/${uuidv4()}`); // ตั้งชื่อไฟล์รูปภาพแบบสุ่ม
    const uploadTask = uploadBytesResumable(imageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress.toFixed(0)); // แสดงความคืบหน้าเป็น %
      },
      (error) => {
        console.error("เกิดข้อผิดพลาดในการอัปโหลดรูปภาพ:", error);
      },
      async () => {
        const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
        await addDoc(collection(db, "users"), {
          firstName,
          lastName,
          imageUrl,
          createdAt: Timestamp.now(),
        });

        onAdd(); // แจ้งไปยัง Home เพื่ออัปเดตข้อมูลใหม่
        setFirstName("");
        setLastName("");
        setImage(null);
        setProgress(0);

        // alert("บันทึกข้อมูลสำเร็จ!");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 2000
        });
      }
    );
  };

  return (
    <div>
      <div className="flex flex-col items-center   w-8/12 mx-auto">
        <form
          className="flex space-y-2 flex-col w-96 p-10 border rounded-md shadow"
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl font-semibold">Register Form</h3>
          <div className="flex flex-col w-full ">
            <label>Name:</label>
            <input
              className="w-full bg-gray-100 py-1 px-2 rounded border focus:outline-none border-gray-400"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Fist-Name:</label>
            <input
              className="w-full bg-gray-100 py-1 px-2 rounded border focus:outline-none border-gray-400"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          {/* <div className="flex flex-col">
            <label>Location:</label>
            <input
              className="w-full bg-gray-100 py-1 px-2 rounded border focus:outline-none border-gray-400"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div> */}

          <div className="flex items-center">
            <label
              onChange={(e) => setImage(e.target.files[0])}
              className="flex py-2 px-2 justify-items-center space-x-2 items-center bg-orange-600 w-36 cursor-pointer rounded"
            >
              <FontAwesomeIcon icon={faUpload} className="w-5 h-5 text-white" />
              <span className="text-white text-xs font-bold uppercase select-none">
                Image Upload
              </span>
              <input required className="hidden" type="file" alt="logo" />
            </label>
            <p className="ml-4">{image ? image.name : "No image..."}</p>
          </div>

          <button
            className="bg-orange-600 py-2 rounded text-white"
            type="submit"
          >
            Save
          </button>

          {progress > 0 && (
            <div className="w-full">
              <div
                className="rounded"
                style={{
                  width: `${progress}%`,
                  height: "5px",
                  backgroundColor: "#ea580c",
                  transition: "width 0.5s ease",
                }}
              ></div>
              <p>Upload {Math.round(progress)}%</p>
            </div>
          )}
        </form>
      </div>

      <div className="mt-10">
        <div className="flex w-full justify-between items-center mb-5">
          <h1 className="text-2xl font-semibold w-2/12">
            USER <span className="text-orange-600">INFO</span>
          </h1>
          <hr className="w-full border-2" />
        </div>
      </div>
    </div>
  );
}

export default Form;
