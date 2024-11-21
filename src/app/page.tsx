// pages/page.tsx
import React from 'react';
 // Import the CSS module
 import styles from '../styles/page.module.css';

const Page = () => {
  return (
    <div className={styles.container}> {/* Apply container styles */}
      <h1 className={styles.title}>Welcome to My Page</h1> {/* Apply title styles */}
      <p className={styles.content}>
        This is a sample content section where you can write some text. 
        You can add more sections and style them accordingly using CSS modules.
      </p>
    </div>
  );
};

export default Page;
