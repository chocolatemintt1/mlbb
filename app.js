let heroesData = [];
const isGitHubPages = window.location.hostname.includes('github.io');
const basePath = isGitHubPages ? '/mlbb' : '';

async function fetchHeroesData() {
    try {
        const response = await fetch(`${basePath}/heroes.json`);
        if (!response.ok) throw new Error('Failed to load heroes data');
        return await response.json();
    } catch (error) {
        console.error('Failed to load heroes data:', error);
        return [];
    }
}

const roleOrder = ["Tank", "Fighter", "Assassin", "Mage", "Marksman", "Support"];
const groupHeroesByRole = (heroes) => {
    const grouped = {};
    roleOrder.forEach(role => {
        grouped[role] = heroes.filter(hero => hero.role === role);
    });
    return grouped;
};

const ChevronIcon = ({ isExpanded }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {isExpanded ? (
            <polyline points="18 15 12 9 6 15" />
        ) : (
            <polyline points="6 9 12 15 18 9" />
        )}
    </svg>
);

const Alert = ({ children, style }) => (
    <div
        style={{
            padding: '16px',
            borderRadius: '8px',
            ...style
        }}
    >
        {children}
    </div>
);

const AlertTitle = ({ children, className }) => (
    <div
        style={{
            fontSize: '1.1em',
            fontWeight: 'bold',
            marginBottom: '8px'
        }}
        className={className}
    >
        {children}
    </div>
);

const AlertDescription = ({ children }) => (
    <div style={{ fontSize: '0.95em' }}>
        {children}
    </div>
);

const patchNotes = [
    {
        version: "1.0.0",
        date: "2024-10-06",
        changes: [
            "Initial release of MLBB Team Composition Analyzer",
            "Added hero selection system",
            "Implemented team composition analysis",
            "Added light/dark mode toggle"
        ]
    },
    {
        version: "1.1.0",
        date: "2024-10-07",
        changes: [
            "Added role filtering system",
            "Improved UI responsiveness",
            "Added team statistics calculation",
            "Implemented reset functionality",
            "Added [Team Advantage Analysis] after both team picked their hero compositions",
            "Added all 125 heroes"
        ]
    }
    // Add more patch notes as needed
];

const BulletinBoard = () => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="bulletin-board">
            <div
                className="bulletin-header"
                onClick={toggleExpand}
                style={{
                    backgroundColor: 'var(--card-background)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '8px',
                    padding: '15px',
                    marginBottom: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <h2 style={{ margin: 0 }}>Website Adjustments</h2>
                <ChevronIcon isExpanded={isExpanded} />
            </div>

            <div className={`bulletin-content ${isExpanded ? 'expanded' : ''}`}
                style={{
                    maxHeight: isExpanded ? '1000px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-in-out',
                    marginBottom: isExpanded ? '20px' : '0'
                }}
            >
                {patchNotes.map((patch, index) => (
                    <Alert
                        key={index}
                        style={{
                            marginBottom: '10px',
                            backgroundColor: 'var(--card-background)',
                            border: '1px solid var(--card-border)'
                        }}
                    >
                        <AlertTitle className="flex justify-between items-center">
                            <span>Version {patch.version}</span>
                            <span style={{ fontSize: '0.9em', opacity: 0.8 }}>{patch.date}</span>
                        </AlertTitle>
                        <AlertDescription>
                            <ul className="list-disc pl-5 mt-2">
                                {patch.changes.map((change, changeIndex) => (
                                    <li key={changeIndex}>{change}</li>
                                ))}
                            </ul>
                        </AlertDescription>
                    </Alert>
                ))}
            </div>
        </div>
    );
};

const SVGIcon = ({ name }) => {
    switch (name) {
        case 'damage':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 3l-6 4-6-4-6 5v13h18V8z"></path>
                </svg>
            );
        case 'durability':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            );
        case 'cc':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
            );
        default:
            return null;
    }
};

const HeroCard = ({ hero, onAddToTeam, isSelected }) => (
    <div className="hero-card">
        <img src={hero.image} alt={hero.name} className="hero-image" />
        <div className="hero-name">{hero.name}</div>
        <div className="hero-stats">
            <div className="stat"><SVGIcon name="damage" /> {hero.damage}</div>
            <div className="stat"><SVGIcon name="durability" /> {hero.durability}</div>
            <div className="stat"><SVGIcon name="cc" /> {hero.cc}</div>
        </div>
        <div className="button-group">
            <button
                className="blue-button"
                onClick={() => onAddToTeam(hero, 'blue')}
                disabled={isSelected}
            >
                Add to Blue
            </button>
            <button
                className="red-button"
                onClick={() => onAddToTeam(hero, 'red')}
                disabled={isSelected}
            >
                Add to Red
            </button>
        </div>
    </div>
);

