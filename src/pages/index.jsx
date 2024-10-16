import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YouTubeIcon
} from '@/components/SocialIcons'
import { formatDate } from '@/lib/formatDate'
import { Section } from '@/components/Section'
import { SectionSingle } from '@/components/SectionSingle'
import catalogWorks1 from '@/images/photos/datacatalog-works-1.png'
import catalogWorks3 from '@/images/photos/catalog-works-3.png'
import { introHeaderVariants, introWelcomeVariants } from '@/components/Section'
import Contact from '@/components/Contact'

import mixpanel from 'mixpanel-browser';

// Replace YOUR_TOKEN with your Project Token
mixpanel.init('9f2c9cd3840ebdac0cb75a0736fe514c', { debug: true });


mixpanel.track('Homepage Visit', {
  'Visit Type': 'common',
});


function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}


export function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}


export default function Home() {
  return (
    <>
      <Head>
        <title>Josiah Peoples - designer & developer</title>
        <meta
          name="description"
          content="I’m Josiah, a designer and developer based in Austin."
        />
      </Head>
      <Container className="mt-9">
        <motion.p
          className="mx-4 mt-24 text-2xl italic dark:text-white lg:mx-0 lg:text-4xl"
          initial="hide"
          whileInView="show"
          exit="exit"
          variants={introHeaderVariants}
        >
          {' '}
          Hi, I’m Josiah Peoples
        </motion.p>
        <motion.p
          className="mx-4 text-2xl font-bold dark:text-white lg:mx-0 lg:text-4xl"
          initial="hide"
          whileInView="show"
          exit="exit"
          variants={introHeaderVariants}
        >
          {' '}
          I’m a designer and a developer. Let me help you bridge the gap between
          design & tech.
        </motion.p>
        <motion.div className="mx-4 max-w-2xl"
          initial="hide"
          whileInView="show"
          exit="exit"
          variants={introHeaderVariants}
        >

          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/jmpeoples?tab=repositories"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/josiahpeoples/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://www.youtube.com/watch?v=IX8zNTJSgdo"
              aria-label="Follow on YouTube"
              icon={YouTubeIcon}
            />
            <SocialLink
              href="https://twitter.com/josiah_one"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
          </div>
        </motion.div>
        
        <Contact />
      </Container>
    </>
  )
}

export function HomeOrigin({ articles }) {
  return (
    <>
      <Head>
        <title>

        </title>
        <meta
          name="description"
          content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m a designer and a developer. Let me help you bridge the gap
            between design and tech.
          </h1>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
    </>
  )
}
