import GalleryPage from '@/components/Gallery/page'
import AboutPage from '@/components/Home/About/page'
import ContactPage from '@/components/Home/Contact/page'
import CatPage from '@/components/Home/Cta/page'
import HeroPage from '@/components/Home/Hero/page'
import ServicePage from '@/components/Home/Service/page'


export default function Home() {
  return (
    <>
      <HeroPage/>
      <AboutPage/>
      <ServicePage/>
      <CatPage/>
      <GalleryPage/>
      <ContactPage/>
    </>
  )
}
