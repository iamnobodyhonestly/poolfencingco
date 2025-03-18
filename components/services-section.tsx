import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      title: "Mesh Pool Fencing",
      description: "Removable mesh fencing that provides safety while maintaining visibility and aesthetics.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Removable", "Self-closing gate", "Transparent mesh", "Durable materials"],
    },
    {
      title: "Glass Pool Fencing",
      description: "Elegant glass panels that offer unobstructed views while ensuring pool safety.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Frameless options", "Tempered safety glass", "Modern appearance", "Weather resistant"],
    },
    {
      title: "Aluminum Pool Fencing",
      description: "Classic and durable aluminum fencing that provides security with minimal maintenance.",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Rust-proof", "Multiple styles", "Long-lasting", "Low maintenance"],
    },
  ]

  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Premium Fencing Solutions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a variety of high-quality pool fencing options to meet your safety needs and enhance your outdoor
            space.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg">View All Services</Button>
        </div>
      </div>
    </section>
  )
}

