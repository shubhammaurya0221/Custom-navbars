import React, { useState, useEffect, useRef } from 'react';
import {
  Search, Globe, ChevronRight, ChevronDown, Menu, X,
  Wheat, FlaskConical, Atom, Droplets, Wind, Zap, Plane, Recycle,
  Wrench, Warehouse,
} from 'lucide-react';
import { navItems } from '../../data/data';

/* ─── Lucide icon lookup map ─── */
const ICON_MAP = {
  Wheat, FlaskConical, Atom, Droplets, Wind, Zap, Plane, Recycle,
  Wrench, Warehouse,
};

/* ─── helper: what kind of nav item is this? ─── */
const getItemType = (item) => {
  if (item.categories?.length > 0) return 'categories';
  if (item.links?.length > 0) return 'links';
  return 'overview';
};

/* ─── EPC service card: icon · title · description ─── */
const EpcCard = ({ link, delay }) => {
  const IconComponent = ICON_MAP[link.icon];
  return (
    <a
      href={link.path}
      className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-200"
      style={{ opacity: 0, animation: `fadeSlideRight 0.4s ease-out ${delay}ms forwards` }}
    >
      <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-green-700 bg-green-950 group-hover:border-green-400 transition-colors duration-200">
        {IconComponent
          ? <IconComponent size={18} className="text-green-400" />
          : <span className="text-lg">{link.icon}</span>
        }
      </span>
      <div className="flex flex-col min-w-0">
        <span className="text-[13px] font-semibold text-white group-hover:text-green-400 transition-colors leading-tight">
          {link.name}
        </span>
        {link.description && (
          <span className="text-[11px] text-gray-400 mt-0.5 leading-snug">
            {link.description}
          </span>
        )}
      </div>
    </a>
  );
};

/* ═══════════════════════════════════════════════
   DROPDOWN PANELS — rendered inside <header>
   so "absolute left-0 w-full" = full viewport width
   ═══════════════════════════════════════════════ */

