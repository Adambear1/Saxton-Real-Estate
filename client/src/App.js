import React, { lazy, link, Suspense } from "react";

const Navbar = lazy(() => import("./components/Navbar"));
const SocialMediaIcons = lazy(() => import("./components/SocialMediaIcons"));
const About = lazy(() => import("./pages/About"));
const AdditionalPhotos = lazy(() => import("./pages/AdditionalPhotos"));
const Location = lazy(() => import("./pages/Location"));
const Talents = lazy(() => import("./pages/Talents"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div class="uk-position-center">
            <div uk-spinner="true; ratio: 3"></div>
          </div>
        }
      >
        <Navbar />
        <div className="uk-container">
          <Talents />
          <About />
          <AdditionalPhotos />
          <SocialMediaIcons />
          <Location />
        </div>
      </Suspense>
    </>
  );
}

export default App;
