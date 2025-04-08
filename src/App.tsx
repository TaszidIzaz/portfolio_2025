
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import WorksPage from "./pages/Works"; // Renamed to avoid conflict
import Contact from "./pages/Contact";
import WorkDetail from "./pages/WorkDetail";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { lazy, Suspense, useEffect } from 'react';
import { works } from "@/data/works"; // Import works data

// Use lazy loading for components
const WorksSection = lazy(() => import('./components/sections/Works'));
const Works2Section = lazy(() => import('./components/sections/Works2'));

const queryClient = new QueryClient();

function App() {
  // Preload images for better performance
  useEffect(() => {
    const preloadImages = () => {
      const imagesToPreload = works.slice(0, 2).map(work => work.image);
      
      imagesToPreload.forEach(imageSrc => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = imageSrc;
        document.head.appendChild(link);
      });
    };
    
    preloadImages();
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="about" element={<About />} />
                <Route path="works" element={<WorksPage />} />
                <Route path="works/:workId" element={<WorkDetail />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
            <Analytics />
            <SpeedInsights />
            <Toaster />
            <Sonner />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
