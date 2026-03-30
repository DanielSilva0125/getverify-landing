'use client';

import type React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const GRADIENTS = [
  "linear-gradient(to bottom left, #80c0cc 0%, #6aaabe 12%, #5381c6 28%, #3a5f8a 42%, #3a5f8a 58%, #5381c6 72%, #6aaabe 88%, #80c0cc 100%)",
  "linear-gradient(to bottom left, #75b8c8 0%, #65a8c0 12%, #4f7ec4 28%, #3a5f8a 44%, #3a5f8a 60%, #5580c8 74%, #68aec4 88%, #78bece 100%)",
  "linear-gradient(to bottom left, #6ab2c6 0%, #5fa8be 14%, #4a78c0 30%, #3a5f8a 46%, #3a5f8a 62%, #5078c4 76%, #62a8c2 90%, #72bace 100%)",
];

type GradientBackgroundProps = React.ComponentProps<'div'> & {
  overlay?: boolean;
  overlayOpacity?: number;
};

export function GradientBackground({
  children,
  className = '',
  overlay = false,
  overlayOpacity = 0.3,
}: GradientBackgroundProps) {
  return (
    <div className={cn('w-full relative overflow-hidden', className)}>
      <motion.div
        className="absolute inset-0"
        style={{ background: GRADIENTS[0] }}
        animate={{ background: GRADIENTS }}
        transition={{
          delay: 0.5,
          duration: 8,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />

      {overlay && (
        <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
      )}

      {children && (
        <div className="relative z-10 w-full">
          {children}
        </div>
      )}
    </div>
  );
}
