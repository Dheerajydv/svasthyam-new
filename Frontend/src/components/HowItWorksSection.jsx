import Button from "./Button";
import { UserPlus, Upload, Shield, Share } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Create Your Account",
    description:
      "Sign up with your basic information and verify your identity securely. Your privacy and data security are our top priorities.",
    features: [
      "Secure registration",
      "Identity verification",
      "Privacy protection",
    ],
  },
  {
    step: "02",
    icon: Upload,
    title: "Upload Your Records",
    description:
      "Easily upload prescriptions, test results, hospital records, and other medical documents. Our system automatically organizes everything.",
    features: [
      "Document scanning",
      "Auto-categorization",
      "OCR recognition",
    ],
  },
  {
    step: "03",
    icon: Shield,
    title: "Secure Storage",
    description:
      "All your medical information is encrypted and stored securely in HIPAA-compliant cloud storage with regular backups.",
    features: [
      "End-to-end encryption",
      "HIPAA compliance",
      "Automated backups",
    ],
  },
  {
    step: "04",
    icon: Share,
    title: "Access & Share",
    description:
      "Access your records anytime, anywhere. Share specific information with healthcare providers with your explicit consent.",
    features: ["24/7 access", "Controlled sharing", "Consent management"],
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl">
            How Svasthyam Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting started with your digital health records is
            simple and secure. Follow these easy steps to begin
            managing your medical information effectively.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-lg">
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-muted-foreground">
                        Step {step.step}
                      </span>
                      <h3 className="text-xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.features.map(
                        (feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="text-xs px-2 py-1 bg-gray-700 rounded-full"
                          >
                            {feature}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1742796674961-a5e833a6f0c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBoZWFsdGhjYXJlJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1Nzk1MDcyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Healthcare app interface on tablet"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="border-0 shadow-lg text-white">
              <div className="p-6 text-center space-y-4">
                <h4 className="text-xl">
                  Start Your Digital Health Journey
                </h4>
                <p className="text-blue-100">
                  Join thousands of patients who have already
                  digitized their medical records for better
                  healthcare management.
                </p>
                <Button
                  variant="primary"
                  className="w-full"
                >
                  Get Started Now - It's Free
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center border-0 shadow-md">
            <div className="p-6 space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg">Quick Setup</h4>
              <p className="text-sm text-muted-foreground">
                Get started in under 5 minutes with our
                streamlined onboarding process.
              </p>
            </div>
          </div>

          <div className="text-center border-0 shadow-md">
            <div className="p-6 space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="text-lg">Bank-Level Security</h4>
              <p className="text-sm text-muted-foreground">
                Your medical data is protected with the same
                security standards used by banks.
              </p>
            </div>
          </div>

          <div className="text-center border-0 shadow-md">
            <div className="p-6 space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="text-lg">Mobile Ready</h4>
              <p className="text-sm text-muted-foreground">
                Access your records on any device - desktop,
                tablet, or smartphone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}