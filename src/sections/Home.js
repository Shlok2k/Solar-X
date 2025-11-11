import React, { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Solar1 from '../assets/images/Solar1.png';
import Solar2 from '../assets/images/Solar2.jpg';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const BannerCarousel = () => {
  const bannerContent = [
    {
      image: Solar1,
      title: "Premium Solar Solutions",
      description: "Harness the power of the sun with our efficient solar panel installations.",
      buttonText: "Get Free Quote",
      showContent: true
    },
    {
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=100",
      title: "Sustainable Energy",
      description: "Go green with our eco-friendly solar solutions for your home.",
      buttonText: "Learn More",
      showContent: true
    },
    {
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=100",
      title: "Expert Installation",
      description: "Professional installation by certified solar energy experts.",
      buttonText: "View Services",
      showContent: true
    },
    {
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=100",
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your solar needs.",
      buttonText: "Contact Us",
      showContent: true
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate banners every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerContent.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '80vh', 
      overflow: 'hidden',
      '--primary-color': '#22c55e',
      '--primary-hover': '#16a34a',
      '--text-color': '#ffffff',
      '--text-shadow': '0 2px 4px rgba(0,0,0,0.5)'
    }}>
      {/* Banner Image with Gradient Overlay */}
      <div style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${typeof bannerContent[currentIndex].image === 'string' ? bannerContent[currentIndex].image : bannerContent[currentIndex].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
          transition: 'all 0.8s ease-in-out',
          width: '100%',
          height: '110%',
          objectFit: 'cover',
          transform: 'scale(1.05) translateY(5%)',
          filter: 'brightness(0.5)'
        }} />
        {/* Gradient Overlay */}
        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '0 10%',
          maxWidth: '1200px',
          margin: '0 auto'
      }}>
        </div>
        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '0 10%',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Banner Content */}
          {bannerContent[currentIndex].showContent && (
            <div style={{ 
              maxWidth: '800px',
              color: '#ffffff',
              textShadow: '0 2px 15px rgba(0,0,0,0.9)',
              marginBottom: '20px',
              fontWeight: '900',
              lineHeight: '1.3',
              filter: 'brightness(1) contrast(1.2)'
            }}>
              <h1 style={{ 
                fontSize: 'clamp(32px, 5.5vw, 52px)', 
                marginBottom: '20px',
                lineHeight: '1.3',
                fontWeight: '900',
                animation: 'fadeIn 0.8s ease-out',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
              }}>
                {bannerContent[currentIndex].title}
              </h1>
              <p style={{ 
                fontSize: 'clamp(18px, 2.2vw, 22px)',
                marginBottom: '24px',
                lineHeight: 1.6,
                fontWeight: '500',
                textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                animation: 'fadeIn 1s ease-out'
              }}>
                {bannerContent[currentIndex].description}
              </p>
              <NavLink 
                to="/contact" 
                className="btn btn-primary" 
                style={{
                  padding: '12px 28px',
                  fontSize: '16px',
                  fontWeight: 600,
                  backgroundColor: '#ffffff',
                  color: '#333333',
                  border: '2px solid #ffffff',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none',
                  display: 'inline-block',
                  animation: 'fadeIn 1.2s ease-out',
                  ':hover': {
                    backgroundColor: '#E10210',
                    color: '#ffffff',
                    borderColor: '#E10210',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 15px rgba(225, 2, 16, 0.3)'
                  }
                }}
              >
                {bannerContent[currentIndex].buttonText}
              </NavLink>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Dots */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 2
      }}>
        {bannerContent.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: currentIndex === index ? '#22c55e' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows Removed */}
    </div>
  );
};

