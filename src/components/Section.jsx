import { useId } from 'react'
import Image from 'next/image'

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
    <section aria-labelledby={id}>
      <div id={id} className="mt-52 grid grid-cols-3 gap-12 sm:grid-flow-col ">
        <div className="col-span-1">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">{title}</h2>
          <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
            {description}
          </p>
          <button
            type="button"
            className="mt-8 rounded-full bg-sky-500 px-4 py-2 text-lg text-white dark:bg-amber-400"
          >
            Learn More
          </button>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-4">
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
      </div>
    </section>
  )
}
