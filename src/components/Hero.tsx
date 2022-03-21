import React from 'react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()
  return (
    <div className="relative overflow-hidden bg-aid-purple">
      <div className="custom-shape-divider-bottom-1647846273">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 py-8 md:pb-20 lg:max-w-2xl lg:w-full lg:py-24">
            <main className="mx-auto max-w-7xl px-4 lg:px-8 mt-0">
              <div className="lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white md:text-5xl">
                  <span className="block xl:inline">
                    {t('hero.main_title_first')}
                  </span>{' '}
                  <span className="block text-aid-blue xl:inline mt-2">
                    {t('hero.main_title_second')}
                  </span>
                </h1>
                <p className="mt-3 text-base text-white md:mt-5 md:text-lg lg:mx-0">
                  {t('hero.sub_title')}
                </p>
                <div className="mt-5 md:mt-8 md:flex md:justify-center lg:justify-start">
                  {/* <div className="rounded-md shadow">
                    <button
                      type="button"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      {t('donation')}
                    </button>
                  </div> */}
                  <div className="mt-3">
                    <button
                      type="button"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base rounded-md text-indigo-700 font-extrabold bg-indigo-100 hover:bg-indigo-300 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                    >
                      {t('donation')}
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/5 lg:mr-3">
          <img
            className="h-72 w-full md:h-96 lg:w-full lg:h-full"
            src="./images/hero_icon.svg"
            alt="donation crytocurrency"
          />
        </div>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="-mt-5 lg:-mt-0"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero
