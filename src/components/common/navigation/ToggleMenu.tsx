import { Icon } from '@iconify/react';
import { useState } from 'react';
import { getLangFromUrl, useTranslations } from '../../../i18n/utils';
import type { Link } from './Link';

interface Props {
    links: Link[];
    url: URL
}

export default function ToggleMenu({ links, url }: Props) {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu(): void {
        setMenuOpen(!menuOpen);
    }

    const lang = getLangFromUrl(url);
    const t = useTranslations(lang);

    return (
        <>
            <div className="flex flex-col items-center">
                <button onClick={toggleMenu}>
                    <Icon icon="material-symbols:menu-rounded" height={30} width={30} className={`text-white fixed transition duration-150 ${menuOpen ? 'scale-0' : 'scale-100'}`} key={'icon-open'}/>
                    <Icon icon="material-symbols:close-rounded" height={30} width={30} className={`text-white transition duration-150 ${menuOpen ? 'scale-100' : 'scale-0'}`} key={'icon-close'}/>
                </button>
            </div>
            <div className={`absolute w-[100vw] top-[48px] left-0 bg-primary text-white ${menuOpen ? 'visible' : 'hidden'}`}>
               {links.map((l: Link) => (
                <a href={l.href} className='text-lg p-5 flex flex-col hover:bg-primary-dark ml-5 transition duration-500'>
                    {t(l.languageKey)}
                    </a>
                ))}
            </div>
        </>)
}
