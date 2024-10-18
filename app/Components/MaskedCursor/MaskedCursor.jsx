        import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './CustomCursor.module.scss';  // Ensure this path is correct
import useMousePosition from '../utils/useMousePosition';  // Verify this path matches your structur

export default function CustomCursor() {
  const { x, y } = useMousePosition();  // Get mouse position from your custom hook
  const cursorSize = 100;  // Set custom cursor size

  return (
    <motion.div 
      className={styles.customCursor}
      animate={{
        left: `${(x ?? 0) - cursorSize / 2}px`,
        top: `${(y ?? 0) - cursorSize / 2}px`,
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      style={{ width: `${cursorSize}px`, height: `${cursorSize}px` }}
    />
  );
}
