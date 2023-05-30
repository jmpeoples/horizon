export default function Contact() {
  return (
    <>
      <section className="content-center bg-white dark:bg-black">
        <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
          <h2 className="mb-4 text-center text-2xl lg:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Contact Me
          </h2>
          <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
            Let's talk.
          </p>

          <div className="flex flex-col items-center">
            <button
              type="button"
              className="mt-8 content-center rounded-full border-2 border-black border-white bg-black px-8 py-2 text-lg text-white hover:bg-yellow-400 dark:text-white dark:hover:border-black dark:hover:text-black"
            >
              Contact
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
