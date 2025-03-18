'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-gray-100 py-16 md:py-24">
      <div className="container relative z-10 grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-5">
        <div className="flex flex-col justify-center space-y-4 lg:col-span-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-dm-serif">
            Get peace of mind everytime your back door opens
          </h1>
          <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
            Protect your family with high-quality, code-compliant pool fencing that enhances the beauty of your outdoor
            space.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="font-semibold"
              onClick={() => window.location.href = 'tel:346-524-1762'}
            >
              Get a FREE Estimate
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="font-semibold"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-primary/10 ring-2 ring-white" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">500+</span> satisfied customers
            </p>
          </div>
        </div>
        <div className="relative h-[400px] overflow-hidden rounded-xl lg:col-span-3">
          <Image
            src="/parentinpool.jpg"
            alt="Parent with child in a safely fenced pool"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
        </div>
      </div>
      <div className="container mt-12">
        <div className="grid grid-cols-2 gap-4 rounded-xl bg-white p-6 shadow-lg md:grid-cols-4 md:p-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-2 rounded-full bg-primary/10 p-2">
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
                className="h-6 w-6 text-primary"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-semibold">Safety Compliant</h3>
            <p className="text-sm text-muted-foreground">Meets all local codes</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-2 rounded-full bg-primary/10 p-2">
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
                className="h-6 w-6 text-primary"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M6 12h12" />
                <path d="M12 6v12" />
              </svg>
            </div>
            <h3 className="font-semibold">Quick Installation</h3>
            <p className="text-sm text-muted-foreground">1-2 day setup</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-2 rounded-full bg-primary/10 p-2">
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
                className="h-6 w-6 text-primary"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h3 className="font-semibold">5-Year Warranty</h3>
            <p className="text-sm text-muted-foreground">Peace of mind</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-2 rounded-full bg-primary/10 p-2">
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
                className="h-6 w-6 text-primary"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <h3 className="font-semibold">Free Estimates</h3>
            <p className="text-sm text-muted-foreground">No obligation</p>
          </div>
        </div>
      </div>
    </section>
  )
}

