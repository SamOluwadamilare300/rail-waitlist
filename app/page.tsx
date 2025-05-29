import Hero from "@/components/hero"
import FeaturesModern from "@/components/features-modern"
import ProgressIndicator from "@/components/progress-indicator"
import WaitlistForm from "@/components/waitlist-form"
import Footer from "@/components/footer"
// import FeaturesGrid from "@/components/features-grid"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <ProgressIndicator />
        {/* <FeaturesGrid/> */}
        <FeaturesModern />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  )
}
