// @ts-nocheck
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCog, faThermometerHalf, faTint, faWifi, faCar, faAward, faBuilding, faChartLine, faBolt, faUserTie, faHome } from '@fortawesome/free-solid-svg-icons';

interface EnergyType {
  name: string;
  icon: IconDefinition;
  description: string;
}

interface Audience {
  title: string;
  icon: IconDefinition;
  description: string;
}

export default function HomePage(): React.ReactElement {
  const [activeTab, setActiveTab] = useState<string>('main');

  const energyTypes: EnergyType[] = [
    { name: 'Gas', icon: faCog, description: 'Natural gas consumption monitoring' },
    { name: 'Power', icon: faBolt, description: 'Electrical energy tracking' },
    { name: 'Heat', icon: faThermometerHalf, description: 'Thermal energy measurement' },
    { name: 'Water', icon: faTint, description: 'Water usage monitoring' },
    { name: 'IoT', icon: faWifi, description: 'Internet of Things device integration' },
    { name: 'Vehicles', icon: faCar, description: 'Fleet tracking and management' },
  ];

  const mainAdvantages: string[] = [
    'Automated data collection from various meter types',
    'Real-time monitoring and alerting',
    'Comprehensive reporting and analytics',
    'Seamless integration with existing systems',
    'Scalable architecture for growing needs',
    'User-friendly interface for all skill levels',
  ];

  const otherAdvantages: string[] = [
    'Reduced operational costs through automation',
    'Improved accuracy with automated readings',
    'Enhanced decision-making with real-time data',
    'Regulatory compliance support',
    'Multi-language and multi-currency support',
    'Mobile access for field personnel',
  ];

  const targetAudiences: Audience[] = [
    {
      title: 'Distribution Companies',
      icon: faBuilding,
      description: 'Manage energy distribution networks efficiently'
    },
    {
      title: 'Energy Traders',
      icon: faChartLine,
      description: 'Access real-time data for trading decisions'
    },
    {
      title: 'Power Engineers',
      icon: faUserTie,
      description: 'Monitor and analyze energy systems performance'
    },
    {
      title: 'Energy Consumers',
      icon: faHome,
      description: 'Track and optimize your energy consumption'
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>MyAMR</h1>
          <p className="hero-subtitle">Energy Consumption Data Reading and Management System</p>
          <div className="hero-buttons">
            <Link to="/modules" className="btn btn-primary">
              Explore Modules
            </Link>
            <Link to="/how-it-works" className="btn btn-secondary">
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Energy Types */}
      <section className="section energy-types">
        <div className="container">
          <h2 className="section-title">Energy Types We Support</h2>
          <div className="energy-grid">
            {energyTypes.map((energy: EnergyType, index: number) => (
              <div key={index} className="energy-card">
                <div className="energy-icon">
                  <FontAwesomeIcon icon={energy.icon} size="2x" />
                </div>
                <h3>{energy.name}</h3>
                <p>{energy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="section advantages">
        <div className="container">
          <h2 className="section-title">Main Advantages</h2>
          <ul className="advantages-list">
            {mainAdvantages.map((advantage: string, index: number) => (
              <li key={index} className="advantage-item">
                <span className="advantage-number">{index + 1}</span>
                <span className="advantage-text">{advantage}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Other Advantages */}
      <section className="section other-advantages">
        <div className="container">
          <h2 className="section-title">Other Advantages</h2>
          <div className="other-advantages-grid">
            {otherAdvantages.map((advantage: string, index: number) => (
              <div key={index} className="other-advantage-card">
                <span className="check-icon">\u2713</span>
                <p>{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MyAMR System Is Designed For */}
      <section className="section target-audience">
        <div className="container">
          <h2 className="section-title">The MyAMR System Is Designed For</h2>
          <div className="audience-grid">
            {targetAudiences.map((audience: Audience, index: number) => (
              <div key={index} className="audience-card">
                <div className="audience-icon">
                  <FontAwesomeIcon icon={audience.icon} size="2x" />
                </div>
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Award Section */}
      <section className="section award">
        <div className="container">
          <div className="award-content">
            <div className="award-icon">
              <FontAwesomeIcon icon={faAward} size="3x" />
            </div>
            <div className="award-text">
              <p>
                MyAMR is the winner of the prestigious Microsoft Industry Awards 2008 
                in the category Best Solution in Industrial Production
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="container">
          <p>
            Join hundreds of companies worldwide using MyAMR for efficient energy data collection and management.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
