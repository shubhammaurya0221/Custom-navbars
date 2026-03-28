import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Menu, X, ArrowUpRight } from 'lucide-react';

const navData = [
  {
    title: 'Markets',
    megaMenu: true,
    columns: [
      {
        title: 'Americas',
        links: [
          { name: 'Argentina', flag: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/67ab304f89cb5422fdc63c54_flag_argentina.svg' },
          { name: 'Brazil', flag: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/69257e8841fadfa837ac6103_Flag_of_Brazil%201.svg' },
          { name: 'Canada', flag: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/67ab304f89cb5422fdc63c38_flag_canada.svg' },
          { name: 'Colombia', flag: 'https://cdn.prod.website-files.com/65c67b2be3af4bcf1aba3377/65c8b7edaeab9fdc642f2c17_flag_colombia.svg' },
          { name: 'Mexico', flag: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/67ab304f89cb5422fdc63ca7_flag_mexico.svg' },
          { name: 'Peru', flag: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/67ab304f89cb5422fdc63f75_flag_peru.svg' },
          { name: 'United States', flag: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/69257f78143a8ccc8e2dd747_Flag_of_the_United_States%20(1)%201.svg' }
        ]
      },
      {
        title: 'Europe',
        links: [
          { name: 'European Union', flag: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/67ab304f89cb5422fdc63bf5_flag_eu.svg' },
          { name: 'Switzerland', flag: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/67ab304f89cb5422fdc63c14_flag_swiss.svg' },
          { name: 'United Kingdom', flag: 'https://cdn.prod.website-files.com/65c67b2be3af4bcf1aba3377/65c8b7891b098f0740c32eac_flag_uk.svg' }
        ]
      },
      {
        title: 'Middle East / Africa',
        links: [
          { name: 'Egypt', flag: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/67ab304f89cb5422fdc63d05_flash_egypt.svg' },
          { name: 'Israel', flag: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/67ab304f89cb5422fdc63c8b_flag_israel.svg' },
          { name: 'Saudi Arabia', flag: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/67ab304f89cb5422fdc63cc0_flag_saudi.svg' },
          { name: 'UAE', flag: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/67ab304f89cb5422fdc63cd7_flag_uae.svg' }
        ]
      },
      {
        title: 'Asia Pacific',
        links: [
          { name: 'Australia', flag: 'https://cdn.prod.website-files.com/65c67b2be3af4bcf1aba3377/65c8b7d7e2795eb339fc6324_flag_australia.svg' },
          { name: 'Bangladesh', flag: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/67ab304f89cb5422fdc63cee_flag_bangladesh.svg' },
          { name: 'China', flag: 'https://cdn.prod.website-files.com/65c67b2be3af4bcf1aba3377/65cf6bc46ab61a00481b544e_flag_china.svg' },
          { name: 'Hong Kong', flag: 'https://cdn.prod.website-files.com/65c67b2be3af4bcf1aba3377/65c8b7f8e2795eb339fc702a_flag_hk.svg' },
          { name: 'India', flag: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/67ab304f89cb5422fdc63c6f_flag_india.svg' },
          { name: 'Indonesia', flag: 'https://cdn.prod.website-files.com/65c67b2be3af4bcf1aba3377/65d1f233f17f19b1fb6e21dd_flag_indonesia.svg' },
          { name: 'Japan', flag: 'https://cdn.prod.website-files.com/65c67b2be3af4bcf1aba3377/65c8b816bf7b6f26de5a2562_flag_japan.svg' },
          { name: 'Malaysia', flag: 'https://cdn.prod.website-files.com/65c67b2be3af4bcf1aba3377/65d1f30476d61ba2f8a274fa_flag_malaysia.svg' },
          { name: 'Pakistan', flag: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/67ab304f89cb5422fdc63d28_flag_pakistan.svg' },
          { name: 'Philippines', flag: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/67ab304f89cb5422fdc63dce_flag_philippines.svg' },
          { name: 'Singapore', flag: 'https://cdn.prod.website-files.com/65c67b2be3af4bcf1aba3377/65d1f1e87650a4f0f3f5ca18_flag_singapore.svg' },
          { name: 'Taiwan', flag: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/67ab304f89cb5422fdc63d9f_flag_taiwan.svg' },
          { name: 'Thailand', flag: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/67ab304f89cb5422fdc63dba_Thailand.svg' },
          { name: 'Vietnam', flag: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/67ab304f89cb5422fdc63d76_flag_vietnam.svg' }
        ]
      }
    ],
    featured: {
      title: 'Pricing',
      description: 'Accelerate market entry with AI-powered dossier compilation and local representation, all for a flat annual fee.',
      actionText: 'Get an estimate',
      image: 'https://www.onetonline.org/image/homepage/bg_online.jpg'
    }
  },
  {
    title: 'Services',
    megaMenu: false,
    hasImages: true,
    links: [
      { 
        name: 'Market Access', 
        desc: 'We offer local representation and registration services across 30 countries.',
        image: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bc7/67af293cef7cf9b1ea436850_menu-market.webp'
      },
      { 
        name: 'Clinical Services', 
        desc: 'With clinical sites in the United States, Europe, and Africa, we support your needs.',
        image: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bc7/67af29a65ea1db9429c1541f_menu-clinical.webp'
      },
      { 
        name: 'Pricing', 
        desc: 'Use our Fee Calculator to get your instant estimate.',
        image: 'https://imgs.search.brave.com/buc8Yx1SZheoINB5L_jpj2Ks8Hnbl4s3BDaoZ9Afs6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b25ldG9ubGluZS5v/cmcvaW1hZ2UvaG9t/ZXBhZ2UvYmdfb25s/aW5lLmpwZw'
      }
    ]
  },
  {
    title: 'Resources',
    megaMenu: false,
    hasImages: true,
    links: [
      { 
        name: 'Insights', 
        desc: 'Regulatory updates, insights, and success stories from our experts.',
        image: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/690adb04a3a2c6f5b259f1bd_indonesia-medtech-import-market-002.png'
      },
      { 
        name: 'Industry Events', 
        desc: 'Meet our experts at global MedTech events for networking and insights.',
        image: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bec/67ab304f89cb5422fdc63f74_event_n_1.webp'
      },
      { 
        name: 'Regulatory News', 
        desc: 'Browse our hub for company news, regulatory updates, and insights.',
        image: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bc7/67acbca6477bce360ab3dbd1_cover-map.webp'
      },
      { 
        name: 'Explore Our Videos', 
        desc: 'Join us for a series of videos and webinars.',
        image: 'https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bc7/67ab53a8e46e3dc2fbbd53d5_cover-news.webp'
      }
    ]
  },
  {
    title: 'Company',
    megaMenu: false,
    hasImages: false,
    links: [
      { name: 'About Us', desc: 'Learn about our company, founders, history, awards, and social impact.' },
      { name: 'Meet Our Team', desc: 'Meet the team behind our solutions and see who represents us in each region.' },
      { name: 'Our Locations', desc: 'See the list of our locally established companies and labs around the world.' },
      { name: 'In The Media', desc: 'Read our team\'s articles published in leading media and industry platforms.' },
      { name: 'Company News', desc: 'Explore our hub for company updates, achievements, and insights.' }
    ]
  }
];

const PureGlobal = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left Section: Logo & Desktop Nav */}
        <div className="flex items-center h-full gap-8">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 z-50">
            <img 
              src="https://cdn.prod.website-files.com/67ab304f89cb5422fdc63bc7/67ab304f89cb5422fdc63cf0_logo_pureglobal.svg" 
              alt="Pure Global Logo" 
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center h-full gap-1">
            {navData.map((item, index) => (
              <div 
                key={item.title}
                className="h-full flex items-center group relative"
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {/* Active Pill Styling on Hover */}
                <button 
                  className={`flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium transition-all duration-200 rounded-lg ${
                    activeMenu === index 
                      ? 'bg-[#f0f4f8] text-[#00185c]' 
                      : 'text-[#00185c] hover:bg-[#f0f4f8]'
                  }`}
                >
                  {item.title}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === index ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                {/* Dropdown Content - CHANGED FROM ABSOLUTE TO FIXED */}
                {activeMenu === index && (
                  <div className="fixed top-20 left-0 w-full bg-[#f8fbff] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-t border-gray-100 overflow-hidden">
                    <div className="max-w-[1440px] mx-auto px-8 py-10">
        
                      {item.megaMenu ? (
                        <div className="grid grid-cols-12 gap-8">
                          {/* 4 Columns for Countries (taking up 9 cols) */}
                          <div className="col-span-9 grid grid-cols-4 gap-8">
                            {item.columns.map((col) => (
                              <div key={col.title}>
                                <h4 className="text-[13px] font-semibold uppercase tracking-widest text-[#4a5fc1] mb-5">{col.title}</h4>
                                <ul className="space-y-4">
                                  {col.links.map(link => (
                                    <li key={link.name}>
                                      <a href="#" className="flex items-center gap-3 text-[15px] font-medium text-[#00185c] hover:text-blue-600 transition-colors">
                                        <img src={link.flag} alt={`${link.name} flag`} className="w-[22px] h-auto rounded-[2px] shadow-sm" />
                                        {link.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          
                          {/* 1 Column for Featured Pricing (taking up 3 cols) */}
                          {item.featured && (
                            <div className="col-span-3 border-l border-gray-200 pl-8">
                              <h4 className="text-[13px] font-semibold uppercase tracking-widest text-[#4a5fc1] mb-5">{item.featured.title}</h4>
                              <a href="#" className="group flex flex-col gap-4">
                                <div className="w-full rounded-lg border border-gray-100 overflow-hidden shadow-sm">
                                  <img src={item.featured.image} alt={item.featured.title} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div>
                                  <h4 className="text-[20px] font-light text-[#4a5fc1] flex items-center gap-1 group-hover:text-blue-700 transition-colors mb-2">
                                    Use Our Fee Calculator To Get Your Instant Estimat...
                                  </h4>
                                  <p className="text-[15px] text-[#00185c] leading-relaxed">
                                    {item.featured.description}
                                  </p>
                                </div>
                              </a>
                            </div>
                          )}
                        </div>
                      ) : item.hasImages ? (
                        /* Image Card Layout for Services & Resources */
                        <div className={`grid gap-8 ${item.links.length > 3 ? 'grid-cols-4' : 'grid-cols-3'}`}>
                          {item.links.map((link) => (
                            <a href="#" key={link.name} className="group flex flex-col gap-4">
                              <h4 className="text-[22px] font-light text-[#4a5fc1] flex items-center gap-1 group-hover:text-blue-700 transition-colors">
                                {link.name} <ChevronRight className="w-5 h-5 mt-0.5" />
                              </h4>
                              <div className="w-full h-40 overflow-hidden rounded-lg border border-gray-100 shadow-sm bg-white">
                                <img src={link.image} alt={link.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                              </div>
                              <p className="text-[15px] text-[#00185c] leading-snug font-medium pr-4">{link.desc}</p>
                            </a>
                          ))}
                        </div>
                      ) : (
                        /* Standard Text Layout for Company */
                        <div className="grid grid-cols-3 gap-6">
                          {item.links.map((link) => (
                            <a href="#" key={link.name} className="group p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                              <h4 className="text-[16px] font-bold text-[#00185c] mb-2 group-hover:text-blue-600">{link.name}</h4>
                              <p className="text-sm text-gray-500 line-clamp-2">{link.desc}</p>
                            </a>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right Section: Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="px-5 py-2.5 text-sm font-bold text-[#00185c] bg-[#a9f5d3] hover:bg-[#8ee8c2] transition-colors rounded-md border border-[#8ae5be]">
            Pricing
          </a>
          <a href="#" className="px-5 py-2.5 text-sm font-bold text-white bg-[#335ddc] hover:bg-[#2a4ec2] transition-colors rounded-md">
            Contact us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-[#00185c]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-20 bg-white overflow-y-auto transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-6 space-y-2">
          
          {/* Mobile Accordions */}
          {navData.map((item, index) => {
            const isExpanded = mobileExpandedSection === index;
            return (
              <div key={item.title} className="border-b border-gray-100 last:border-0 pb-2">
                <button 
                  onClick={() => setMobileExpandedSection(isExpanded ? null : index)}
                  className="flex items-center justify-between w-full py-4 text-lg font-bold text-[#00185c]"
                >
                  {item.title}
                  <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
                
                {isExpanded && (
                  <div className="pb-4 pl-4 bg-gray-50 rounded-lg p-4">
                    {item.megaMenu ? (
                      <div className="space-y-6">
                        {item.columns.map(col => (
                          <div key={col.title}>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4a5fc1] mb-3">{col.title}</h4>
                            <ul className="space-y-4">
                              {col.links.map(link => (
                                <li key={link.name}>
                                  <a href="#" className="flex items-center gap-3 text-[15px] font-medium text-[#00185c]">
                                    <img src={link.flag} alt={`${link.name} flag`} className="w-5 h-auto rounded-[2px] shadow-sm" />
                                    {link.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : item.hasImages ? (
                      <div className="flex flex-col gap-6">
                        {item.links.map(link => (
                          <a href="#" key={link.name} className="flex flex-col gap-3">
                            <h4 className="text-[18px] font-bold text-[#4a5fc1] flex items-center gap-1">
                              {link.name} <ChevronRight className="w-4 h-4" />
                            </h4>
                            <div className="w-full h-32 overflow-hidden rounded-lg border border-gray-100 bg-white">
                               <img src={link.image} alt={link.name} className="w-full h-full object-cover" />
                            </div>
                            <p className="text-sm text-gray-600 font-medium">{link.desc}</p>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-4">
                        {item.links.map(link => (
                          <li key={link.name}>
                            <a href="#" className="text-[15px] font-medium text-[#00185c]">{link.name}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            )
          })}

          {/* Mobile Action Buttons */}
          <div className="pt-6 flex flex-col gap-3">
            <a href="#" className="w-full py-3 text-center text-[15px] font-bold text-[#00185c] bg-[#a9f5d3] rounded-md border border-[#8ae5be]">
              Pricing
            </a>
            <a href="#" className="w-full py-3 text-center text-[15px] font-bold text-white bg-[#335ddc] rounded-md">
              Contact us
            </a>
            <a href="#" className="w-full py-3 text-center text-[15px] font-bold text-[#00185c] flex items-center justify-center gap-2 mt-2">
              Client Log in
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default PureGlobal;