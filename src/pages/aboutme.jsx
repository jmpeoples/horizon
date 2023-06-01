import Head from 'next/head'
import Image from 'next/image'
import { Container } from '@/components/Container'
import componentLibrary from '@/images/photos/react-component-library.png'
import dataScreen from '@/images/photos/Catalog-Search-Details-screen.png'
import dataScreenHome from '@/images/photos/Catalog-HomePage.png'
import Contact from '@/components/Contact'
import { motion } from 'framer-motion'
import { introHeaderVariants } from '@/components/Section'


export default function Actionrpg() {
  return (
    <>
      <Head>
        <title>Josiah Peoples</title>
        <meta name="description" content="Recent work." />
      </Head>
      <Container>
      <section className="mx-4 lg:mx-0">
      <motion.div
        className="mt-52 grid grid-flow-row md:grid-cols-3 md:gap-12"
        initial="hide"
        whileInView="show"
        exit="exit"
        variants={introHeaderVariants}
      >
        <div className="col-span-2">
          <h2 className="mt-12 text-2xl lg:text-4xl font-bold dark:text-white">Hello World <br/> I'm Josiah.</h2>
          <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
          {`I’m`} a developer and designer based in Austin with a focus on pixel perfect user-centered design.
          Let me help you bridge the gap between design & tech.
          </p>
         
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
                <li>Interaction Design</li>
                <li>Prototyping</li>
                <li>Design systems</li>
                <li>Visual Design</li>
                <li>UX Research</li>
                <li>Game design</li>
              </ul>

              <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
                <li className="font-bold">Tools</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Pencil and Paper</li>
                <li>Figma</li>
                <li>Blender</li>
                <li>Unity</li>
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
                <li>GraphQL</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <Contact />
      </Container>
    </>
  )
}
