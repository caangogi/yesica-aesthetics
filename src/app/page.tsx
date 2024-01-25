import styles from '@/styles/page.module.scss'
import SurgicalCare from '@/components/home-components/SurgicalCare'
import FacialTreatments from '@/components/home-components/FacialTreatments'
import DermaFillers from '@/components/home-components/DermaFillers'
import AntiWrinkle from '@/components/home-components/AntiWrinkle'
import CentralLogo from '@/components/home-components/CentralLogo'
import HerbalGreenPeel from '@/components/home-components/HerbalGreenPeel'
import IvDrip from '@/components/home-components/IvDrip'
import Header from '@/components/headers/header'

export default function Home() {
  return (
    <>
      <Header />
    <main className={styles.main}>
      <div className={styles.main_container}>

        
        <SurgicalCare />
       

        <DermaFillers />
        <FacialTreatments />


        <CentralLogo />


        <AntiWrinkle />
        <IvDrip />
        <HerbalGreenPeel />
      </div>
    </main>
    </>
  )
}