const TeamDisplay = ({ team, teamName, teamStats }) => (
    <div className={`team ${teamName}-team`}>
        <h2>{teamName === 'blue' ? 'Blue Team' : 'Red Team'}</h2>
        <ul className="team-heroes">
            {team.map(hero => (
                <li key={hero.id} className="team-hero">
                    <img src={hero.image} alt={hero.name} className="team-hero-image" />
                    <span>{hero.name} - {hero.role}</span>
                </li>
            ))}
        </ul>
        {team.length === 5 && (
            <div>
                <h3>Team Stats:</h3>
                <p>Damage: {teamStats.damage}</p>
                <p>Durability: {teamStats.durability}</p>
                <p>CC: {teamStats.cc}</p>
            </div>
        )}
    </div>
);

const TeamAnalysis = ({ blueTeam, redTeam }) => {
    const Alert = ({ children, className }) => (
        <div className={`p-4 rounded-lg border ${className}`}>
            {children}
        </div>
    );

    const AlertTitle = ({ children, className }) => (
        <h3 className={`text-lg font-semibold ${className}`}>
            {children}
        </h3>
    );

    const AlertDescription = ({ children }) => (
        <div className="mt-2 text-sm">
            {children}
        </div>
    );

    const analyzeTeamComposition = (team) => {
        const roles = team.map(hero => hero.role);
        const analysis = {
            roles: roles,
            hasTank: roles.includes('Tank'),
            hasFighter: roles.includes('Fighter'),
            hasAssassin: roles.includes('Assassin'),
            hasMage: roles.includes('Mage'),
            hasMarksman: roles.includes('Marksman'),
            hasSupport: roles.includes('Support'),
        };

        return analysis;
    };

    const determineAdvantage = (blueAnalysis, redAnalysis) => {
        if (blueTeam.length !== 5 || redTeam.length !== 5) {
            return null;
        }

        let blueScore = 0;
        let redScore = 0;

        // Basic role coverage scoring
        const essentialRoles = ['Tank', 'Fighter', 'Mage', 'Marksman'];
        essentialRoles.forEach(role => {
            if (blueAnalysis.roles.includes(role)) blueScore++;
            if (redAnalysis.roles.includes(role)) redScore++;
        });

        // Bonus for having support
        if (blueAnalysis.hasSupport) blueScore += 0.5;
        if (redAnalysis.hasSupport) redScore += 0.5;

        // Bonus for having assassin
        if (blueAnalysis.hasAssassin) blueScore += 0.5;
        if (redAnalysis.hasAssassin) redScore += 0.5;

        return {
            advantageTeam: blueScore > redScore ? 'blue' : redScore > blueScore ? 'red' : 'even',
            blueScore,
            redScore
        };
    };

    const getMissingRoles = (analysis) => {
        const essentialRoles = ['Tank', 'Fighter', 'Mage', 'Marksman'];
        return essentialRoles.filter(role => !analysis.roles.includes(role));
    };

    const blueAnalysis = analyzeTeamComposition(blueTeam);
    const redAnalysis = analyzeTeamComposition(redTeam);
    const advantage = determineAdvantage(blueAnalysis, redAnalysis);

    if (!advantage) {
        return null;
    }

    const blueMissing = getMissingRoles(blueAnalysis);
    const redMissing = getMissingRoles(redAnalysis);

    return (
        <div className="team-analysis">
            <Alert className={advantage.advantageTeam === 'even' ? 'bg-gray-100 dark:bg-gray-800' :
                advantage.advantageTeam === 'blue' ? 'bg-blue-100 dark:bg-blue-900' :
                    'bg-red-100 dark:bg-red-900'}>
                <AlertTitle>
                    Team Advantage Analysis
                </AlertTitle>
                <AlertDescription>
                    <div className="mb-2">
                        {advantage.advantageTeam === 'even' ? (
                            <p>Teams are evenly matched!</p>
                        ) : (
                            <p>{advantage.advantageTeam.charAt(0).toUpperCase() + advantage.advantageTeam.slice(1)} team has a slight advantage.</p>
                        )}
                    </div>

                    <div className="mb-2">
                        <h4 className="font-semibold">Blue Team Composition:</h4>
                        <p>{blueMissing.length > 0 ?
                            `Missing: ${blueMissing.join(', ')}` :
                            'Good role coverage!'}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold">Red Team Composition:</h4>
                        <p>{redMissing.length > 0 ?
                            `Missing: ${redMissing.join(', ')}` :
                            'Good role coverage!'}
                        </p>
                    </div>
                </AlertDescription>
            </Alert>
        </div>
    );
};

