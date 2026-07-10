import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faDesktop, faMobileAlt, faTabletAlt, faServer, faCar, faUser } from '@fortawesome/free-solid-svg-icons';

interface Module {
  name: string;
  description: string;
  features: string[];
  icon: IconDefinition;
}

const modules: Module[] = [
  {
    name: 'MyAMR Client',
    description: "MyAMR's main client module used for working with data and managing the entire system.",
    features: [
      'Centralized data management',
      'User-friendly interface',
      'Integration with other MyAMR modules',
      'Real-time data processing',
      'Customizable dashboards'
    ],
    icon: faDesktop
  },
  {
    name: 'MyAMR Web Client',
    description: 'Web-based interface for accessing MyAMR functionality from any browser.',
    features: [
      'Cross-platform compatibility',
      'No installation required',
      'Secure remote access',
      'Responsive design',
      'Multi-user support'
    ],
    icon: faServer
  },
  {
    name: 'MyAMR Droid',
    description: 'Android application for mobile data collection and system access.',
    features: [
      'Offline data collection',
      'GPS location tagging',
      'Barcode scanning',
      'Photo documentation',
      'Automatic synchronization'
    ],
    icon: faMobileAlt
  },
  {
    name: 'MyAMR Mobile',
    description: 'Mobile application for iOS devices with full system functionality.',
    features: [
      'Native iOS experience',
      'Touch-optimized interface',
      'Background data sync',
      'Push notifications',
      'Siri shortcuts support'
    ],
    icon: faTabletAlt
  },
  {
    name: 'MyAMR Modom',
    description: 'Module for reading data from various types of meters and devices.',
    features: [
      'Support for multiple meter protocols',
      'Automatic meter detection',
      'Remote configuration',
      'Data validation',
      'Error handling and retry logic'
    ],
    icon: faServer
  },
  {
    name: 'MyAMR Webodom',
    description: 'An add-on to MyAMR Modom intended for smartphones and tablets. It is a Web app in which end users enter their meter reading data.',
    features: [
      'Web-based meter reading',
      'User-friendly data entry',
      'Automatic data validation',
      'Photo capture support',
      'Offline capability'
    ],
    icon: faUser
  }
];

export default function ModulesPage(): React.ReactElement {
  return (
    <div className="modules-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay">
          <h1 style={{ color: 'white' }}>MyAMR Modules</h1>
          <p style={{ color: 'white', fontSize: '1.2rem' }}>
            The MyAMR system consists of six main modules, each designed for specific use cases and requirements.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Modules</h2>
          <div className="modules-grid">
            {modules.map((module: Module, index: number) => (
              <div key={index} className="module-card">
                <div className="module-icon">
                  <FontAwesomeIcon icon={module.icon} size="2x" />
                </div>
                <h3>{module.name}</h3>
                <p>{module.description}</p>
                <ul className="module-features">
                  {module.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex}>
                      <span className="check-icon">\u2713</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="section integration">
        <div className="container">
          <h2 className="section-title">Module Integration</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            All MyAMR modules work together seamlessly to provide a comprehensive energy data management solution. 
            Choose the modules you need and integrate them with your existing systems.
          </p>
        </div>
      </section>
    </div>
  );
}
