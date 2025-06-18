
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import aditya from '../assets/team/aditya.jpg';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-gray-800 py-20 px-4">
      <div className="max-w-screen-lg mx-auto text-center text-white">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 mb-12">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Address */}
          <div className="bg-white rounded-lg p-6 shadow-md text-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Our Address</h3>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-blue-500 mt-1" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=97/D+Usha+Siddhi+Kunj+Vardhman+Compound+Lalpur+Ranchi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                97/D, Usha Siddhi Kunj Vardhman Compound,  
                Lalpur, Ranchi, Jharkhand‑834001
              </a>
            </p>
            <p className="mt-2 flex items-start gap-2">
              <FaMapMarkerAlt className="text-blue-500 mt-1" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=BIT+Sindri+Dhanbad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                BIT Sindri Dhanbad, Jharkhand • JUT Namkum Ranchi
              </a>
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-lg p-6 shadow-md text-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Phone</h3>
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-blue-500" />
              <a href="tel:+919430649460" className="hover:text-blue-700">
                +91 94306 49460
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg p-6 shadow-md text-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Email</h3>
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <a
                href="mailto:Panjarrenewables@gmail.com"
                className="hover:text-blue-700"
              >
                Panjarrenewables@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Founder */}
        <div className="mt-16 bg-white rounded-lg p-12 text-gray-700 shadow-md">
          <h3 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600">
            Meet the Founder
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
            <img
              src={aditya}
              alt="Founder"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div>
              <h4 className="text-xl font-semibold">ADITYA KUMAR</h4>
              <p className="text-gray-600">Founder</p>
              <p className="mt-2 text-gray-600">
                B.E - Electrical Engg. & M.T - Energy Management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
