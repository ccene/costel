import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faExchangeAlt, faCloud, faChartBar, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';

const workflowSteps = [
  {
    step: 1,
    title: 'Data Collection',
    description: 'The MyAMR system obtains data from different types of energy meters and devices. This includes gas meters, power meters, heat meters, water meters, IoT devices, and vehicle tracking systems.',
    icon: faDatabase
  },
  {
    step: 2,
    title: 'Data Transmission',
    description: 'Collected data is transmitted to the central server using various communication methods including mobile networks, radio frequencies, and direct connections.',
    icon: faExchangeAlt
  },
  {
    step: 3,
    title: 'Data Processing',
    description: 'The central server processes and validates the incoming data, ensuring accuracy and consistency across all measurements.',
    icon: faCog
  },
  {
    step: 4,
    title: 'Data Storage',
    description: 'Processed data is stored in a secure database with backup and recovery capabilities, ensuring data integrity and availability.',
    icon: faCloud
  },
  {
    step: 5,
    title: 'Data Analysis',
    description: 'Advanced analytics and reporting tools provide insights into energy consumption patterns, efficiency, and cost optimization opportunities.',
    icon: faChartBar
  },
  {
    step: 6,
    title: 'User Access',
    description: 'Authorized users can access the system through various interfaces including desktop applications, web browsers, and mobile devices.',
    icon: faUsers
  }
];

const benefits = [
  'Real-time monitoring of energy consumption',
  'Automated data collection reduces human error',
  'Comprehensive reporting and analytics',
  'Seamless integration with existing systems',
  'Scalable architecture for growing needs',
  'Multi-language and multi-currency support',
  'Secure data transmission and storage',
  'Customizable dashboards and reports'
];

export default function HowItWorksPage() {
  return (
    <div className="how-it-works-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay">
          <h1 style={{ color: 'white' }}>How MyAMR Works</h1>
          <p style={{ color: 'white', fontSize: '1.2rem' }}>
            Discover how our system collects, processes, and delivers energy data
          </p>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">The MyAMR Workflow</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
            The MyAMR system architecture is designed for efficiency, reliability, and scalability. 
            Our workflow ensures accurate data collection and timely delivery of information.
          </p>

          <div className="workflow-steps">
            {workflowSteps.map((step, index) => (
              <div key={index} className="workflow-step">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">
                  <FontAwesomeIcon icon={step.icon} size="2x" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="section architecture">
        <div className="container">
          <h2 className="section-title">System Architecture</h2>
          <div className="architecture-diagram">
            <div className="architecture-content">
              <p>
                MyAMR
              </p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Energy Data Management System
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section benefits">
        <div className="container">
          <h2 className="section-title">Benefits of MyAMR</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <span className="check-icon">✓</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
