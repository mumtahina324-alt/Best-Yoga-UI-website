import { useState } from "react";
import AuthModal from "./component/AuthModal";
import FeatureYoga from "./component/FeatureYoga";
import Footer from "./component/Footer";
import FreeYoga from "./component/FreeYoga";
import HeroSection from "./component/HeroSection";
import LatestYoga from "./component/LatestYoga";
import NavSection from "./component/NavSection";
import PracticeSection from "./component/Practics/PracticeSection";
import UploadYoga from "./component/UploadYoga";
import YogaTutorial from "./component/YogaTutorial";

export default function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div>
      <NavSection onSignUpClick={() => setShowAuthModal(true)} />
      <HeroSection />
      <FeatureYoga />
      <PracticeSection />
      <YogaTutorial />
      <LatestYoga />
      <FreeYoga />
      <UploadYoga />
      <Footer />
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </div>
  );
}
