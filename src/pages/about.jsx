import Head from 'next/head'
import Image from 'next/image'
import { Container } from '@/components/Container'
import Contact from '@/components/Contact'
import { motion } from 'framer-motion'
import { introHeaderVariants } from '@/components/Section'
import mixpanel from 'mixpanel-browser';
import { SocialLink } from '.'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

// Replace YOUR_TOKEN with your Project Token
mixpanel.init('9f2c9cd3840ebdac0cb75a0736fe514c', {debug: true});
mixpanel.track('About me visit', {
  'Visit Type': 'common',
});


export default function About() {
  return (
    <>
      <Head>
        <title>Josiah Peoples</title>
        <meta name="description" content="Recent work." />
      </Head>
      <Container>
      <section className="mx-4 lg:mx-0">
      <motion.div
        className="mt-8 lg:mt-52 grid grid-flow-row md:grid-cols-3 md:gap-12"
        initial="hide"
        whileInView="show"
        exit="exit"
        variants={introHeaderVariants}
      >
        <div className="col-span-2">
          <h2 className="mt-12 text-2xl lg:text-4xl font-bold dark:text-white">Hello World <br/> {`I’m Josiah.`}</h2>
          <p className="mt-12 mb-12 text-lg text-neutral-400 dark:text-neutral-400">
          {`As a product designer by day, I specialize in crafting pixel-perfect, user-centered designs. By night, I transform into a dedicated game developer on a quest to weave captivating narratives through dynamic combat mechanics. Beyond my professional roles, I proudly wear the hats of a husband to an incredible wife and a father to two young ones. On those cherished days off, you'll often spot me carving through snow-covered slopes on a snowboard. Let me be the bridge that connects customer-focused designs with the world of tech.`}
          </p>

          <motion.div className="mb-8 max-w-2xl"
           initial="hide"
           whileInView="show"
           exit="exit"
           variants={introHeaderVariants}
        >
          
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/josiah_one"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://github.com/jmpeoples/horizon"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/josiahpeoples/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </motion.div>
         
        </div>
        <div className="col-span-1 lg:col-span-1 object-cover">
          
            <Image
              src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685644274/mephoto_jwswgh.png'}
              alt=""
              className="rounded-xl border-2 border-neutral-200 dark:border-neutral-700"
              width={500}
              height={500}
            />
        </div>
      </motion.div>
    </section>
    <motion.section
          className="mx-4 mt-32 grid grid-flow-row lg:grid-cols-3 lg:gap-12"
          initial="hide"
          whileInView="show"
          exit="exit"
          variants={introHeaderVariants}
        >
          <div className="col-span-3">
            <h2 className="mt-12 text-2xl font-bold flex justify-center dark:text-white">
              Work History
            </h2>
          </div>
          <div className="col-span-3">
            <div className="flex justify-center">
              <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
                <li className="font-bold flex justify-center">2020-2023</li>
                <li className="flex justify-center">Product Designer at Balyasny Asset Management</li>
                <li className="font-bold flex justify-center">2018-2020</li>
                <li className="flex justify-center">Senior Web Designer at Expedia</li>
                <li className="font-bold flex justify-center">2016-2018</li>
                <li className="flex justify-center">Freelance Product Designer</li>
                <li className="font-bold flex justify-center">2010-2018</li>
                <li className="flex justify-center">UI Designer at Flex-N-Gate</li>
              </ul>


            </div>
          </div>
        </motion.section>
        <motion.section
          className="mx-4 mt-32 grid grid-flow-row lg:grid-cols-3 lg:gap-12"
          initial="hide"
          whileInView="show"
          exit="exit"
          variants={introHeaderVariants}
        >
          <div className="col-span-1">
            <h2 className="mt-12 text-2xl font-bold dark:text-white">
              Design Approach
            </h2>
          </div>
          <div className="col-span-2">
            <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
              I have developed a strong background in design across the FinTech,
              Travel, and Automotive industries. Throughout my career, I have
              successfully led and launched a variety of products, from concept
              to market. This experience has provided me with a comprehensive
              understanding of the product development lifecycle and how to
              strategically align it with business objectives.
            </p>
            <div className="grid grid-cols-3">
              <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
                <li className="font-bold">Skills</li>
                <li>Product Strategy</li>
                <li>Information Architecture</li>
                <li>User-centered design</li>
                <li>Product Design</li>
                <li>Interaction Design</li>
                <li>Usability</li>
                <li>Prototypes</li>
                <li>User Flow</li>
                <li>Design systems</li>
                <li>Visual Design</li>
                <li>UX Research</li>
                <li>Game design</li>
                <li>User Experience Research</li>
                <li>Agile Framework</li>
                <li>Competitive Analysis</li>
                <li>Product Management</li>
                <li>Typography</li>
                <li>Data Visualization</li>
                <li>User Interface Design</li>
                <li>Mobile Design</li>
                <li>Product Development</li>
                <li>A/B Testing</li>
                <li>Wireframes</li>
                <li>Visual Design</li>
                <li>Video Editing</li>
                <li>Audio Editing</li>
              </ul>

              <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
                <li className="font-bold">Tools</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Adobe XD</li>
                <li>Adobe Premiere</li>
                <li>Adobe After Effects</li>
                <li>Pencil and Paper</li>
                <li>Figma</li>
                <li>Blender</li>
                <li>Google Analytics</li>
                <li>Storybook</li>
                <li>Miro</li>
                <li>AWS</li>
                <li>Unity</li>
                <li>Microsoft Excel</li>
                <li>Miro</li>
                <li>Davinci Resolve</li>
              </ul>

              <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
                <li className="font-bold">Tech</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>GIT</li>
                <li>PostgreSQL</li>
                <li>C#</li>
                <li>GraphQL</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>Snowflake</li>
                <li>APIs</li>
              </ul>
            </div>
          </div>
        </motion.section>
       

        <Contact />
      </Container>
    </>
  )
}
