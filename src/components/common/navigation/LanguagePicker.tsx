import { Icon } from "@iconify/react";
import { useState, useEffect, useRef } from "react";
import { defaultLang, languages } from "../../../i18n/ui";
import { getLangFromUrl } from "../../../i18n/utils";
import { getRelativeLocaleUrl } from "astro:i18n";

export default function LanguagePicker({ url }: { url: URL }) {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setIsComponentVisible(true);
    setMenuOpen(!menuOpen);
  }
  const lang = languages.find(l => l.key === getLangFromUrl(url)) ?? defaultLang;
  const currentPath = url.pathname.split('/').findLast(u => u && !languages.some(l => l.key === u)) ?? '';

  const [isComponentVisible, setIsComponentVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsComponentVisible(false);
      setMenuOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && event.target instanceof Element && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <div className="inline-block text-left m-1" ref={ref}>
      <div>
        <button
          type="button"
          id="languageDropdownButton"
          className="text-muted mr-2 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
          aria-expanded="true"
          aria-haspopup="true"
          aria-label="language-picker"
          onClick={toggleMenu}
        >
          <Icon icon={lang.icon} className="h-5 w-5 " />
        </button>
      </div>
      {isComponentVisible && (
        <div
          className={`${menuOpen ? "visible" : "hidden"
            } absolute z-10 right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          tabIndex={-1}
        >
          <div className="py-1 flex-row" role="none">
            {languages.map((language, i) => (
              <a
                key={i}
                href={`${getRelativeLocaleUrl(language.key, currentPath)}`}
                className="text-gray-700 px-4 py-2 text-sm flex justify-items-start hover:bg-gray-100"
                role="menuitem"
                tabIndex={-1}
                id={`menu-item-${i}-${language.key}`}
              >
                <div className="flex-col flex w-5 h-5 items-center justify-center">
                  <Icon icon={language?.icon} className="flex mr-2" />
                </div>
                <span className="align-middle">{language.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
