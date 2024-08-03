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


mixpanel.track('Action RPG Visit', {
  'Visit Type': 'common',
});


export default function Actionrpg() {
  return (
    <>
      <Head>
        <title>Josiah Peoples</title>
        <meta name="description" content="Recent work." />
      </Head>
      <Container>
        <section className="bg-gray-500 bg-[url('https://res.cloudinary.com/ddirkf5xq/image/upload/v1685546833/ActionRPG/mammon_banner_uqzzz2.png')] bg-center bg-no-repeat bg-blend-multiply">
          <div className="mx-auto px-4 py-24 text-left lg:py-56">
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
              Explore a world <br />
              full of mysteries
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
              I wanted to learn C# and challenge my design skills. After
              building a few 2D pixel projects, I decided to take the leap and
              build a shippable game. Shadow of Mammon is a fast paced Action
              RPG inspired by modern JRPGs.
            </p>
            <div className="grid grid-cols-2">
              <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
                <li className="font-bold">My Role</li>
                <li>Programmer</li>
                <li>Product designer</li>
                <li>Level Designer</li>
                <li>Marketing</li>
                <li>UI/UX Designer</li>
                <li>Designer</li>
                <li>Writer</li>
                <li>Producer</li>
              </ul>

              <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
                <li className="font-bold">Year</li>
                <li>2022 - 20XX</li>
              </ul>
            </div>
          </div>
        </motion.section>
        <section className="mx-4 mt-24 grid grid-flow-row">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">Problem</h2>
          <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
            SteamSpy data shows lack of single player offline action rpgs
            players can complete in 8-12 hours.
          </p>
        </section>

        <section className="mx-4 mt-16 grid grid-flow-row lg:grid-cols-3 lg:gap-12">
          <div className="col-span-1 mb-4">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              1. Saturation of 2D rpgs
            </p>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              Submissions for 2D rpgs is saturated on major game store fronts.
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              2. Online MMO default
            </p>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              MMO genre requires consistent payments.
            </p>
          </div>

          <div className="col-span-1 mb-4">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              1. 30-100 hours games
            </p>
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              Target demographic audience has increasingly less time to devote
              30+ hours to single game.
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
            How might we create a story driven action rpg that is easy to pick
            up but difficult to master?
          </p>
        </motion.section>

        <section className="mx-4 mt-24">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">
            Interviews
          </h2>
          <p className="mt-12 text-lg text-neutral-400 dark:text-neutral-400">
            Conducted 10-15 interviews with target demographic in online forums
            and in person.
          </p>
        </section>

        <section className="mx-4 mt-24">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">
            Design Process
          </h2>
          <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-7 lg:gap-2">
            <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
              <li className="font-bold">Ideas</li>
              <li>Market Research</li>
              <li>User Persona</li>
            </ul>

            <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
              <li className="font-bold">Write the story</li>
              <li>Game goals</li>
              <li>Scope and timelines</li>
            </ul>

            <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
              <li className="font-bold">Game Pillar Design</li>
              <li>Combat</li>
              <li>Narrative</li>
              <li>Exploration</li>
            </ul>
            <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
              <li className="font-bold">Prototype</li>
              <li>Block out animation</li>
              <li>Block out levels</li>
            </ul>
            <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
              <li className="font-bold">Test & Refine</li>
              <li>Beta Testing</li>
            </ul>
            <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
              <li className="font-bold">Finalize Mechanics</li>
              <li>Staus System</li>
              <li>Inventory System</li>
              <li>Combat System</li>
              <li>UI System</li>
              <li>Dialog System</li>
            </ul>
            <ul className="mt-12 list-none text-lg text-neutral-400 dark:text-neutral-400">
              <li className="font-bold">Populate World</li>
              <li>Level Design</li>
            </ul>
          </div>
        </section>

        <section className="mx-4 mt-24">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">Goals</h2>
        </section>

        <section className="mx-4 mt-16 grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          <div className="col-span-1">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              1. Explore
            </p>
            <p className="mb-4 text-lg text-neutral-400 dark:text-neutral-400">
              Explore the city of Belle Ombra and take on its dark dungeons.
            </p>
          </div>

          <div className="col-span-1">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              2. Investigate
            </p>
            <p className="mb-4 text-lg text-neutral-400 dark:text-neutral-400">
              Solve the mystery of the Plague of Shadows.
            </p>
          </div>

          <div className="col-span-1">
            <p className="text-lg text-neutral-400 dark:text-neutral-400">
              3. Fight
            </p>
            <p className="mb-4 text-lg text-neutral-400 dark:text-neutral-400">
              Fight enemies with responsive combat, upgrade weapons and disover
              new equipment.
            </p>
          </div>
        </section>

        <section className="mx-4 mt-24">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">Features</h2>
        </section>


        <section className="mx-4 mt-16 grid grid-cols-1">
        <h3 className="text-base mb-4 dark:text-white">
            Playable beta level
          </h3>
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685546851/ActionRPG/LandOfRivet_AdobeExpress_ojtjpv.gif'} width={1460} height={571} />
        </section>

        <section className="mx-4 mt-16 grid grid-cols-1">
        <h3 className="text-base mb-4 dark:text-white">
            Beta player UI
          </h3>
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685549321/ActionRPG/game_ui_xkb7yw.png'} width={1460} height={571} />
        </section>

        <section className="mx-4 mt-16 grid grid-cols-1">
        <h3 className="text-base mb-4 dark:text-white">
            Combat damage and vfx test
          </h3>
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685546867/ActionRPG/Shadow_Combat_Explosion_AdobeExpress_yhonnt.gif'} width={1460} height={571} />
        </section>

        <section className="mx-4 mt-16 grid grid-cols-1">
        <h3 className="text-base mb-4 dark:text-white">
            Blender shading
          </h3>
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685546937/ActionRPG/ARPG-2_tbd5ul.png'} width={1460} height={571} />
        </section>

        <section className="mx-4 mt-16 grid grid-cols-1">
        <h3 className="text-base mb-4 dark:text-white">
            Animation state machine and Character controller scripts
          </h3>
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685546938/ActionRPG/ActionRPG-1_apgxqb.png'} width={1460} height={571} />
        </section>

        <section className="mx-4 mt-16 grid grid-cols-1">
        <h3 className="text-base mb-4 dark:text-white">
            Targeting system
          </h3>
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685547011/ActionRPG/Mammon_ai_AdobeExpress_y4jkq6.gif'} width={1460} height={571} />
        </section>

        <section className="mx-4 mt-16 grid grid-cols-1">
        <h3 className="text-base mb-4 dark:text-white">
            Combat test
          </h3>
          <Image src={'https://res.cloudinary.com/ddirkf5xq/image/upload/v1691038790/ActionRPG/SOM_feature_GIF_io5stg.gif'} width={1460} height={571} />
        </section>

        <section className="mx-4 mt-24 mb-24">
          <h2 className="mt-12 text-2xl font-bold dark:text-white">Results</h2>
          <p className="mt-12 text-lg text-neutral-400 mb-8 dark:text-neutral-400">
            25-50 subscribers per month. Click below for dev log.
          </p>
          <a 
            href="https://twitter.com/sailingfox1" 
            className="mt-12 rounded-full border-2 border-white px-8 py-2 text-lg text-neutral-400 font-bold hover:text-amber-400 dark:text-neutral-400 dark:hover:text-amber-400">
            Dev Log
          </a>
        </section>
        <Contact />
      </Container>
    </>
  )
}
