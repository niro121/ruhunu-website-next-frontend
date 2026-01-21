import { Phone, Mail } from "lucide-react";

export default function ContactDetailsBanner() {
  return (
    <div className="bg-blue-50 px-6 py-8">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 max-w-4xl mx-auto md:justify-between">
        {/* Call us section */}
        <div className="flex items-center gap-4 md:px-4 sm:px-20">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
          </div>

          <div>
            <h2 className="text-green-500 sm:text-xl font-bold mb-1 text-sm">
              Call us
            </h2>
            <a
              href="tel:0779917523"
              className="text-gray-900 sm:text-2xl text-xl font-bold hover:text-green-500 transition-colors"
            >
              0779917523
            </a>
          </div>
        </div>

        {/* Write to us section */}
        <div className="flex items-center gap-4 md:px-4 sm:px-20">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
          </div>

          <div>
            <h2 className="text-green-500 sm:text-xl font-bold mb-1 text-sm">
              Write to us
            </h2>
            <a
              href="mailto:teat@gmail.com"
              className="text-gray-900 sm:text-2xl text-xl font-bold hover:text-green-500 transition-colors"
            >
              teat@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
