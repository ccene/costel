import React from 'react';

function PartnersPage() {
  const partners = [
    {
      country: 'Brazil',
      name: 'Gascat Indústria',
      email: 'sales@gascat.com.br',
      website: '#'
    },
    {
      country: 'Czech Republic',
      name: 'ELGAS',
      email: 'obchod@elgas.cz',
      website: '#'
    },
    {
      country: 'Czech Republic',
      name: 'Sorego Tech',
      email: 'info@sorego.cz',
      website: '#'
    },
    {
      country: 'Croatia',
      name: 'AMR sustavi d.o.o.',
      email: 'podrska@amrsustavi.hr',
      website: '#'
    },
    {
      country: 'Iran',
      name: 'Delta Gas Mobin Group',
      email: 'info@delta-gas.com',
      website: '#'
    },
    {
      country: 'Canada',
      name: 'Elgas USA',
      email: 'andreas.skof@elgasusa.com',
      website: '#'
    },
    {
      country: 'Qatar',
      name: 'Power Gas WLL',
      email: 'maqsood@powergas.qa',
      website: '#'
    },
    {
      country: 'Moldova',
      name: 'Invent-IN S.R.L.',
      email: 'inventgaz@gmail.com',
      website: '#'
    },
    {
      country: 'Germany',
      name: 'Metreg Technologies GmbH',
      email: 'bernd.hausmann@metreg-technologies.de',
      website: '#'
    },
    {
      country: 'Germany',
      name: 'Dresser Utility Solutions GmbH',
      email: 'hendrik.mueller@dresserutility.com',
      website: '#'
    },
    {
      country: 'Germany',
      name: 'RMG Messtechnik GmbH',
      email: 'joerg.schoenbach@rmg.com',
      website: '#'
    },
    {
      country: 'Netherlands',
      name: 'Raak Group B.V.',
      email: 'info@raakinstallatiebouw.nl',
      website: '#'
    },
    {
      country: 'Poland',
      name: 'PLUM',
      email: 'gas@plum.pl',
      website: '#'
    },
    {
      country: 'Portugal',
      name: 'ENERMETER',
      email: 'enermeter@enermeter.pt',
      website: '#'
    },
    {
      country: 'Romania',
      name: 'SAMGAS Romania',
      email: 'samgas@samgas.ro',
      website: '#'
    },
    {
      country: 'Greece',
      name: 'Engineers+partners p.c.',
      email: 'info@engineers-partners.com',
      website: '#'
    },
    {
      country: 'Slovakia',
      name: 'Stimcorect',
      email: 'stimcorect@stimcorect.sk',
      website: '#'
    },
    {
      country: 'United Arab Emirates',
      name: 'Teco M.E. Group',
      email: 'me-support@tecomat.cz',
      website: '#'
    },
    {
      country: 'United Kingdom',
      name: 'Utility Meters Warehouse Ltd',
      email: 'sales@umwuk.com',
      website: '#'
    },
    {
      country: 'Serbia',
      name: 'TipexAs d.o.o.',
      email: 'office@tipexas.com',
      website: '#'
    },
    {
      country: 'Turkey',
      name: 'ESCOM Enerji Otomasyon',
      email: 'zeytun@escom.com.tr',
      website: '#'
    },
    {
      country: 'USA',
      name: 'Elgas USA',
      email: 'andreas.skof@elgasusa.com',
      website: '#'
    }
  ];

  // Group partners by country
  const partnersByCountry = partners.reduce((acc, partner) => {
    if (!acc[partner.country]) {
      acc[partner.country] = [];
    }
    acc[partner.country].push(partner);
    return acc;
  }, {});

  const countries = Object.keys(partnersByCountry).sort();

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)' }}>
        <div className="container text-center">
          <h1 style={{ color: 'white' }}>Partners and Distributors</h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem' }}>
            Our global network of partners and distributors
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="section partners">
        <div className="container">
          <h2 className="section-title">Our Global Partners</h2>
          <p style={{ textAlign: 'center', fontSize: '1.25rem', marginBottom: '2rem' }}>
            We work with trusted partners worldwide to provide local support and distribution
          </p>
          
          <div className="partner-grid">
            {countries.map((country) => (
              partnersByCountry[country].map((partner, index) => (
                <div key={`${country}-${index}`} className="partner-card">
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <i className="fas fa-flag" style={{ color: '#3498db', marginRight: '0.5rem' }}></i>
                    <h4>{country}</h4>
                  </div>
                  <h3 style={{ marginBottom: '0.5rem' }}>{partner.name}</h3>
                  <p>
                    <i className="fas fa-envelope" style={{ marginRight: '0.5rem' }}></i>
                    <a href={`mailto:${partner.email}`} style={{ color: '#3498db' }}>
                      {partner.email}
                    </a>
                  </p>
                  <p>
                    <i className="fas fa-globe" style={{ marginRight: '0.5rem' }}></i>
                    <a href={partner.website} style={{ color: '#3498db' }}>
                      Website
                    </a>
                  </p>
                </div>
              ))
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container text-center">
          <h2 className="section-title">Become a Partner</h2>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Join our global network of partners and distributors. As an AVE System partner, you'll benefit from:
          </p>
          
          <div className="grid">
            <div className="card">
              <i className="fas fa-handshake" style={{ fontSize: '2.5rem', color: '#3498db', marginBottom: '1rem' }}></i>
              <h3>Training & Support</h3>
              <p>Comprehensive training and ongoing technical support</p>
            </div>
            <div className="card">
              <i className="fas fa-chart-line" style={{ fontSize: '2.5rem', color: '#3498db', marginBottom: '1rem' }}></i>
              <h3>Business Growth</h3>
              <p>Access to a proven, market-leading energy data management system</p>
            </div>
            <div className="card">
              <i className="fas fa-users" style={{ fontSize: '2.5rem', color: '#3498db', marginBottom: '1rem' }}></i>
              <h3>Exclusive Territories</h3>
              <p>Opportunities for exclusive distribution rights in your region</p>
            </div>
            <div className="card">
              <i className="fas fa-cogs" style={{ fontSize: '2.5rem', color: '#3498db', marginBottom: '1rem' }}></i>
              <h3>Technical Resources</h3>
              <p>Access to technical documentation and marketing materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Partnership */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Interested in Partnership?</h2>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            If you're interested in becoming an AVE System partner or distributor, please contact us to discuss opportunities in your region.
          </p>
          <a href="/contact" className="btn btn-accent" style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}>
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default PartnersPage;
