import Button from "./Button";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Shield, FileText, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-gray-900 text-white py-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl leading-tight">
                Your Complete Medical Records, Securely Managed
              </h1>
              <p className="text-xl text-muted-foreground">
                Store, manage, and access all your medical
                information in one secure digital platform.
                Never lose important health records again.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="text-lg px-8">
                <a href="/sign-in">Start Managing Records</a>
              </Button>
              <Button
                variant="secondary"
                className="text-lg px-8"
              >
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl">100%</div>
                <div className="text-sm text-muted-foreground">
                  Secure & Private
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl">50k+</div>
                <div className="text-sm text-muted-foreground">
                  Records Managed
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-3">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-2xl">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Access Anytime
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1691934286085-c88039d93dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVjb3JkcyUyMGRpZ2l0YWwlMjBoZWFsdGh8ZW58MXx8fHwxNzU3OTUwNzE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Digital medical records platform"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gray-700 rounded-xl shadow-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">
                  HIPAA Compliant & Encrypted
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}