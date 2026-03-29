'use client';

import type React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const GRADIENTS = [
  "linear-gradient(to top right, #80c0cc 0%, #5381c6 55%, #1b2e3e 100%)",
  "linear-gradient(to top right, #5381c6 0%, #80c0cc 55%, #1b2e3e 100%)",
  "linear-gradient(to top right, #80c0cc 0%, #5381c6 40%, #1b2e3e 100%)",
  "linear-gradient(to top right, #5381c6 0%, #80c0cc 45%, #1b2e3e 100%)",
  "linear-gradient(to top right, #80c0cc 0%, #5381c6 55%, #1b2e3e 100%)",
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
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

{overlay && (
        <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
      )}

      {children && (
        <div className="relative z-20 w-full">
          {children}
        </div>
      )}
    </div>
  );
}
