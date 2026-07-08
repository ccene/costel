import React from 'react';

function ModulesPage() {
  const modules = [
    {
      name: 'AVE Client',
      description: "AVE's main client module used for working with data and managing the entire system.",
      icon: 'fa-desktop',
      features: [
        'Complete system management',
        'Data processing and validation',
        'User-friendly interface',
        'Integration with other AVE modules'
      ]
    },
    {
      name: 'AVE Web Client',
      description: 'A thin client designed for providing data (reports, consumption diagrams) to end users and energy traders.',
      icon: 'fa-globe',
      features: [
        'Web-based access',
        'Real-time data visualization',
        'Customizable reports',
        'Multi-user support'
      ]
    },
    {
      name: 'AVE Droid',
      description: 'A client application designed for smartphones and tablets. It gives the user a perfect overview of the whole system.',
      icon: 'fa-mobile-alt',
      features: [
        'Mobile access to system data',
        'Real-time monitoring',
        'Offline capabilities',
        'Intuitive touch interface'
      ]
    },
    {
      name: 'AVE Mobile',
      description: 'An application designed for offline data reading using an optical Bluetooth head connected to a tablet or smartphone.',
      icon: 'fa-bluetooth',
      features: [
        'Offline data collection',
        'Bluetooth device connectivity',
        'Field data entry',
        'Automatic synchronization'
      ]
    },
    {
      name: 'AVE Modom',
      description: 'A module designed for the offline reading of household consumption using reading terminals.',
      icon: 'fa-home',
      features: [
        'Household meter reading',
        'Offline operation',
        'Terminal-based data collection',
        'Efficient route management'
      ]
    },
    {
      name: 'Self Meter Reading',
      description: 'An add-on to AVE Modom intended for smartphones and tablets. It is a Web app in which end users enter their meter reading data.',
      icon: 'fa-user-check',
      features: [
        'Self-service meter reading',
        'Web-based interface',
        'User-friendly data entry',
        'Automatic validation'
      ]
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)' }}>
        <div className="container text-center">
          <h1 style={{ color: 'white' }}>AVE System Modules</h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem' }}>
            The AVE system consists of six main modules, each designed for specific use cases and requirements.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="section">
        <div className="container">
          <div className="grid">
            {modules.map((module, index) => (
              <div key={index} className="card module-card">
                <div className="module-icon text-center">
                  <i className={`fas ${module.icon}`} style={{ fontSize: '3rem', color: '#3498db' }}></i>
                </div>
                <h3 className="text-center">{module.name}</h3>
                <p className="text-center" style={{ fontStyle: 'italic', color: '#7f8c8d' }}>
                  {module.description}
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                  <h4>Key Features:</h4>
                  <ul style={{ listStyle: 'none' }}>
                    {module.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{ padding: '0.25rem 0', display: 'flex', alignItems: 'center' }}>
                        <i className="fas fa-check-circle" style={{ color: '#3498db', marginRight: '0.5rem' }}></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module Integration */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container text-center">
          <h2 className="section-title">Seamless Integration</h2>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            All AVE modules work together seamlessly to provide a comprehensive energy data management solution. 
            Choose the modules that fit your specific needs, or implement the complete system for maximum efficiency.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <i className="fas fa-cog" style={{ fontSize: '2rem', color: '#3498db', marginBottom: '0.5rem' }}></i>
              <p>Customizable</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <i className="fas fa-expand-arrows-alt" style={{ fontSize: '2rem', color: '#3498db', marginBottom: '0.5rem' }}></i>
              <p>Scalable</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <i className="fas fa-plug" style={{ fontSize: '2rem', color: '#3498db', marginBottom: '0.5rem' }}></i>
              <p>Integrated</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <i className="fas fa-shield-alt" style={{ fontSize: '2rem', color: '#3498db', marginBottom: '0.5rem' }}></i>
              <p>Secure</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ModulesPage;
