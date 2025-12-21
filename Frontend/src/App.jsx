import { FeaturesSection } from "./components/FeatureSection"
import Header from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import { HowItWorksSection } from "./components/HowItWorksSection"
import BlobCursor from "./components/BlobCursor"

function App() {
  return (
    <body>
      <BlobCursor
        blobType="circle"
        fillColor="#22c55e"
        trailCount={3}
        sizes={[50, 100, 60]}
        innerSizes={[20, 35, 25]}
        innerColor="#22c55e"
        opacities={[0.3, 0.3, 0.3]}
        shadowColor="#3B82F6"
        shadowBlur={5}
        shadowOffsetX={10}
        shadowOffsetY={10}
        filterStdDeviation={30}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={999999}
      />
      <div className="relative h-screen">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
      </div>
    </body>
  )
}

export default App
