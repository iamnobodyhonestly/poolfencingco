import Image from "next/image"

export function GallerySection() {
  const galleryImages = [
    { src: "/mesh1.jpg", alt: "Mesh pool fence installation" },
    { src: "/mesh2.jpg", alt: "Glass pool fence with gate" },
    { src: "/mesh3.jpg", alt: "Aluminum pool fence" },
    { src: "/glass1.jpg", alt: "Child-safe pool gate" },
    { src: "/glass2.webp", alt: "Modern pool fence design" },
    { src: "/glass3.webp", alt: "Pool fence with landscaping" },
    { src: "/alum1.webp", alt: "Aluminum pool fence installation" },
    { src: "/alum2.avif", alt: "Residential aluminum fence" },
    { src: "/alum3.jpg", alt: "Commercial aluminum fence" },
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
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={500}
                height={350}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

