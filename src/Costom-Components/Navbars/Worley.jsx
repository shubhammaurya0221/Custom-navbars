import React, { useState } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';

const leftNavItems = [
    {
        title: 'About us',
        links: ['About us', 'Our story', 'Our strategy', 'Our leadership', 'Where we operate']
    },
    {
        title: 'Solutions',
        isMega: true,
        columns: [
            {
                title: 'Industries',
                sections: [
                    { name: 'Chemicals and fuels', links: ['Overview', 'Chemicals', 'Low carbon fuels', 'Refining', 'Plastics recycling solutions', 'Sustainable aviation fuel'] },
                    { name: 'Conventional energy', links: ['Overview', 'Carbon capture, utilization and storage', 'Decommissioning', 'Integrated gas', 'Midstream energy infrastructure', 'Offshore oil', 'Onshore oil'] },
                    { name: 'Low carbon energy', links: ['Overview', 'Biogas and renewable natural gas', 'Data centers', 'Energy storage', 'Hydrogen', 'Nuclear power', 'Power networks', 'Renewable energy'] },
                    { name: 'Resources', links: ['Overview', 'Aluminium', 'Battery materials', 'Bauxite and alumina', 'Copper and energy transition materials', 'Graphite', 'Iron ore', 'Mined fertilizers', 'Precious metals', 'Water'] }
                ]
            },
            {
                title: 'Services and technology',
                sections: [
                    { name: 'Project delivery', links: ['Overview', 'Engineering', 'Procurement and supply chain', 'Construction and fabrication', 'Globally connected team'] },
                    { name: 'Asset performance', links: ['Overview', 'Operations and maintenance', 'Workflow optimization'] },
                    { name: 'Specialist and technology solutions', links: ['Overview', 'Worley Chemetics', 'Worley Comprimo', 'Offshore energy solutions', 'Technology Ventures'] }
                ]
            },
            {
                title: 'Worley Consulting',
                links: ['Overview', 'Why choose Worley Consulting', 'Planning and investment', 'Capital project support', 'Optimize, repurpose and decommissioning', 'Digital solutions', 'Environment and sustainability consulting']
            }
        ]
    },
    {
        title: 'Sustainability',
        links: ['Delivering sustainable change', 'Environment', 'Social', 'Governance', 'Reporting center']
    }
];

const rightNavItems = [
    { title: 'Insights', isSimpleLink: true, href: '/insights' },
    { title: 'News', isSimpleLink: true, href: '/news' },
    {
        title: 'Careers',
        isMega: true,
        columns: [
            { title: 'Careers', links: ['Careers home'] },
            { title: 'Apply', links: ['Job search', 'Our process', 'Recruitment FAQs', 'Fraud notice'] },
            { title: 'Life at Worley', links: ['Why Worley', 'Belong at Worley', 'Meet our people'] },
            { title: 'Our Teams', links: ['Your global career', 'Trade and craft', 'Technical and functions'] },
            { title: 'Early Careers', links: ['Our programs', 'Internship program', 'Graduate program', 'Specialist programs'] }
        ]
    },
    {
        title: 'Investors',
        isMega: true,
        columns: [
            { title: 'Investor Centre', links: ['Welcome', 'Corporate governance'] },
            { title: 'News', links: ['ASX announcements', 'Our news'] },
            { title: 'Results and reports', links: ['Results, reports and presentations', 'Annual report'] },
            { title: 'Tools and resources', links: ['Share price', 'Calendar', 'Broker Toolkit (download)', 'Investor factsheet (download)', 'Analyst coverage'] },
            { title: 'Shareholders', links: ['Shareholder services', 'Shareholder FAQs', 'Shareholder meetings', 'Investor contacts'] }
        ]
    },
    { title: 'Contact us', isSimpleLink: true, href: '/contact' }
];

