import Head from 'next/head'
import Image from 'next/image'
import { Container } from '@/components/Container'
import componentLibrary from '@/images/photos/react-component-library.png'
import Contact from '@/components/Contact'
import { motion } from 'framer-motion'
import { introWelcomeVariants, introHeaderVariants } from '@/components/Section'
import mixpanel from 'mixpanel-browser';
import { SectionSingle } from '@/components/SectionSingle'

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
         <motion.p
          className="mx-4 text-2xl font-bold text-center dark:text-white lg:mx-0 lg:text-4xl"
          initial="hide"
          whileInView="show"
          exit="exit"
          variants={introHeaderVariants}
        >
          Designing the <br />
              Dataset Catalog
        </motion.p>
        <section className='flex justify-center items-center mt-24'>
        <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1695247718/Catalog-Search-Home-upgraded_cnsyzl.png"}
              alt=""
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={800}
              height={494}
            />
        </section>
        <motion.section className="mt-32 grid grid-flow-row mx-4 border-t-4 border-indigo-500 lg:grid-cols-3 lg:gap-12"
           initial="hide"
           whileInView="show"
           exit="exit"
           variants={introWelcomeVariants}
        >
          <div className="col-span-1">
            <h2 className="mt-12 text-2xl font-bold dark:text-white">
              01 - Overview
            </h2>
          </div>
          <div className="col-span-2">
            <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
            Balyasny portfolio managers, sector data analysts, and data managers depend on fast, 
            reliable access to trading data. Understanding what data is available, where it resides, 
            and how to retrieve it efficiently is crucial. Accessing a complete dataset often requires 
            navigating multiple sources — including CRMs, accounting systems, cloud storage, and third-party APIs. 
            To streamline this process, Balyasny needed a solution that empowers portfolio managers and analysts to 
            efficiently query in-house datasets and uncover insights in a one comprehensive source.
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
      
       <motion.section className="mt-32 grid grid-flow-row mx-4 border-t-4 border-indigo-500 lg:grid-cols-3 lg:gap-12"
           initial="hide"
           whileInView="show"
           exit="exit"
           variants={introWelcomeVariants}
        >
          <div className="col-span-1">
            <h2 className="mt-12 text-2xl font-bold dark:text-white">
            02 - Challenge
            </h2>
          </div>
          <div className="col-span-2">
            <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
            {`The data team presently manages multiple separate spreadsheets that encompass information about pipeline vendors, active vendors, and other valuable metadata such as cost, descriptions, and rankings. Ideally, we aim to consolidate and centralize this data in a single location to serve the broader data intelligence team and select individuals more effectively.`}

            </p>
          </div>
        </motion.section>

        <section className='flex justify-center items-center mt-24'>
        <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1699458427/BAM/Solution_Gif_j3yh4t.gif"}
              alt=""
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={800}
              height={494}
            />
        </section>

        <section className='col-span-1'>
        <h2 className="mt-12 text-2xl font-bold text-center dark:text-white">
              Updating User Personas
            </h2>
            <p className="mt-12 text-lg text-neutral-400 text-center dark:text-neutral-400">
            A significant portion of my effort was dedicated to refining our understanding of user personas. I actively engaged in conducting multiple interviews each week. Throughout these interviews, my approach was to encourage users to guide me through their daily tasks and responsibilities. My objective was not to become an expert in their field but rather to swiftly immerse myself in their experiences, allowing me to identify pain points and cultivate a deeper sense of empathy for their needs.
          </p>
        </section>


        <section className="mt-16 grid grid-flow-row mx-4 lg:grid-cols-3 lg:gap-12">
          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
            <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1695306807/BAM/SectorDataAnalysis_Profile_rstvt5.png"}
              alt=""
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={150}
              height={150}
            />
            </div>
            <h2 className="text-lg font-bold mt-8 dark:text-white">
              Sector Data Analyst
            </h2>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
            {`“Make clients lives easier,with anything that deals with data”`}
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
            <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1695307592/BAM/DataSourcing_Profile_qgdxvr.png"}
              alt=""
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={150}
              height={150}
            />
            </div>
            <h2 className="text-lg font-bold mt-8 dark:text-white">
              Data Sourcing
            </h2>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
            {`“How can I help users find data?”`}
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
            <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1695307592/BAM/InvestmentData_Profile_bdglyi.png"}
              alt=""
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={150}
              height={150}
            />
            </div>
            <h2 className="text-lg font-bold mt-8 dark:text-white">
            Investment Data Analyst
            </h2>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
            {`“How can I help users understand the data they collect?”`}
            </p>
          </div>        
        </section>

        <section className='col-span-1'>
        <h2 className="mt-24 text-2xl font-bold text-center dark:text-white">
             Goals
            </h2>
            <p className="mt-12 text-2xl text-neutral-400 text-center dark:text-white">
            {`We established fresh objectives and guiding principles aimed at addressing a central question: "How can we optimize the delivery of the most valuable and diverse dataset collection to our users?"`}
          </p>
        </section>

        <motion.section className="mt-32 grid grid-flow-row mx-4 lg:grid-cols-3 lg:gap-12"
           initial="hide"
           whileInView="show"
           exit="exit"
           variants={introWelcomeVariants}
        >
          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
            <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1695308189/BAM/search-outline_mbbnbi.png"}
              alt=""
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={150}
              height={150}
            />
            </div>
            <h2 className="text-lg font-bold mt-8 dark:text-white">
              Discovery
            </h2>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
             What are the most valuable datasets, and what datasets do we have available in-house?
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
            <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1695308189/BAM/unlock-outline_l0chp5.png"}
              alt=""
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={150}
              height={150}
            />
            </div>
            <h2 className="text-lg font-bold mt-8 dark:text-white">
              Access
            </h2>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              How can I access the data and how do I request a new license?
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
            <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1695308190/BAM/user-headset_wzwnv9.png"}
              alt=""
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={150}
              height={150}
            />
            </div>
            <h2 className="text-lg font-bold mt-8 dark:text-white">
              Usage
            </h2>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              What data does my team use, who uses it, and when do they use it?
            </p>
          </div>
        </motion.section>


        <motion.section className="mt-32 grid grid-flow-row mx-4 border-t-4 border-indigo-500 lg:grid-cols-3 lg:gap-12"
           initial="hide"
           whileInView="show"
           exit="exit"
           variants={introWelcomeVariants}
        >
          <div className="col-span-1">
            <h2 className="mt-12 text-2xl font-bold dark:text-white">
            03 - Discovery
            </h2>
          </div>
          <div className="col-span-2">
            <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
              
