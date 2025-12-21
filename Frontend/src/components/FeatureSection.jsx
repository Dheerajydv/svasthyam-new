import Button from "./Button";
import {
  FileText,
  Upload,
  Calendar,
  Hospital,
  Pill,
  Activity,
  Shield,
  Cloud,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Medical Records Storage",
    description:
      "Securely store all your medical documents, test results, and health information in one centralized location.",
    features: [
      "Digital Document Storage",
      "OCR Text Recognition",
      "Categorized Organization",
    ],
    badge: "Core Feature",
  },
  {
    icon: Upload,
    title: "Prescription Management",
    description:
      "Upload and manage your prescriptions, track medications, and get reminders for refills.",
    features: [
      "Prescription Upload",
      "Medication Tracking",
      "Refill Reminders",
    ],
    badge: null,
  },
  {
    icon: Hospital,
    title: "Hospital Visit Tracking",
    description:
      "Keep detailed records of all hospital visits, treatments received, and follow-up care instructions.",
    features: ["Visit History", "Treatment Records", "Doctor Notes"],
    badge: null,
  },
  {
    icon: Calendar,
    title: "Appointment Management",
    description:
      "Schedule, track, and manage all your medical appointments across different healthcare providers.",
    features: [
      "Appointment Scheduling",
      "Reminder Notifications",
      "Provider Coordination",
    ],
    badge: "Popular",
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description:
      "Track vital signs, symptoms, and health metrics over time to share with your healthcare providers.",
    features: [
      "Vital Signs Tracking",
      "Symptom Logging",
      "Health Analytics",
    ],
    badge: null,
  },
  {
    icon: Pill,
    title: "Diagnosis History",
    description:
      "Maintain a comprehensive history of all diagnoses, treatments, and recovery progress.",
    features: [
      "Diagnosis Timeline",
      "Treatment Progress",
      "Recovery Tracking",
    ],
    badge: "New",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 text-white bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl">
            Comprehensive Health Record Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage your medical information
            securely and efficiently. Access your complete health
            history anytime, anywhere.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group hover:shadow-lg transition-shadow duration-300 border-gray-700 rounded-xl border p-3 shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors bg-gray-700">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    {feature.badge && (
                      <span class="inline-flex items-center px-2 py-0.5 text-sm font-medium bg-gray-700 rounded-full">
                        {feature.badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="text-xl">
                      {feature.title}
                    </div>
                    <div className="text-base mt-2">
                      {feature.description}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <ul className="space-y-2 list-disc list-inside">
                    {feature.features.map((featureItem, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        {featureItem}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 bg-gray-700 rounded-xl p-6 shadow-md">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-sm">HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cloud className="h-5 w-5 text-green-600" />
              <span className="text-sm">Cloud Backup</span>
            </div>
            <div className="flex items-center space-x-2">
              <Smartphone className="h-5 w-5 text-purple-600" />
              <span className="text-sm">Mobile Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}