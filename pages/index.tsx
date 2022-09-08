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

        {/* Hero Section */}
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
        {/* End Hero Section */}

        {/* Feature Section */}
        <section id="feature" className="py-5 lg:py-10 lg:pb-20 bg-secondary lg:max-w-full">
          <div className='container mx-auto'>
            <div className="py-8 mb-10 text-center lg:px-72 lg:py-20 lg:mb-5">
              <h1 className="text-2xl font-semibold lg:text-4xl text-primary">
                Naladhipa Courses merupakan tempat terbaik untuk bimbel Bahasa Inggris
              </h1>
            </div>
            <div className="flex-wrap px-3 py-5 lg:py-20 lg:flex gap-y-10 lg:px-10 ">
              <div className="pb-5 lg:w-4/12 ">
                <div className="max-w-sm p-6 border border-gray-200 shadow-lg bg-primary rounded-xl">
                  <div className="items-center justify-between">
                    <ul className="flex flex-row space-x-5">
                      <li>
                        <svg width="70" height="70" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.5" y="0.625" width="80" height="80" rx="20" fill="#9C7AFF" />
                          <path d="M41.7014 20.625L41.1665 21.1035L21.6723 40.8113L20.5 41.9869L21.6741 43.2173L37.9092 59.451L39.1397 60.625L40.3189 59.451L60.0232 39.9586L60.5 39.422V20.625H41.7014ZM43.1438 24.0426H57.0821V37.9798L39.138 55.8164L25.3056 41.9852L43.1438 24.0426ZM51.9552 27.4603C51.5019 27.4603 51.0673 27.6403 50.7468 27.9608C50.4263 28.2812 50.2462 28.7159 50.2462 29.1691C50.2462 29.6223 50.4263 30.0569 50.7468 30.3774C51.0673 30.6979 51.5019 30.8779 51.9552 30.8779C52.4084 30.8779 52.8431 30.6979 53.1636 30.3774C53.4841 30.0569 53.6641 29.6223 53.6641 29.1691C53.6641 28.7159 53.4841 28.2812 53.1636 27.9608C52.8431 27.6403 52.4084 27.4603 51.9552 27.4603Z" fill="white" />
                        </svg>
                      </li>
                      <li className="mt-5">
                        <a href="#">
                          <h5
                            className="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">
                            Terjangkau</h5>
                        </a>
                      </li>
                    </ul>

                  </div>
                  <p className="pt-5 mb-3 text-lg font-normal text-white dark:text-gray-400">Dengan harga mulai 100
                    ribu perbulan anak anda sudah bisa mengikuti bimbel disini dan mendapatkan materi yang berkualitas dan bersaing.</p>
                </div>

              </div>
              <div className="pb-5 lg:w-4/12 ">
                <div className="max-w-sm p-6 border border-gray-200 shadow-lg bg-primary rounded-xl">
                  <div className="items-center justify-between">
                    <ul className="flex flex-row space-x-5">
                      <li>
                        <svg width="70" height="70" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.5" y="0.625" width="80" height="80" rx="20" fill="#9C7AFF" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M40.5 20.625C51.528 20.625 60.5 29.597 60.5 40.625C60.5 51.653 51.528 60.625 40.5 60.625C29.472 60.625 20.5 51.653 20.5 40.625C20.5 29.597 29.472 20.625 40.5 20.625ZM40.5 23.625C31.126 23.625 23.5 31.251 23.5 40.625C23.5 49.999 31.126 57.625 40.5 57.625C49.874 57.625 57.5 49.999 57.5 40.625C57.5 31.251 49.874 23.625 40.5 23.625ZM39.8224 30.8158C40.6524 30.8158 41.3224 31.4878 41.3224 32.3158V41.1598L48.1324 45.2198C48.8424 45.6458 49.0764 46.5658 48.6524 47.2778C48.3704 47.7478 47.8724 48.0098 47.3624 48.0098C47.1004 48.0098 46.8364 47.9418 46.5944 47.7998L39.0544 43.3018C38.6024 43.0298 38.3224 42.5398 38.3224 42.0118V32.3158C38.3224 31.4878 38.9944 30.8158 39.8224 30.8158Z" fill="white" />
                        </svg>
                      </li>
                      <li className="mt-5">
                        <a href="#">
                          <h5
                            className="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">
                            Flexible</h5>
                        </a>
                      </li>
                    </ul>

                  </div>
                  <p className="pt-5 mb-3 text-lg font-normal text-white dark:text-gray-400">Pembelajaran dengan waktu yang flexible, orang tua dapat memilih jadwal bimbel untuk anaknya sehingga tidak menganggu waktu belajar di sekolah. </p>
                </div>

              </div>
              <div className="pb-5 lg:w-4/12 ">
                <div className="max-w-sm p-6 border border-gray-200 shadow-lg bg-primary rounded-xl">
                  <div className="items-center justify-between">
                    <ul className="flex flex-row space-x-5">
                      <li>
                        <svg width="70" height="70" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.5" y="0.625" width="80" height="80" rx="20" fill="#9C7AFF" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M40.5 58.4028C50.3189 58.4028 58.2778 50.4439 58.2778 40.625C58.2778 30.8061 50.3189 22.8472 40.5 22.8472C30.6811 22.8472 22.7222 30.8061 22.7222 40.625C22.7222 50.4439 30.6811 58.4028 40.5 58.4028ZM40.5 60.625C51.5456 60.625 60.5 51.6706 60.5 40.625C60.5 29.5794 51.5456 20.625 40.5 20.625C29.4544 20.625 20.5 29.5794 20.5 40.625C20.5 51.6706 29.4544 60.625 40.5 60.625Z" fill="white" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M32.3833 45.0695C34.1111 49.3272 37.2944 51.7361 40.5 51.7361C43.7067 51.7361 46.8889 49.3272 48.6167 45.0695H32.3833ZM40.5 53.9583C36.0133 53.9583 32.1244 50.5717 30.2133 45.625C30.1946 45.5773 30.1761 45.5295 30.1578 45.4817C29.6622 44.1583 30.7222 42.8472 32.1367 42.8472H48.8644C50.2789 42.8472 51.34 44.1583 50.8422 45.4817C50.8243 45.5295 50.8061 45.5773 50.7878 45.625C48.8756 50.5717 44.9867 53.9583 40.5 53.9583Z" fill="white" />
                          <path d="M37.5022 38.8939C37.6467 38.4961 37.6033 38.0106 37.4845 37.5683C37.3413 37.0591 37.1121 36.578 36.8067 36.1461C36.1611 35.225 35.0911 34.3795 33.6456 34.3172C32.1489 34.255 31.0311 35.205 30.3422 36.2128C30.0114 36.6979 29.7513 37.2276 29.57 37.7861C29.4111 38.2817 29.3267 38.7883 29.3822 39.1939C29.395 39.2864 29.4309 39.3741 29.4865 39.4491C29.5421 39.524 29.6158 39.5837 29.7006 39.6227C29.7854 39.6617 29.8787 39.6787 29.9718 39.6721C30.0649 39.6655 30.1549 39.6355 30.2333 39.585C30.6778 39.3006 31.1433 38.9106 31.5745 38.5506C31.77 38.3861 31.96 38.2283 32.1356 38.0895C32.76 37.5961 33.2467 37.315 33.6489 37.295C34.0322 37.2761 34.4745 37.495 35.0322 37.9128C35.2322 38.0617 35.4256 38.2195 35.6256 38.3839L35.8422 38.5606C36.1133 38.7795 36.4022 39.0039 36.6933 39.1794C36.7636 39.2218 36.8423 39.2481 36.9239 39.2564C37.0054 39.2647 37.0879 39.2549 37.1652 39.2276C37.2425 39.2003 37.3128 39.1562 37.3711 39.0985C37.4294 39.0408 37.4742 38.9709 37.5022 38.8939V38.8939ZM43.4033 38.8939C43.2589 38.4961 43.3033 38.0106 43.4222 37.5683C43.5467 37.1061 43.7767 36.6095 44.1 36.1461C44.7445 35.225 45.8156 34.3795 47.2611 34.3172C48.7567 34.255 49.8756 35.205 50.5645 36.2128C50.9133 36.7239 51.1733 37.2772 51.3367 37.7861C51.4945 38.2817 51.5789 38.7883 51.5233 39.1939C51.5105 39.2862 51.4746 39.3738 51.419 39.4486C51.3635 39.5234 51.29 39.583 51.2053 39.622C51.1207 39.6609 51.0276 39.6779 50.9346 39.6715C50.8416 39.665 50.7518 39.6353 50.6733 39.585C50.2289 39.3006 49.7622 38.9106 49.3322 38.5506C49.1472 38.3944 48.9602 38.2407 48.7711 38.0895C48.1456 37.5961 47.66 37.315 47.2567 37.295C46.8733 37.2761 46.4311 37.495 45.8745 37.9128C45.6745 38.0617 45.4811 38.2195 45.2811 38.3839L45.0633 38.5606C44.7941 38.7855 44.5101 38.9923 44.2133 39.1794C44.1431 39.222 44.0643 39.2485 43.9826 39.2569C43.9008 39.2653 43.8183 39.2555 43.7408 39.2282C43.6633 39.2009 43.5929 39.1567 43.5345 39.0989C43.4762 39.0411 43.4314 38.9711 43.4033 38.8939V38.8939Z" fill="white" />
                        </svg>

                      </li>
                      <li className="mt-5">
                        <a href="#">
                          <h5
                            className="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">
                            Fun Learning</h5>
                        </a>
                      </li>
                    </ul>

                  </div>
                  <p className="pt-5 mb-3 text-lg font-normal text-white dark:text-gray-400">Dengan menggunakan metode Fun Learning, siswa dapat lebih cepat belajar dan memahami materi yang diajarkan oleh mentor.</p>
                </div>

              </div>
            </div>
          </div>
        </section>
        {/* End Feature Section */}

        {/* Mentor Section */}
        <section id="about" className="py-10 bg-white lg:py-20 ">
          <div className="container mx-auto">
            <div className="px-4 text-left lg:px-0">
              <h1 className="pb-2 text-xl font-medium lg:text-3xl text-primary">
                Kenalan yuk sama Mentor di
              </h1>
              <h1 className="text-3xl font-semibold lg:text-4xl text-primary">
                Naladhipa Course
              </h1>
            </div>
            <div className="flex-wrap px-3 py-5 lg:px-0 lg:py-10 lg:flex gap-y-10 ">
              <div className="items-center self-center pb-10 lg:w-6/12">
                <Image src="/Mentor.png" className="max-w-xs lg:max-w-lg" alt="mentor" height={400} width={500} />
              </div>
              <div className="items-center self-center lg:w-6/12">
                <h1 className="pb-2 text-4xl font-semibold">Mentor Albert</h1>
                <h1 className=" text-dark lg:text-2xl">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry  standard dummy text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged
                </h1>
              </div>
            </div>
          </div>
        </section>
        {/* End Mentor Section */}
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
