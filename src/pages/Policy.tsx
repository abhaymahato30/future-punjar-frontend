// PolicyPage.jsx


const sections = [
     {
    id: 'cancellation-refund',
    title: 'Cancellation & Refund Policy',
    content: (
      <>
        <ul className="list-disc list-inside space-y-2">
          <li>Orders may be canceled within 24 hours of placement.</li>
          <li>Returns accepted within 15 days of delivery if items are unused and in original packaging :contentReference</li>
          <li>Refunds issued via original payment method within 7 business days of receiving returned goods :contentReference</li>
          <li>Shipping charges are non-refundable unless the return is due to our error.</li>
          <li>No refunds for customized, perishable, or clearance items unless faulty.</li>
        </ul>
      </>
    ),
  },
 

  {
    id: 'cookies-policy',
    title: 'Cookies Policy',
    content: (
      <>
        <p>
          We use cookies and similar tracking technologies (web beacons,
          pixels) to analyze site usage, enhance browsing experience, and
          remember preferences. You may disable cookies in your browser, but
          this may affect site performance.
        </p>
      </>
    ),
  },
  {
    id: 'shipping-delivery',
    title: 'Shipping & Delivery Policy',
    content: (
      <>
        <ul className="list-disc list-inside space-y-2">
          <li>Orders are processed and dispatched within 2 business days.</li>
          <li>Expected delivery time: 5–7 business days from dispatch.</li>
          <li>Shipping is free for orders above ₹1,0000; otherwise ₹50 applies.</li>
          <li>In case of unexpected delays, we'll notify you promptly.</li>
        </ul>
      </>
    ),
  },

  {
    id: 'disclaimer',
    title: 'Disclaimer',
    content: (
      <>
        <p>
          Information on this website is provided "as-is" for general
          informational purposes. We make no warranties regarding accuracy,
          completeness, or fitness for a specific purpose.
        </p>
        <p>
          We are not liable for actions taken based on this information. Links
          to external sites do not imply endorsement, and we are not
          responsible for their content.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: (
      <>
        <p>
          For questions or to exercise your data rights, contact us at:
        </p>
        <p className="mt-2">
          <strong>Email:</strong>{' '}
          <a
            href="mailto:privacy@panjerrenewables.com"
            className="text-blue-600 hover:underline"
          >
       Panjarrenewables@gmail.com
          </a>
        </p>
        <p>
          <strong>Address:</strong> 97/D, Usha Siddhi Kunj Vardhman Compound Lalpur, Ranchi, Jharkhand-834001
        </p>
      </>
    ),
  },
];

export default function Policy() {
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

      <main className="container mx-auto px-4 py-8 space-y-12">
        {sections.map(({ id, title, content }) => (
          <section id={id} key={id}>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="space-y-4">{content}</div>
          </section>
        ))}
      </main>

      <footer className="bg-gray-100 text-center py-6">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Panjar Renewables. All rights reserved.
        </p>
        <nav className="space-x-4 mt-2">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-blue-600 hover:underline"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </footer>
    </div>
    
    </>
  );
}
