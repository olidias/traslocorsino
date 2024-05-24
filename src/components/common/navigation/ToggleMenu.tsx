import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';
import { getLangFromUrl, useTranslations } from '../../../i18n/utils';
import type { Link } from './Link';

export default function ToggleMenu({ links, url }: { links: Link[]; url: URL }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const closeIconRef = useRef(null);

    function toggleMenu(): void {
        setMenuOpen(!menuOpen);
    }

    const lang = getLangFromUrl(url);
    const t = useTranslations(lang);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
            else {
                setMenuOpen(true);
            }
        }
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [menuRef]);

    return (
        <>
            <div className="flex flex-col items-center" ref={menuRef}>
                <button onClick={toggleMenu} ref={closeIconRef}>
                    <Icon icon="material-symbols:menu-rounded" height={30} width={30} className={`text-white fixed transition duration-150 ${menuOpen ? 'scale-0' : 'scale-100'}`} key={'icon-open'} />
                    <Icon icon="material-symbols:close-rounded" height={30} width={30} className={`text-white transition duration-150 ${menuOpen ? 'scale-100' : 'scale-0'}`} key={'icon-close'} />
                </button>
            </div>
            <div className={`absolute w-[100vw] top-[48px] left-0 bg-primary text-white ${menuOpen ? 'visible' : 'hidden'}`}>
                {links.map((l: Link) => (
                    <a href={l.href} className='text-lg p-5 flex flex-col hover:bg-primary-dark ml-5 transition duration-500' key={l.key}>
                        {t(l.languageKey)}
                    </a>
                ))}
            </div>
        </>)
}
