import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "The team at Pool Fencing Co was professional from start to finish. They installed our mesh pool fence in just one day, and the quality is outstanding. I feel so much safer with my young children around the pool now.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Michael Rodriguez",
      role: "Property Manager",
      content:
        "We've used Pool Fencing Co for multiple properties in our management portfolio. Their attention to detail and commitment to safety regulations is unmatched. Highly recommend their services.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Jennifer Williams",
      role: "Homeowner",
      content:
        "The glass pool fence they installed looks absolutely stunning and has added value to our property. The team was courteous, on time, and left the area spotless after installation.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section id="testimonials" className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our satisfied customers have to say about our pool fencing
            solutions.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-400"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

