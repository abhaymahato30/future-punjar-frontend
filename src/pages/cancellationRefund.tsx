// PolicyPage.jsx


const sections = [
 
   {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    content: (
      <>
        <p>
          We respect your privacy and handle your personal data responsibly.
          We collect information such as name, email, IP address, browser
          details, and interaction logs.
        </p>
        <p>
          We use this data to improve our services, communicate with you, and
          comply with legal obligations. Data is shared only with trusted
          providers or as required by law. We implement standard security
          measures to protect your data and retain it only as long as
          necessary.
        </p>
      </>
    ),
  },
 
 
 
];

export default function CancellationPage() {
  return (
    <>
    
    <div className="min-h-screen bg-gray-50 mt-36">
      <header className="bg-blue-900 text-white py-6">
       
         <div className="container flex justify-center items-center  ">
          <h1 className="text-3xl font-semibold">Panjar Renewables</h1>
    
        </div>
         <div className="container flex justify-center items-center  ">
          
          <p className="text-sm mt-1">Policies & Legal Information</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 ">
        {sections.map(({ id, title, content }) => (
          <section id={id} key={id}>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="space-y-4">{content}</div>
          </section>
        ))}
      </main>

    </div>
    
    </>
  );
}
