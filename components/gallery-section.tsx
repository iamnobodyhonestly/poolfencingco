import Image from "next/image"
import { Button } from "@/components/ui/button"

export function GallerySection() {
  const galleryImages = [
    { src: "/placeholder.svg?height=400&width=600", alt: "Mesh pool fence installation" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Glass pool fence with gate" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Aluminum pool fence" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Child-safe pool gate" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Modern pool fence design" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Pool fence with landscaping" },
  ]

  return (
    <section id="gallery" className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Recent Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Browse through our gallery of recent pool fencing installations to get inspired for your own project.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Button variant="outline" className="bg-white/80 text-black hover:bg-white">
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg">View Full Gallery</Button>
        </div>
      </div>
    </section>
  )
}

