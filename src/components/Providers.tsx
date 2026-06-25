"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="dark" 
      themes={['light', 'dark']}
    >
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        {children}
        <Toaster position="bottom-right" />
      </ReactLenis>
    </ThemeProvider>
  );
}
