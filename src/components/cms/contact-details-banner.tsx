import { Phone, Mail } from 'lucide-react';

interface ContactDetailsBannerProps {
  data?: {
    phoneNumber?: string;
    email?: string;
  };
}

export default function ContactDetailsBanner({ data }: ContactDetailsBannerProps) {
  const phoneNumber = data?.phoneNumber;
  const email = data?.email;

  // If both are null/undefined, don't render anything
  if (!phoneNumber && !email) {
    return null;
  }

  return (
    <div className="bg-blue-50 px-6 py-8">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 max-w-4xl mx-auto md:justify-between">
        {/* Call us section */}
        {phoneNumber && (
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
              href={`tel:${phoneNumber}`}
              className="text-gray-900 sm:text-2xl text-xl font-bold hover:text-green-500 transition-colors"
            >
              {phoneNumber}
            </a>
          </div>
        </div>
        )}

        {/* Write to us section */}
        {email && (
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
              href={`mailto:${email}`}
              className="text-gray-900 sm:text-2xl text-xl font-bold hover:text-green-500 transition-colors"
            >
              {email}
            </a>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}