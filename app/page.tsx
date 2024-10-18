'use client';
import CustomCursor from './Components/MaskedCursor/MaskedCursor';  // Ensure the import path is correct
import styles from './page.module.scss';  // Confirm this path is correct

export default function Home() {
  return (
    <main className={styles.main}>
      <CustomCursor />

      <div className={styles.body}>
        <p className="no-cursor-effect">I'm a selectively skilled product designer with a strong focus on producing high quality & impactful digital experience.</p>
      </div>

      <div className={styles.body}>
        <p className="no-cursor-effect">A visual designer - with skills that haven't been replaced by A.I (yet) - making good things only if the paycheck is equally good.</p>
      </div>

      {/* Add more content as needed */}
    </main>
  );
}
