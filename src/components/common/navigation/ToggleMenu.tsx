import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';
import { getLangFromUrl, useTranslations } from '../../../i18n/utils';
import type { Link } from './Link';

export default function ToggleMenu({ links, url }: { links: Link[]; url: URL }) {
    const [menuOpen, setMenuOpen] = useState(false);
    function toggleMenu() {
        setIsComponentVisible(true);
        setMenuOpen(!menuOpen);
    }

    const lang = getLangFromUrl(url);
    const t = useTranslations(lang);

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
        <>
            <div ref={ref} className="mr-2">
                <div className="flex flex-col items-center">
                    <button onClick={toggleMenu} aria-label="dropdown menu">
                        <Icon icon="material-symbols:menu-rounded" height={30} width={30} className={`text-white fixed transition duration-150 ${menuOpen ? 'scale-0' : 'scale-100'}`} key={'icon-open'} />
                        <Icon icon="material-symbols:close-rounded" height={30} width={30} className={`text-white transition duration-150 ${menuOpen ? 'scale-100' : 'scale-0'}`} key={'icon-close'} />
                    </button>
                </div>
                {isComponentVisible &&
                    <div className={`absolute w-[100vw] top-[64px] left-0 bg-primary text-white ${menuOpen ? 'visible' : 'hidden'}`}>
                        {links.map((l: Link) => (
                            <a href={l.href} className='text-lg p-5 flex flex-col hover:bg-primary-dark ml-5 transition duration-500' key={l.key}>
                                {t(l.languageKey)}
                            </a>
                        ))}
                    </div>}
            </div>
        </>)
}
