import { FaSolarPanel, FaTools, FaBroom } from "react-icons/fa";

interface Service {
  title: string;
  description: JSX.Element;
  icon: JSX.Element;
  image: string;
}

const services: Service[] = [
  {
    title: "Solar Installation",
    image:
      "https://imgs.search.brave.com/u7B48m3c_PwbiG5XBj3Ogr030Ksk3mMcu4_swWiZQpA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/MTc5NTMyNC9waG90/by9odW1hbi1oYW5k/LXRvdWNoaW5nLXNv/bGFyLXBhbmVsLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1s/Z2ZXMU1veU5mWGNW/WlRQM1JvR0JHMjRj/Wk1TVF9vazJKU3ds/bW05WFhnPQ",
    description: (
      <>
        🔧{" "}
        <span className="text-gray-500">
          Smart design & integration of solar systems using high-efficiency
          panels and inverters.
        </span>
      </>
    ),
    icon: <FaSolarPanel className="text-yellow-400 text-3xl" />,
  },
  {
    title: "Maintenance",
    image:
      "https://imgs.search.brave.com/biRJOdsX1Y4S6YyYWI9sIGQJiVUi2fKpHZZNWsVV_Wo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/NTg4MDI2Ny9waG90/by90d28tZW5naW5l/ZXJzLWluc3RhbGxp/bmctc29sYXItcGFu/ZWxzLW9uLXJvb2Yu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PU92UURiSmFUbk1N/NGpQZklBM3k1dnJP/ODhpOThOWkpSYWha/dG5ZRlpDcTA9",
    description: (
      <>
        🛠️{" "}
        <span className="text-gray-500">
          Monthly visits for panel health check, performance tuning & issue
          resolution.
        </span>
      </>
    ),
    icon: <FaTools className="text-blue-400 text-3xl" />,
  },
  {
    title: "Cleaning",
    image:
      "https://imgs.search.brave.com/9vNkXiwURwvVEU-hLJlkQ_mE3hW1V2NeEudwqMarV60/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY4/MjUyNzEyL3Bob3Rv/L2NsZWFuaW5nLXNv/bGFyLXBhbmVscy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/dEdCdmJtcnhYVTMz/V25vUlFCMFcwQy1n/UmlHTEhuTnd4RFN1/OThuM3NEOD0",
    description: (
      <>
        🧽{" "}
        <span className="text-gray-500">
          Dust and debris cleaning using anti-static, eco-friendly tech for
          maximum output.
        </span>
      </>
    ),
    icon: <FaBroom className="text-green-400 text-3xl" />,
  },
];

const ServiceSection = () => {
  return (
    <>
      <section className="service-section">
        <h2 className="section-title">⚡ Our Solar Services</h2>
        <div className="card-container">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="card-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="card-content">
                <div className="card-icon">
                  {service.icon}
                  <h3 className="card-title">{service.title}</h3>
                </div>
                <p className="card-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* training section */}
  <section className="training-section">
  <div className="container">
    <h2 className="section-heading text-center text-2xl font-bold mb-6">
      🚀 Training & Internship Programs
    </h2>

    <div className="card-container">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 px-4 md:px-12 py-4">

        {/* Solar Training & Internship */}
        <div className="card w-full md:w-1/2 bg-white shadow-md rounded-xl p-6 flex flex-col justify-center md:h-[500px]">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              <span className="inline-block bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                Solar Energy
              </span>
            </h3>
            <p className="text-gray-700 mb-4">
              Gain hands-on experience in solar panel installation, system
              design, and energy optimization with top-tier industry experts.
            </p>
            <div className="space-y-2 mb-4 text-gray-500">
              <div><span className="mr-2">🔧</span> Solar Panel Installation</div>
              <div><span className="mr-2">⚡</span> Energy Optimization</div>
              <div><span className="mr-2">🛠️</span> System Integration</div>
            </div>
          </div>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdBeDxJA3vUcHOlsbe_NJKi_1d-CzwuLmVh2Tsa1rxwBKYPpw/viewform",
                "_blank"
              )
            }
          >
            Apply Now
          </button>
        </div>

        {/* Electric Vehicle Training & Internship */}
        <div className="card w-full md:w-1/2 bg-white shadow-md rounded-3xl md:rounded-2xl p-6 flex flex-col justify-center md:h-[500px]">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              <span className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Electric Vehicle
              </span>
            </h3>
            <p className="text-gray-700 mb-4">
              Join the future of mobility! Gain practical knowledge in EV
              system design, battery technology, and charging infrastructure.
            </p>
            <div className="space-y-2 mb-4 text-gray-500">
              <div><span className="mr-2">🔌</span> Electric Motor Design</div>
              <div><span className="mr-2">🔋</span> Battery Management Systems</div>
              <div><span className="mr-2">🚗</span> Charging Infrastructure</div>
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdBeDxJA3vUcHOlsbe_NJKi_1d-CzwuLmVh2Tsa1rxwBKYPpw/viewform",
                "_blank"
              )
            }
          >
            Apply Now
          </button>
        </div>

      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default ServiceSection;
