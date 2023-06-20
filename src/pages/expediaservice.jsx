import Head from 'next/head'
import Image from 'next/image'
import { Container } from '@/components/Container'
import componentLibrary from '@/images/photos/react-component-library.png'
import dataScreen from '@/images/photos/Catalog-Search-Details-screen.png'
import dataScreenHome from '@/images/photos/Catalog-HomePage.png'
import Contact from '@/components/Contact'
import { motion } from 'framer-motion'
import { introWelcomeVariants } from '@/components/Section'
import mixpanel from 'mixpanel-browser';

// Replace YOUR_TOKEN with your Project Token
mixpanel.init('9f2c9cd3840ebdac0cb75a0736fe514c', {debug: true});


mixpanel.track('Expedia Visit', {
  'Visit Type': 'common',
});


export default function Expediaservice() {
  return (
    <>
      <Head>
        <title>Josiah Peoples</title>
        <meta name="description" content="Recent work." />
      </Head>
      <Container>
        <section className="bg-gray-500 bg-[url('https://res.cloudinary.com/ddirkf5xq/image/upload/v1685546791/Expedia/Expedia_banner_rthhis.png')] bg-center bg-no-repeat bg-blend-multiply">
          <div className="mx-auto px-4 py-24 text-left lg:py-56">
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
              Expanding Expedia <br />
              infrastructure services
            </h1>
          </div>
        </section>
        <motion.section
          className="mx-4 mt-32 grid grid-flow-row lg:grid-cols-3 lg:gap-12"
          initial="hide"
          whileInView="show"
          exit="exit"
          variants={introWelcomeVariants}
        >
          <div className="col-span-1">
            <h2 className="mt-12 text-2xl font-bold dark:text-white">
              Overview
            </h2>
          </div>
          <div className="col-span-2">
            <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
              Expedia was in the middle of completely moving all infrastructure
              to the cloud. The ECP team needed to provide a unified method for
              employees, vendors and third-party call center agents to configure
              and request technical services. This product enables orchestration
              to automate service requests, deploy microservices and customize
              access management.
            </p>
            <div className="grid grid-cols-2">
              <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
                <li className="font-bold">My Role</li>
                <li>Lead Designer</li>
                <li>Visual Designer</li>
                <li>Software Developer</li>
                <li>Adobe Prototype</li>
              </ul>

              <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
                <li className="font-bold">Year</li>
                <li>2019 - 2020</li>
              </ul>
            </div>
          </div>
        </motion.section>
        <section className="mx-4 mt-24 grid grid-flow-row">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">Problem</h2>
          <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
            Majority of services provided via ticketing system.
          </p>
        </section>

        <section className="mx-4 mt-16 grid grid-flow-row lg:grid-cols-3 lg:gap-12">
          <div className="col-span-1 mb-4">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              1. Ticket based request only
            </p>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              Majority of services provided via ticketing system.
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              2. Poor UX
            </p>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              Fragmented user experience.
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              1. No Automation
            </p>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              Unable to automation to common tasks.
            </p>
          </div>
        </section>

        <motion.section
          className="mx-4 mt-24"
          initial="hide"
          whileInView="show"
          exit="exit"
          variants={introWelcomeVariants}
        >
          <h2 className="mt-12 text-2xl font-bold dark:text-amber-400">
            Opportunity
          </h2>
          <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
            How might we add an abstraction layer from ticketing to provide a
            unified approach to requesting technical services.
          </p>
        </motion.section>

        <section className="mx-4 mt-24">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">
            Interviews
          </h2>
          <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
            Conducted 5-10 interviews with Brand technologists.
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
              <li>Market Research</li>
              <li>Interal Workshop</li>
              <li>User Survey</li>
              <li>Collect Analytics</li>
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
              <li>User testing</li>
              <li>Track OKRs</li>
            </ul>
            <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
              <li className="font-bold">Design</li>
              <li>Interaction</li>
              <li>Hi-Fi Wireframes</li>
              <li>Adobe protoype</li>
              <li>Track OKRs</li>
              <li>Dev Handshake</li>
            </ul>
            <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
              <li className="font-bold">Test & Refine</li>
              <li>A/B Testing</li>
              <li>Q/A review</li>
              <li>Analytics review</li>
              <li>User Survey</li>
              <li>Track OKRs</li>
            </ul>
            <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
              <li className="font-bold">Launch</li>
              <li>Release to Prod</li>
            </ul>
            <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
              <li className="font-bold">Monitor</li>
              <li>Track OKRs</li>
              <li>Collect Analytics</li>
            </ul>
          </div>
        </section>

        <section className="mx-4 mt-24">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">Goals</h2>
        </section>

        <section className="mx-4 mt-16 grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          <div className="col-span-1">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              1. Unified platform
            </p>
            <p className="mb-4 text-lg text-neutral-400 dark:text-neutral-400">
              Unify complex services, like access management or connectivity.
              Customized microservices can be deployed and incorporated through
              the platform.
            </p>
          </div>

          <div className="col-span-1">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              2. Consistent UX
            </p>
            <p className="mb-4 text-lg text-neutral-400 dark:text-neutral-400">
              Enabled all services to use common UI components.
            </p>
          </div>

          <div className="col-span-1">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              3. Automation Included
            </p>
            <p className="mb-4 text-lg text-neutral-400 dark:text-neutral-400">
              Ability to deploy services through configuration files.
            </p>
          </div>
        </section>

        <section className="mx-4 mt-24">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">
            Expedia infrastructure requests
          </h2>
        </section>

        <section className="mx-4 mt-16 grid grid-cols-1">
        <h3 className="text-base mb-4 dark:text-white">
           User flow 1
          </h3>
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685483997/Expedia/expedia-boards_toewdw.png'} width={1460} height={571} />
        </section>

        <section className="mx-4 mt-16 grid grid-cols-1">
        <h3 className="text-base mb-4 dark:text-white">
           Saved Services
          </h3>
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685483997/Expedia/expedia-4_qimbjk.png'} width={1460} height={571} />
        </section>

        <section className="mx-4 mt-16 grid grid-cols-1">
        <h3 className="text-base mb-4 dark:text-white">
           Knowledge share
          </h3>
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685483997/Expedia/expedia-2_snadfz.png'} width={1460} height={571} />
        </section>

        <section className="mx-4 mt-16 grid grid-cols-1">
        <h3 className="text-base mb-4 dark:text-white">
        Duplicate service incident request filter
          </h3>
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685483996/Expedia/expedia-3_nleace.png'} width={1460} height={571} />
        </section>

        <section className="mx-4 mt-16 grid grid-cols-1">
        <h3 className="text-base mb-4 dark:text-white">
           Service confirmation and feedback
          </h3>
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685483998/Expedia/expedia-5_stgu86.png'} width={1460} height={571} />
        </section>

      
        <section className="mx-4 mt-24">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">Results</h2>
          <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
            25% reduction in manual requests.
          </p>
        </section>
        <Contact />
      </Container>
    </>
  )
}
