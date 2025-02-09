import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { db } from "../firebaseConfig";
import {
  collection,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";


function CardForm() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const q = query(collection(db, "users"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const userList = querySnapshot.docs.map((doc, index) => ({
      id: doc.id,
      index: index + 1,
      ...doc.data(),
    }));
    setUsers(userList);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "black",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteDoc(doc(db, "users", id));
          setUsers(users.filter((user) => user.id !== id)); // อัปเดต state
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        } catch (error) {
          Swal.fire("เกิดข้อผิดพลาด!", "ไม่สามารถลบข้อมูลได้", "error");
        }
      }
    });
  };

  useEffect(() => {
    fetchUsers();
  }, [users]);

  return (
    <div>
      <div
        className="w-full grid grid-cols-5 gap-4"
      >
        {users.map((user, id) => (
          <div
            key={user.id}
            className="w-full border justify-center items-center flex rounded-lg overflow-hidden flex-col"
          >
            <img
              src={user.imageUrl}
              alt={`${user.firstName} ${user.lastName}`}
              className="h-64 w-full object-cover object-center "
            />
            <h3 className="py-2 font-semibold uppercase text-gray-500">
              <span className="text-orange-600">No : {user.index}</span>{" "}
              {user.firstName} {user.lastName}
            </h3>
            <button
              onClick={() => handleDelete(user.id)}
              className="bg-orange-600 w-full text-white py-2 font-semibold cursor-pointer "
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardForm;
