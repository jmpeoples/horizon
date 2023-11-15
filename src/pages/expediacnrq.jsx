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


mixpanel.track('Expedia CNRQ site visit', {
  'Visit Type': 'common',
});



export default function ExpediaCNRQ() {
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
          {`Expedia’s Firewall `}<br />
          {`Rule Discovery System `}
        </motion.p>
        <section className='flex justify-center items-center mt-24'>
        <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1699997812/CNRQ/Portfolio-Intro_thbhvy.png"}
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
               {`After brand technologists create a Virtual Private Cloud(VPC) they require a simplified workflow to expose it existing data centers. Several firewall rules may prevent the service from connecting without the users knowledge.`}
            </p>
            <div className="grid grid-cols-2">
              <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
                <li className="font-bold">My Role</li>
                <li>Product designer</li>
                <li>Software Developer</li>
              </ul>

              <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
                <li className="font-bold">Year</li>
                <li>2019 - 2020</li>
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
            {`Technologists at Expedia are often unsure of the protocol for handling firewall connection requests, given that they haven't been assigned a corresponding ticket. How do Expedians request, track, and manage requests for IP ranges to datacenters?`}

            </p>
          </div>

          <div className="col-span-3 flex justify-center items-center">
            <h2 className="mt-12 text-xl font-bold dark:text-white">
            {`How might we streamline connecting a Virtual Private Cloud(VPC) to an existing Expedia data center?`}
            </h2>
            </div>
        </motion.section>

        <section className='flex justify-center items-center mt-24'>
          
        <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1699997986/CNRQ/CNRQ_Problem_Gif_zu7pcy.gif"}
              alt=""
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={800}
              height={494}
            />

        </section>

        <section className='col-span-1'>
        <h2 className="mt-12 text-2xl font-bold text-center dark:text-white">
          Traveling with users
            </h2>
            <p className="mt-12 text-lg text-neutral-400 text-center dark:text-neutral-400">
 {`Firewall connectivity requests are a requirement to opening connections between environments. The firewalls and zone separation architecture improve Expedia's security stance and ensure continued compliance against PCI requirements. At Expedia the customer is responsible for identifying which connections their service requires and requesting them via the CNRQ process highlighted in this document. The CNRQ process was designed to provide the business and application teams with a method to perform firewall requests.`}
          </p>
        </section>


        <section className="mt-16 grid grid-flow-row mx-4 lg:grid-cols-3 lg:gap-12">
          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
            <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1699997998/CNRQ/headshot_CNRQ_2_otn8pn.png"}
              alt=""
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={150}
              height={150}
            />
            </div>
            <h2 className="text-lg font-bold mt-8 dark:text-white">
            Software Engineer
            </h2>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
            {`“Who follows up on firewall requests?”`}
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
            <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1699997998/CNRQ/headshot_CNRQ_3_yojpsf.png"}
              alt=""
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={150}
              height={150}
            />
            </div>
            <h2 className="text-lg font-bold mt-8 dark:text-white">
              DevOps Engineer
            </h2>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
            {`“How do I edit a request after submission?”`}
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
            <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1699997997/CNRQ/headshot_CNRQ_1_cnkhq6.png"}
              alt=""
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={150}
              height={150}
            />
            </div>
            <h2 className="text-lg font-bold mt-8 dark:text-white">
            Senior Systems Engineer
            </h2>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
            {`“How do I make sure my IP Ranges are safe for new connections?”`}
            </p>
          </div>        
        </section>

        <section className='col-span-1'>
        <h2 className="mt-24 text-2xl font-bold text-center dark:text-white">
             Goals
            </h2>
            <p className="mt-12 text-2xl text-neutral-400 text-center dark:text-white">
            {`Streamline the connectivity request process for a Virtual Private Cloud by reducing margin of error rate.`}
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
            Visibility
            </h2>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
             Users can not find IP range in string look up in service database.
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
            <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1695310156/BAM/newspapper-outline_n7hjwk.png"}
              alt=""
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={150}
              height={150}
            />
            </div>
            <h2 className="text-lg font-bold mt-8 dark:text-white">
            Status
            </h2>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
            No list of subnets in service platform. 
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
            <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1699999793/CNRQ/Exclamation_wpug9x.png"}
              alt=""
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={150}
              height={150}
            />
            </div>
            <h2 className="text-lg font-bold mt-8 dark:text-white">
            Mitigation
            </h2>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              Multiple user errors during request configuration.
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
            I found that it was difficult for users to understand what information was necessary for the Network Service team to successfully complete a firewall change request. 
            </p>
          </div>


          <div className="col-span-3">
          <section className='flex justify-center items-center mt-24'>
          
          <Image
                src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1699997820/CNRQ/JourneyAndSketch_c2dchl.png"}
                alt=""
                className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
                width={800}
                height={494}
              />
  
          </section>
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
           {`Our solution empowers technologists at Expedia by providing a seamless and efficient protocol for handling firewall connection requests, even in the absence of assigned tickets. With our new feature, Expedians can now easily request, track, and manage requests for IP ranges to datacenters through a user-friendly interface. This streamlined process ensures clarity and accountability, ultimately enhancing the overall efficiency of Expedia's technologists in managing firewall connections.`} </p>
          </div>
        </motion.section>


        <section className="mt-24 mx-4">
        <Image
              src={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1699997841/CNRQ/MacBook_Pro_16-inch_Space_Black_Front_ggr5gu.png"}
              alt="designshowcase"
              className="rounded-xl border-2 border-opacity-0 border-neutral-200 dark:border-neutral-700 dark:border-opacity-0"
              width={1388}
              height={838}
            />

<p className="mt-24 text-2xl text-neutral-400 italic text-center dark:text-white">
 {`“Whitelisting my application is much
easier with the new tool.””`}  </p>
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
            Significantly reduced the risk of security breaches and enhances the overall resilience of your network infrastructure. 
             </p>
          </div>
        </motion.section>

        <SectionSingle
          title={'Manage'}
          rightImage={false}
          description={
            'Now, users can effortlessly monitor the status of their network requests in real-time, providing unprecedented visibility and control over the request lifecycle."'
          }
          topLeft={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1699997976/CNRQ/CNRQ-MyRequests_boafnr.png"}
        ></SectionSingle>
        

        <SectionSingle
          title={'Request'}
          rightImage={true}
          description={
            'CNRQ drastically reduces the complexities associated with firewall requests, allowing users to submit requests within minutes.'
          }
          topLeft={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1699997938/CNRQ/CNRQ-NewRequest_mgcaiw.png"}
        ></SectionSingle>


        <SectionSingle
          title={'Discover'}
          rightImage={false}
          description={
            'Users can easily view and navigate through a detailed list of approved IP addresses they can connect to.'
          }
          topLeft={"https://res.cloudinary.com/ddirkf5xq/image/upload/v1700000611/CNRQ/CNRQ-Splash_gmmuld.png"}
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
            {`Users can now submit, track, and manage network requests with unprecedented ease, eliminating unnecessary complexities and reducing the time required for each operation.`}

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
                20%
              </h2>
            </div>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              {`Margin of error rate dropped by 20%.`}
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
              <h2 className="text-8xl mb-8 font-bold dark:text-white">
              15%
              </h2>
            </div>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              {`Overall NPS score increased by 15%.`}
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <div className='flex justify-center'>
              <h2 className="text-8xl mb-8 font-bold dark:text-white">
                1000
              </h2>
            </div>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              {`The new platform effortlessly manages 1,000 network requests every week.`}
            </p>
          </div>
        </motion.section>

        
        <Contact />
      </Container>
    </>
  )
}