function Home() {
  // Solar Calculator State
  const [bill, setBill] = useState('');
  const [roofArea, setRoofArea] = useState('');
  const [tariff, setTariff] = useState('9');
  const [calc, setCalc] = useState(null);
  
  // Calculate solar savings
  const calculateSavings = () => {
    if (!bill || !roofArea) return;
    
    const monthlyBill = parseFloat(bill);
    const area = parseFloat(roofArea);
    
    // Calculate system size (1 kW requires ~100 sq.ft of roof space)
    const maxSystemSizeKW = Math.min(area / 100, 100); // Cap at 100kW
    
    // Calculate monthly units (assuming average tariff of ₹9/unit if not provided)
    const monthlyUnits = monthlyBill / (tariff || 9);
    
    // Calculate required system size (1 kW produces ~120 units/month)
    const requiredSystemSizeKW = Math.min(monthlyUnits / 120, maxSystemSizeKW);
    
    // Calculate savings (90% of current bill)
    const monthlySavings = Math.round(monthlyBill * 0.9);
    const annualSavings = monthlySavings * 12;
    
    // Calculate system cost (₹50,000 per kW)
    const systemCost = Math.round(requiredSystemSizeKW * 50000);
    
    // Calculate payback period in years
    const paybackYears = (systemCost / annualSavings).toFixed(1);
    
    setCalc({
      systemSize: requiredSystemSizeKW.toFixed(1),
      monthlySavings,
      annualSavings,
      systemCost,
      paybackYears,
      monthlyUnits: Math.round(monthlyUnits)
    });
  };
  
  // Reset calculation when inputs change
  const handleBillChange = (e) => {
    setBill(e.target.value);
    setCalc(null);
  };
  
  const handleRoofAreaChange = (e) => {
    setRoofArea(e.target.value);
    setCalc(null);
  };
  const [counts, setCounts] = useState({ mwp: 0, sites: 0, co2: 0, units: 0 });
  const testimonials = useMemo(
    () => [
      { q: 'Bill 60% kam, process smooth tha.', n: 'Rahul • Pune', c: '15 kWp Rooftop' },
      { q: 'Factory load offset ho gaya, ROI fast.', n: 'Meera • Surat', c: '500 kWp Captive' },
      { q: 'Backup + Net‑metering, best combo.', n: 'Arjun • Noida', c: '12 kWp Hybrid' },
    ],
    []
  );
  const [slide, setSlide] = useState(0);
  // Interactive process tabs (distinct concept)
  const procSteps = useMemo(() => ([
    { t: 'Discover', d: 'Site visit and goals mapping to tailor solar ROI and compliance.', p: ['Load profile & bills review','Roof/land assessment','Shade & structure checks'], key:'discover' },
    { t: 'Design', d: 'String sizing, layout, and safety plan optimized for yield.', p: ['Shadow analysis (PV*Sol/PVSyst)','String & inverter matching','BOS & safety bill of materials'], key:'design' },
    { t: 'Deploy', d: 'Structure, modules, cabling and QA with HOTO checks.', p: ['Structure & panel mounting','DC/AC cabling & terminations','Quality checks & HOTO'], key:'deploy' },
    { t: 'Commission', d: 'Net‑metering, synchronization and statutory approvals.', p: ['DISCOM coordination','Synchronization & testing','Documentation & handover'], key:'commission' },
    { t: 'Monitor', d: 'App‑based performance, alerts and scheduled maintenance.', p: ['Performance dashboard','Preventive maintenance','Warranty/AMC support'], key:'monitor' }
  ]), []);
  // Simple per-step mini bar-chart data for the right panel (innovative alt to the line)
  const barSets = useMemo(() => ([
    [18, 26, 12], // Discover
    [22, 16, 28], // Design
    [14, 22, 18], // Deploy
    [20, 18, 24], // Commission
    [12, 20, 30], // Monitor
  ]), []);
  const [procStep, setProcStep] = useState(0);
  const [vizType, setVizType] = useState('line');
  const containerStyle = { maxWidth: 1180, margin: '0 auto', padding: '0 24px' };
  const graphPaths = useMemo(() => ([
    'M8,46 Q28,30 48,40 T92,36',
    'M8,44 C20,28 40,52 60,34 S92,30 92,40',
    'M8,42 C24,26 50,50 76,32 S92,36 92,38',
    'M8,48 C26,30 46,46 68,28 S92,34 92,44',
    'M8,40 C24,22 52,42 80,26 S92,32 92,36'
  ]), []);
  const badgesPerStep = useMemo(() => ([
    ['Survey Ready','On-site'],
    ['PV*Sol','Safety First'],
    ['QA Check','BOS Ready'],
    ['Net‑Meter','Sync Test'],
    ['Live Alerts','AMC']
  ]), []);
  const kpisPerStep = useMemo(() => ([
    [
      { l:'Est. Time', v:'2–3 days' },
      { l:'Docs', v:'Bills, Site Pics' },
      { l:'Output', v:'Feasibility' }
    ],
    [
      { l:'Est. Time', v:'3–5 days' },
      { l:'Tools', v:'PV*Sol/PVSyst' },
      { l:'Output', v:'Yield + BoM' }
    ],
    [
      { l:'Est. Time', v:'1–2 weeks' },
      { l:'Crew', v:'2–6 techs' },
      { l:'Output', v:'Installed' }
    ],
    [
      { l:'Est. Time', v:'2–4 days' },
      { l:'Authority', v:'DISCOM' },
      { l:'Output', v:'Synchronized' }
    ],
    [
      { l:'Frequency', v:'24x7' },
      { l:'Alerts', v:'Email/App' },
      { l:'Output', v:'Performance' }
    ]
  ]), []);
  // Open 'Client Focus' by default
  const [activeCard, setActiveCard] = useState('Client Focus');
  const [eqIndex, setEqIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };
  const equivalences = useMemo(() => {
    const trees = Math.max(1, Math.round(counts.co2 / 21));
    const cars = Math.max(1, Math.round(counts.co2 / 4040));
    const bulbs = Math.max(1, Math.round(counts.units / 60));
    return [
      `≈ ${trees.toLocaleString()} trees planted`,
      `≈ ${cars.toLocaleString()} cars off road (1yr)`,
      `≈ ${bulbs.toLocaleString()} LED bulbs powered (1yr)`,
    ];
  }, [counts.co2, counts.units]);

  useEffect(() => {
    let t = 0;
    const iv = setInterval(() => {
      t += 1;
      setCounts({
        mwp: Math.min(5, +(t * 0.1).toFixed(1)),
        sites: Math.min(200, t * 5),
        co2: Math.min(7200, t * 180),
        units: Math.min(650000, t * 16000),
      });
      if (t >= 50) clearInterval(iv);
    }, 40);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => setSlide((s) => (s + 1) % testimonials.length), 3500);
    return () => clearInterval(iv);
  }, [testimonials.length]);

  useEffect(() => {
    const iv = setInterval(() => setEqIndex((i) => (i + 1) % equivalences.length), 3000);
    return () => clearInterval(iv);
  }, [equivalences.length]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const els = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('reveal'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // auto-scroll the active DNA card into view when it changes
  useEffect(() => {
    if (!activeCard) return;
    try {
      const sel = `[data-title="${activeCard}"]`;
      const el = document.querySelector(sel);
      if (el && typeof el.scrollIntoView === 'function') {
        el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
      }
    } catch (err) {
      // fallback: do nothing if invalid selector or missing
    }
  }, [activeCard]);

  // DNA items list (used by the explorer)
  const dnaItems = useMemo(() => ([
    {
      t: 'Client Focus',
      d: 'Transparent communication, responsive service and lifelong support.',
      icon: 'hand',
      points: [
        'Transparent project updates and clear timelines',
        'Responsive customer support during and after installation',
        'Tailored proposals to match your energy needs',
        'Honest pricing and detailed cost breakdowns',
        'Long‑term maintenance and warranty support'
      ]
    },
    {
      t: 'Innovation',
      d: 'Optimized design, smart monitoring and future‑ready technology.',
      icon: 'rocket',
      points: [
        'Cutting‑edge panel & inverter selection',
        'Smart monitoring for performance insights',
        'Designs optimized for maximum lifetime yield'
      ]
    },
    {
      t: 'Sustainability',
      d: 'Lower environmental impact with maximum lifetime value.',
      icon: 'leaf',
      points: [
        'Materials and practices with lower environmental impact',
        'Systems built for durability and low lifecycle waste',
        'Designs focused on maximizing lifetime value'
      ]
    },
    {
      t: 'Integrity',
      d: 'Honest advice and ethical practices you can trust.',
      icon: 'compass',
      points: [
        'Transparent contracts and realistic expectations',
        'Compliance with safety and statutory standards',
        'Independent quality checks and documentation'
      ]
    },
  ]), []);

  const runCalc = () => {
    const b = parseFloat(bill || '0');
    const t = parseFloat(tariff || '9');
    if (!b || !t) return setCalc(null);
    const monthlyUnits = b / t;
    const kw = Math.max(1, Math.round(monthlyUnits / 120));
    const annualUnits = kw * 1440;
    const annualSavings = Math.round(annualUnits * t);
    const costPerKw = 55000;
    const systemCost = kw * costPerKw;
    const payback = Math.max(1.5, +(systemCost / Math.max(annualSavings, 1)).toFixed(1));
    setCalc({ kw, annualSavings, payback });
  };

  return (
    <section id="home" style={{ padding: 0, maxWidth: 'none', margin: 0, overflowX: 'hidden', width: '100vw', marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
      <style>{`
        .full-bleed{width:100vw;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw)}
        .full-screen{min-height:100vh;display:flex;align-items:center;justify-content:center}
        [data-reveal]{opacity:0; transform: translateY(10px); transition: opacity .5s ease, transform .5s ease;}
        .reveal{opacity:1 !important; transform: translateY(0) !important;}
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .banner-content {
          transition: all 0.5s ease-in-out;
        }
      `}</style>
      <div className="hero-wrap" style={{ position: 'relative', borderRadius: 0, boxShadow: 'none' }}>
        <BannerCarousel />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(11,26,36,0.60) 0%, rgba(11,26,36,0.32) 45%, rgba(11,26,36,0.16) 100%)',
            display: 'flex',
            alignItems: 'center',
            padding: '28px 20px',
            color: '#fff'
          }}
        >
          <div style={{ maxWidth: 760 }}>
            <div style={{
              display: 'inline-flex',
              gap: 8,
              padding: '6px 10px',
              background: 'rgba(255,255,255,0.12)',
              borderRadius: 999,
              fontSize: 12,
              marginBottom: 10,
            }}>
              <span>Commercial</span>
              <span>•</span>
              <span>Industrial</span>
              <span>•</span>
              <span>Residential</span>
            </div>
            <h1 style={{ margin: 0, lineHeight: 1.08, fontSize: 'clamp(30px, 5.2vw, 52px)' }}>
              Switch to Smarter Solar
              <br />
              Save More. Live Greener.
            </h1>
            <p style={{ margin: '12px 0 18px', opacity: 0.95, fontSize: 'clamp(14px, 2.4vw, 18px)' }}>
              Cut your electricity bills by up to 70% with high‑efficiency panels, expert design and
              end‑to‑end support—from survey to installation and maintenance.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: 12, 
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 2
            }}>
              <NavLink 
                to="/contact" 
                className="btn btn-primary" 
                aria-label="Book a free site survey"
                style={{
                  position: 'relative',
                  zIndex: 2,
                  padding: '12px 24px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }
                }}
              >
                Book a Free Site Survey
              </NavLink>
              <NavLink
                to="/about"
                className="btn btn-ghost"
                aria-label="View solar solutions"
                style={{
                  position: 'relative',
                  zIndex: 2,
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.4)',
                  color: '#fff',
                  padding: '12px 24px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }
                }}
                onClick={(e) => {
                  // Store that we want to scroll to solutions
                  sessionStorage.setItem('scrollToSolutions', 'true');
                }}
              >
                View Solutions
              </NavLink>
            </div>
            <div style={{ display: 'flex', gap: 16, marginTop: 14, fontSize: 13, opacity: 0.9, flexWrap: 'wrap' }}>
              <span>✓ Fast ROI</span>
              <span>✓ 25+ Year Panel Warranty</span>
              <span>✓ Pan‑India Projects</span>
            </div>
          </div>
        </div>
      </div>

      <div className="about-mission full-bleed">
        <section style={{ padding: '64px 0', background: '#f7f9fb', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position:'absolute', top:-80, right:-60, width:240, height:240, borderRadius:'50%', background:'radial-gradient(closest-side, rgba(14,165,233,0.08), rgba(14,165,233,0))' }} />
          <div style={{ position:'absolute', bottom:-100, left:-70, width:280, height:280, borderRadius:'50%', background:'radial-gradient(closest-side, rgba(34,197,94,0.08), rgba(34,197,94,0))' }} />
          <div style={{ ...containerStyle, position:'relative' }}>
            <div style={{ display:'inline-flex', gap:8, padding:'6px 10px', background:'#e9f3ff', color:'#1e40af', borderRadius:999, fontSize:12, marginBottom:10 }}>
              <span>Who we are</span>
            </div>
            <h2 style={{ margin: 0, fontSize: 'clamp(28px, 4.8vw, 46px)' }}>About Our Solar Mission</h2>
            <p style={{ margin: '12px 0 20px', color: 'var(--solar-muted)', maxWidth: 900, fontSize: 'clamp(14px, 2.2vw, 18px)' }}>
              We are committed to accelerating India’s clean energy transition with high‑efficiency solar,
              engineered for performance and reliability. From design to execution, we deliver measurable
              savings and long‑term value for homes, industries and institutions.
            </p>
            <div style={{ display:'flex', gap:14, flexWrap:'wrap', margin: '10px 0 16px' }}>
              <span style={{ padding:'10px 14px', borderRadius:999, background:'#eaf8f0', color:'#0a6b3e', fontSize:13 }}>✅ MNRE Compliant</span>
              <span style={{ padding:'10px 14px', borderRadius:999, background:'#eaf0ff', color:'#1246a6', fontSize:13 }}>🔌 Net‑Metering Ready</span>
              <span style={{ padding:'10px 14px', borderRadius:999, background:'#fff5e9', color:'#9a5a00', fontSize:13 }}>🛡️ 25+ Yr Warranty</span>
              <span style={{ padding:'10px 14px', borderRadius:999, background:'#eef1f5', color:'#1f2937', fontSize:13 }}>🗺️ Pan‑India Execution</span>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:12, margin:'10px 0 16px' }}>
              <div 
                className="rounded-card" 
                style={{ 
                  padding: '18px 16px',
                  background: '#fff',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  border: '1px solid rgba(0,0,0,0.04)',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #0ea5e9, #22c55e)',
                    transition: 'all 0.3s ease'
                  },
                  ':hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.1), 0 6px 12px rgba(0,0,0,0.05)',
                    '::before': {
                      height: '5px'
                    }
                  }
                }}
              >
                <div style={{ 
                  fontSize: '14px', 
                  color: '#64748b',
                  marginBottom: '4px',
                  transition: 'all 0.3s ease'
                }}>Installed</div>
                <div style={{ 
                  fontWeight: 800, 
                  fontSize: '24px',
                  background: 'linear-gradient(90deg, #0f172a, #334155)', 
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  transition: 'all 0.3s ease'
                }}>5+ <span style={{ fontSize: '18px' }}>MWp</span></div>
              </div>
              
              <div 
                className="rounded-card" 
                style={{ 
                  padding: '18px 16px',
                  background: '#fff',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  border: '1px solid rgba(0,0,0,0.04)',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #22c55e, #0ea5e9)',
                    transition: 'all 0.3s ease'
                  },
                  ':hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.1), 0 6px 12px rgba(0,0,0,0.05)',
                    '::before': {
                      height: '5px'
                    }
                  }
                }}
              >
                <div style={{ 
                  fontSize: '14px', 
                  color: '#64748b',
                  marginBottom: '4px',
                  transition: 'all 0.3s ease'
                }}>Sites Executed</div>
                <div style={{ 
                  fontWeight: 800, 
                  fontSize: '24px',
                  background: 'linear-gradient(90deg, #0f172a, #334155)', 
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  transition: 'all 0.3s ease'
                }}>200+ <span style={{ fontSize: '18px' }}>Sites</span></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="cta-band full-bleed" style={{ width:'100vw', marginLeft:'calc(50% - 50vw)', marginRight:'calc(50% - 50vw)', background:'linear-gradient(90deg,#0ea5e9,#22c55e)' }}>
        <section style={{ padding:'18px 0' }}>
          <div style={{ ...containerStyle, display:'flex', gap:12, justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', color:'#0b1a24' }}>
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <div style={{ width:8, height:8, borderRadius:999, background:'#fff' }} />
              <div style={{ fontWeight:700, color:'#0b1a24' }}>Ready to go solar? Get a quick quote.</div>
            </div>
            <NavLink to="/contact" className="btn" style={{ background:'#0b1a24', color:'#fff', border:'1px solid rgba(0,0,0,0.2)', padding:'10px 16px', borderRadius:999, fontWeight:700 }}>Get a Quote</NavLink>
          </div>
        </section>
      </div>

      <div className="process-tabs full-bleed">
        <section style={{ padding: '56px 0 68px', background: '#fff' }}>
          <div style={{ ...containerStyle }}>
            <h2 style={{ textAlign:'center', margin:0, fontSize:'clamp(24px,4.2vw,38px)' }}>Our Process</h2>
            <div style={{ display:'flex', justifyContent:'center', marginTop:10 }}>
              <div style={{ width:120, height:3, borderRadius:999, background:'linear-gradient(90deg,#0ea5e9,#22c55e)' }} />
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center', marginTop:18 }}>
              {procSteps.map((s,i)=> (
                <button key={s.t} onClick={()=>setProcStep(i)} style={{
                  cursor:'pointer',
                  padding:'10px 14px',
                  borderRadius:999,
                  border: i===procStep ? '1px solid #0ea5e9' : '1px solid #e6eef5',
                  background: i===procStep ? 'linear-gradient(90deg,#0ea5e91a,#22c55e1a)' : '#f9fbfd',
                  color:'#0b1a24',
                  fontWeight:600,
                  boxShadow: i===procStep ? '0 6px 16px rgba(14,165,233,0.12)' : 'none',
                  transition:'transform 180ms ease, box-shadow 180ms ease',
                  transform: i===procStep ? 'translateY(-1px)' : 'translateY(0)'
                }}>{String(i+1).padStart(2,'0')} • {s.t}</button>
              ))}
            </div>
            <div style={{ position:'relative', height:6, margin:'12px auto 0', maxWidth:520, background:'#eef3f7', borderRadius:999 }}>
              <div style={{ position:'absolute', left:0, top:0, bottom:0, width:`${(procStep/(procSteps.length-1))*100}%`, background:'linear-gradient(90deg,#0ea5e9,#22c55e)', borderRadius:999, transition:'width 260ms ease' }} />
            </div>
            <div style={{
              marginTop:20,
              display:'grid',
              gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))',
              gap:18,
              alignItems:'center'
            }}>
              <div className="card" style={{ borderRadius:16, padding:18, background:'#ffffffcc', backdropFilter:'saturate(120%) blur(2px)', border:'1px solid #e6eef5', boxShadow:'0 10px 28px rgba(0,0,0,0.06)', position:'relative', overflow:'hidden' }}>
                <div style={{ position:'absolute', inset:0, pointerEvents:'none', background:'radial-gradient(600px 240px at -10% -20%, rgba(14,165,233,0.08), transparent), radial-gradient(600px 240px at 120% 120%, rgba(34,197,94,0.08), transparent)' }} />
                <div style={{ position:'absolute', left:0, right:0, top:0, height:4, background:'linear-gradient(90deg,#facc15,#22c55e)', borderTopLeftRadius:16, borderTopRightRadius:16 }} />
                <div style={{ fontSize:12, opacity:0.7 }}>Step {String(procStep+1).padStart(2,'0')}</div>
                <div style={{ fontWeight:800, fontSize:22, margin:'4px 0 6px' }}>{procSteps[procStep].t}</div>
                <div style={{ opacity:0.9 }}>{procSteps[procStep].d}</div>
                <ul style={{ margin:'10px 0 0', paddingLeft:18, display:'grid', gap:6 }}>
                  {procSteps[procStep].p.map(it => (
                    <li key={it} style={{ fontSize:13, color:'#0b1a24', opacity:0.9 }}>{it}</li>
                  ))}
                </ul>
                <div style={{ display:'flex', gap:8, marginTop:12, flexWrap:'wrap' }}>
                  {['Site Survey','Yield Estimation','Safety Plan','Documentation'].slice(0, 2 + (procStep%3)).map(ch=> (
                    <span key={ch} style={{ fontSize:12, padding:'8px 10px', borderRadius:999, background:'#eef3f7', border:'1px solid #e6eef5' }}>{ch}</span>
                  ))}
                </div>
                <div style={{ display:'flex', gap:10, marginTop:12, flexWrap:'wrap' }}>
                  <NavLink to={`/contact?step=${procSteps[procStep].key}`} className="btn" style={{ background:'#0b1a24', color:'#fff', border:'1px solid rgba(0,0,0,0.2)' }}>Talk to an Expert</NavLink>
                  <NavLink to={`/solutions?step=${procSteps[procStep].key}`} className="btn" style={{ background:'#f9fbfd', border:'1px solid #e6eef5' }}>See Solutions</NavLink>
                </div>
              </div>
              <div
                onMouseMove={(e)=>{const r=e.currentTarget.getBoundingClientRect(); const x=(e.clientX-r.left)/r.width-0.5; const y=(e.clientY-r.top)/r.height-0.5; e.currentTarget.style.transform=`perspective(800px) rotateX(${(-y*5).toFixed(2)}deg) rotateY(${(x*6).toFixed(2)}deg) translateY(-2px)`;}}
                onMouseLeave={(e)=>{e.currentTarget.style.transform='perspective(800px) rotateX(0) rotateY(0) translateY(0)';}}
                style={{ position:'relative', height:220, borderRadius:16, background:'linear-gradient(135deg,#f8fbff,#f3fcf7)', border:'1px solid #e6eef5', boxShadow:'0 14px 34px rgba(0,0,0,0.08)', overflow:'hidden', transition:'transform 220ms ease', transformStyle:'preserve-3d' }}
              >
                <div style={{ position:'absolute', inset:0, background:'radial-gradient(600px 220px at 12% 14%, rgba(14,165,233,0.10), transparent), radial-gradient(600px 220px at 88% 86%, rgba(34,197,94,0.10), transparent)' }} />
                <div style={{ position:'absolute', right:-40, top:-40, width:160, height:160, borderRadius:'50%', background:'radial-gradient(closest-side, rgba(250,204,21,0.06), rgba(250,204,21,0))' }} />
                {/* Viz toggle */}
                <div style={{ position:'absolute', top:10, left:10, display:'flex', gap:6 }}>
                  {['line','bars'].map(v => (
                    <button key={v} onClick={()=>setVizType(v)} style={{ fontSize:11, padding:'6px 8px', borderRadius:999, border: vizType===v?'1px solid #0ea5e9':'1px solid #e6eef5', background: vizType===v?'#ffffffcc':'#ffffffa8' }}>{v.toUpperCase()}</button>
                  ))}
                </div>
                {vizType==='line' ? (
                  <svg width="100%" height="100%" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <linearGradient id="pi" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={procStep%2===0?"#0ea5e9":"#22c55e"}/>
                        <stop offset="100%" stopColor={procStep%2===0?"#22c55e":"#0ea5e9"}/>
                      </linearGradient>
                    </defs>
                    <rect x="6" y="38" width="88" height="12" rx="2" fill="#e9f1f7"/>
                    <rect x="10" y="32" width="22" height="6" rx="2" fill="url(#pi)" opacity="0.9"/>
                    <rect x="36" y="28" width="18" height="10" rx="2" fill="#e9f1f7"/>
                    <rect x="58" y="24" width="24" height="14" rx="2" fill="#e9f1f7"/>
                    <circle cx="20" cy="20" r="6" fill="url(#pi)" opacity="0.9"/>
                    <path d={graphPaths[procStep]} fill="none" stroke="url(#pi)" strokeWidth="1.2" opacity="0.8" style={{ transition: 'd 240ms ease' }} />
                  </svg>
                ) : (
                  <svg width="100%" height="100%" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <linearGradient id="pb" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor={procStep%2===0?"#22c55e":"#0ea5e9"}/>
                        <stop offset="100%" stopColor={procStep%2===0?"#0ea5e9":"#22c55e"}/>
                      </linearGradient>
                    </defs>
                    <rect x="6" y="38" width="88" height="12" rx="2" fill="#e9f1f7"/>
                    {barSets[procStep].map((h,idx)=> (
                      <rect key={idx} x={14+idx*16} y={40-h/2} width="12" height={h/2} rx="2" fill="url(#pb)" opacity="0.9">
                        <animate attributeName="height" from="0" to={h/2} dur="260ms" fill="freeze" />
                      </rect>
                    ))}
                  </svg>
                )}
                <div style={{ position:'absolute', top:10, right:10, display:'flex', gap:8, flexWrap:'wrap', justifyContent:'flex-end' }}>
                  {badgesPerStep[procStep].map(b => (
                    <span key={b} style={{ fontSize:11, padding:'6px 10px', borderRadius:999, background:'#ffffffcc', border:'1px solid #e6eef5' }}>{b}</span>
                  ))}
                </div>
                <div style={{ position:'absolute', left:12, bottom:10, display:'flex', gap:8, alignItems:'center' }}>
                  <span style={{ fontSize:12, padding:'6px 10px', borderRadius:999, background:'#ffffffcc', border:'1px solid #e6eef5' }}>Step {String(procStep+1).padStart(2,'0')}</span>
                  <NavLink to={`/contact?step=${procSteps[procStep].key}`} className="btn" style={{ padding:'6px 10px', background:'#0b1a24', color:'#fff', border:'1px solid rgba(0,0,0,0.2)' }}>Contact for {procSteps[procStep].t}</NavLink>
                </div>
              </div>
            </div>
            <div style={{ marginTop:16, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:12 }}>
              {kpisPerStep[procStep].map(k => (
                <div key={k.l} style={{ background:'#f9fbfd', border:'1px solid #e6eef5', borderRadius:12, padding:'10px 14px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <span style={{ fontSize:12, opacity:0.7 }}>{k.l}</span>
                  <span style={{ fontWeight:700 }}>{k.v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="impact-counters full-bleed" style={{ width:'100vw', marginLeft:'calc(50% - 50vw)', marginRight:'calc(50% - 50vw)', background:'linear-gradient(90deg,#f8fbff,#f3fcf7)' }}>
        <section style={{ padding: '28px 0 32px' }}>
          <div style={{ ...containerStyle }}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:12 }}>
              <div className="card" style={{ borderRadius:12, padding:14, textAlign:'center' }}>
                <div style={{ fontSize:12, opacity:0.7 }}>Installed</div>
                <div style={{ fontWeight:800, fontSize:26 }}>{counts.mwp.toLocaleString()} MWp</div>
              </div>
              <div className="card" style={{ borderRadius:12, padding:14, textAlign:'center' }}>
                <div style={{ fontSize:12, opacity:0.7 }}>Sites Executed</div>
                <div style={{ fontWeight:800, fontSize:26 }}>{counts.sites.toLocaleString()}</div>
              </div>
              <div className="card" style={{ borderRadius:12, padding:14, textAlign:'center' }}>
                <div style={{ fontSize:12, opacity:0.7 }}>CO₂ Saved</div>
                <div style={{ fontWeight:800, fontSize:26 }}>{counts.co2.toLocaleString()} kg</div>
              </div>
              <div className="card" style={{ borderRadius:12, padding:14, textAlign:'center' }}>
                <div style={{ fontSize:12, opacity:0.7 }}>Units Generated</div>
                <div style={{ fontWeight:800, fontSize:26 }}>{counts.units.toLocaleString()}</div>
              </div>
            </div>
            <div style={{ textAlign:'center', marginTop:10, fontSize:14, opacity:0.95 }}>
              {equivalences[eqIndex]}
            </div>
          </div>
        </section>
      </div>

      <div className="mission-values full-bleed">
        <section style={{ padding: '56px 0 64px', background: '#fff', position: 'relative', overflow: 'hidden' }}>
          <style>{`
            @keyframes fadeUp { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: translateY(0);} }
            .mv-card:hover{ transform: translateY(-4px); box-shadow: 0 16px 34px rgba(0,0,0,0.10); }
            .bg-grid{position:absolute;inset:-20px;pointer-events:none;background:
              radial-gradient(ellipse at 20% 0%, rgba(14,165,233,.06), rgba(14,165,233,0) 60%),
              radial-gradient(ellipse at 100% 90%, rgba(34,197,94,.06), rgba(34,197,94,0) 60%),
              repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0 1px, transparent 1px 24px),
              repeating-linear-gradient(0deg, rgba(0,0,0,0.02) 0 1px, transparent 1px 24px);
            }
            .dna-card{border-radius:18px; background:#fff; position:relative; overflow:hidden; cursor:pointer;}
            .dna-card:before{content:''; position:absolute; inset:0; padding:1px; border-radius:18px;
              background: conic-gradient(from 180deg, #0ea5e9, #22c55e, #0ea5e9);
              -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
              -webkit-mask-composite: xor; mask-composite: exclude;
            }
            .dna-card .card-content{transition: all 0.3s ease;}
            .dna-card .card-description{max-height:0; opacity:0; visibility:hidden; transition:all 0.4s ease; overflow:hidden;}
            .dna-card.active .card-description{max-height:200px; opacity:1; visibility:visible; margin-top:12px;}
            .dna-card.active{transform:translateY(-8px); box-shadow:0 20px 40px rgba(0,0,0,0.15);}
            .dna-card .icon-wrap{transition:transform 0.3s ease;}
            .dna-card.active .icon-wrap{transform:scale(1.15);}
            .dna-card:not(.active):hover{transform:translateY(-4px); box-shadow:0 12px 24px rgba(0,0,0,0.1);}
            /* Special styling for Client Focus */
            .dna-card.client-card{background:linear-gradient(180deg,#f0fbf8,#ffffff); border:1px solid rgba(10,107,62,0.06);} 
            .dna-card.client-card:before{background: conic-gradient(from 180deg, rgba(14,165,233,0.12), rgba(34,197,94,0.12));}
            .dna-card.client-card .icon-wrap{width:48px; height:48px; border-radius:12px; background:linear-gradient(135deg,#ecfdf5,#dcfce7); box-shadow:0 6px 18px rgba(16,185,129,0.06)}
            .recommend-badge{display:inline-block;padding:6px 10px;border-radius:999px;background:linear-gradient(90deg,#10b981,#06b6d4);color:#fff;font-weight:700;font-size:12px;margin-left:8px}
            .client-cta{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:12px;background:linear-gradient(90deg,#06b6d4,#10b981);color:#fff;border:none;font-weight:700;margin-top:12px;cursor:pointer}
            .client-cta:active{transform:translateY(1px)}
            /* Values list: centered, responsive pill badges */
            .values-scroll{display:flex; justify-content:center;}
            .values-wrap{display:flex; gap:12px; padding:12px; justify-content:center; align-items:center; flex-wrap:wrap; max-width:960px; margin:0 auto;}
            .value-pill{scroll-snap-align:start; white-space:nowrap; padding:10px 16px; border-radius:999px; border:1px solid #e6eef5; background:linear-gradient(180deg,#ffffff,#f8fafc); font-size:14px; font-weight:600; box-shadow:0 6px 14px rgba(2,6,23,0.04); transition:transform .18s ease, box-shadow .18s ease; cursor:default}
            .value-pill:hover{transform:translateY(-6px); box-shadow:0 18px 36px rgba(2,6,23,0.08)}
            .value-pill[role="button"]{cursor:pointer}
            .value-pill.active{background:linear-gradient(90deg,#ecfeff,#f0fdf4); border:1px solid rgba(34,197,94,0.12); transform:translateY(-4px); box-shadow:0 18px 36px rgba(2,6,23,0.08)}

            /* DNA explorer styles */
            .dna-explorer{display:flex;gap:18px;align-items:flex-start}
            .dna-list{flex:0 0 280px}
            .dna-list-item{border:none;text-align:left}
            .dna-list-item.active{outline:3px solid rgba(16,185,129,0.08)}
            .dna-detail{flex:1}
            .dna-detail-card.client-card{background:linear-gradient(180deg,#f0fbf8,#ffffff); border:1px solid rgba(10,107,62,0.06)}
            @media (max-width:880px){ .dna-explorer{flex-direction:column} .dna-list{flex:unset} }
            @media (max-width:520px){ .values-wrap{gap:8px; padding:10px} .value-pill{font-size:13px; padding:8px 12px} }
          `}</style>
          <div className="bg-grid" />
          <div style={{ ...containerStyle, position:'relative' }}>
            <h2 data-reveal style={{ margin: 0, textAlign: 'center', fontSize: 'clamp(26px, 4.6vw, 44px)' }}>Mission</h2>
            <div style={{ display:'flex', justifyContent:'center', marginTop: 10, marginBottom: 16 }}>
              <div style={{ width: 120, height: 3, borderRadius: 999, background: 'linear-gradient(90deg,#0ea5e9,#22c55e)' }} />
            </div>
            <p data-reveal style={{ margin: '0 auto', textAlign: 'center', maxWidth: 880, color: 'var(--solar-muted)', fontSize: 'clamp(14px, 2.2vw, 18px)' }}>
              Our mission is to help India adopt clean, reliable and affordable solar energy—by designing
              high‑performance systems, delivering seamless execution, and ensuring measurable savings
              for homes, industries and institutions.
            </p>
            <h3 data-reveal style={{ marginTop: 36, textAlign: 'center', fontSize: 'clamp(22px, 3.8vw, 32px)' }}>Our Solar DNA</h3>

            <div data-reveal className="values-scroll" style={{ marginTop: 10, overflowX:'auto', WebkitOverflowScrolling:'touch' }}>
              <div className="values-wrap" style={{ scrollSnapType:'x mandatory' }}>
                {['Client First','Design Excellence','Data‑Driven','Safety First','On‑Time Delivery','Value for Money'].map((t,i)=> (
                  <span
                    key={t}
                    role="button"
                    tabIndex={0}
                    data-pill-title={t}
                    className={`value-pill ${activeCard === t ? 'active' : ''}`}
                    onClick={() => setActiveCard(t)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveCard(t); } }}
                    aria-pressed={activeCard === t}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Two-column explorer: left list, right detail */}
            <div className="dna-explorer" data-reveal style={{ marginTop: 12 }}>
              <div className="dna-list" style={{ padding: 8 }}>
                {dnaItems.map((v, idx) => (
                  <button
                    key={v.t}
                    onClick={() => setActiveCard(v.t)}
                    className={`dna-list-item ${activeCard === v.t ? 'active' : ''}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '12px 14px',
                      width: '100%',
                      textAlign: 'left',
                      borderRadius: 12,
                      border: '1px solid #e6eef5',
                      background: activeCard === v.t ? 'linear-gradient(90deg,#f0fffb,#f3fff7)' : '#fff',
                      cursor: 'pointer',
                      marginBottom: 10,
                      fontWeight: 700,
                    }}
                    aria-pressed={activeCard === v.t}
                  >
                    <div style={{ width:40, height:40, borderRadius:10, display:'grid', placeItems:'center', background: activeCard===v.t ? 'linear-gradient(135deg,#ecfdf5,#dcfce7)' : 'linear-gradient(135deg,#f7fafc,#ffffff)' }}>
                      {v.icon === 'hand' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 13V7a2 2 0 1 1 4 0v6"/><path d="M12 13V5a2 2 0 1 1 4 0v8"/><path d="M16 13V9a2 2 0 1 1 4 0v2"/><path d="M6 12v-1a2 2 0 1 1 4 0v2"/><path d="M5 15c0 4 3 6 7 6s7-2 7-6"/></svg>}
                      {v.icon === 'rocket' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13s3-1 5-3 3-5 3-5 2 1 4 3 3 5 3 5-3 1-5 3-3 5-3 5-2-1-4-3-3-5-3-5Z"/><path d="M9 15l-2 2"/><path d="M15 9l2-2"/></svg>}
                      {v.icon === 'leaf' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 3a8 8 0 0 0 10 10C21 17 17 21 12 21 7 21 3 17 3 12 3 7 7 3 11 3Z"/><path d="M12 3v18"/></svg>}
                      {v.icon === 'compass' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16 8 12 14 8 16 10 12 16 8"/></svg>}
                    </div>
                    <div style={{ marginLeft: 6 }}>{v.t}</div>
                  </button>
                ))}
              </div>
              <div className="dna-detail" style={{ padding: 12 }}>
                {dnaItems.filter(d => d.t === activeCard).map((v) => (
                  <div key={v.t} className={`dna-detail-card ${v.t==='Client Focus' ? 'client-card' : ''}`} style={{ padding:20, borderRadius:16, background:'#fff', border:'1px solid #e6eef5', boxShadow:'0 14px 34px rgba(0,0,0,0.06)' }}>
                    <div style={{ display:'flex', alignItems:'flex-start', gap:14 }}>
                      <div className="icon-wrap" style={{ width:56, height:56, borderRadius:14, background:'linear-gradient(135deg,#0ea5e91a,#22c55e1a)', display:'grid', placeItems:'center' }}>
                        {v.icon === 'hand' && <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 13V7a2 2 0 1 1 4 0v6"/><path d="M12 13V5a2 2 0 1 1 4 0v8"/><path d="M16 13V9a2 2 0 1 1 4 0v2"/><path d="M6 12v-1a2 2 0 1 1 4 0v2"/><path d="M5 15c0 4 3 6 7 6s7-2 7-6"/></svg>}
                        {v.icon === 'rocket' && <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13s3-1 5-3 3-5 3-5 2 1 4 3 3 5 3 5-3 1-5 3-3 5-3 5-2-1-4-3-3-5-3-5Z"/><path d="M9 15l-2 2"/><path d="M15 9l2-2"/></svg>}
                        {v.icon === 'leaf' && <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 3a8 8 0 0 0 10 10C21 17 17 21 12 21 7 21 3 17 3 12 3 7 7 3 11 3Z"/><path d="M12 3v18"/></svg>}
                        {v.icon === 'compass' && <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16 8 12 14 8 16 10 12 16 8"/></svg>}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                          <h3 style={{ margin: 0 }}>{v.t}</h3>
                          {v.t === 'Client Focus' && <span className="recommend-badge">Recommended</span>}
                        </div>
                        {v.points && (
                          <ul className="dna-points" style={{ marginTop: 10, color: 'var(--solar-muted)', lineHeight: 1.6, paddingLeft: 16 }}>
                            {v.points.map((pt, i) => (
                              <li key={i} style={{ marginBottom: 8 }}>{pt}</li>
                            ))}
                          </ul>
                        )}
                        {v.t === 'Client Focus' && (
                          <button className="client-cta" onClick={(e)=>{ e.stopPropagation(); window.location.href='/contact'; }} aria-label="Contact us">Talk to an Expert →</button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="wave-divider full-bleed" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:60 }}>
          <defs>
            <linearGradient id="wgrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0ea5e9"/>
              <stop offset="100%" stopColor="#22c55e"/>
            </linearGradient>
          </defs>
          <path d="M0,24 C180,60 360,0 540,24 C720,48 900,12 1080,24 C1260,36 1440,12 1440,12 L1440,60 L0,60 Z" fill="url(#wgrad)" fillOpacity="0.12"/>
        </svg>
      </div>

      <div className="trusted-inline full-bleed" style={{ width:'100vw', marginLeft:'calc(50% - 50vw)', marginRight:'calc(50% - 50vw)', backgroundImage: `linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.65)), url(${Solar2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundAttachment: 'scroll', overflow: 'hidden', minHeight: 340 }}>
        <section style={{
          padding: '64px 0 56px'
        }}>
          <div style={{ ...containerStyle }}>
            <h2 style={{ textAlign: 'center', margin: 0, fontSize: 'clamp(24px, 4.2vw, 38px)', fontWeight: 800 }}>Trusted by leading brands</h2>
            <p style={{ textAlign: 'center', margin: '8px 0 18px', opacity: 0.8, fontSize: 'clamp(13px, 2vw, 16px)' }}>Across energy, infra and retail — partners we deliver for.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 18, alignItems: 'stretch' }}>
              {[
                { name: 'Power Grid', file: 'powergrid.png' },
                { name: 'EcoTech', file: 'ecotech.png' },
                { name: 'LumenWare', file: 'lumenware.png' },
                { name: 'Mahadev Infra', file: 'mahadev.png' },
                { name: 'SunRise Labs', file: 'sunrise.png' },
              ].map((b) => (
                <div key={b.name} style={{
                  height: 92,
                  borderRadius: 12,
                  border: '1px solid rgba(0,0,0,0.06)',
                  background: 'rgba(255,255,255,0.95)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 160ms ease, box-shadow 160ms ease'
                }}
                onMouseEnter={(e)=>{ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 12px 28px rgba(0,0,0,0.10)'; }}
                onMouseLeave={(e)=>{ e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 12px rgba(0,0,0,0.06)'; }}
                >
                  <img
                    src={process.env.PUBLIC_URL + '/logos/' + b.file}
                    alt={`${b.name} logo`}
                    style={{ height: 46, maxWidth: 160, objectFit: 'contain', filter: 'grayscale(0%)', opacity: 0.98 }}
                    onError={(e) => { e.currentTarget.src = process.env.PUBLIC_URL + '/logos/' + b.file.replace('.png','.svg'); }}
                  />
                  
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* What We Do Section */}
      <div className="what-we-do" style={{ 
        background: '#fff', 
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(14, 165, 233, 0.03) 0%, rgba(255, 255, 255, 0) 30%), radial-gradient(circle at 90% 80%, rgba(34, 197, 94, 0.03) 0%, rgba(255, 255, 255, 0) 30%)',
      }}>
        <div style={{ ...containerStyle, position: 'relative', zIndex: 2 }}>
          <h2 style={{ 
            textAlign: 'center', 
            margin: '0 0 16px', 
            fontSize: 'clamp(28px, 4.5vw, 42px)',
            fontWeight: 800,
            color: '#0b1a24',
            position: 'relative',
            display: 'inline-block',
            left: '50%',
            transform: 'translateX(-50%)',
            paddingBottom: '8px'
          }}>
            What We Do
            <span style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #0ea5e9, #22c55e)',
              borderRadius: '2px',
              transition: 'all 0.3s ease'
            }}></span>
          </h2>
          
          <p style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 64px',
            fontSize: 'clamp(15px, 2.1vw, 17px)',
            lineHeight: '1.8',
            color: '#4b5563',
            padding: '0 20px',
            fontWeight: 400
          }}>
            From design and approvals to installation and long‑term operations — practical solar solutions for homes, businesses, and industry.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            padding: '0 16px',
            position: 'relative',
            zIndex: 2
          }}>
            {[
              {
                icon: '🔆',
                title: 'Rooftop Installations',
                desc: 'Residential & commercial rooftop systems with minimal disruption',
                gradient: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)'
              },
              {
                icon: '🏭',
                title: 'Commercial & Industrial',
                desc: 'Captive power, high‑capacity installs and load structuring',
                gradient: 'linear-gradient(135deg, #f0fdf4, #dcfce7)'
              },
              {
                icon: '🛠️',
                title: 'Design & Engineering',
                desc: 'Yield‑first designs, stringing, shading and structural analysis',
                gradient: 'linear-gradient(135deg, #eff6ff, #dbeafe)'
              },
              {
                icon: '📈',
                title: 'O&M & Monitoring',
                desc: '24x7 monitoring, preventive maintenance and fast SLAs',
                gradient: 'linear-gradient(135deg, #fdf2f8, #fce7f3)'
              },
              {
                icon: '📝',
                title: 'Net‑metering & Approvals',
                desc: 'DISCOM coordination, paperwork and commissioning support',
                gradient: 'linear-gradient(135deg, #f0fdfa, #ccfbf1)'
              },
              {
                icon: '💰',
                title: 'Financing & ROI',
                desc: 'CAPEX/OPEX options and payback modelling for clear decisions',
                gradient: 'linear-gradient(135deg, #f5f3ff, #ede9fe)'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="service-card"
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '32px 28px',
                  boxShadow: '0 6px 24px rgba(0,0,0,0.05)',
                  border: '1px solid #f0f0f0',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  zIndex: 1,
                  ':hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                    borderColor: 'rgba(14, 165, 233, 0.2)'
                  },
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: item.gradient.split(')')[0] + ')' ,
                    opacity: 0.8,
                    transition: 'all 0.3s ease',
                    zIndex: -1
                  },
                  ':hover::before': {
                    height: '100%',
                    opacity: 0.1,
                    borderRadius: '16px'
                  }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.2)';
                  const before = e.currentTarget.querySelector('div[style*="gradient"]');
                  if (before) {
                    before.style.transform = 'scale(1.05)';
                  }
                  const titleUnderline = e.currentTarget.querySelector('h3 span');
                  if (titleUnderline) {
                    titleUnderline.style.width = '100%';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.05)';
                  e.currentTarget.style.borderColor = '#f0f0f0';
                  const before = e.currentTarget.querySelector('div[style*="gradient"]');
                  if (before) {
                    before.style.transform = 'scale(1)';
                  }
                  const titleUnderline = e.currentTarget.querySelector('h3 span');
                  if (titleUnderline) {
                    titleUnderline.style.width = '0%';
                  }
                }}
              >
                <div 
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '16px',
                    background: item.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    marginBottom: '24px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 1,
                    '::before': {
                      content: '""',
                      position: 'absolute',
                      inset: '0',
                      borderRadius: '16px',
                      padding: '2px',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2))',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      pointerEvents: 'none'
                    }
                  }}
                >
                  <div style={{
                    animation: 'float 3s ease-in-out infinite',
                    animationDelay: `${index * 0.1}s`,
                    transition: 'all 0.3s ease'
                  }}>
                    {item.icon}
                  </div>
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  margin: '0 0 16px',
                  color: '#0f172a',
                  position: 'relative',
                  display: 'inline-block',
                  paddingBottom: '6px'
                }}>
                  {item.title}
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    background: 'linear-gradient(90deg, #0ea5e9, #22c55e)',
                    transition: 'width 0.3s ease',
                    borderRadius: '2px'
                  }}></span>
                </h3>
                <p style={{
                  margin: 0,
                  color: '#4b5563',
                  lineHeight: '1.7',
                  fontSize: '15px',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, rgba(255,255,255,0) 70%)',
          top: '-200px',
          right: '-100px',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, rgba(255,255,255,0) 70%)',
          bottom: '-150px',
          left: '-100px',
          zIndex: 1
        }}></div>
      </div>

      {/* Why Choose Us - Modern Design */}
      <div className="why-choose-modern" style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.03) 0%, rgba(34, 197, 94, 0.03) 100%)',
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)'
        }}></div>
        
        <div style={{ ...containerStyle, position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '60px',
            textAlign: 'center'
          }}>
            <span style={{
              display: 'inline-block',
              background: 'linear-gradient(90deg, #0ea5e9, #22c55e)',
              color: 'white',
              padding: '8px 20px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '16px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              boxShadow: '0 4px 15px rgba(14, 165, 233, 0.2)'
            }}>
              Why Choose Us
            </span>
            <h2 style={{ 
              margin: '12px 0 20px', 
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 800,
              color: '#0b1a24',
              lineHeight: '1.2',
              maxWidth: '800px'
            }}>
              Leading the Solar Revolution with <span style={{ background: 'linear-gradient(90deg, #0ea5e9, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Innovation</span>
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #0ea5e9, #22c55e)',
              margin: '16px 0',
              borderRadius: '2px'
            }}></div>
            <p style={{
              maxWidth: '700px',
              margin: '16px auto 0',
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#4b5563',
              padding: '0 20px'
            }}>
              We combine cutting-edge technology with sustainable solutions to power your future
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            position: 'relative',
            zIndex: 2
          }}>
            {/* Feature 1 */}
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '40px 30px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
              border: '1px solid rgba(14, 165, 233, 0.1)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              zIndex: 1,
              '::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #0ea5e9, #22c55e)',
                transition: 'all 0.3s ease'
              },
              ':hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.08)'
              }
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, #e0f2fe, #bae6fd)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                marginBottom: '25px',
                color: '#0369a1',
                boxShadow: '0 8px 20px rgba(14, 165, 233, 0.15)'
              }}>
                🏆
              </div>
              <h3 style={{
                fontSize: '22px',
                fontWeight: 700,
                margin: '0 0 15px',
                color: '#0f172a',
                position: 'relative',
                paddingBottom: '12px',
                '::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '40px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #0ea5e9, #22c55e)',
                  borderRadius: '2px'
                }
              }}>
                Proven Expertise
              </h3>
              <p style={{
                margin: '0 0 20px',
                color: '#4b5563',
                lineHeight: '1.7',
                fontSize: '15px'
              }}>
                With over 10 years in the solar industry, we've successfully completed 200+ projects with a total installed capacity of 5+ MWp.
              </p>
              
            </div>

            {/* Feature 2 - Highlighted */}
            <div style={{
              background: 'linear-gradient(135deg, #0f172a, #1e293b)',
              borderRadius: '16px',
              padding: '40px 30px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              zIndex: 2,
              transform: 'scale(1.02)',
              '::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #22c55e, #84cc16)',
                transition: 'all 0.3s ease'
              },
              ':hover': {
                transform: 'scale(1.05) translateY(-5px)'
              }
            }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                fontSize: '12px',
                fontWeight: 600,
                padding: '4px 12px',
                borderRadius: '50px',
                backdropFilter: 'blur(5px)'
              }}>
                Most Popular
              </div>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                marginBottom: '25px',
                color: 'white',
                boxShadow: '0 8px 20px rgba(34, 197, 94, 0.3)'
              }}>
                ⚡
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 700,
                margin: '0 0 15px',
                color: 'white',
                position: 'relative',
                paddingBottom: '12px',
                '::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '40px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #22c55e, #84cc16)',
                  borderRadius: '2px'
                }
              }}>
                End-to-End Solutions
              </h3>
              <p style={{
                margin: '0 0 20px',
                color: 'rgba(255,255,255,0.8)',
                lineHeight: '1.7',
                fontSize: '15px'
              }}>
                From consultation to installation and maintenance, we handle everything with a single point of contact for your convenience.
              </p>
              
            </div>

            {/* Feature 3 */}
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '40px 30px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
              border: '1px solid rgba(34, 197, 94, 0.1)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              zIndex: 1,
              '::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #22c55e, #84cc16)',
                transition: 'all 0.3s ease'
              },
              ':hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.08)'
              }
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                marginBottom: '25px',
                color: '#15803d',
                boxShadow: '0 8px 20px rgba(34, 197, 94, 0.15)'
              }}>
                🛡️
              </div>
              <h3 style={{
                fontSize: '22px',
                fontWeight: 700,
                margin: '0 0 15px',
                color: '#0f172a',
                position: 'relative',
                paddingBottom: '12px',
                '::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '40px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #22c55e, #84cc16)',
                  borderRadius: '2px'
                }
              }}>
                Peace of Mind
              </h3>
              <p style={{
                margin: '0 0 20px',
                color: '#4b5563',
                lineHeight: '1.7',
                fontSize: '15px'
              }}>
                Enjoy 24/7 monitoring, maintenance services, and comprehensive warranties on all our installations.
              </p>
              
            </div>
          </div>

          {/* Stats Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '80px',
            position: 'relative',
            zIndex: 2
          }}>
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '5+', label: 'MWp Installed' },
              { number: '200+', label: 'Projects Completed' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '30px 20px',
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
                border: '1px solid rgba(0,0,0,0.03)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 800,
                  background: 'linear-gradient(90deg, #0ea5e9, #22c55e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '8px',
                  lineHeight: 1.2
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '16px',
                  color: '#4b5563',
                  fontWeight: 500
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, rgba(255,255,255,0) 70%)',
          top: '-100px',
          left: '-100px',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.05) 0%, rgba(255,255,255,0) 70%)',
          bottom: '-150px',
          right: '-150px',
          zIndex: 1
        }}></div>
      </div>

      {false && (<>
      <div className="trusted-band full-bleed" style={{ paddingLeft: 0, paddingRight: 0 }}>
      <section className="full-screen" style={{
        marginTop: 1,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.35)), url(${Solar2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '64px 0 48px',
        position: 'relative',
        overflow: 'hidden',
        
      }}>
        <style>{`
          @keyframes sunSlide { 0% { transform: translateX(-40vw); } 100% { transform: translateX(40vw);} }
          @keyframes sunPulse { 0%,100% { box-shadow: 0 0 0px rgba(255,200,0,0.6);} 50% { box-shadow: 0 0 16px rgba(255,200,0,0.9);} }
        `}</style>
        <div style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
          <svg width="100%" height="120" viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position:'absolute', top: 6, left:0, opacity:0.6 }}>
            <defs>
              <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffd36b"/>
                <stop offset="100%" stopColor="#f59e0b"/>
              </linearGradient>
            </defs>
            <path d="M0,12 Q50,0 100,12" fill="none" stroke="url(#arcGrad)" strokeWidth="0.6" />
          </svg>
          <div style={{ position:'absolute', top: 8, left: '50%', width: 10, height: 10, borderRadius:'50%', background:'#ffd36b', animation: 'sunSlide 16s linear infinite alternate, sunPulse 3s ease-in-out infinite' }} />
        </div>
        <div style={{
          position: 'absolute',
          top: -60,
          right: -40,
          width: 220,
          height: 220,
          borderRadius: '50%',
          background: 'radial-gradient(closest-side, rgba(18,70,166,0.08), rgba(18,70,166,0))'
        }} />
        <div style={{
          position: 'absolute',
          bottom: -80,
          left: -40,
          width: 260,
          height: 260,
          borderRadius: '50%',
          background: 'radial-gradient(closest-side, rgba(10,107,62,0.08), rgba(10,107,62,0))'
        }} />
        {/* background uses solar2.jpg with a soft white overlay for readability */}
        <div style={{ width: '100%', padding: 0 }}>
          <h2 style={{ textAlign: 'center', margin: 0, fontSize: 'clamp(26px, 4.6vw, 44px)', fontWeight: 800 }}>Trusted by leading brands</h2>
          <p style={{ textAlign: 'center', margin: '8px 0 22px', opacity: 0.85, fontSize: 'clamp(13px, 2vw, 16px)' }}>Across energy, infra and retail — partners we deliver for.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 14, alignItems: 'stretch' }}>
            {[
              { name: 'Power Grid', file: 'powergrid.png' },
              { name: 'EcoTech', file: 'ecotech.png' },
              { name: 'LumenWare', file: 'lumenware.png' },
              { name: 'Mahadev Infra', file: 'mahadev.png' },
              { name: 'SunRise Labs', file: 'sunrise.png' },
            ].map((b) => (
              <div key={b.name} style={{
                height: 68,
                borderRadius: 12,
                border: '1px solid rgba(0,0,0,0.06)',
                background: 'rgba(255,255,255,0.92)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 160ms ease, box-shadow 160ms ease'
              }}
              onMouseEnter={(e)=>{ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 12px 28px rgba(0,0,0,0.10)'; }}
              onMouseLeave={(e)=>{ e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 6px 18px rgba(0,0,0,0.08)'; }}
              >
                <img
                  src={process.env.PUBLIC_URL + '/logos/' + b.file}
                  alt={`${b.name} logo`}
                  style={{ height: 28, maxWidth: 120, objectFit: 'contain', filter: 'grayscale(0%)', opacity: 0.95 }}
                  onError={(e) => { e.currentTarget.src = process.env.PUBLIC_URL + '/logos/' + b.file.replace('.png','.svg'); }}
                />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 10, fontSize: 14, opacity: 0.95 }}>
            {equivalences[eqIndex]}
          </div>
        </div>
      </section>
      </div>

      {/* Animated Counters Section */}
      <div className="counters-band" style={{ 
        padding: '60px 0',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        position: 'relative',
        overflow: 'hidden',
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: `url(${Solar2}) center/cover no-repeat`,
          opacity: 0.08,
          zIndex: 0
        }
      }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-10%',
          width: '60%',
          paddingBottom: '60%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, rgba(255,255,255,0) 70%)',
          animation: 'pulse 15s infinite alternate'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-40%',
          right: '-10%',
          width: '50%',
          paddingBottom: '50%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0) 70%)',
          animation: 'pulse 18s infinite alternate-reverse'
        }}></div>
        
        <div style={{ 
          position: 'relative',
          zIndex: 1,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            {[
              { 
                icon: '⚡',
                value: counts.mwp,
                suffix: 'MWp',
                label: 'Installed',
                color: '#0ea5e9'
              },
              { 
                icon: '🏭',
                value: counts.sites,
                suffix: '+',
                label: 'Sites Executed',
                color: '#22c55e'
              },
              { 
                icon: '🌱',
                value: counts.co2,
                suffix: 'kg',
                label: 'CO₂ Saved',
                color: '#10b981'
              },
              { 
                icon: '🔋',
                value: counts.units,
                suffix: '',
                label: 'Units Generated',
                color: '#f59e0b'
              }
            ].map((stat, index) => (
              <div 
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '30px 20px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${stat.color} 0%, ${stat.color}99 100%)`,
                    transition: 'all 0.3s ease'
                  },
                  ':hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    '::before': {
                      height: '6px',
                      background: `linear-gradient(90deg, ${stat.color} 0%, ${stat.color}cc 100%)`
                    }
                  }
                }}
              >
                <div style={{
                  fontSize: '36px',
                  marginBottom: '12px',
                  opacity: 0.9,
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  transform: 'scale(1)',
                  '::selection': 'none'
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: 'clamp(24px, 3.5vw, 36px)',
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 1.2,
                  marginBottom: '4px',
                  background: 'linear-gradient(90deg, #fff, #e2e8f0)', 
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                  {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                  <span style={{ fontSize: '60%', opacity: 0.8 }}> {stat.suffix}</span>
                </div>
                <div style={{
                  fontSize: '16px',
                  color: '#94a3b8',
                  fontWeight: 500,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  marginTop: '4px'
                }}>
                  {stat.label}
                </div>
                
                {/* Animated border effect */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  border: '2px solid transparent',
                  borderRadius: '16px',
                  background: 'linear-gradient(90deg, rgba(14,165,233,0.3), rgba(34,197,94,0.3)) border-box',
                  WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', 
                  WebkitMaskComposite: 'destination-out',
                  maskComposite: 'exclude',
                  pointerEvents: 'none',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Add animation keyframes */}
        <style>
          {`
            @keyframes pulse {
              0% { transform: scale(1); opacity: 0.7; }
              50% { transform: scale(1.1); opacity: 0.9; }
              100% { transform: scale(1); opacity: 0.7; }
            }
            
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0px); }
            }
            
            .counters-band div[style*="grid"] > div:hover {
              animation: float 3s ease-in-out infinite;
            }
            
            .counters-band div[style*="grid"] > div:hover::after {
              content: '';
              position: absolute;
              bottom: -10px;
              left: 50%;
              transform: translateX(-50%);
              width: 50%;
              height: 4px;
              background: linear-gradient(90deg, #0ea5e9, #22c55e);
              border-radius: 2px;
              filter: blur(4px);
              opacity: 0.7;
            }
          `}
        </style>
      </div>

      <div className="cards-band">
        <section style={{ width: '100dvw', marginLeft: 'calc(50% - 50dvw)', marginRight: 'calc(50% - 50dvw)', padding: 0 }}>
        <div style={{ width: '100%', padding: 0 }}>
        <div className="two-col" style={{ marginTop: 44, columnGap: 28, rowGap: 28 }}>
          <div className="card" style={{ position:'relative', border: '1px solid #ececec', borderRadius: 16, padding: 20, background:'#fff', boxShadow:'0 6px 20px rgba(0,0,0,0.06)', transition:'transform 200ms ease, box-shadow 200ms ease' }}
               onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 28px rgba(0,0,0,0.08)';}}
               onMouseLeave={(e)=>{e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 6px 20px rgba(0,0,0,0.06)';}}>
            <div style={{ position:'absolute', top:0, left:0, right:0, height:4, borderTopLeftRadius:16, borderTopRightRadius:16, background:'linear-gradient(90deg,#0ea5e9,#22c55e)' }} />
          <h2 style={{ marginTop: 0 }}>Estimate Your Savings</h2>
          <div style={{ display: 'grid', gap: 10 }}>
            <input value={bill} onChange={(e) => setBill(e.target.value)} inputMode="numeric" placeholder="Monthly electricity bill (₹)" style={{ padding: 10, borderRadius: 8, border: '1px solid #ddd' }} />
            <select value={tariff} onChange={(e) => setTariff(e.target.value)} style={{ padding: 10, borderRadius: 8, border: '1px solid #ddd' }}>
              <option value="8">Tariff ~ ₹8/unit</option>
              <option value="9">Tariff ~ ₹9/unit</option>
              <option value="10">Tariff ~ ₹10/unit</option>
            </select>
            <button onClick={runCalc} style={{ padding: '12px 16px', borderRadius: 999, background: '#0b1a24', color: '#fff', border: 'none' }}>Calculate</button>
          </div>
          {calc && (
            <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 10 }}>
              <div className="rounded-card" style={{ padding: 12, background: '#f7f9fb' }}>
                <div style={{ fontSize: 13, opacity: 0.8 }}>Suggested System</div>
                <div style={{ fontWeight: 700 }}>{calc.kw} kW</div>
              </div>
              <div className="rounded-card" style={{ padding: 12, background: '#f7f9fb' }}>
                <div style={{ fontSize: 13, opacity: 0.8 }}>Annual Savings</div>
                <div style={{ fontWeight: 700 }}>₹{calc.annualSavings.toLocaleString()}</div>
              </div>
              <div className="rounded-card" style={{ padding: 12, background: '#f7f9fb' }}>
                <div style={{ fontSize: 13, opacity: 0.8 }}>Payback</div>
                <div style={{ fontWeight: 700 }}>{calc.payback} yrs</div>
              </div>
            </div>
          )}
          </div>
          <div className="card" style={{ position:'relative', overflow: 'hidden', border: '1px solid #ececec', borderRadius: 16, padding: 20, background:'#fff', boxShadow:'0 6px 20px rgba(0,0,0,0.06)', transition:'transform 200ms ease, box-shadow 200ms ease' }}
               onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 28px rgba(0,0,0,0.08)';}}
               onMouseLeave={(e)=>{e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 6px 20px rgba(0,0,0,0.06)';}}>
            <div style={{ position:'absolute', top:0, left:0, right:0, height:4, borderTopLeftRadius:16, borderTopRightRadius:16, background:'linear-gradient(90deg,#a78bfa,#60a5fa)' }} />
          <h2 style={{ marginTop: 0 }}>What Customers Say</h2>
          <div style={{ position: 'relative', minHeight: 110 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{
                position: i === slide ? 'relative' : 'absolute',
                inset: 0,
                opacity: i === slide ? 1 : 0,
                transition: 'opacity 400ms ease',
              }}>
                <p style={{ margin: '0 0 6px', fontSize: 16, opacity: 0.95 }}>
                  “{t.q}”
                </p>
                <div style={{ fontSize: 13, opacity: 0.8 }}>{t.n} • {t.c}</div>
              </div>
            ))}
          </div>
          </div>
        </div>
        </div>
        </section>
      </div>

      {/* About + image row preview */}
      <section style={{ width: '100dvw', marginLeft: 'calc(50% - 50dvw)', marginRight: 'calc(50% - 50dvw)', padding: 0 }}>
      <div className="two-col" style={{ marginTop: 52 }}>
        <div className="rounded-card img-placeholder ph-about">About Image</div>
        <div className="card">
          <h2 style={{ marginTop: 0 }}>About Our Solar Mission</h2>
          <p style={{ margin: 0, color: 'var(--solar-muted)' }}>
            We provide top‑quality solar solutions for homes and businesses. Our mission is to make
            renewable energy accessible and affordable to everyone.
          </p>
        </div>
      </div>
      </section>

      {/* Services preview */}
      <section style={{ width: '100dvw', marginLeft: 'calc(50% - 50dvw)', marginRight: 'calc(50% - 50dvw)', padding: 0, marginTop: 0 }}>
      <div style={{ marginTop: 52 }}>
        <h2 style={{ textAlign: 'center', marginBottom: 14 }}>Our Solar Solutions</h2>
        <div className="grid-auto">
          <div className="card" style={{ position:'relative', border:'1px solid #ececec', borderRadius:16, padding:18, background:'#fff', boxShadow:'0 4px 16px rgba(0,0,0,0.05)', transition:'transform 180ms ease, box-shadow 180ms ease' }}
               onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 22px rgba(0,0,0,0.08)';}}
               onMouseLeave={(e)=>{e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 16px rgba(0,0,0,0.05)';}}>
            <div style={{ position:'absolute', top:0, left:0, right:0, height:3, borderTopLeftRadius:16, borderTopRightRadius:16, background:'linear-gradient(90deg,#22c55e,#a3e635)' }} />
            <h3 style={{ margin: '0 0 8px' }}>Solar Panel Installation</h3>
            <p style={{ margin: 0, opacity: 0.9 }}>Professional setup for homes & industries.</p>
          </div>
          <div className="card" style={{ position:'relative', border:'1px solid #ececec', borderRadius:16, padding:18, background:'#fff', boxShadow:'0 4px 16px rgba(0,0,0,0.05)', transition:'transform 180ms ease, box-shadow 180ms ease' }}
               onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 22px rgba(0,0,0,0.08)';}}
               onMouseLeave={(e)=>{e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 16px rgba(0,0,0,0.05)';}}>
            <div style={{ position:'absolute', top:0, left:0, right:0, height:3, borderTopLeftRadius:16, borderTopRightRadius:16, background:'linear-gradient(90deg,#3b82f6,#22d3ee)' }} />
            <h3 style={{ margin: '0 0 8px' }}>Maintenance & Monitoring</h3>
            <p style={{ margin: 0, opacity: 0.9 }}>Keep your solar system performing efficiently.</p>
          </div>
          <div className="card" style={{ position:'relative', border:'1px solid #ececec', borderRadius:16, padding:18, background:'#fff', boxShadow:'0 4px 16px rgba(0,0,0,0.05)', transition:'transform 180ms ease, box-shadow 180ms ease' }}
               onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 22px rgba(0,0,0,0.08)';}}
               onMouseLeave={(e)=>{e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 16px rgba(0,0,0,0.05)';}}>
            <div style={{ position:'absolute', top:0, left:0, right:0, height:3, borderTopLeftRadius:16, borderTopRightRadius:16, background:'linear-gradient(90deg,#f97316,#f59e0b)' }} />
            <h3 style={{ margin: '0 0 8px' }}>Consultation</h3>
            <p style={{ margin: 0, opacity: 0.9 }}>Get expert advice for your energy needs.</p>
          </div>
        </div>
      </div>
      </section>

      {/* Projects preview */}
      <div style={{ marginTop: 56 }}>
        <h2 style={{ textAlign: 'center', marginBottom: 14 }}>Our Recent Projects</h2>
        <div className="grid-auto">
          <div className="rounded-card img-placeholder ph-project">Project Image</div>
          <div className="rounded-card img-placeholder ph-project">Project Image</div>
          <div className="rounded-card img-placeholder ph-project">Project Image</div>
        </div>
      </div>
      </>)}
      
      {/* New Essential Sections */}
      
      {/* 1. Solar Panel Types Section */}
      <section style={{
        padding: '40px 0',
        background: '#f8fafc',
        marginTop: '10px'
      }}>
        <div style={containerStyle}>
          <div style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 60px'
          }}>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '8px'
            }}>
              Types of Solar Panels We Offer
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#4b5563',
              lineHeight: '1.7',
              margin: 0
            }}>
              Choose from our range of high-efficiency solar panels designed for various applications and budgets
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '50px'
          }}>
            {[
              {
                type: 'Monocrystalline',
                efficiency: '18-22%',
                lifespan: '25+ years',
                features: ['High efficiency', 'Space-efficient', 'Durable'],
                bestFor: 'Residential & Commercial',
                icon: '☀️'
              },
              {
                type: 'Polycrystalline',
                efficiency: '15-17%',
                lifespan: '20-25 years',
                features: ['Cost-effective', 'Good efficiency', 'Eco-friendly'],
                bestFor: 'Residential',
                icon: '🔷'
              },
              {
                type: 'Thin-Film',
                efficiency: '10-13%',
                lifespan: '15-20 years',
                features: ['Lightweight', 'Flexible', 'Low-light performance'],
                bestFor: 'Commercial & Industrial',
                icon: '📱'
              }
            ].map((panel, index) => (
              <div key={index} style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
                ':hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.1)'
                }
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #e0f2fe, #bae6fd)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  marginBottom: '20px'
                }}>
                  {panel.icon}
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  margin: '0 0 15px',
                  color: '#0f172a'
                }}>
                  {panel.type} Panels
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <span style={{
                    fontSize: '14px',
                    color: '#64748b',
                    marginRight: '10px'
                  }}>Efficiency:</span>
                  <span style={{
                    fontWeight: 600,
                    color: '#0ea5e9'
                  }}>{panel.efficiency}</span>
                </div>
                <div style={{
                  marginBottom: '20px',
                  paddingBottom: '20px',
                  borderBottom: '1px dashed #e2e8f0'
                }}>
                  <h4 style={{
                    fontSize: '16px',
                    color: '#64748b',
                    margin: '0 0 10px'
                  }}>Best For:</h4>
                  <div style={{
                    background: '#f1f5f9',
                    padding: '8px 15px',
                    borderRadius: '50px',
                    display: 'inline-block',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#0f172a'
                  }}>
                    {panel.bestFor}
                  </div>
                </div>
                <div>
                  <h4 style={{
                    fontSize: '16px',
                    color: '#64748b',
                    margin: '0 0 10px'
                  }}>Key Features:</h4>
                  <ul style={{
                    margin: 0,
                    paddingLeft: '20px'
                  }}>
                    {panel.features.map((feature, i) => (
                      <li key={i} style={{
                        marginBottom: '8px',
                        color: '#475569',
                        lineHeight: '1.6'
                      }}>
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
      
      {/* 4-Panel Feature Section - Full Width */}
      {/* <section style={{
        padding: '80px 0',
        background: '#ffffff',
        width: '100%',
        overflow: 'hidden'
      }}>
        <div style={{
          ...containerStyle,
          maxWidth: '100%',
          padding: '0 20px'
        }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 60px'
          }}>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '16px'
            }}>
              Our Solar Solutions
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#4b5563',
              lineHeight: '1.7',
              margin: 0
            }}>
              Comprehensive solar energy solutions tailored to meet your specific needs and budget
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '25px',
            marginTop: '30px',
            maxWidth: '1400px',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '0 20px',
            '@media (max-width: 1200px)': {
              gridTemplateColumns: 'repeat(2, 1fr)',
              maxWidth: '900px'
            },
            '@media (max-width: 768px)': {
              gridTemplateColumns: '1fr',
              maxWidth: '500px'
            }
          }}>
            {[
              {
                icon: '🏠',
                title: 'Residential Solar',
                description: 'Power your home with clean, renewable energy and reduce your electricity bills by up to 90%.',
                color: '#0ea5e9'
              },
              {
                icon: '🏢',
                title: 'Commercial Solar',
                description: 'Lower operational costs and enhance your business sustainability with our commercial solar solutions.',
                color: '#22c55e'
              },
              {
                icon: '🏭',
                title: 'Industrial Solar',
                description: 'High-capacity solar solutions designed for industrial energy demands and large-scale operations.',
                color: '#f59e0b'
              },
              {
                icon: '🔋',
                title: 'Battery Storage',
                description: 'Store excess solar energy for use during power outages or when the sun isn\'t shining.',
                color: '#8b5cf6'
              }
            ].map((panel, index) => (
              <div key={index} style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '40px 30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
                textAlign: 'center',
                ':hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.1)'
                }
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  background: `${panel.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                  margin: '0 auto 25px',
                  color: panel.color,
                  transition: 'all 0.3s ease'
                }}>
                  {panel.icon}
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  margin: '0 0 15px',
                  color: '#0f172a'
                }}>
                  {panel.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#4b5563',
                  lineHeight: '1.7',
                  margin: 0
                }}>
                  {panel.description}
                </p>
                <button style={{
                  marginTop: '25px',
                  background: 'none',
                  border: 'none',
                  color: panel.color,
                  fontWeight: 600,
                  fontSize: '15px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  margin: '25px auto 0',
                  padding: '8px 0',
                  position: 'relative',
                  '::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '0',
                    height: '2px',
                    background: panel.color,
                    transition: 'width 0.3s ease'
                  },
                  ':hover::after': {
                    width: '100%'
                  }
                }}>
                  Learn more
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* 2. Solar Calculator Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }} id="solar-calculator">
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80) center/cover',
          opacity: 0.15,
          zIndex: 1
        }}></div>
        
        <div style={{
          ...containerStyle,
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: 800,
              margin: '0 0 20px',
              lineHeight: '1.3'
            }}>
              Calculate Your Solar <span style={{
                background: 'linear-gradient(90deg, #22c55e, #84cc16)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Savings</span>
            </h2>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#cbd5e1',
              margin: '0 0 30px'
            }}>
              Find out how much you can save by switching to solar energy. Our calculator provides an estimate based on your location and energy consumption.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
              marginBottom: '30px'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: '#94a3b8',
                  fontSize: '14px',
                  fontWeight: 500
                }}>
                  Monthly Bill (₹)
                </label>
                <input 
                  type="number" 
                  value={bill}
                  onChange={handleBillChange}
                  placeholder="e.g. 5000" 
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    borderRadius: '8px',
                    border: '1px solid #334155',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'white',
                    fontSize: '16px',
                    '::placeholder': {
                      color: '#64748b'
                    },
                    ':focus': {
                      outline: 'none',
                      borderColor: '#22c55e',
                      boxShadow: '0 0 0 2px rgba(34, 197, 94, 0.2)'
                    }
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: '#94a3b8',
                  fontSize: '14px',
                  fontWeight: 500
                }}>
                  Roof Area (sq.ft)
                </label>
                <input 
                  type="number" 
                  value={roofArea}
                  onChange={handleRoofAreaChange}
                  placeholder="e.g. 500" 
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    borderRadius: '8px',
                    border: '1px solid #334155',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'white',
                    fontSize: '16px',
                    '::placeholder': {
                      color: '#64748b'
                    },
                    ':focus': {
                      outline: 'none',
                      borderColor: '#22c55e',
                      boxShadow: '0 0 0 2px rgba(34, 197, 94, 0.2)'
                    }
                  }}
                />
              </div>
            </div>
            <button 
              onClick={calculateSavings}
              disabled={!bill || !roofArea}
              style={{
                background: !bill || !roofArea 
                  ? 'linear-gradient(90deg, #64748b, #475569)' 
                  : 'linear-gradient(90deg, #22c55e, #16a34a)',
                color: 'white',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: !bill || !roofArea ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                opacity: !bill || !roofArea ? 0.7 : 1,
                ':hover': !bill || !roofArea ? {} : {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 20px rgba(34, 197, 94, 0.3)'
                }
              }}
            >
              {!bill || !roofArea ? 'Enter details to calculate' : 'Calculate Savings'}
            </button>
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '30px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              fontSize: '20px',
              margin: '0 0 20px',
              color: 'white',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(34, 197, 94, 0.2)',
                marginRight: '12px',
                flexShrink: 0
              }}>
                💰
              </span>
              Your Estimated Savings
            </h3>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '20px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '15px',
                paddingBottom: '15px',
                borderBottom: '1px dashed rgba(255,255,255,0.1)'
              }}>
                <span style={{
                  color: '#94a3b8',
                  fontSize: '15px'
                }}>System Size</span>
                <span style={{
                  fontWeight: 600,
                  fontSize: '16px',
                  color: 'white'
                }}>{calc ? `${calc.systemSize} kW` : '--'}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '15px',
                paddingBottom: '15px',
                borderBottom: '1px dashed rgba(255,255,255,0.1)'
              }}>
                <span style={{
                  color: '#94a3b8',
                  fontSize: '15px'
                }}>Monthly Savings</span>
                <span style={{
                  fontWeight: 600,
                  fontSize: '16px',
                  color: '#22c55e'
                }}>{calc ? `₹${calc.monthlySavings?.toLocaleString()}` : '--'}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '5px'
              }}>
                <span style={{
                  color: '#94a3b8',
                  fontSize: '15px'
                }}>Annual Savings</span>
                <span style={{
                  fontWeight: 600,
                  fontSize: '16px',
                  color: 'white'
                }}>{calc ? `₹${calc.annualSavings?.toLocaleString()}` : '--'}</span>
              </div>
            </div>
            <div style={{
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '8px',
              padding: '15px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(34, 197, 94, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
                color: '#22c55e',
                fontSize: '18px'
              }}>
                {calc ? '💰' : '💡'}
              </div>
              <div>
                <div style={{
                  fontWeight: 600,
                  marginBottom: '4px',
                  color: '#22c55e'
                }}>
                  {calc ? 'Great News!' : 'Good News!'}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#86efac',
                  lineHeight: '1.5'
                }}>
                  {calc 
                    ? `You could save ₹${calc.monthlySavings?.toLocaleString()} per month (${(calc.annualSavings / (calc.monthlySavings * 12) * 100).toFixed(0)}% of your bill).`
                    : 'Enter your details to see potential savings with solar power.'}
                  {calc?.paybackYears && (
                    <div style={{ marginTop: '4px' }}>
                      Payback period: ~{calc.paybackYears} years
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. FAQ Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#ffffff',
        position: 'relative'
      }}>
        <div style={{
          ...containerStyle,
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '50px'
          }}>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: 800,
              color: '#0f172a',
              margin: '0 0 16px'
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#4b5563',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
              Find answers to common questions about our solar solutions and services.
            </p>
          </div>
          
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            {[
              {
                question: 'How much can I save with solar panels?',
                answer: 'Most homeowners save between 50-90% on their electricity bills after installing solar panels. The exact savings depend on your energy usage, location, and the size of your solar system.'
              },
              {
                question: 'How long does installation take?',
                answer: 'The installation process typically takes 1-3 days, depending on the size of your system. However, the entire process from initial consultation to activation usually takes 4-8 weeks, including permitting and inspections.'
              },
              {
                question: 'Do solar panels work during power outages?',
                answer: 'Standard grid-tied solar systems automatically shut off during a power outage for safety reasons. However, with a battery storage system, you can have backup power during outages.'
              },
              {
                question: 'What maintenance do solar panels require?',
                answer: 'Solar panels require minimal maintenance. We recommend cleaning them 2-4 times a year and having a professional inspection every 2-3 years to ensure optimal performance.'
              },
              {
                question: 'What is the lifespan of a solar panel system?',
                answer: 'Most solar panels come with a 25-30 year performance warranty and can last even longer. The system will continue to produce electricity after the warranty period, though at a slightly reduced efficiency.'
              }
            ].map((faq, index) => (
              <div key={index} style={{
                marginBottom: '15px',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                ':hover': {
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }
              }}>
                <button 
                  onClick={() => toggleFaq(`faq${index}`)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: openFaq === `faq${index}` ? '#f8fafc' : '#fff',
                    border: 'none',
                    padding: '18px 25px',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#0f172a',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {faq.question}
                  <span style={{
                    fontSize: '20px',
                    transition: 'transform 0.3s ease',
                    color: '#64748b',
                    transform: openFaq === `faq${index}` ? 'rotate(45deg)' : 'rotate(0)'
                  }}>
                    +
                  </span>
                </button>
                <div style={{
                  maxHeight: openFaq === `faq${index}` ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  padding: openFaq === `faq${index}` ? '0 25px 18px' : '0 25px',
                  borderTop: openFaq === `faq${index}` ? '1px solid #f1f5f9' : 'none',
                  background: openFaq === `faq${index}` ? '#f8fafc' : 'transparent'
                }}>
                  <div style={{
                    color: '#475569',
                    lineHeight: '1.7',
                    fontSize: '15px',
                    paddingTop: '12px'
                  }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
            
            <div style={{
              textAlign: 'center',
              marginTop: '50px'
            }}>
              <p style={{
                fontSize: '18px',
                color: '#4b5563',
                margin: '0 0 20px'
              }}>
                Still have questions? Our solar experts are here to help!
              </p>
              <NavLink 
                to="/contact"
                style={{
                  background: 'linear-gradient(90deg, #0ea5e9, #3b82f6)',
                  color: 'white',
                  border: 'none',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 20px rgba(14, 165, 233, 0.3)'
                  }
                }}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. Testimonials Section */}
      <section style={{
        padding: '80px 0',
        background: '#f8fafc',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.03) 0%, rgba(34, 197, 94, 0.03) 100%)',
          zIndex: 1
        }}></div>
        
        <div style={{
          ...containerStyle,
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: 800,
              color: '#0f172a',
              margin: '0 0 16px'
            }}>
              What Our Customers Say
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#4b5563',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
              Don't just take our word for it. Here's what our customers have to say about their experience with us.
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            {[
              {
                quote: "Switching to solar was the best decision we made. Our electricity bill has reduced by 80% and the installation process was smooth.",
                name: "Rahul Sharma",
                location: "Mumbai",
                rating: 5,
                project: "10 kW Rooftop Solar"
              },
              {
                quote: "Excellent service from start to finish. The team was professional, knowledgeable, and completed the installation ahead of schedule.",
                name: "Priya Patel",
                location: "Ahmedabad",
                rating: 5,
                project: "15 kW Commercial Solar"
              },
              {
                quote: "The after-sales support is exceptional. They were always available to answer our questions and provided regular maintenance.",
                name: "Amit Singh",
                location: "Delhi NCR",
                rating: 5,
                project: "20 kW Hybrid System"
              }
            ].map((testimonial, index) => (
              <div key={index} style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid #e2e8f0',
                position: 'relative',
                transition: 'all 0.3s ease',
                ':hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.1)'
                }
              }}>
                <div style={{
                  fontSize: '24px',
                  color: '#f59e0b',
                  marginBottom: '15px',
                  letterSpacing: '2px'
                }}>
                  {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                </div>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: '#475569',
                  fontStyle: 'italic',
                  margin: '0 0 20px',
                  position: 'relative',
                  paddingLeft: '25px',
                  '::before': {
                    content: '"""', // Left double quotation mark
                    fontSize: '60px',
                    color: '#e2e8f0',
                    position: 'absolute',
                    left: '-15px',
                    top: '-15px',
                    fontFamily: 'Georgia, serif',
                    lineHeight: 1
                  }
                }}>
                  {testimonial.quote}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '25px',
                  paddingTop: '20px',
                  borderTop: '1px solid #f1f5f9'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px',
                    color: '#0ea5e9',
                    fontWeight: 'bold',
                    fontSize: '20px'
                  }}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{
                      fontWeight: 600,
                      color: '#0f172a',
                      marginBottom: '4px'
                    }}>
                      {testimonial.name}
                    </div>
                    <div style={{
                      fontSize: '14px',
                      color: '#64748b',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}>
                      <span>📍</span> {testimonial.location}
                    </div>
                    <div style={{
                      fontSize: '13px',
                      color: '#0ea5e9',
                      background: '#e0f2fe',
                      padding: '3px 10px',
                      borderRadius: '50px',
                      display: 'inline-block',
                      marginTop: '5px',
                      fontWeight: 500
                    }}>
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            marginTop: '30px'
          }}>
            <button style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: '#cbd5e1',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              ':hover': {
                background: '#0ea5e9'
              }
            }}></button>
            <button style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: '#cbd5e1',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              ':hover': {
                background: '#0ea5e9'
              }
            }}></button>
            <button style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: '#0ea5e9',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              ':hover': {
                background: '#0ea5e9'
              }
            }}></button>
          </div>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
            marginTop: '60px',
            padding: '30px',
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
          }}>
            {[
              { number: '500+', label: 'Happy Customers' },
              { number: '10+', label: 'Years Experience' },
              { number: '5MW+', label: 'Installed Capacity' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '0 20px',
                flex: '1',
                minWidth: '150px'
              }}>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 800,
                  color: '#0ea5e9',
                  marginBottom: '8px',
                  lineHeight: '1.2'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '16px',
                  color: '#64748b',
                  fontWeight: 500
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 5. CTA Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        width: '100%',
        margin: '0',
        maxWidth: 'none'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80) center/cover no-repeat',
          backgroundSize: '100% auto',
          width: '100%',
          height: '100%',
          opacity: 0.1,
          zIndex: 1
        }}></div>
        
        <div style={{
          ...containerStyle,
          position: 'relative',
          zIndex: 2
        }}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 800,
            margin: '0 0 20px',
            lineHeight: '1.3'
          }}>
            Ready to Go Solar?
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#cbd5e1',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            Join thousands of satisfied customers who have already made the switch to clean, renewable energy. Get a free, no-obligation quote today!
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '15px',
            marginBottom: '30px'
          }}>
            <button style={{
              background: 'linear-gradient(90deg, #22c55e, #16a34a)',
              color: 'white',
              border: 'none',
              padding: '14px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              ':hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 20px rgba(34, 197, 94, 0.3)'
              }
            }}>
              <span>Get Free Quote</span>
              <span>→</span>
            </button>
            <button style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '14px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              ':hover': {
                background: 'rgba(255, 255, 255, 0.2)',
                transform: 'translateY(-2px)'
              }
            }}>
              <span>📞 Call Now</span>
              <span>+91 98765 43210</span>
            </button>
          </div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
            marginTop: '50px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {[
              { icon: '🔒', text: 'No upfront cost' },
              { icon: '⚡', text: '30% cost savings on average' },
              { icon: '🌱', text: 'Eco-friendly solution' },
              { icon: '🏆', text: '5-year workmanship warranty' }
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '10px 20px',
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <span style={{
                  fontSize: '20px'
                }}>{item.icon}</span>
                <span style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#e2e8f0'
                }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* WhatsApp Floating Button */}
      <FloatingWhatsApp />
      
    </section>
  );
}

export default Home;


