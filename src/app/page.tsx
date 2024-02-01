import styles from '@/styles/page.module.scss';
import { LinksHomeData } from '@/data/LinksHomeData';
import AnimateCard from '@/components/home-components/AnimateCard';
import Header from '@/components/headers/header';

export default function Index() {

  return (
    <main 
      className={`${styles.main}  ${styles.home}`}  >
      <Header />

      <div 
        className={`${styles.main_container}`}
      >
        <div 
          className={styles.links_list_container}
         
        >
          {/* {LinksHomeData.map((link) => (
            <AnimateCard
              id={link.id}
              key={link.id}
              title={link.title}
              description={link.description}
              image={link.image}
              url={link.url}
            />
          ))} */}
        </div>
      </div>
    </main>
  );
}