/* Solutions — 3-column mega menu */
const CategoriesDropdown = ({ item, onClose }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <div
      className="absolute top-full left-0 w-full bg-[#111] shadow-2xl border-t border-gray-700 z-40 animate-drop-down"
      style={{ minHeight: 400 }}
    >
      <div className="max-w-7xl mx-auto flex p-10 gap-0">


        {/* Col 2 — category tabs */}
        <div className="w-48 px-7 border-r border-gray-700 flex-shrink-0 animate-column-2">
          <ul className="space-y-2">
            {item.categories.map((cat, catIdx) => (
              <li
                key={cat.name}
                onMouseEnter={() => setActiveCategory(catIdx)}
                className={`flex justify-between items-center cursor-pointer text-[13px] pb-2 border-b border-gray-800 transition-colors duration-150 ${
                  activeCategory === catIdx ? 'text-green-400 font-semibold' : 'text-gray-300 hover:text-white'
                }`}
              >
                {cat.name}
                <ChevronRight
                  size={14}
                  className={`transition-opacity ${activeCategory === catIdx ? 'opacity-100 text-green-400' : 'opacity-0'}`}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — link cards */}
        <div key={activeCategory} className="flex-1 pl-8 animate-column-3">
          <div className="grid grid-cols-2 gap-1">
            {item.categories[activeCategory]?.links?.map((link, idx) =>
              typeof link === 'object' ? (
                <EpcCard key={link.name} link={link} delay={idx * 35} />
              ) : (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-400 hover:text-white text-sm py-2 px-3 transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </div>

          {item.categories[activeCategory]?.links?.length > 0 && (
            <div className="mt-5 flex justify-end border-t border-gray-800 pt-4">
              <a
                href={item.categories[activeCategory]?.path || '#'}
                className="text-sm font-semibold text-green-500 hover:text-green-400 flex items-center gap-1"
              >
                VIEW ALL <ChevronRight size={14} />
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

/* Resources / Company / Career — overview + flat links */
const LinksDropdown = ({ item }) => (
  <div
    className="absolute top-full left-0 w-full bg-[#111] shadow-2xl border-t border-gray-700 z-40 animate-drop-down"
    style={{ minHeight: 260 }}
  >
    <div className="max-w-7xl mx-auto flex p-10 gap-0">

      {/* Col 1 — overview */}
      <div className="w-80 pr-10 border-r border-gray-700 flex-shrink-0 animate-column-1">
        <h3 className="text-xl font-light mb-3 text-white leading-snug">{item.overview.heading}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.overview.description}</p>
        <a
          href={item.overview.ctaPath || '#'}
          className="inline-block px-5 py-2 border border-white text-white text-sm font-medium rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          {item.overview.cta}
        </a>
      </div>

      {/* Col 2 — flat links */}
      <div className="flex-1 pl-10 animate-column-2 flex items-start">
        <ul className="space-y-4 w-full">
          {item.links?.map((link, idx) => (
            <li
              key={link.name || link}
              style={{ opacity: 0, animation: `fadeSlideRight 0.4s ease-out ${200 + idx * 50}ms forwards` }}
            >
              <a
                href={typeof link === 'object' ? link.path : '#'}
                className="group flex items-center gap-2 text-[15px] text-gray-300 hover:text-green-400 font-medium transition-colors duration-200"
              >
                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 text-green-400 transition-opacity" />
                {typeof link === 'object' ? link.name : link}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
);

/* CCU — overview-only panel */
const OverviewDropdown = ({ item }) => (
  <div
    className="absolute top-full left-0 w-full bg-[#111] shadow-2xl border-t border-gray-700 z-40 animate-drop-down"
    style={{ minHeight: 220 }}
  >
    <div className="max-w-7xl mx-auto flex items-center p-10">
      <div className="max-w-lg animate-column-1">
        <h3 className="text-xl font-light mb-3 text-white leading-snug">{item.overview.heading}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.overview.description}</p>
        <a
          href={item.overview.ctaPath || '#'}
          className="inline-block px-5 py-2 border border-white text-white text-sm font-medium rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          {item.overview.cta}
        </a>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════
   MAIN HEADER
   ═══════════════════════════════════════════════ */
const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
  const [mobileActiveCategory, setMobileActiveCategory] = useState(null);

  const headerRef = useRef(null);

  /* close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const activeItem = activeMenu !== null ? navItems[activeMenu] : null;
  const activeType = activeItem ? getItemType(activeItem) : null;

  return (
    <>
      <header
        ref={headerRef}
        className="fixed w-full top-0 z-50 bg-[#111] text-white font-sans border-b border-gray-800"
        /* ↑ 'fixed' + no 'overflow-hidden' lets the dropdown extend below */
      >
        {/* ── Top bar ── */}
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">

          {/* Logo */}
          <a href="/" className="text-2xl font-bold tracking-wider text-green-500 z-50">
            Treebay Tech
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center h-20 space-x-1">
            {navItems.map((item, index) => {
              const isOpen = activeMenu === index;
              return (
                <button
                  key={item.title}
                  className={`h-full flex items-center px-4 cursor-pointer transition-colors duration-200 focus:outline-none ${
                    isOpen ? 'bg-white/10 text-green-400' : 'hover:bg-white/5'
                  }`}
                  onClick={() => setActiveMenu(isOpen ? null : index)}
                >
                  <span className="text-[15px] font-semibold tracking-wide">{item.title}</span>
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180 text-green-500' : ''}`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="text-gray-300 hover:text-white transition-colors"><Search size={20} /></button>
            <button className="text-gray-300 hover:text-white transition-colors"><Globe size={20} /></button>
            <a href="/contact" className="text-[15px] font-medium text-gray-300 hover:text-white transition-colors">
              Contact us
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors"><Search size={22} /></button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* ── Desktop Dropdowns (rendered here so absolute = full-width header) ── */}
        {activeItem && activeType === 'categories' && <CategoriesDropdown item={activeItem} />}
        {activeItem && activeType === 'links'      && <LinksDropdown      item={activeItem} />}
        {activeItem && activeType === 'overview'   && <OverviewDropdown   item={activeItem} />}

        {/* ══════════════════════════════════════
            MOBILE DRAWER
        ══════════════════════════════════════ */}
        <div
          className={`lg:hidden fixed inset-0 top-20 bg-[#111] overflow-y-auto transition-transform duration-300 ease-in-out z-30 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col px-6 py-4 space-y-1">
            {navItems.map((item, index) => {
              const type = getItemType(item);
              const isOpen = mobileActiveMenu === index;

              return (
                <div key={item.title} className="border-b border-gray-800 py-1">
                  <button
                    className="flex justify-between items-center w-full text-left font-semibold text-lg py-3 focus:outline-none"
                    onClick={() => {
                      setMobileActiveMenu(isOpen ? null : index);
                      setMobileActiveCategory(null);
                    }}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-green-400' : 'text-gray-400'}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pb-4 pl-2 flex flex-col gap-3">

                      {/* Overview card */}
                      <div className="bg-gray-900 p-4 rounded-lg animate-slide-left">
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">{item.overview.description}</p>
                        <a
                          href={item.overview.ctaPath || '#'}
                          className="text-green-400 text-sm font-medium flex items-center hover:text-green-300 transition-colors"
                        >
                          {item.overview.cta} <ChevronRight size={15} className="ml-1" />
                        </a>
                      </div>

                      {/* Categories accordion */}
                      {type === 'categories' && item.categories.map((cat, catIdx) => (
                        <div key={cat.name} className="animate-slide-left" style={{ animationDelay: `${(catIdx + 1) * 60}ms` }}>
                          <button
                            className={`flex justify-between items-center w-full text-left py-2.5 text-[15px] font-medium focus:outline-none transition-colors ${
                              mobileActiveCategory === catIdx ? 'text-green-400' : 'text-gray-300'
                            }`}
                            onClick={() => setMobileActiveCategory(mobileActiveCategory === catIdx ? null : catIdx)}
                          >
                            {cat.name}
                            <ChevronDown
                              size={17}
                              className={`transition-transform duration-300 ${mobileActiveCategory === catIdx ? 'rotate-180' : ''}`}
                            />
                          </button>

                          {mobileActiveCategory === catIdx && (
                            <ul className="flex flex-col gap-2 pl-4 border-l border-gray-700 ml-2 mb-2">
                              {cat.links?.map((link, li) => (
                                <li key={li} className="animate-slide-left">
                                  {typeof link === 'object' ? (
                                    <a href={link.path} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors py-1">
                                      {link.icon && <span>{link.icon}</span>}
                                      {link.name}
                                    </a>
                                  ) : (
                                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors py-1 block">{link}</a>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}

                      {/* Flat links */}
                      {type === 'links' && (
                        <ul className="flex flex-col gap-2 pl-2">
                          {item.links.map((link, li) => (
                            <li key={li}>
                              <a
                                href={typeof link === 'object' ? link.path : '#'}
                                className="flex items-center gap-2 text-[15px] text-gray-300 hover:text-green-400 font-medium transition-colors py-1"
                              >
                                <ChevronRight size={13} className="text-green-500" />
                                {typeof link === 'object' ? link.name : link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-6 pb-10 space-y-5">
              <button className="flex items-center text-gray-300 hover:text-white transition-colors w-full text-left font-semibold text-lg">
                <Globe size={22} className="mr-3" /> Global (En)
              </button>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors font-semibold text-lg">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;