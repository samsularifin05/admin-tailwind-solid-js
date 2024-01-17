import { LocalStorageItem } from "../interface";

export const ToastNotification = () => {
  return (
    <div
      id="toast"
      class="fixed top-0 right-0 m-4 bg-blue-200 text-blue-800 border-blue-500 border-l-4 p-4 rounded-md opacity-0 transform translate-x-full transition-transform duration-300 ease-in-out"
    >
      <p class="font-bold">{"Info!"}</p>
      <p id="idPesan">Hallo</p>
    </div>
  );
};

let isShow = false;

export const showToast = (message: string, duration = 3000) => {
  if (isShow) {
    return;
  }
  const toast = document.getElementById("toast");
  const idPesan = document.getElementById("idPesan");

  // Show the toast
  if (idPesan) {
    idPesan.innerText = message;
  }
  if (toast) {
    toast.style.opacity = "1";
    toast.style.transform = "translateX(0)";

    // Hide the toast after a delay (default: 3000 milliseconds or 3 seconds)
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      isShow = false;
    }, duration);
  }
};

export const setItem = <T,>(nama: string, data: T) => {
  if (typeof window !== "undefined") {
    const item: LocalStorageItem<T> = {
      nama: nama,
      data: data
    };
    localStorage.setItem(item.nama, JSON.stringify(item.data));
  }
};

export const removeItem = (nama: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(nama);
  }
};

export const getItem = <T,>(nama: string): T => {
  if (typeof window !== "undefined") {
    const encryptedNama = nama;
    const item = localStorage.getItem(encryptedNama);

    if (item !== null) {
      const decryptedData = JSON.parse(item);
      return decryptedData as T;
    } else {
      return [] as T;
    }
  }
  return [] as T;
};
