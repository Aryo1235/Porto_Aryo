export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-sky-600 dark:text-sky-400 mb-6">Contact Me</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
