
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Lazy load analytics and performance monitoring
const Analytics = lazy(() => import('@vercel/analytics/react').then(module => ({
  default: module.Analytics
})));
const SpeedInsights = lazy(() => import('@vercel/speed-insights/react').then(module => ({
  default: module.SpeedInsights
})));

// Only import what's needed for initial render
const Layout = lazy(() => import("./components/layout/Layout"));
const Index = lazy(() => import('./pages/Index'));
const About = lazy(() => import('./pages/About'));
const WorksPage = lazy(() => import('./pages/Works'));
const Contact = lazy(() => import('./pages/Contact'));
const WorkDetail = lazy(() => import('./pages/WorkDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Lazy load UI components
const Toaster = lazy(() => import("@/components/ui/toaster").then(module => ({ 
  default: module.Toaster 
})));
const Sonner = lazy(() => import("@/components/ui/sonner").then(module => ({ 
  default: module.Toaster 
})));
const TooltipProvider = lazy(() => import("@/components/ui/tooltip").then(module => ({ 
  default: module.TooltipProvider 
})));

// Optimize query client configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={null}>
          <TooltipProvider>
            <BrowserRouter>
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="animate-pulse">Loading...</div>
                </div>
              }>
                <Routes>
                  <Route element={
                    <Suspense fallback={<div>Loading layout...</div>}>
                      <Layout />
                    </Suspense>
                  }>
                    <Route index element={
                      <Suspense fallback={<div>Loading home...</div>}>
                        <Index />
                      </Suspense>
                    } />
                    <Route path="about" element={
                      <Suspense fallback={<div>Loading about...</div>}>
                        <About />
                      </Suspense>
                    } />
                    <Route path="works" element={
                      <Suspense fallback={<div>Loading works...</div>}>
                        <WorksPage />
                      </Suspense>
                    } />
                    <Route path="works/:workId" element={
                      <Suspense fallback={<div>Loading work details...</div>}>
                        <WorkDetail />
                      </Suspense>
                    } />
                    <Route path="contact" element={
                      <Suspense fallback={<div>Loading contact...</div>}>
                        <Contact />
                      </Suspense>
                    } />
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </Suspense>
              {/* Defer loading of non-critical third-party components */}
              <Suspense fallback={null}>
                {typeof window !== 'undefined' && (
                  <>
                    <Analytics />
                    <SpeedInsights />
                  </>
                )}
                <Toaster />
                <Sonner />
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </Suspense>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
