import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faHandshake, faUsers, faBuilding, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const partnerBenefits = [
  'Access to cutting-edge energy data management technology',
  'Comprehensive training and support programs',
  'Marketing and sales support materials',
  'Technical assistance and consultation',
  'Regular software updates and enhancements',
  'Competitive pricing and flexible licensing options',
  'Exclusive territorial rights in your region',
  'Co-branding opportunities'
];

const partnerNetwork = [
  { country: 'United Kingdom', partners: 15 },
  { country: 'United States', partners: 25 },
  { country: 'Germany', partners: 12 },
  { country: 'France', partners: 10 },
  { country: 'Netherlands', partners: 8 },
  { country: 'Belgium', partners: 6 },
  { country: 'Scandinavia', partners: 20 },
  { country: 'Benelux', partners: 14 }
];

export default function PartnersPage() {
  return (
    <div className="partners-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay">
          <h1 style={{ color: 'white' }}>MyAMR Partners</h1>
          <p style={{ color: 'white', fontSize: '1.2rem' }}>
            Join our global network of partners and distributors
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Partner Network</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            MyAMR works with a global network of partners and distributors to bring our energy data management solutions to customers worldwide. 
            Our partners are carefully selected for their expertise, commitment to quality, and customer focus.
          </p>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="section benefits">
        <div className="container">
          <h2 className="section-title">Partner Benefits</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Join our global network of partners and distributors. As a MyAMR partner, you'll benefit from:
          </p>
          <div className="benefits-grid">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <span className="check-icon">✓</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className="section network">
        <div className="container">
          <h2 className="section-title">Our Global Network</h2>
          <div className="network-grid">
            {partnerNetwork.map((region, index) => (
              <div key={index} className="network-card">
                <FontAwesomeIcon icon={faGlobe} size="2x" />
                <h3>{region.country}</h3>
                <p>{region.partners} Partners</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="section become-partner">
        <div className="container">
          <h2 className="section-title">Become a MyAMR Partner</h2>
          <div className="partner-cta">
            <div className="cta-icon">
              <FontAwesomeIcon icon={faHandshake} size="3x" />
            </div>
            <div className="cta-content">
              <p>
                If you're interested in becoming a MyAMR partner or distributor, please contact us to discuss opportunities in your region.
              </p>
              <p>
                We're always looking for motivated and experienced partners who share our commitment to quality and customer satisfaction.
              </p>
              <p className="cta-contact">
                <FontAwesomeIcon icon={faEnvelope} /> partners@myamr.co.uk
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
