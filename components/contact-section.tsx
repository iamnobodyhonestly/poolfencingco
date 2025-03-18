import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PhoneCall, Mail, Clock, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get Your Free Estimate</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Contact us today to schedule a free consultation and estimate for your pool fencing needs.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-gray-50 p-8">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p className="mt-2 text-muted-foreground">
              Fill out the form and we'll get back to you as soon as possible.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <PhoneCall className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="mt-1 text-muted-foreground">555-123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="mt-1 text-muted-foreground">info@poolfencingco.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-medium">Hours</h4>
                  <p className="mt-1 text-muted-foreground">Monday - Friday: 8am - 6pm</p>
                  <p className="text-muted-foreground">Saturday: 9am - 2pm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="mt-1 text-muted-foreground">123 Pool Safety Lane</p>
                  <p className="text-muted-foreground">Houston, TX 77001</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border p-8">
            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input id="first-name" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input id="last-name" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell us about your pool fencing needs" rows={4} required />
              </div>
              <Button type="submit" className="w-full">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

