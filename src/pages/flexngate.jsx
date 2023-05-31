import Head from 'next/head'
import Image from 'next/image'
import { Container } from '@/components/Container'
import componentLibrary from '@/images/photos/react-component-library.png'
import dataScreen from '@/images/photos/Catalog-Search-Details-screen.png'
import dataScreenHome from '@/images/photos/Catalog-HomePage.png'
import Contact from '@/components/Contact'
import { motion } from 'framer-motion'
import { internalVariant } from '@/components/Section'


import mixpanel from 'mixpanel-browser';

// Replace YOUR_TOKEN with your Project Token
mixpanel.init('9f2c9cd3840ebdac0cb75a0736fe514c', {debug: true});


mixpanel.track('FNG Visit', {
  'Visit Type': 'common',
});


export default function Flexngate() {
  return (
    <>
      <Head>
        <title>Josiah Peoples</title>
        <meta name="description" content="Recent work." />
      </Head>
      <Container>
        <section className="bg-gray-500 bg-[url('https://res.cloudinary.com/ddirkf5xq/image/upload/v1685546807/FNG/fng_banner_rszfbi.png')] bg-center bg-no-repeat bg-blend-multiply">
          <div className="mx-auto px-4 py-24 text-left lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
              Tracking scrap <br />
              through production
            </h1>
          </div>
        </section>
        <motion.section
          className="mx-4 mt-32 grid grid-flow-row lg:grid-cols-3 lg:gap-12"
          initial="hide"
          whileInView="show"
          exit="exit"
          variants={internalVariant}
        >
          <div className="col-span-1">
            <h2 className="mt-12 text-2xl font-bold dark:text-white">
              Overview
            </h2>
          </div>
          <div className="col-span-2">
            <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
              Before Flex-N-Gate customers needed to buy the bumper of the truck
              separately. This product enables all parts to be assembled and tracked
              throughout the plant. Our department was focus on instruction
              manuals for assemblies, marketing at showcase events, product photography, and instructional video content. This is were I learned
              to be laser focused on users by actively listening to their
              pain points.
            </p>
            <div className="grid grid-cols-2">
              <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
                <li className="font-bold">My Role</li>
                <li>Designer</li>
                <li>UX Researcher</li>
              </ul>

              <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
                <li className="font-bold">Year</li>
                <li>2014 - 2018</li>
              </ul>
            </div>
          </div>
        </motion.section>
        <section className="mx-4 mt-24 grid grid-flow-row">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">Problem</h2>
          <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
            Floor workers are multi-lingual and scrap tracking is done manual
            with pen and paper.
          </p>
        </section>

        <section className="mx-4 mt-16 grid grid-flow-row lg:grid-cols-3 lg:gap-12">
          <div className="col-span-1 mb-4">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              1. Untrackable Parts
            </p>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              Inventory is a painful process.
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              2. No communicaiton
            </p>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              Improve communication between floor works and managers
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              1. No Automation
            </p>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              Measurable scrap tracking for cost analytics.
            </p>
          </div>
        </section>

        <motion.section
          className="mx-4 mt-24"
          initial="hide"
          whileInView="show"
          exit="exit"
          variants={internalVariant}
        >
          <h2 className="mt-12 text-2xl font-bold dark:text-amber-400">
            Opportunity
          </h2>
          <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
            How might we catalog and communicate instruction to all floor
            workers and managers.
          </p>
        </motion.section>

        <section className="mx-4 mt-24">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">
            Interviews
          </h2>
          <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
            Traveled to 5 plants across the US and Canada to interview workers
            and monitor worflow.
          </p>
        </section>

        <section className="mx-4 mt-24">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">
            Design Process
          </h2>
          <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-7 lg:gap-2">
            <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
              <li className="font-bold">Understand</li>
              <li>Collect pain points</li>
              <li>User Survey</li>
              <li>Journey Map</li>
              <li>User Persona</li>
            </ul>

            <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
              <li className="font-bold">Define</li>
              <li>Business goals</li>
              <li>Refine requirements</li>
              <li>Scope and timelines</li>
              <li>Create user stories</li>
            </ul>

            <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
              <li className="font-bold">Ideate</li>
              <li>Sketches</li>
              <li>Sitemap</li>
              <li>User Flow</li>
              <li>Whiteboard Meetup</li>
              <li>Lo-fi Wireframes</li>
            </ul>
            <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
              <li className="font-bold">Design</li>
              <li>Hi-Fi Wireframes</li>
              <li>Adobe protoype</li>
            </ul>
            <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
              <li className="font-bold">Test & Refine</li>
              <li>A/B Testing</li>
              <li>Q/A review</li>
              <li>Analytics review</li>
            </ul>
            <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
              <li className="font-bold">Launch</li>
              <li>Send to production printers</li>
            </ul>
            <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
              <li className="font-bold">Monitor</li>
              <li>User Survey</li>
            </ul>
          </div>
        </section>

        <section className="mx-4 mt-24">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">Goals</h2>
        </section>

        <section className="mx-4 mt-16 grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          <div className="col-span-1">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              1. Trackable parts
            </p>
            <p className="mb-4 text-lg text-neutral-400 dark:text-neutral-400">
              Track parts by custom barcode and sticker system.
            </p>
          </div>

          <div className="col-span-1">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              2. Communicate
            </p>
            <p className="mb-4 text-lg text-neutral-400 dark:text-neutral-400">
              Easy to communciate assembly and scrap workflow instructions
              regardless of language.
            </p>
          </div>

          <div className="col-span-1">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              3. Measure
            </p>
            <p className="mb-4 text-lg text-neutral-400 dark:text-neutral-400">
              Scrap parts are tagged during teardown and cataloged.
            </p>
          </div>
        </section>

        <section className="mx-4 mt-24">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">
            Scrap Tracking
          </h2>
        </section>

        <section className="mx-4 mt-16 grid grid-cols-1">
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685549839/FNG/fng-01_dryuaz.png'} width={1460} height={571} />
        </section>

        <section className="mx-4 mt-16 grid grid-cols-1">
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685549833/FNG/fng-02_xx2moi.png'} width={1460} height={571} />
        </section>


        <section className="mx-4 mt-16 grid grid-cols-1">
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685484012/FNG/fng-4_blb1tf.png'} width={1460} height={571} />
        </section>

    
        <section className="mx-4 mt-16 grid grid-cols-1">
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685484012/FNG/fng-2_vri3ul.png'} width={1460} height={571} />
        </section>

        <section className="mx-4 mt-24">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">Results</h2>
          <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
            Product saved company $200,000/year
          </p>
        </section>
        <Contact />
      </Container>
    </>
  )
}
