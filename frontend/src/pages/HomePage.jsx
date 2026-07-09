import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const advantages = [
    'Automatic energy-consumption reading',
    'Detailed monitoring of energy consumption',
    'Reading the consumption of millions of households',
    'Support for meters from different manufacturers',
    'Tens of thousands of remote transfers',
    'Easy extensibility and scalability',
    'Energy-reading cost reduction',
    'Leak and theft detection',
    'Outstanding technical support',
    'More than 15 years in business'
  ];

  const otherAdvantages = [
    'Design and controls identical with MS Office',
    'Possible integration with GIS and SCADA systems',
    'Certified compatibility with Microsoft products',
    'Bidirectional communication with CRM/billing systems',
    'Display of the position of devices on online maps',
    'Sending alarms via text and email messages',
    'Meets security audit requirements',
    'Generation of alternative values',
    'Easy data exchange with MS Excel',
    'Energy balance module'
  ];

  const targetAudiences = [
    {
      title: 'Distribution Companies',
      description: 'The automatic reading of business data from different types of energy meters, checking and transfer of the data to billing systems and third-party applications (SAP, Oracle, OTE, EBT, etc.).',
      icon: 'fa-building'
    },
    {
      title: 'Energy Traders',
      description: 'Provides an overview of customers\' energy consumption using a Web application. The trader can access data only from the period during which they have a contract with the customer.',
      icon: 'fa-chart-line'
    },
    {
      title: 'Power Engineers',
      description: 'A perfect tool for the monitoring of the maximum hourly/daily energy consumption. Meter reading data is presented in the form of tables, trends, and reports.',
      icon: 'fa-cogs'
    },
    {
      title: 'Energy Consumers',
      description: 'The Web portal allows every consumer to view the amount of energy they have consumed. They can also manually enter new meter reading data into the system.',
      icon: 'fa-users'
    }
  ];

  const energyTypes = [
    { name: 'Gas', icon: 'fa-fire' },
    { name: 'Power', icon: 'fa-bolt' },
    { name: 'Heat', icon: 'fa-sun' },
    { name: 'Water', icon: 'fa-tint' },
    { name: 'IoT', icon: 'fa-network-wired' },
    { name: 'Vehicles', icon: 'fa-car' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1>AVE System</h1>
          <p>
            A system designed to automatically read energy-consumption data from 
            different types of devices, validate it, show it on a PC, in a Web 
            browser, or on a tablet/smartphone, and pass it to a CRM system for 
            billing purposes.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn">
              Contact Us
            </Link>
            <a href="#" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
              Try Demo
            </a>
            <a href="#" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
              Read Leaflet
            </a>
          </div>
          
          {/* Energy Types */}
          <div style={{ marginTop: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              {energyTypes.map((energy, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <i className={`fas ${energy.icon}`} style={{ fontSize: '2rem', marginBottom: '0.5rem' }}></i>
                  <p>{energy.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="section advantages">
        <div className="container">
          <h2 className="section-title">Main Advantages</h2>
          <div className="grid">
            <div className="card">
              <ul className="advantage-list">
                {advantages.map((advantage, index) => (
                  <li key={index}>{advantage}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Other Advantages</h3>
              <ul className="advantage-list">
                {otherAdvantages.map((advantage, index) => (
                  <li key={index}>{advantage}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AVE System Is Designed For */}
      <section className="section audiences">
        <div className="container">
          <h2 className="section-title">The AVE System Is Designed For</h2>
          <div className="grid">
            {targetAudiences.map((audience, index) => (
              <div key={index} className="card audience-card">
                <div className="audience-icon">
                  <i className={`fas ${audience.icon}`}></i>
                </div>
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Award Section */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container text-center">
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <i className="fas fa-award" style={{ fontSize: '3rem', color: '#FFD700', marginBottom: '1rem' }}></i>
            <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
              "AVE is the winner of the prestigious Microsoft Industry Awards 2008 
              competition in the category Best Solution in Industrial Production."
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ backgroundColor: '#2c3e50', color: 'white' }}>
        <div className="container text-center">
          <h2>Ready to Transform Your Energy Data Management?</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            Join hundreds of companies worldwide using AVE System for efficient energy data collection and management.
          </p>
          <Link to="/contact" className="btn btn-accent" style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
