'use client'

import styles from '@/styles/page.module.scss';
import Header from '@/components/headers/header';
import ServicePageLayout from '@/components/layouts/ServicePageLayout';

function HomePage() : React.ReactNode{

  return (
    <main 
      className={`${styles.main}  ${styles.home}`}  >
      <Header />

    {/*   <div 
        className={`${styles.main_container}`}
      >
        <div 
          className={styles.links_list_container}
         
        >
        </div>
      </div> */}
    </main>
  );
}

const HomePageWrapped = () => {
  return <ServicePageLayout>{HomePage()}</ServicePageLayout>;
};

export default HomePageWrapped;