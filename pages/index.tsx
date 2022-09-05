import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Naladhipa Courses</title>
        <meta name="description" content="bimbel bahasa inggris" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Head>
        <nav className="border-gray-200 py-2.5 rounded px-4 ">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" className="flex items-center lg:text-2xl tracking-wide text-lg font-semibold text-primary">
              Naladhipa Course
            </a>
            <div className="flex md:order-2">
              <button type="button"
                className="px-5 py-2.5 mr-3 hover:shadow-lg font-semibold text-center text-white rounded-lg bg-primary hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-300 text-sm md:mr-0">Masuk</button>
              <button data-collapse-toggle="navbar-cta" type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                aria-controls="navbar-cta" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
              <ul
                className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-base text-primary md:text-primary md:p-0"
                    aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#"
                    className="block py-2 pl-3 pr-4 text-base text-gray-700 md:hover:text-purple-700 md:p-0">About</a>
                </li>
                <li>
                  <a href="#"
                    className="block py-2 pl-3 pr-4 text-base text-gray-700 md:hover:text-purple-700 md:p-0">Testimonials</a>
                </li>
                <li>
                  <a href="#"
                    className="block py-2 pl-3 pr-4 text-base text-gray-700 md:hover:text-purple-700 md:p-0">Harga</a>
                </li>
                <li>
                  <a href="#"
                    className="block py-2 pl-3 pr-4 text-base text-gray-700 md:hover:text-purple-700 md:p-0">Kontak</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}

export default Home
