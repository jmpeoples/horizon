import { useId } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const introHeaderVariants = {
  hide: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 1,
  },
}

export const introWelcomeVariants = {
  hide: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 1,
  },
}

export function Section({
  title,
  description,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  children,
}) {
  let id = useId()

  return (
    <section aria-labelledby={id} className="mx-4 lg:mx-0">
      <motion.div
        id={id}
        className="mt-52 grid sm:grid-flow-row md:grid-cols-3 md:gap-12"
        initial="hide"
        whileInView="show"
        exit="exit"
        variants={introHeaderVariants}
      >
        <div className="col-span-1">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">{title}</h2>
          <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
            {description}
          </p>
          <button
            type="button"
            className="mb-8 mt-8 rounded-full border-2 border-black border-white bg-black px-8 py-2 text-lg text-white hover:bg-yellow-400 dark:text-white dark:hover:border-black dark:hover:text-black"
          >
            Learn More
          </button>
        </div>
        <div className="sm:col-span-1 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
            <Image
              src={topLeft}
              alt=""
              className="rounded-xl border-2 border-neutral-200 dark:border-neutral-700"
            />
            <Image
              src={topRight}
              alt=""
              className="rounded-xl border-2 border-neutral-200 dark:border-neutral-700"
            />
            <Image
              src={bottomLeft}
              alt=""
              className="rounded-xl border-2 border-neutral-200 dark:border-neutral-700"
            />
            <Image
              src={bottomRight}
              alt=""
              className="rounded-xl border-2 border-neutral-200 dark:border-neutral-700"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
