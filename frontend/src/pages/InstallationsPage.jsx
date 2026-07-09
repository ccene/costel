import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBuilding, faMapMarkerAlt, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const countries = [
  'United Kingdom',
  'United States',
  'Germany',
  'France',
  'Netherlands',
  'Belgium',
  'Sweden',
  'Denmark',
  'Norway',
  'Finland',
  'Austria',
  'Switzerland'
];

const companiesByCountry = {
  'United Kingdom': ['British Gas', 'EDF Energy', 'Scottish Power', 'National Grid'],
  'United States': ['PG&E', 'Duke Energy', 'Southern Company', 'NextEra Energy'],
  'Germany': ['E.ON', 'RWE', 'Vattenfall', 'EnBW'],
  'France': ['EDF', 'Engie', 'TotalEnergies'],
  'Netherlands': ['Eneco', 'Vattenfall', 'Essent'],
  'Belgium': ['Fluvius', 'Sibelga', 'ORES']
};

const statistics = {
  totalInstallations: '500+',
  countries: '12+',
  metersManaged: '1M+',
  customers: '1000+'
};

export default function InstallationsPage() {
  return (
    <div className="installations-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay">
          <h1 style={{ color: 'white' }}>MyAMR Installations</h1>
          <p style={{ color: 'white', fontSize: '1.2rem' }}>
            The MyAMR system is used throughout the world by the largest energy companies
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section statistics">
        <div className="container">
          <h2 className="section-title">Global Reach</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{statistics.totalInstallations}</div>
              <div className="stat-label">Installations</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{statistics.countries}</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{statistics.metersManaged}</div>
              <div className="stat-label">Meters Managed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{statistics.customers}</div>
              <div className="stat-label">Satisfied Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Countries with MyAMR Installations</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            MyAMR installations can be found in multiple countries across different continents.
          </p>
          <div className="countries-grid">
            {countries.map((country, index) => (
              <div key={index} className="country-card">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>{country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Companies Using MyAMR</h2>
          <div className="companies-list">
            {Object.entries(companiesByCountry).map(([country, companies]) => (
              <div key={country} className="country-companies">
                <h3>
                  <FontAwesomeIcon icon={faGlobe} /> {country}
                </h3>
                <ul>
                  {companies.map((company, index) => (
                    <li key={index}>{company}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section testimonial">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonial-card">
            <div className="quote-icon">
              <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
            </div>
            <p className="testimonial-text">
              "The MyAMR system has transformed our energy data management, providing accurate and timely information that has significantly improved our operations and customer service."
            </p>
            <p className="testimonial-author">- Energy Manager, Major Utility Company</p>
          </div>
        </div>
      </section>
    </div>
  );
}
