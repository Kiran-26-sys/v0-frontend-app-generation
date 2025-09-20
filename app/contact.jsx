import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "./utils/icons.jsx"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gold-light py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gold-dark mb-6 animate-typewriter">Contact Us</h2>
          <p className="text-xl text-gold-medium animate-slideInLeft" style={{ animationDelay: "2s" }}>
            Get in touch with our team for support or inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-2xl font-bold text-gold-dark mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icons.Mail />
                <span className="text-gold-medium">support@ai-finadvisor.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Icons.Phone />
                <span className="text-gold-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Icons.MapPin />
                <span className="text-gold-medium">123 Finance Street, New York, NY 10001</span>
              </div>
            </div>
          </div>

          <Card className="p-6 animate-fadeInUp bg-white/90 backdrop-blur-sm" style={{ animationDelay: "0.7s" }}>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gold-dark mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gold-dark mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gold-dark mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
