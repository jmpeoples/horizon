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
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { formatDate } from '@/lib/formatDate'
import { Section } from '@/components/Section'
import catalogWorks1 from '@/images/photos/datacatalog-works-1.png'
import catalogWorks2 from '@/images/photos/catalog-works-2.png'
import catalogWorks3 from '@/images/photos/catalog-works-3.png'
import catalogWorks4 from '@/images/photos/catalog-works-4.png'
import { introHeaderVariants, introWelcomeVariants } from '@/components/Section'
import Contact from '@/components/Contact'

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

function BriefcaseIcon(props) {
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
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Planetaria',
      title: 'CEO',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Airbnb',
      title: 'Product Designer',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Facebook',
      title: 'iOS Software Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Starbucks',
      title: 'Shift Supervisor',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
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
        <motion.div
          className="flex flex-col items-center mx-4 mt-32 rounded-full px-4 py-2 text-lg text-white lg:mx-0"
          initial="hide"
          whileInView="show"
          exit="exit"
          variants={introWelcomeVariants}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-16 w-16"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke='#facc15'
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </motion.div>

        <motion.h1
          className="mx-4 mt-64 text-4xl font-bold dark:text-white lg:mx-0"
          initial="hide"
          whileInView="show"
          exit="exit"
          variants={introHeaderVariants}
        >
          Selected Works
        </motion.h1>

        <Section
          title={'Data Catalog'}
          description={
            'Balyasny portfolio managers, sector data analysts, data managers need to know what data is available, where it lives, and how to access it quickly.'
          }
          topLeft={catalogWorks1}
          topRight={catalogWorks2}
          bottomLeft={catalogWorks3}
          bottomRight={catalogWorks4}
          pageLink={'/datacatalog'}
        ></Section>
        <Section
          title={'Expanding Expedia'}
          description={
            'The ECP team needed to provide a unified method for employees, vendors and third-party call center agents to configure and request technical services.'
          }
          topLeft={
            'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685484352/home/home-expedia-1_ttanr4.png'
          }
          topRight={
            'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685484352/home/home-expedia-2_inxhvz.png'
          }
          bottomLeft={
            'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685484352/home/home-expedia-3_kpbgcj.png'
          }
          bottomRight={
            'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685484352/home/home-expedia-4_xeqbvj.png'
          }
          pageLink={'/expediaservice'}
        ></Section>
        <Section
          title={'The Shadow'}
          description={
            'Explore a vibrant and beautiful world intertwined with dangers from an ancient war. Shadow of Mammon is a fast paced Action RPG inspired by modern jrpgs.'
          }
          topLeft={
            'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685546851/ActionRPG/LandOfRivet_AdobeExpress_ojtjpv.gif'
          }
          topRight={
            'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685549321/ActionRPG/game_ui_xkb7yw.png'
          }
          bottomLeft={
            'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685484353/home/home-rpg-2_zhyajd.png'
          }
          bottomRight={
            'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685484354/home/home-rpg-4_n1m9je.png'
          }
          pageLink={'/actionrpg'}
        ></Section>
        <Section
          title={'Scrape Tracker'}
          description={
            'This product Enables all part to be built and tracked throughout the plant. Our department was focus on instruction manuals for assemblies and marketing.'
          }
          topLeft={
            'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685484352/home/home-fng-1_tecpgd.png'
          }
          topRight={
            'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685484352/home/home-fng-2_ctzu1c.png'
          }
          bottomLeft={
            'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685484353/home/home-fng-3_m0spq9.png'
          }
          bottomRight={
            'https://res.cloudinary.com/ddirkf5xq/image/upload/v1685484353/home/home-fng-4_egj2gr.png'
          }
          pageLink={'/flexngate'}
        ></Section>
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
          Spencer Sharp - Software designer, founder, and amateur astronaut
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
