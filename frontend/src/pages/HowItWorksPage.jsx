import React from 'react';

function HowItWorksPage() {
  const steps = [
    {
      title: 'Data Collection',
      description: 'The AVE system obtains data from different types of energy meters and devices. This includes gas meters, power meters, heat meters, water meters, IoT devices, and vehicle tracking systems.',
      icon: 'fa-download'
    },
    {
      title: 'Data Validation',
      description: 'All collected data is validated to ensure accuracy and consistency. The system checks for errors, anomalies, and data quality issues before processing.',
      icon: 'fa-check-double'
    },
    {
      title: 'Data Storage',
      description: 'Validated data is stored in a uniform data format that allows for efficient monthly evaluation and historical analysis. The system maintains a comprehensive database of all energy consumption data.',
      icon: 'fa-database'
    },
    {
      title: 'Data Processing',
      description: 'The system processes the stored data to generate reports, consumption diagrams, and analytical insights. This includes calculating totals, identifying trends, and detecting anomalies.',
      icon: 'fa-cogs'
    },
    {
      title: 'Data Presentation',
      description: 'Processed data is presented to customers via the Internet through web applications, or provided to third-party applications and CRM/billing systems for further processing.',
      icon: 'fa-chart-pie'
    },
    {
      title: 'Integration & Reporting',
      description: 'The AVE system integrates with various third-party applications (SAP, Oracle, OTE, EBT, etc.) and provides comprehensive reporting capabilities for billing and analysis purposes.',
      icon: 'fa-file-alt'
    }
  ];

  const systemFeatures = [
    {
      title: 'Automated Data Flow',
      description: 'From meter to report without manual intervention',
      icon: 'fa-sync-alt'
    },
    {
      title: 'Real-time Monitoring',
      description: 'Monitor energy consumption in real-time',
      icon: 'fa-clock'
    },
    {
      title: 'Multi-Device Support',
      description: 'Works with meters from different manufacturers',
      icon: 'fa-mobile-alt'
    },
    {
      title: 'Scalable Architecture',
      description: 'Handles millions of households and devices',
      icon: 'fa-expand-arrows-alt'
    },
    {
      title: 'Secure Data Transfer',
      description: 'Encrypted communication and secure data storage',
      icon: 'fa-lock'
    },
    {
      title: 'Flexible Integration',
      description: 'Connects with existing CRM and billing systems',
      icon: 'fa-link'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)' }}>
        <div className="container text-center">
          <h1 style={{ color: 'white' }}>How AVE System Works</h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem' }}>
            A comprehensive workflow for energy data management
          </p>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="section workflow">
        <div className="container">
          <h2 className="section-title">The AVE Workflow</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {steps.map((step, index) => (
              <div key={index} className="workflow-step" style={{ counterReset: index === 0 ? 'step' : 'none' }}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Diagram Description */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container text-center">
          <h2 className="section-title">System Architecture</h2>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            The AVE system architecture is designed for efficiency, reliability, and scalability. 
            It connects various types of energy meters with end-users and third-party systems through 
            a centralized data processing engine.
          </p>
          
          <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ textAlign: 'center', flex: 1, minWidth: '150px' }}>
                <i className="fas fa-satellite-dish" style={{ fontSize: '2rem', color: '#3498db', marginBottom: '0.5rem' }}></i>
                <p>Energy Meters</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <i className="fas fa-arrow-right" style={{ fontSize: '1.5rem', color: '#95a5a6' }}></i>
              </div>
              <div style={{ textAlign: 'center', flex: 1, minWidth: '150px' }}>
                <i className="fas fa-server" style={{ fontSize: '2rem', color: '#3498db', marginBottom: '0.5rem' }}></i>
                <p>AVE System</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <i className="fas fa-arrow-right" style={{ fontSize: '1.5rem', color: '#95a5a6' }}></i>
              </div>
              <div style={{ textAlign: 'center', flex: 1, minWidth: '150px' }}>
                <i className="fas fa-users" style={{ fontSize: '2rem', color: '#3498db', marginBottom: '0.5rem' }}></i>
                <p>Users & Systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Key System Features</h2>
          <div className="grid">
            {systemFeatures.map((feature, index) => (
              <div key={index} className="card text-center">
                <div style={{ marginBottom: '1rem' }}>
                  <i className={`fas ${feature.icon}`} style={{ fontSize: '2.5rem', color: '#3498db' }}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container text-center">
          <h2 className="section-title">Benefits of AVE System</h2>
          <div className="grid">
            <div className="card">
              <h3>Efficiency</h3>
              <p>Automate manual processes and reduce operational costs significantly.</p>
            </div>
            <div className="card">
              <h3>Accuracy</h3>
              <p>Eliminate human errors with automated data validation and processing.</p>
            </div>
            <div className="card">
              <h3>Scalability</h3>
              <p>Handle millions of devices and households with ease.</p>
            </div>
            <div className="card">
              <h3>Reliability</h3>
              <p>Proven system with more than 15 years in business.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorksPage;