The central thread connecting these themes is time, or rather the scarcity of it. The exchange of information necessitates effective communication across various teams, and even when it operates smoothly, it consumes valuable time that could be dedicated to more pressing tasks.
            </p>
          </div>
        </motion.section>

        <section className='col-span-1 mb-16'>
        <h2 className="mt-32 text-2xl font-bold text-center dark:text-white">
              Themes
            </h2>
            <p className="mt-12 text-xl text-neutral-400 text-center dark:text-neutral-400">
            Our research yielded positive results, allowing us to identify a shared workflows that effectively streamlines the data delivery process for portfolio managers.
            </p>
        </section>


        <motion.section className="mt-32 grid grid-flow-row mx-4 lg:grid-cols-3 lg:gap-12"
           initial="hide"
           whileInView="show"
           exit="exit"
           variants={introWelcomeVariants}
        >
          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
            <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1695310155/BAM/cart-outline_n5ry5g.png"}
              alt="inventory"
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={150}
              height={150}
            />
            </div>
            <h2 className="text-lg font-bold mt-8 dark:text-white">
              Inventory
            </h2>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
            Internal vs. Potential: Locate datasets and associated documentation either in the pipeline or currently in active status.
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
            <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1695310156/BAM/eye-outline_e248lg.png"}
              alt="eyeimage"
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={150}
              height={150}
            />
            </div>
            <h2 className="text-lg font-bold mt-8 dark:text-white">
              Visibility
            </h2>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              The source of truth for accounting and invoice.
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
            <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1695308189/BAM/unlock-outline_l0chp5.png"}
              alt=""
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={150}
              height={150}
            />
            </div>
            <h2 className="text-lg font-bold mt-8 dark:text-white">
             Access
            </h2>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
            Recording and illustrating the locations for accessing data within the BAM infrastructure.
            </p>
          </div>
          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
            <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1695310156/BAM/newspapper-outline_n7hjwk.png"}
              alt="newspaper"
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={150}
              height={150}
            />
            </div>
            <h2 className="text-lg font-bold mt-8 dark:text-white">
              Status
            </h2>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              Receive notifications regarding dataset delivery and quality assurance status.
            </p>
          </div>
          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
            <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1695310155/BAM/chart-outline_wsvcve.png"}
              alt="evaluationimage"
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={150}
              height={150}
            />
            </div>
            <h2 className="text-lg font-bold mt-8 dark:text-white">
              Evaluation
            </h2>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              Establish standardized assessments for evaluating the quality of data sourcing.
            </p>
          </div>
          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
            <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1695310154/BAM/badge-check-outline_hzrerb.png"}
              alt="checkmarkimage"
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={150}
              height={150}
            />
            </div>
            <h2 className="text-lg font-bold mt-8 dark:text-white">
              Enrichment
            </h2>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              Deliver analytics to the dataset authoring side.
            </p>
          </div>
        </motion.section>

        <motion.section className="mt-32 grid grid-flow-row mx-4 border-t-4 border-indigo-500 lg:grid-cols-3 lg:gap-12"
           initial="hide"
           whileInView="show"
           exit="exit"
           variants={introWelcomeVariants}
        >
          <div className="col-span-1">
            <h2 className="mt-12 text-2xl font-bold dark:text-white">
            04 - Solution
            </h2>
          </div>
          <div className="col-span-2">
            <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
           {`Discover datasets faster than ever before as we empower you to uncover datasets and spark fresh ideas at lightning speed. Our platform lets clients explore a comprehensive range of data, revealing not only what is available but also who is in charge of it. With easy access insights, you will be well-equipped to harness the potential of this data-driven world.`} </p>
          </div>
        </motion.section>


        <section className="mt-24 mx-4">
        <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1695310611/BAM/catalog_design_cluster_gdt35b.png"}
              alt="designshowcase"
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={1388}
              height={838}
            />

