import Head from 'next/head'
import Image from 'next/image'
import { Container } from '@/components/Container'
import componentLibrary from '@/images/photos/react-component-library.png'
import Contact from '@/components/Contact'
import { motion } from 'framer-motion'
import { introWelcomeVariants } from '@/components/Section'
import mixpanel from 'mixpanel-browser';

// Replace YOUR_TOKEN with your Project Token
mixpanel.init('9f2c9cd3840ebdac0cb75a0736fe514c', {debug: true});


mixpanel.track('DataCatalog Visit', {
  'Visit Type': 'common',
});



export default function Datacatalog() {
  return (
    <>
      <Head>
        <title>Josiah Peoples</title>
        <meta name="description" content="Recent work." />
      </Head>
      <Container>
        <section className="bg-gray-500 bg-[url('https://res.cloudinary.com/ddirkf5xq/image/upload/v1685396317/Catalog-banner_1_a9wygu.png')] bg-center bg-no-repeat bg-blend-multiply">
          <div className="mx-auto px-4 py-24 text-left lg:py-56">
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
              Designing the <br />
              Dataset Catalog
            </h1>
          </div>
        </section>
        <motion.section className="mt-32 grid grid-flow-row mx-4 lg:grid-cols-3 lg:gap-12"
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
              Balyasny portfolio managers, sector data analysts, data managers
              need to know what data is available, where it lives, and how to
              access it quickly. The systems and process require knowledge from
              CRMs, accounting systems, cloud vendor documentation buckets, and
              third party APIs. Balyasny needed to facilitate portfolio managers
              and analyst to query in-house datasets and quickly generate new ideas.
            </p>
            <div className="grid grid-cols-2">
              <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
                <li className="font-bold">My Role</li>
                <li>Lead Designer</li>
                <li>Product designer</li>
                <li>Software Developer</li>
                <li>Figma Prototype</li>
                <li>Minimum viable product</li>
              </ul>

              <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
                <li className="font-bold">Year</li>
                <li>2020 - 2023</li>
              </ul>
            </div>
          </div>
        </motion.section>
        <section className="mt-24 grid grid-flow-row mx-4">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">Problem</h2>
          <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
            Vendor documentation, dataset inventory, and accounting systems
            lived in siloed areas run by separate teams.
          </p>
        </section>

        <section className="mt-16 grid grid-flow-row mx-4 lg:grid-cols-3 lg:gap-12">
          <div className="col-span-1 mb-4">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              1. Ambiguous
            </p>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              What are the most valuable datasets in my industry and what
              datasets do we own in-house?
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              2. Inaccessible
            </p>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
            How do I request a new license?
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              1. Low visibility
            </p>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
            What data does my team use?
            </p>
          </div>
        </section>

        <motion.section className="mt-24 mx-4"
           initial="hide"
           whileInView="show"
           exit="exit"
           variants={introWelcomeVariants}
        >
          <h2 className="mt-12 text-2xl font-bold dark:text-amber-400">
            Opportunity
          </h2>
          <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
            How might we streamline the most valuable and diverse suite of
            datasets to the users?
          </p>
        </motion.section>

        <section className="mt-24 mx-4">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">
            Interviews
          </h2>
          <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
            Conducted 5-10 interviews with sector data analyst, data management
            managers, portfolio mangers and data sourcing strategist to collect
            pain points and develop user journey.
          </p>
        </section>

        <section className="mt-24 mx-4">
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
              <li>Figma protoype</li>
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

        <section className="mt-24 mx-4">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">Goals</h2>
        </section>

        <section className="mt-16 mx-4 grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          <div className="col-span-1">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              1. Discovery
            </p>
            <p className="mb-4 text-lg text-neutral-400 dark:text-neutral-400">
              Search and showcase datasets in-house to teams.
            </p>
          </div>

          <div className="col-span-1">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              2. Easy Access
            </p>
            <p className="mb-4 text-lg text-neutral-400 dark:text-neutral-400">
              Provide component and table to easily request access to new datasets.
            </p>
          </div>

          <div className="col-span-1">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              3. Clear Usage
            </p>
            <p className="mb-4 text-lg text-neutral-400 dark:text-neutral-400">
              Provide mangers and analysts with usage data. Expose datasets the
              team is subscribed to and how much each dataset costs.
            </p>
          </div>
        </section>

        <section className="mt-24 mx-4">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">
            Hi-fi Wireframes
          </h2>
        </section>

        <section className="mt-16 grid lg:grid-cols-3 lg:gap-12">
          <div className="col-span-1 mx-4 mb-4">
            <Image src='https://res.cloudinary.com/ddirkf5xq/image/upload/v1685483981/BAM/bam-wire-2_g6dxwu.png' width={700} height={700} />
          </div>

          <div className="col-span-1 mx-4 mb-4">
            <Image src='https://res.cloudinary.com/ddirkf5xq/image/upload//v1685483981/BAM/bam-wire-1_oaixgw.png' width={700} height={700} />
          </div>

          <div className="col-span-1 mx-4 mb-4">
            <Image src='https://res.cloudinary.com/ddirkf5xq/image/upload/v1685483981/BAM/bam-wire-3_sb9890.png' width={700} height={700} />
          </div>
        </section>

        <section className="mt-24 mx-4">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">
            Onboarding
          </h2>
        </section>

        <section className="mt-16 grid grid-cols-1 mx-4">
          <div className="hidden sm:hidden md:hidden lg:block">
          <Image src='https://res.cloudinary.com/ddirkf5xq/image/upload/v1692478871/BAM/mobile-onboarding_01_lompy6.png' width={1460} height={600} />
          </div>

          <div className="block sm:hidden md:hidden lg:hidden">
          <Image src='https://res.cloudinary.com/ddirkf5xq/image/upload/v1692479389/BAM/mobile-onboarding_mobile_j6wtyn.png' width={570} height={4400} />
          </div>
        </section>

        <section className="mt-24 mx-4">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">
            Discovery
          </h2>
        </section>

        <section className="mt-16 grid grid-cols-1 mx-4">
        <div className="hidden sm:hidden md:hidden lg:block">
        <Image src='https://res.cloudinary.com/ddirkf5xq/image/upload/v1691037804/Mobile/mobile-selection_hjuo1e.png' width={1460} height={600} />
          </div>

          <div className="block sm:hidden md:hidden lg:hidden">
          <Image src='https://res.cloudinary.com/ddirkf5xq/image/upload/v1692479938/BAM/mobile-selection-sized_b7krdw.png' width={570} height={4400} />
          </div>

        </section>


        <section className="mt-24 mx-4">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">
            Centralized Searching
          </h2>
        </section>


        <section className="mt-16 grid grid-cols-1 mx-4">
        <div className="hidden sm:hidden md:hidden lg:block">
        <Image src='https://res.cloudinary.com/ddirkf5xq/image/upload/v1691037805/Mobile/mobile-search_wsfbxi.png' width={1460} height={600} />
          </div>

          
          <div className="block sm:hidden md:hidden lg:hidden">
          <Image src='https://res.cloudinary.com/ddirkf5xq/image/upload/v1692480143/BAM/mobile-search-sized_gwluga.png' width={570} height={4400} />
          </div>
          
        </section>


        <section className="mt-24 mx-4">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">
            Typography
          </h2>
        </section>

        <section className="mt-16 grid grid-cols-1 mx-4">
          <Image src='https://res.cloudinary.com/ddirkf5xq/image/upload/v1690996791/BAM/Typography-headings_jewdwn.png' width={1460} height={600} />
        </section>

        <section className="mt-16 grid grid-cols-1 mx-4">
          <Image src='https://res.cloudinary.com/ddirkf5xq/image/upload/v1690996790/BAM/Typography-body_hwouot.png' width={1460} height={600} />
        </section>

        <section className="mt-24 mx-4">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">
            Atomic React Component Library
          </h2>
          <p className="mb-4 mt-4 text-lg text-neutral-400 dark:text-neutral-400">
            I designed and contributed development of a comprehensive React Storybook. All components adhere to the principles of atomic design.
          </p>
        </section>

        <section className="mt-16 grid grid-cols-1 mx-4">
          <Image src={componentLibrary} width={1460} height={600} />
        </section>

        <section className="mt-24 mx-4">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">
            Data Catalog - Desktop
          </h2>
        </section>

        <section className="mt-16 grid grid-cols-1 mx-4">
        <h3 className="text-base mb-4 dark:text-white">
            Welcome page - desktop
          </h3>
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685483981/BAM/catalog-home_luwa1t.png'} width={1460} height={571} />
        
        </section>

        <section className="mt-16 grid grid-cols-1 mx-4">
        <h3 className="text-base mb-4 dark:text-white">
            Dataset detail - Desktop (All information has been replaced for privacy)
          </h3>
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685483981/BAM/catalog-details_afmm7d.png'} width={1460} height={571} />
        
        </section>

        <section className="mt-16 grid grid-cols-1 mx-4">
        <h3 className="text-base mb-4 dark:text-white">
            Custom document upload - Desktop
          </h3>
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685483981/BAM/catalog-modal_mmmc0t.png'} width={1460} height={571} />
        
        </section>

        <section className="mt-16 grid grid-cols-1 mx-4">
        <h3 className="text-base mb-4 dark:text-white">
           Dataset search - Desktop
          </h3>
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685483981/BAM/catalog-search-final_wa464j.png'} width={1460} height={571} />
        
        </section>


        <section className="mt-24 mx-4">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">
           Results
          </h2>
          <ul className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
            <li className="list-disc">Led UI/UX development of the Data Intelligence finance platform that enabled the firm to increase dataset offerings by 50%. Platform facilitated workflow collection, categorization, and distribution of 3,000+ datasets, increasing user engagement in the product by 20%.</li>
          </ul>
        </section>


        <Contact />
      </Container>
    </>
  )
}
