import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Pool Fencing Co</h2>
              <div className="mt-4 h-1 w-20 bg-primary"></div>
            </div>
            <p className="text-lg text-muted-foreground">
              Pool Fencing Co is dedicated to providing the highest quality pool safety fencing solutions to homeowners
              and businesses. With over 15 years of experience, we've helped thousands of families create safer pool
              environments.
            </p>
            <p className="text-lg text-muted-foreground">
              Our team of certified professionals ensures that every installation meets or exceeds local safety codes
              and regulations. We take pride in our craftsmanship and attention to detail.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">15+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">5,000+</span>
                <span className="text-sm text-muted-foreground">Installations</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">100%</span>
                <span className="text-sm text-muted-foreground">Code Compliant</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary">24/7</span>
                <span className="text-sm text-muted-foreground">Customer Support</span>
              </div>
            </div>
            <div className="pt-4">
              <Button>Learn More About Us</Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Pool fencing installation team"
                width={600}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-48 w-48 overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Close-up of pool fence detail"
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

