import { useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Upload() {
  const [image, setImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!image) {
      alert("กรุณาเลือกไฟล์ก่อนอัปโหลด");
      return;
    }

    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // คำนวณเปอร์เซ็นต์การอัปโหลด
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.error("เกิดข้อผิดพลาดในการอัปโหลด:", error);
      },
      () => {
        // เมื่ออัปโหลดเสร็จสิ้น ให้ดึง URL ของรูปภาพมาแสดง
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
          alert("อัปโหลดสำเร็จ!");
        });
      }
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>อัปโหลดรูปภาพไปที่ Firebase</h1>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload} style={{ margin: "10px" }}>
        อัปโหลด
      </button>

      {uploadProgress > 0 && (
        <div style={{ margin: "20px 0", width: "100%", maxWidth: "400px" }}>
          <div
            style={{
              width: `${uploadProgress}%`,
              height: "20px",
              backgroundColor: "green",
              transition: "width 0.5s ease",
            }}
          ></div>
          <p>{Math.round(uploadProgress)}% อัปโหลด</p>
        </div>
      )}

      {imageUrl && (
        <div>
          <h3>รูปภาพที่อัปโหลด:</h3>
          <img
            src={imageUrl}
            alt="Uploaded"
            style={{ width: "200px", borderRadius: "10px" }}
          />
        </div>
      )}
    </div>
  );
}

export default Upload;
