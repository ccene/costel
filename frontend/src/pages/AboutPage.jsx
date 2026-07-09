import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faCalendarAlt, faUsers, faLightbulb, faCog, faGlobe } from '@fortawesome/free-solid-svg-icons';

const companyHistory = [
  {
    year: '2024',
    event: 'MyAMR platform launched by NC13 Industries Ltd.'
  },
  {
    year: '2023',
    event: 'NC13 Industries Ltd. founded'
  },
  {
    year: '2020-2023',
    event: 'Development of next-generation energy management solutions'
  },
  {
    year: '2015-2020',
    event: 'Research and innovation in IoT and energy data management'
  },
  {
    year: '2010-2015',
    event: 'Early adoption of smart metering technologies'
  }
];

const companyValues = [
  {
    title: 'Innovation',
    description: 'We continuously invest in research and development to bring cutting-edge solutions to our customers.',
    icon: faLightbulb
  },
  {
    title: 'Quality',
    description: 'We maintain the highest standards in all our products and services, ensuring reliability and accuracy.',
    icon: faAward
  },
  {
    title: 'Customer Focus',
    description: 'Our customers are at the center of everything we do. We listen, understand, and deliver solutions that meet their needs.',
    icon: faUsers
  },
  {
    title: 'Integrity',
    description: 'We conduct our business with honesty, transparency, and ethical practices in all our dealings.',
    icon: faGlobe
  }
];

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay">
          <h1 style={{ color: 'white' }}>About MyAMR</h1>
          <p style={{ color: 'white', fontSize: '1.2rem' }}>
            Comprehensive energy data management solutions
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Company Overview</h2>
          <div className="overview-content">
            <p>
              MyAMR is a comprehensive energy consumption data reading and management system developed and maintained by NC13 Industries Ltd., 
              a company based in the United Kingdom.
            </p>
            <p>
              Our mission is to provide innovative, reliable, and user-friendly solutions for energy data management that help organizations 
              optimize their energy consumption, reduce costs, and improve operational efficiency.
            </p>
            <p>
              With years of experience in the energy sector and a deep understanding of the challenges faced by energy companies, we have developed 
              a system that addresses the complex needs of modern energy data management.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section vision">
        <div className="container">
          <h2 className="section-title">Our Vision</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            To be the leading provider of energy data management solutions, empowering organizations worldwide to make informed decisions 
            about their energy consumption through accurate, timely, and actionable data.
          </p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section history">
        <div className="container">
          <h2 className="section-title">Company History</h2>
          <div className="timeline">
            {companyHistory.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <p>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {companyValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <FontAwesomeIcon icon={value.icon} size="2x" />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section company-info">
        <div className="container">
          <h2 className="section-title">Company Information</h2>
          <div className="company-details">
            <div className="info-card">
              <h3>NC13 Industries Ltd.</h3>
              <p><strong>Company Name:</strong> NC13 Industries Ltd.</p>
              <p><strong>Established:</strong> 2023</p>
              <p><strong>Headquarters:</strong> United Kingdom</p>
              <p><strong>Website:</strong> <a href="https://www.myamr.co.uk" style={{ color: '#3498db' }}>www.myamr.co.uk</a></p>
              <p><strong>Email:</strong> info@myamr.co.uk</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
