import styles from '@/styles/page.module.scss';
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
        </div>
      </div>
    </main>
  );
}