function App() {
    const [blueTeam, setBlueTeam] = React.useState([]);
    const [redTeam, setRedTeam] = React.useState([]);
    const [selectedRole, setSelectedRole] = React.useState("Tank");
    const [isDarkMode, setIsDarkMode] = React.useState(false)

    React.useEffect(() => {
        document.documentElement.setAttribute(
            'data-theme',
            isDarkMode ? 'dark' : 'light'
        );
    }, [isDarkMode]);

    React.useEffect(() => {
        fetchHeroesData().then(data => setHeroesData(data));
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const groupedHeroes = React.useMemo(() => groupHeroesByRole(heroesData), []);

    const resetTeams = () => {
        setBlueTeam([]);
        setRedTeam([]);
        setSelectedRole("Tank");
    };

    const addHero = (hero, team) => {
        if (team === 'blue' && blueTeam.length < 5) {
            setBlueTeam([...blueTeam, hero]);
        } else if (team === 'red' && redTeam.length < 5) {
            setRedTeam([...redTeam, hero]);
        }
    };

    const calculateTeamStats = (team) => {
        if (team.length === 0) return { damage: 0, durability: 0, cc: 0 };
        const stats = team.reduce((acc, hero) => {
            acc.damage += hero.damage;
            acc.durability += hero.durability;
            acc.cc += hero.cc;
            return acc;
        }, { damage: 0, durability: 0, cc: 0 });

        return {
            damage: (stats.damage / team.length).toFixed(1),
            durability: (stats.durability / team.length).toFixed(1),
            cc: (stats.cc / team.length).toFixed(1),
        };
    };

    const isHeroSelected = (hero) => {
        return blueTeam.some(h => h.id === hero.id) || redTeam.some(h => h.id === hero.id);
    };

    const Footer = () => {
        return (
            <footer className="footer">
                <div className="social-icons">
                    <a href="https://x.com/chocolatemintt1" target="_blank" className="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/@konose_1" target="_blank" className="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/smurf.carloamparo22" target="_blank" className="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                    </a>
                    <a href="https://www.tiktok.com/@chocolatemintt1?lang=en" target="_blank" className="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5z" />
                            <line x1="10" y1="12" x2="14" y2="12" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/chocolatemintt1/" target="_blank" className="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                    </a>
                </div>
                <div className="copyright">
                    © 2024 All rights reserved
                    <div>Programmed by Carlo Amparo</div>
                </div>
            </footer>
        );
    };

    return (
        <div className="container">
            <div className="header-controls">
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                    )}
                </button>
                <button
                    className="reset-button"
                    onClick={resetTeams}
                    aria-label="Reset teams"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 2v6h6"></path>
                        <path d="M3 13a9 9 0 1 0 3-7.7L3 8"></path>
                    </svg>
                    Reset Teams
                </button>
            </div>
            <h1>MLBB Team Composition Analyzer</h1>
            <div className="team-container">
                <TeamDisplay team={blueTeam} teamName="blue" teamStats={calculateTeamStats(blueTeam)} />
                <TeamDisplay team={redTeam} teamName="red" teamStats={calculateTeamStats(redTeam)} />
            </div>
            {(blueTeam.length === 5 && redTeam.length === 5) && (
                <div className="mb-4">
                    <TeamAnalysis blueTeam={blueTeam} redTeam={redTeam} />
                </div>
            )}
            <h2>Available Heroes</h2>
            <div className="role-selector">
                {roleOrder.map(role => (
                    <button
                        key={role}
                        onClick={() => setSelectedRole(role)}
                        className={`role-button ${selectedRole === role ? 'selected' : ''}`}
                    >
                        {role}
                    </button>
                ))}
            </div>
            <div className="hero-list">
                {groupedHeroes[selectedRole] && groupedHeroes[selectedRole].map(hero => (
                    <HeroCard
                        key={hero.id}
                        hero={hero}
                        onAddToTeam={addHero}
                        isSelected={isHeroSelected(hero)}
                    />
                ))}
            </div>
            <BulletinBoard />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
