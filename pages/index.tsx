import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Naladhipa Courses</title>
        <meta name="description" content="bimbel bahasa inggris" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className='antialiased'>
        <section className='pt-24 m lg:pt-28 md:pt-20 lg:pb-36 ' id='Home'>
          <div className='container mx-auto'>
            <div className='lg:flex'>
              <div className='self-center px-4 lg:px-0 lg:w-6/12'>
                <h1 className="text-3xl font-semibold text-primary lg:text-4xl">
                  Bimbel Bahasa Inggris untuk anak - anak dengan Mentor yang berpengalaman
                </h1>
                <h2 className="py-5 mb-5 text-sm font-medium text-gray-400 lg:text-lg">
                  Dengan bergabung dengan Naladhipa Courses anak anda akan merasakan pengalaman yang seru saat
                  belajar bahasa inggris
                </h2>
                <div className='items-center justify-between'>
                  <ul className='flex flex-row py-10 space-x-5 lg:md:space-x-10'>
                    <li>
                      <Link href=""><a className='px-10 py-3 text-xl font-semibold text-white rounded-lg shadow-sm hover:bg-purple-600 focus:ring-purple-200 focus:ring bg-primary' >
                        Yuk Gabung
                      </a>
                      </Link>
                    </li>
                    <li className='-mt-3 text-xl font-semibold text-dark'>
                      <span className="px-3">10+</span>
                      <br />
                      <span>Siswa</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='self-end w-6/12 px-4 lg:py-0'>
                <div className='relative hidden lg:block'>
                  <Image src="/Hero.png" className='hidden lg:block' alt='hero' width={712}
                    height={500}></Image>
                </div>
              </div>
            </div>
          </div>
        </section>

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
