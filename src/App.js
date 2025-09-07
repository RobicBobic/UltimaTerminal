import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import './App.css';

const UltimaTerminal = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isBooting, setIsBooting] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const terminalRef = useRef(null);

  const bootSequence = [
    'INITIALIZING ULTIMA TERMINAL v4.0.1...',
    'LOADING APOCALYPSE DATABASE..................[✓]',
    'SCANNING GLOBAL THREAT ASSESSMENTS...........[✓]',
    'ANALYZING END-TIME PROPHECIES................[✓]',
    'MONITORING EXTINCTION EVENTS.................[✓]',
    '',
    '█ ULTIMA TERMINAL ONLINE █',
    'MONITORING THE END OF DAYS',
    ''
  ];

  const commands = {
    help: 'AVAILABLE COMMANDS:\n├── help       - Display this menu\n├── about      - System information\n├── theories   - End of world theories\n├── countdown  - Doomsday countdowns\n├── prophecies - Ancient prophecies\n├── scenarios  - Extinction scenarios\n├── clear      - Clear terminal',
    about: 'ULTIMA TERMINAL v4.0.1\nThe ultimate apocalypse monitoring system\nTracking civilization\'s final moments',
    theories: 'END OF WORLD THEORIES:\n║ Nuclear Holocaust: 23% likely\n║ Climate Collapse: 67% likely\n║ AI Singularity: 12% likely\n║ Asteroid Impact: 3% likely',
    countdown: 'DOOMSDAY COUNTDOWN:\n⧗ Climate Tipping Point: 7 years\n⧗ Nuclear Clock: 90 seconds to midnight\n⧗ Asteroid 2029: 4 years, 234 days',
    prophecies: 'ANCIENT PROPHECIES:\n◢ Mayan Calendar: Cycle completed 2012\n◢ Nostradamus: Multiple interpretations\n◢ Book of Revelation: Signs manifesting',
    scenarios: 'EXTINCTION SCENARIOS:\n[CRITICAL] Nuclear Winter: 45% probability\n[HIGH] Climate Collapse: 67% probability\n[ONGOING] Mass Extinction: 89% probability',
    clear: 'Terminal cleared'
  };

  const navigationItems = [
    { id: 'home', label: 'DOOMSDAY HUB', status: 'MONITORING' },
    { id: 'systems', label: 'THREAT MATRIX', status: 'SCANNING' },
    { id: 'data', label: 'PROPHECY VAULT', status: 'ANALYZING' },
    { id: 'security', label: 'GLOBAL WATCH', status: 'VIGILANT' },
    { id: 'power', label: 'COUNTDOWN CORE', status: 'TICKING' },
    { id: 'terminal', label: 'ORACLE INTERFACE', status: 'ACTIVE' }
  ];

  useEffect(() => {
    const bootTimer = setTimeout(() => {
      setIsBooting(false);
      setTerminalHistory([...bootSequence, 'Type "help" for available commands', '']);
    }, 3000);
    return () => clearTimeout(bootTimer);
  }, [bootSequence]); // Added bootSequence to dependency array

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const handleCommand = (command) => {
    const cmd = command.toLowerCase().trim();
    const newHistory = [...terminalHistory, `> ${command}`];
    
    if (cmd === 'clear') {
      setTerminalHistory(['Type "help" for available commands', '']);
    } else if (commands[cmd]) {
      newHistory.push(commands[cmd], '');
      setTerminalHistory(newHistory);
    } else if (cmd) {
      newHistory.push('⚠ COMMAND NOT RECOGNIZED. Type "help" for available commands.', '');
      setTerminalHistory(newHistory);
    }
    setCurrentInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
    }
  };

  const renderContent = () => {
    switch (currentSection) {
      case 'home':
        return (
          <div className="content-container">
            <div className="hero-section">
              <h1 className="main-title">ULTIMA</h1>
              <p className="subtitle">APOCALYPSE MONITOR</p>
              <p className="version">v4.0.1 | END-TIMES TRACKING SYSTEM</p>
            </div>
            
            <div className="feature-grid">
              <div className="feature-card" onClick={() => setCurrentSection('security')}>
                <h3>GLOBAL SURVEILLANCE</h3>
                <p>Monitoring worldwide threats and apocalyptic indicators</p>
              </div>
              
              <div className="feature-card" onClick={() => setCurrentSection('systems')}>
                <h3>THREAT ANALYSIS</h3>
                <p>Advanced algorithms predicting extinction scenarios</p>
              </div>
              
              <div className="feature-card" onClick={() => setCurrentSection('data')}>
                <h3>PROPHECY DATABASE</h3>
                <p>Ancient predictions and modern doomsday calculations</p>
              </div>
            </div>

            <div className="status-panel">
              <div className="panel-content">
                <h3 className="panel-title">◤ DOOMSDAY CLOCK STATUS ◥</h3>
                <div className="status-grid">
                  <div className="status-card" onClick={() => setCurrentSection('power')}>
                    <div className="status-number">90</div>
                    <div className="status-label">SECONDS TO MIDNIGHT</div>
                  </div>
                  <div className="status-card" onClick={() => setCurrentSection('systems')}>
                    <div className="status-number">67%</div>
                    <div className="status-label">CLIMATE COLLAPSE</div>
                  </div>
                  <div className="status-card" onClick={() => setCurrentSection('systems')}>
                    <div className="status-number">4</div>
                    <div className="status-label">YEARS TO ASTEROID</div>
                  </div>
                  <div className="status-card" onClick={() => setCurrentSection('power')}>
                    <div className="status-number">147</div>
                    <div className="status-label">YEARS CIVILIZATION</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'systems':
        return (
          <div className="content-container">
            <h2 className="section-title">◤ GLOBAL THREAT MATRIX ◥</h2>
            <div className="systems-grid">
              <div className="systems-panel">
                <div className="panel-content">
                  <h3 className="panel-subtitle">EXTINCTION THREATS</h3>
                  <div className="threat-list">
                    <div className="threat-item">
                      <span>NUCLEAR HOLOCAUST</span>
                      <span>23% RISK</span>
                    </div>
                    <div className="threat-item">
                      <span>CLIMATE COLLAPSE</span>
                      <span>67% RISK</span>
                    </div>
                    <div className="threat-item">
                      <span>AI SINGULARITY</span>
                      <span>12% RISK</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="systems-panel">
                <div className="panel-content">
                  <h3 className="panel-subtitle">MONITORING SYSTEMS</h3>
                  <div className="threat-list">
                    <div className="threat-item">
                      <span>NUCLEAR_MONITOR.exe</span>
                      <span>SCANNING</span>
                    </div>
                    <div className="threat-item">
                      <span>CLIMATE_TRACKER.dll</span>
                      <span>SCANNING</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'data':
        return (
          <div className="content-container">
            <h2 className="section-title">◤ PROPHECY VAULT ACCESS ◥</h2>
            <div className="data-grid">
              <div className="data-panel">
                <div className="panel-content">
                  <h3 className="panel-subtitle">ANCIENT PROPHECIES</h3>
                  <div className="prophecy-list">
                    <div className="prophecy-item">
                      <div className="prophecy-info">
                        <div className="prophecy-name">MAYAN_CALENDAR.enc</div>
                        <div className="prophecy-details">2012 CE</div>
                      </div>
                      <span className="prophecy-status">COMPLETED</span>
                    </div>
                    <div className="prophecy-item">
                      <div className="prophecy-info">
                        <div className="prophecy-name">NOSTRADAMUS.qnt</div>
                        <div className="prophecy-details">942 VERSES</div>
                      </div>
                      <span className="prophecy-status">ANALYZING</span>
                    </div>
                    <div className="prophecy-item">
                      <div className="prophecy-info">
                        <div className="prophecy-name">BOOK_OF_REVELATION.ult</div>
                        <div className="prophecy-details">22 CHAPTERS</div>
                      </div>
                      <span className="prophecy-status">ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="data-panel">
                <div className="panel-content">
                  <h3 className="panel-subtitle">MONITORING LOG</h3>
                  <div className="log-container">
                    <div className="log-entry">[2024.09.07 14:23:45] DOOMSDAY CLOCK: 90 SECONDS</div>
                    <div className="log-entry">[2024.09.07 14:23:46] CLIMATE TIPPING POINT APPROACHING</div>
                    <div className="log-entry">[2024.09.07 14:23:47] ASTEROID 2029 APOPHIS TRACKED</div>
                    <div className="log-entry">[2024.09.07 14:23:48] NUCLEAR THREAT LEVEL: ELEVATED</div>
                    <div className="log-entry">[2024.09.07 14:23:49] SPECIES EXTINCTION: ACCELERATING</div>
                    <div className="log-entry critical">[2024.09.07 14:23:51] APOCALYPSE PROBABILITY: 47.3%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="content-container">
            <h2 className="section-title">◤ GLOBAL SECURITY WATCH ◥</h2>
            <div className="security-overview">
              <div className="security-card">
                <h3>THREAT LEVEL</h3>
                <div className="security-value">HIGH</div>
                <div className="security-detail">MULTIPLE ACTIVE THREATS</div>
              </div>
              
              <div className="security-card">
                <h3>DOOMSDAY CLOCK</h3>
                <div className="security-value">90 SECONDS</div>
                <div className="security-detail">TO MIDNIGHT</div>
              </div>
              
              <div className="security-card">
                <h3>SURVEILLANCE</h3>
                <div className="security-value">GLOBAL</div>
                <div className="security-detail">MONITORING ALL SIGNS</div>
              </div>
            </div>
            
            <div className="security-details">
              <div className="security-panel">
                <div className="panel-content">
                  <h3 className="panel-subtitle">APOCALYPTIC SIGNS</h3>
                  <div className="threat-list">
                    <div className="threat-item">
                      <span>EXTREME WEATHER</span>
                      <span>INCREASING</span>
                    </div>
                    <div className="threat-item">
                      <span>MASS EXTINCTIONS</span>
                      <span>6TH EVENT</span>
                    </div>
                    <div className="threat-item">
                      <span>NUCLEAR TENSIONS</span>
                      <span>ESCALATING</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="security-panel">
                <div className="panel-content">
                  <h3 className="panel-subtitle">RECENT ALERTS</h3>
                  <div className="alert-list">
                    <div className="alert-item">
                      <span>14:23:12</span>
                      <span>NUCLEAR_ESCALATION</span>
                      <span className="alert-level critical">CRITICAL</span>
                    </div>
                    <div className="alert-item">
                      <span>14:18:47</span>
                      <span>CLIMATE_TIPPING</span>
                      <span className="alert-level high">HIGH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'power':
        return (
          <div className="content-container">
            <h2 className="section-title">◤ COUNTDOWN CORE ◥</h2>
            <div className="power-grid">
              <div className="doomsday-display">
                <h3>DOOMSDAY CLOCK</h3>
                <div className="countdown-number">90</div>
                <div className="countdown-label">SECONDS TO MIDNIGHT</div>
                <div className="countdown-detail">NUCLEAR ANNIHILATION</div>
              </div>
              
              <div className="countdown-panel">
                <div className="panel-content">
                  <h3 className="panel-subtitle">COUNTDOWN TIMERS</h3>
                  <div className="timer-list">
                    <div className="timer-item">
                      <span>CLIMATE TIPPING POINT</span>
                      <span>7 YEARS</span>
                    </div>
                    <div className="timer-item">
                      <span>ASTEROID APOPHIS</span>
                      <span>4 YRS 234 DAYS</span>
                    </div>
                    <div className="timer-item">
                      <span>NUCLEAR ESCALATION</span>
                      <span>90 SECONDS</span>
                    </div>
                    <div className="timer-item">
                      <span>CIVILIZATION END</span>
                      <span>147 YEARS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="probability-matrix">
              <div className="panel-content">
                <h3 className="panel-title">◢ APOCALYPSE PROBABILITY MATRIX ◣</h3>
                <div className="probability-grid">
                  <div className="probability-item">
                    <div className="probability-percent">23%</div>
                    <div className="probability-label">NUCLEAR</div>
                  </div>
                  <div className="probability-item">
                    <div className="probability-percent">67%</div>
                    <div className="probability-label">CLIMATE</div>
                  </div>
                  <div className="probability-item">
                    <div className="probability-percent">18%</div>
                    <div className="probability-label">PANDEMIC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'terminal':
        return (
          <div className="content-container">
            <h2 className="section-title">◤ ORACLE INTERFACE ◥</h2>
            <div className="terminal-container">
              <div 
                ref={terminalRef}
                className="terminal-display"
              >
                {isBooting ? (
                  <div className="boot-sequence">
                    {bootSequence.map((line, i) => (
                      <div key={i} className="boot-line">
                        {line}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="terminal-content">
                    {terminalHistory.map((line, i) => (
                      <div key={i} className="terminal-line">
                        {line}
                      </div>
                    ))}
                    <div className="terminal-input-line">
                      <span className="terminal-prompt">{'>'}</span>
                      <input
                        type="text"
                        value={currentInput}
                        onChange={(e) => setCurrentInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="terminal-input"
                        autoFocus
                      />
                      <span className={`terminal-cursor ${showCursor ? 'visible' : ''}`}>█</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="content-container">
            <h2 className="section-title">{currentSection.toUpperCase()}</h2>
            <p>Section under development...</p>
          </div>
        );
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <div className="header-left">
            <span className="app-title">ULTIMA TERMINAL</span>
            <div className="app-subtitle">APOCALYPSE MONITOR v4.0.1</div>
          </div>
          <div className="header-right">
            <span>THREAT: HIGH</span>
            <span className="separator">|</span>
            <span>DOOMSDAY: 90s</span>
          </div>
        </div>
      </header>

      <div className="app-body">
        <nav className="sidebar">
          <div className="nav-items">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`nav-button ${currentSection === item.id ? 'active' : ''}`}
              >
                <div className="nav-content">
                  <div className="nav-label">
                    <div className="nav-title">{item.label}</div>
                    <div className="nav-status">{item.status}</div>
                  </div>
                  {currentSection === item.id && <ChevronRight className="nav-arrow" />}
                </div>
              </button>
            ))}
          </div>
          
          <div className="sidebar-status">
            <div className="status-panel-mini">
              <h4 className="status-title">◢ APOCALYPSE STATUS ◣</h4>
              <div className="status-list">
                <div className="status-row">
                  <span>THREAT LEVEL:</span>
                  <span>HIGH</span>
                </div>
                <div className="status-row">
                  <span>DOOMSDAY:</span>
                  <span>90 SEC</span>
                </div>
                <div className="status-row">
                  <span>EXTINCTION:</span>
                  <span>47.3%</span>
                </div>
                <div className="status-row">
                  <span>CLIMATE:</span>
                  <span>CRITICAL</span>
                </div>
                <div className="status-row">
                  <span>NUCLEAR:</span>
                  <span>ELEVATED</span>
                </div>
                <div className="status-row">
                  <span>SPECIES:</span>
                  <span>DYING</span>
                </div>
                <div className="status-row">
                  <span>ASTEROID:</span>
                  <span>4 YEARS</span>
                </div>
                <div className="status-row">
                  <span>AI THREAT:</span>
                  <span>RISING</span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="main-content">
          {renderContent()}
        </main>
      </div>

      <footer className="app-footer">
        <p>ULTIMA TERMINAL © 2025 | APOCALYPSE MONITORING SYSTEM | DOOMSDAY CLOCK: 90 SECONDS</p>
      </footer>
    </div>
  );
};

export default UltimaTerminal;