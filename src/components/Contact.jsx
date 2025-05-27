import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
export default function Contact() {
  const form = useRef();

  // State untuk error tiap input
  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  // State modal notif
  const [modal, setModal] = useState({ show: false, message: "", success: false });

  const closeModal = () => {
    setModal({ show: false, message: "", success: false });
  };

  const validate = (fields) => {
    const errs = { user_name: "", user_email: "", message: "" };
    let isValid = true;

    if (!fields.user_name.trim()) {
      errs.user_name = "Nama wajib diisi";
      isValid = false;
    }

    if (!fields.user_email.trim()) {
      errs.user_email = "Email wajib diisi";
      isValid = false;
    } else {
      // cek format email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(fields.user_email)) {
        errs.user_email = "Format email tidak valid";
        isValid = false;
      }
    }

    if (!fields.message.trim()) {
      errs.message = "Pesan wajib diisi";
      isValid = false;
    }

    setErrors(errs);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const fields = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value
    };

    if (!validate(fields)) return; // kalau ada error, stop submit

    emailjs.sendForm(
      'service_alc8b2k',
      'template_pf1j0br',
      form.current,
      '8hBAzEiAjoqB5BBl-'
    )
    .then(() => {
      setModal({ show: true, message: "Pesan berhasil dikirim!", success: true });
      form.current.reset();
      setErrors({ user_name: "", user_email: "", message: "" }); // reset error
    })
    .catch(() => {
      setModal({ show: true, message: "Gagal mengirim pesan. Coba lagi.", success: false });
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-sky-600 dark:text-sky-400 mb-6">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 text-left">
          <div>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className={`p-3 rounded border ${
                errors.user_name ? "border-red-500" : "border-gray-300"
              } dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white w-full`}
            />
            {errors.user_name && (
              <p className="text-red-500 text-sm mt-1">{errors.user_name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className={`p-3 rounded border ${
                errors.user_email ? "border-red-500" : "border-gray-300"
              } dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white w-full`}
            />
            {errors.user_email && (
              <p className="text-red-500 text-sm mt-1">{errors.user_email}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className={`p-3 rounded border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white w-full resize-none`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white py-2 rounded transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Modal Notifikasi */}
            {modal.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white dark:bg-gray-800 text-center px-6 py-4 rounded-lg shadow-lg max-w-sm w-full">
            <div className="flex items-center justify-center space-x-2 mb-2">
              {modal.success ? (
                <FiCheckCircle className="text-green-600 w-6 h-6" />
              ) : (
                <FiXCircle className="text-red-600 w-6 h-6" />
              )}
              <h3 className={`text-lg font-semibold ${modal.success ? 'text-green-600' : 'text-red-600'}`}>
                {modal.success ? 'Berhasil!' : 'Gagal!'}
              </h3>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">{modal.message}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