<p className="mt-12 text-2xl text-neutral-400 italic text-center dark:text-white">
 {`“I can finally see all the datasets in one place, this is fantastic.”`}  </p>
        </section>


        <motion.section className="mt-32 grid grid-flow-row mx-4 border-t-4 border-indigo-500 lg:grid-cols-3 lg:gap-12"
           initial="hide"
           whileInView="show"
           exit="exit"
           variants={introWelcomeVariants}
        >
          <div className="col-span-1">
            <h2 className="mt-12 text-2xl font-bold dark:text-white">
            05 - Launch
            </h2>
          </div>
          <div className="col-span-2">
            <p className="mt-12 text-2xl text-neutral-400 dark:text-white">
            The biggest update to the data intelligence platform in the last three years. 
             </p>
          </div>
        </motion.section>

        <SectionSingle
          title={'Discovery'}
          rightImage={false}
          description={
            'Find out which datasets hold the most value and explore our extensive in-house data collection. Your data-driven success story begins here!"'
          }
          topLeft={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1685483981/BAM/catalog-search-final_wa464j.png"}
        ></SectionSingle>
        

        <SectionSingle
          title={'Access'}
          rightImage={true}
          description={
            'Unlock the key to effortless data access and license acquisition. Conveniently tap into our data resources.'
          }
          topLeft={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1695314593/BAM/catalog_access_ilvswz.png"}
        ></SectionSingle>


        <SectionSingle
          title={'Request Data'}
          rightImage={false}
          description={
            'Seize the opportunity to enhance your data-driven endeavors by effortlessly requesting new licenses.'
          }
          topLeft={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1695314583/BAM/catalog_request_data_xn4lah.png"}
        ></SectionSingle>



        <section className="mt-24 mx-4">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">
            Onboarding - Mobile
          </h2>
        </section>

        <section className="mt-16 grid grid-cols-1 mx-4">
          <div className="hidden sm:hidden md:hidden lg:block">
          <Image src='https://res.cloudinary.com/ddirkf5xq/image/upload/v1692478871/BAM/mobile-onboarding_01_lompy6.png' alt='' width={1460} height={600} />
          </div>

          <div className="block sm:hidden md:hidden lg:hidden">
          <Image src='https://res.cloudinary.com/ddirkf5xq/image/upload/v1692479389/BAM/mobile-onboarding_mobile_j6wtyn.png' alt='' width={570} height={4400} />
          </div>
        </section>

        <section className="mt-24 mx-4">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">
            Discovery - Mobile
          </h2>
        </section>

        <section className="mt-16 grid grid-cols-1 mx-4">
        <div className="hidden sm:hidden md:hidden lg:block">
        <Image src='https://res.cloudinary.com/ddirkf5xq/image/upload/v1691037804/Mobile/mobile-selection_hjuo1e.png' alt='' width={1460} height={600} />
          </div>

          <div className="block sm:hidden md:hidden lg:hidden">
          <Image src='https://res.cloudinary.com/ddirkf5xq/image/upload/v1692479938/BAM/mobile-selection-sized_b7krdw.png' alt='' width={570} height={4400} />
          </div>

        </section>


        <section className="mt-24 mx-4">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">
            Centralized Searching - Mobile
          </h2>
        </section>


        <section className="mt-16 grid grid-cols-1 mx-4">
        <div className="hidden sm:hidden md:hidden lg:block">
        <Image src='https://res.cloudinary.com/ddirkf5xq/image/upload/v1691037805/Mobile/mobile-search_wsfbxi.png' alt='' width={1460} height={600} />
          </div>

          
          <div className="block sm:hidden md:hidden lg:hidden">
          <Image src='https://res.cloudinary.com/ddirkf5xq/image/upload/v1692480143/BAM/mobile-search-sized_gwluga.png' alt='' width={570} height={4400} />
          </div>
          
        </section>


        <SectionSingle
          title={'Atomic React Component Library'}
          rightImage={false}
          description={
            'The byproduct was the development of a comprehensive React Storybook. All components adhere to the principles of atomic design.'
          }
          topLeft={componentLibrary}
        ></SectionSingle>

    <motion.section className="mt-32 grid grid-flow-row mx-4 border-t-4 border-indigo-500 lg:grid-cols-3 lg:gap-12"
           initial="hide"
           whileInView="show"
           exit="exit"
           variants={introWelcomeVariants}
        >
          <div className="col-span-1">
            <h2 className="mt-12 text-2xl font-bold dark:text-white">
            06 - Impact
            </h2>
          </div>
          <div className="col-span-2">
            <p className="mt-12 text-2xl text-neutral-400 dark:text-white">
            {`We received an overwhelmingly positive response from the community of data engineers and sector data analysts, which has been truly fantastic.`}

            </p>
          </div>
        </motion.section>

        <motion.section className="mt-32 grid grid-flow-row mx-4 lg:grid-cols-3 lg:gap-12"
           initial="hide"
           whileInView="show"
           exit="exit"
           variants={introWelcomeVariants}
        >
           <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
              <h2 className="text-8xl mb-8 font-bold dark:text-white">
                50%
              </h2>
            </div>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              {`Elevated Data Experience: A 50% Surge in Our Diverse Dataset Selection!`}
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
              <h2 className="text-8xl mb-8 font-bold dark:text-white">
                20%
              </h2>
            </div>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              {`Amplified user engagement experience with a remarkable 20% increase.`}
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
              <h2 className="text-8xl mb-8 font-bold dark:text-white">
                3000+
              </h2>
            </div>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              {`Our platform effortlessly manages, organizes, and shares over 3,000 datasets.`}
            </p>
          </div>
        </motion.section>

        
        <Contact />
      </Container>
    </>
  )
}
