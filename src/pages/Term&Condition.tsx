// PolicyPage.jsx


const sections = [
  
{
    id: 'terms-conditions',
    title: 'Terms & Conditions',
    content: (
      <>
        <p>Last updated: June 1, 2025</p>
        <p>
          Welcome to Panjar Renewables. By using our website, you agree to comply with
          these Terms & Conditions (“Terms”). Use our services for lawful purposes only.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>All intellectual property (text, graphics, logos) is owned by Panjar Renewables.</li>
          <li>You will not misuse or interfere with our website or servers.</li>
          <li>We reserve the right to modify or discontinue services at any time.</li>
          <li>Disputes are governed under the laws of India, and resolved in courts of India.</li>
        </ul>
      </>
    ),
  },
 
];

export default function TermandCondition() {
  return (
    <>
    
    <div className="min-h-screen bg-gray-50 mt-36">
      <header className="bg-blue-900 text-white py-6">
     
        <div className="container flex justify-center items-center  ">
          <h1 className="text-3xl font-semibold">Panjar Renewables</h1>
    
        </div>
         <div className="container flex justify-center items-center  ">
          
                   <p className="text-sm mt-1">Term & Conditions</p>

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
