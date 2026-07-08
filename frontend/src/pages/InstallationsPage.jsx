import React from 'react';

function InstallationsPage() {
  const countries = [
    'Czech Republic',
    'Turkey',
    'Pakistan',
    'China',
    'Indonesia',
    'UK',
    'Portugal',
    'USA',
    'Latvia',
    'Romania',
    'Greece',
    'Iran',
    'Moldova'
  ];

  const companies = [
    {
      name: 'Czech Republic',
      companies: [
        { name: 'ELGAS', email: 'obchod@elgas.cz' },
        { name: 'Sorego Tech', email: 'info@sorego.cz' }
      ]
    },
    {
      name: 'Croatia',
      companies: [
        { name: 'AMR sustavi d.o.o.', email: 'podrska@amrsustavi.hr' }
      ]
    },
    {
      name: 'Germany',
      companies: [
        { name: 'Metreg Technologies GmbH', email: 'bernd.hausmann@metreg-technologies.de' },
        { name: 'Dresser Utility Solutions GmbH', email: 'hendrik.mueller@dresserutility.com' },
        { name: 'RMG Messtechnik GmbH', email: 'joerg.schoenbach@rmg.com' }
      ]
    },
    {
      name: 'Netherlands',
      companies: [
        { name: 'Raak Group B.V.', email: 'info@raakinstallatiebouw.nl' }
      ]
    },
    {
      name: 'Poland',
      companies: [
        { name: 'PLUM', email: 'gas@plum.pl' }
      ]
    },
    {
      name: 'Portugal',
      companies: [
        { name: 'ENERMETER', email: 'enermeter@enermeter.pt' }
      ]
    },
    {
      name: 'Romania',
      companies: [
        { name: 'SAMGAS Romania', email: 'samgas@samgas.ro' }
      ]
    },
    {
      name: 'Greece',
      companies: [
        { name: 'Engineers+partners p.c.', email: 'info@engineers-partners.com' }
      ]
    },
    {
      name: 'Slovakia',
      companies: [
        { name: 'Stimcorect', email: 'stimcorect@stimcorect.sk' }
      ]
    },
    {
      name: 'United Arab Emirates',
      companies: [
        { name: 'Teco M.E. Group', email: 'me-support@tecomat.cz' }
      ]
    },
    {
      name: 'United Kingdom',
      companies: [
        { name: 'Utility Meters Warehouse Ltd', email: 'sales@umwuk.com' }
      ]
    },
    {
      name: 'Serbia',
      companies: [
        { name: 'TipexAs d.o.o.', email: 'office@tipexas.com' }
      ]
    },
    {
      name: 'Turkey',
      companies: [
        { name: 'ESCOM Enerji Otomasyon', email: 'zeytun@escom.com.tr' }
      ]
    },
    {
      name: 'USA',
      companies: [
        { name: 'Elgas USA', email: 'andreas.skof@elgasusa.com' }
      ]
    },
    {
      name: 'Brazil',
      companies: [
        { name: 'Gascat Indústria', email: 'sales@gascat.com.br' }
      ]
    },
    {
      name: 'Canada',
      companies: [
        { name: 'Elgas USA', email: 'andreas.skof@elgasusa.com' }
      ]
    },
    {
      name: 'Qatar',
      companies: [
        { name: 'Power Gas WLL', email: 'maqsood@powergas.qa' }
      ]
    },
    {
      name: 'Moldova',
      companies: [
        { name: 'Invent-IN S.R.L.', email: 'inventgaz@gmail.com' }
      ]
    },
    {
      name: 'Iran',
      companies: [
        { name: 'Delta Gas Mobin Group', email: 'info@delta-gas.com' }
      ]
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)' }}>
        <div className="container text-center">
          <h1 style={{ color: 'white' }}>Installations Worldwide</h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem' }}>
            The AVE system is used throughout the world by the largest energy companies
          </p>
        </div>
      </section>

      {/* World Map Section */}
      <section className="section installations">
        <div className="container text-center">
          <h2 className="section-title">Global Presence</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            AVE System installations can be found in multiple countries across different continents.
          </p>
          
          {/* Countries Grid */}
          <div className="country-grid">
            {countries.map((country, index) => (
              <div key={index} className="country-item">
                <i className="fas fa-map-marker-alt" style={{ color: '#3498db', marginRight: '0.5rem' }}></i>
                {country}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies by Country */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Companies Using AVE System</h2>
          <p style={{ textAlign: 'center', fontSize: '1.25rem', marginBottom: '2rem' }}>
            Trusted by leading energy companies worldwide
          </p>
          
          <div className="grid">
            {companies.map((countryGroup, index) => (
              <div key={index} className="card">
                <h3 style={{ color: '#3498db', marginBottom: '1rem' }}>
                  <i className="fas fa-flag" style={{ marginRight: '0.5rem' }}></i>
                  {countryGroup.name}
                </h3>
                <ul style={{ listStyle: 'none' }}>
                  {countryGroup.companies.map((company, companyIndex) => (
                    <li key={companyIndex} style={{ padding: '0.5rem 0', borderBottom: companyIndex < countryGroup.companies.length - 1 ? '1px solid #eee' : 'none' }}>
                      <strong>{company.name}</strong>
                      <br />
                      <a href={`mailto:${company.email}`} style={{ color: '#3498db' }}>
                        {company.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">By The Numbers</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#3498db', marginBottom: '0.5rem' }}>
                15+
              </div>
              <p style={{ fontSize: '1.25rem' }}>Years in Business</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#3498db', marginBottom: '0.5rem' }}>
                20+
              </div>
              <p style={{ fontSize: '1.25rem' }}>Countries</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#3498db', marginBottom: '0.5rem' }}>
                100+
              </div>
              <p style={{ fontSize: '1.25rem' }}>Companies</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#3498db', marginBottom: '0.5rem' }}>
                1M+
              </div>
              <p style={{ fontSize: '1.25rem' }}>Households</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center' }}>
              <i className="fas fa-quote-left" style={{ fontSize: '2rem', color: '#3498db', marginBottom: '1rem' }}></i>
              <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '1rem' }}>
                "The AVE system has transformed our energy data management, providing accurate and timely information that has significantly improved our operations and customer service."
              </p>
              <p style={{ color: '#7f8c8d' }}>
                - Energy Company Representative
              </p>
              <i className="fas fa-quote-right" style={{ fontSize: '2rem', color: '#3498db', marginTop: '1rem' }}></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InstallationsPage;