const Worley = () => {
    // Desktop States
    const [activeLeftMenu, setActiveLeftMenu] = useState(null);
    const [activeRightMenu, setActiveRightMenu] = useState(null);
    const [expandedDesktopSection, setExpandedDesktopSection] = useState(null);

    // Mobile States
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileActiveMenu, setMobileActiveMenu] = useState({ side: null, index: null });
    const [mobileExpandedSection, setMobileExpandedSection] = useState(null);

    const handleMobileMenuClick = (side, index, item) => {
        if (item.isSimpleLink) return;
        setMobileActiveMenu({ side, index });
        setMobileExpandedSection(null);
    };

    return (
        <header className="fixed w-full top-0 z-50 bg-[#002e3c] text-white border-b border-gray-700 font-sans transition-all duration-300">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">

                {/* Left Side: Logo & Primary Nav */}
                <div className="flex items-center h-full">
                    {/* Logo */}
                    <a href="/" className="flex-shrink-0 mr-8 z-50">
                        <span className="text-2xl font-bold tracking-tight text-red-600">Worley</span>
                    </a>

                    {/* Left Nav (Desktop) */}
                    <nav className="hidden lg:flex items-center h-full space-x-2">
                        {leftNavItems.map((item, index) => (
                            <div
                                key={item.title}
                                className="h-full flex items-center group relative"
                                onMouseEnter={() => { setActiveLeftMenu(index); setActiveRightMenu(null); }}
                                onMouseLeave={() => { setActiveLeftMenu(null); setExpandedDesktopSection(null); }}
                            >
                                <button className="relative flex items-center px-4 h-full text-[15px] font-medium text-white hover:text-gray-300 transition-colors focus:outline-none">
                                    {item.title}
                                    <ChevronDown className={`ml-1.5 w-4 h-4 transition-transform duration-300 ${activeLeftMenu === index ? 'rotate-180' : ''}`} />
                                    
                                    {/* Underline Animation */}
                                    <span className={`absolute bottom-0 left-0 h-1 bg-red-600 transition-all duration-300 ease-out ${activeLeftMenu === index ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                </button>

                                {/* Left Dropdowns */}
                                {activeLeftMenu === index && (
                                    item.isMega ? (
                                        <div className="fixed top-20 left-0 w-full bg-[#002e3c] shadow-xl border-t border-gray-700 p-8 flex justify-center">
                                            <div className="flex w-full max-w-[1440px] mx-auto px-4 lg:px-8 gap-8">
                                                {item.columns.map((col, colIdx) => (
                                                    <div key={col.title} className="flex-1 border-r border-gray-700 last:border-0 pr-8">
                                                        <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">{col.title}</h4>
                                                        {col.sections ? (
                                                            <div className="space-y-2">
                                                                {col.sections.map((section, secIdx) => {
                                                                    const sectionId = `${colIdx}-${secIdx}`;
                                                                    const isExpanded = expandedDesktopSection === sectionId;

                                                                    return (
                                                                        <div key={section.name} className="border-b border-gray-800 last:border-0 pb-2">
                                                                            <button
                                                                                onClick={() => setExpandedDesktopSection(isExpanded ? null : sectionId)}
                                                                                className="flex items-center justify-between w-full text-left font-semibold text-gray-200 hover:text-red-500 transition-colors py-2 focus:outline-none"
                                                                            >
                                                                                <span>{section.name}</span>
                                                                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                                                            </button>
                                                                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                                                                <ul className="space-y-3 pl-4 pb-2 border-l border-gray-700 ml-2">
                                                                                    {section.links.map(link => (
                                                                                        <li key={link}>
                                                                                            <a href="#" className="text-sm text-gray-400 hover:text-white hover:underline transition-colors">{link}</a>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        ) : (
                                                            <ul className="space-y-4">
                                                                {col.links.map(link => (
                                                                    <li key={link}>
                                                                        <a href="#" className="text-[15px] text-gray-400 hover:text-white hover:underline transition-colors">{link}</a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="absolute top-full left-0 w-72 bg-[#002e3c] shadow-xl p-6 rounded-b-lg">
                                            <ul className="space-y-4">
                                                {item.links.map(link => (
                                                    <li key={link}><a href="#" className="text-[15px] text-white hover:text-red-600 hover:underline">{link}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                )}
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Right Side: Secondary Nav & Search */}
                <div className="flex items-center h-full">
                    {/* Right Nav (Desktop) */}
                    <nav className="hidden lg:flex items-center h-full mr-6">
                        {rightNavItems.map((item, index) => (
                            <div
                                key={item.title}
                                className="h-full flex items-center relative group"
                                onMouseEnter={() => { if (!item.isSimpleLink) { setActiveRightMenu(index); setActiveLeftMenu(null); } }}
                                onMouseLeave={() => setActiveRightMenu(null)}
                            >
                                {item.isSimpleLink ? (
                                    <a href={item.href} className="relative flex items-center px-4 h-full text-[15px] font-medium text-white hover:text-gray-300 transition-colors">
                                        {item.title}
                                        {/* Underline Animation */}
                                        <span className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full" />
                                    </a>
                                ) : (
                                    <button className="relative flex items-center px-4 h-full text-[15px] font-medium text-white hover:text-gray-300 transition-colors focus:outline-none">
                                        {item.title}
                                        <ChevronDown className={`ml-1.5 w-4 h-4 transition-transform duration-300 ${activeRightMenu === index ? 'rotate-180 text-red-600' : ''}`} />
                                        
                                        {/* Underline Animation */}
                                        <span className={`absolute bottom-0 left-0 h-1 bg-red-600 transition-all duration-300 ease-out ${activeRightMenu === index ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                    </button>
                                )}

                                {/* Right Dropdowns */}
                                {activeRightMenu === index && !item.isSimpleLink && (
                                    item.isMega ? (
                                        <div className="fixed top-20 left-0 w-full bg-[#002E3c] text-white shadow-xl border-t border-gray-100 p-8 flex justify-center">
                                            <div className="flex w-full max-w-[1440px] mx-auto px-4 lg:px-8 justify-end gap-12">
                                                {item.columns.map((col) => (
                                                    <div key={col.title} className="w-48">
                                                        <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">{col.title}</h4>
                                                        <ul className="space-y-3">
                                                            {col.links.map(link => (
                                                                <li key={link}><a href="#" className="text-sm text-white hover:text-red-600 hover:underline">{link}</a></li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="absolute top-full right-0 w-72 bg-[#002E3c] text-white shadow-xl p-6 rounded-b-lg">
                                            <ul className="space-y-3">
                                                {item.links?.map(link => (
                                                    <li key={link}><a href="#" className="text-sm text-white hover:text-red-600 hover:underline">{link}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Search Icon */}
                    <button className="p-2 text-white hover:text-red-600 transition-colors z-50">
                        <Search size={24} strokeWidth={1.5} />
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 ml-2 text-white hover:text-red-600 z-50"
                    >
                        {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden fixed inset-0 top-20 bg-[#002E3c] text-white overflow-y-auto transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col p-6">
                    <p className="text-sm font-bold uppercase tracking-wider text-white bg-[#002E3c] mb-4">Menu</p>

                    {[ 
                        ...leftNavItems.map((item, idx) => ({ ...item, side: 'left', originalIndex: idx })),
                        ...rightNavItems.map((item, idx) => ({ ...item, side: 'right', originalIndex: idx }))
                    ].map((item) => {
                        const isActive = mobileActiveMenu.side === item.side && mobileActiveMenu.index === item.originalIndex;

                        return (
                            <div key={item.title} className="border-b border-gray-100">
                                {item.isSimpleLink ? (
                                    <a href={item.href} className="flex py-4 text-lg font-semibold text-white hover:text-red-600 transition-colors">
                                        {item.title}
                                    </a>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => handleMobileMenuClick(item.side, isActive ? null : item.originalIndex, item)}
                                            className={`flex justify-between w-full py-4 text-lg font-semibold transition-colors ${isActive ? 'text-red-600' : 'text-white'}`}
                                        >
                                            {item.title}
                                            <ChevronDown className={`transform transition-transform ${isActive ? 'rotate-180' : ''}`} size={20} />
                                        </button>

                                        {isActive && (
                                            <div className="pb-4 pl-4 space-y-4">
                                                {item.columns ? item.columns.map((col, colIdx) => (
                                                    <div key={col.title}>
                                                        {col.sections ? (
                                                            <div>
                                                                <h4 className="text-sm font-bold uppercase text-white mb-2 mt-4">{col.title}</h4>
                                                                {col.sections.map((section, secIdx) => {
                                                                    const isSectionExpanded = mobileExpandedSection === `${colIdx}-${secIdx}`;
                                                                    return (
                                                                        <div key={section.name} className="mb-2">
                                                                            <button
                                                                                onClick={() => setMobileExpandedSection(isSectionExpanded ? null : `${colIdx}-${secIdx}`)}
                                                                                className="flex justify-between w-full py-2 text-[15px] font-medium text-white hover:text-gray-300 transition-colors focus:outline-none"
                                                                            >
                                                                                {section.name}
                                                                                <ChevronDown className={`w-4 h-4 transform transition-transform ${isSectionExpanded ? 'rotate-180' : ''}`} />
                                                                            </button>
                                                                            {isSectionExpanded && (
                                                                                <ul className="pl-4 py-2 border-l-2 border-gray-100 space-y-3 mt-1">
                                                                                    {section.links.map(link => (
                                                                                        <li key={link}><a href="#" className="text-sm text-white hover:text-gray-300">{link}</a></li>
                                                                                    ))}
                                                                                </ul>
                                                                            )}
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        ) : (
                                                            <div className="mt-4">
                                                                <h4 className="text-sm font-bold uppercase text-white mb-3">{col.title}</h4>
                                                                <ul className="space-y-3">
                                                                    {col.links.map(link => (
                                                                        <li key={link}><a href="#" className="text-[15px] text-white hover:text-gray-300">{link}</a></li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
                                                )) : (
                                                    <ul className="space-y-4 mt-2">
                                                        {item.links.map(link => (
                                                            <li key={link}><a href="#" className="text-[15px] text-white hover:text-gray-300">{link}</a></li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </header>
    );
};

export default Worley;