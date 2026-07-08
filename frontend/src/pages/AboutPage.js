import React from 'react';

function AboutPage() {
  const companyHistory = [
    {
      year: '2008',
      event: 'AVE wins Microsoft Industry Awards in the category Best Solution in Industrial Production'
    },
    {
      year: '2005',
      event: 'First international installations'
    },
    {
      year: '2000',
      event: 'AVE System development begins'
    },
    {
      year: '1998',
      event: 'GEOVAP company founded'
    }
  ];

  const teamValues = [
    {
      title: 'Innovation',
      description: 'We continuously develop new features and improve our system to stay ahead of industry trends.',
      icon: 'fa-lightbulb'
    },
    {
      title: 'Quality',
      description: 'We maintain the highest standards of quality in all our products and services.',
      icon: 'fa-award'
    },
    {
      title: 'Reliability',
      description: 'Our system is known for its reliability and stability, even with millions of devices.',
      icon: 'fa-shield-alt'
    },
    {
      title: 'Support',
      description: 'We provide outstanding technical support to all our customers and partners.',
      icon: 'fa-headset'
    },
    {
      title: 'Partnership',
      description: 'We build long-term relationships with our customers, partners, and employees.',
      icon: 'fa-handshake'
    },
    {
      title: 'Expertise',
      description: 'With more than 15 years in business, we have unmatched expertise in energy data management.',
      icon: 'fa-graduation-cap'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)' }}>
        <div className="container text-center">
          <h1 style={{ color: 'white' }}>About AVE System</h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem' }}>
            Learn more about our company, history, and values
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="grid">
            <div className="card">
              <h2>Our Company</h2>
              <p>
                AVE System is developed and maintained by GEOVAP, spol. s r.o., a company based in Pardubice, Czech Republic. 
                We specialize in energy data management solutions that help companies worldwide efficiently collect, 
                validate, and process energy consumption data.
              </p>
              <p>
                Our mission is to provide innovative, reliable, and scalable solutions for energy data management that 
                help our customers reduce costs, improve efficiency, and make better business decisions.
              </p>
            </div>
            <div className="card">
              <h2>Our Vision</h2>
              <p>
                To be the leading provider of energy data management solutions worldwide, recognized for our 
                innovation, reliability, and exceptional customer service.
              </p>
              <p>
                We envision a world where energy data is automatically collected, accurately processed, and easily 
                accessible to all stakeholders, enabling better energy management and conservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Our History</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ position: 'relative', paddingLeft: '3rem' }}>
              {companyHistory.map((item, index) => (
                <div key={index} style={{ position: 'relative', paddingBottom: '2rem' }}>
                  {index < companyHistory.length - 1 && (
                    <div style={{ 
                      position: 'absolute', 
                      left: '10px', 
                      top: '40px', 
                      bottom: '0', 
                      width: '2px', 
                      backgroundColor: '#3498db',
                      zIndex: '1'
                    }}></div>
                  )}
                  <div style={{ 
                    position: 'absolute', 
                    left: '0', 
                    top: '15px',
                    width: '30px', 
                    height: '30px', 
                    backgroundColor: '#3498db', 
                    color: 'white', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    zIndex: '2'
                  }}>
                    {item.year}
                  </div>
                  <div style={{ marginLeft: '2rem' }}>
                    <h3 style={{ color: '#3498db', marginBottom: '0.5rem' }}>{item.year}</h3>
                    <p>{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team and Values */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="grid">
            {teamValues.map((value, index) => (
              <div key={index} className="card text-center">
                <div style={{ marginBottom: '1rem' }}>
                  <i className={`fas ${value.icon}`} style={{ fontSize: '2.5rem', color: '#3498db' }}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="grid">
            <div className="card">
              <h3>Company Information</h3>
              <p><strong>Company Name:</strong> GEOVAP, spol. s r.o.</p>
              <p><strong>Address:</strong> Cechovo nabrezi 1790, 530 03 Pardubice, Czech Republic</p>
              <p><strong>Phone:</strong> +420 466 024 111</p>
              <p><strong>Phone:</strong> +420 466 024 423</p>
              <p><strong>Email:</strong> support-ave@geovap.cz</p>
              <p><strong>Website:</strong> <a href="https://www.ave-system.com" style={{ color: '#3498db' }}>www.ave-system.com</a></p>
            </div>
            <div className="card">
              <h3>Business Hours</h3>
              <p><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM (CET)</p>
              <p><strong>Saturday - Sunday:</strong> Closed</p>
              <p style={{ marginTop: '1rem' }}>
                <strong>Support:</strong> 24/7 for critical issues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Awards & Recognition</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div className="card" style={{ maxWidth: '300px' }}>
              <i className="fas fa-trophy" style={{ fontSize: '3rem', color: '#FFD700', marginBottom: '1rem' }}></i>
              <h3>Microsoft Industry Awards 2008</h3>
              <p>Winner in the category Best Solution in Industrial Production</p>
            </div>
            <div className="card" style={{ maxWidth: '300px' }}>
              <i className="fas fa-certificate" style={{ fontSize: '3rem', color: '#3498db', marginBottom: '1rem' }}></i>
              <h3>Certified Microsoft Partner</h3>
              <p>Certified compatibility with Microsoft products</p>
            </div>
            <div className="card" style={{ maxWidth: '300px' }}>
              <i className="fas fa-star" style={{ fontSize: '3rem', color: '#e74c3c', marginBottom: '1rem' }}></i>
              <h3>Industry Recognition</h3>
              <p>Recognized as a leader in energy data management</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
