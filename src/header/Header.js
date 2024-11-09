import '../css/Header.css'

import { useState, useEffect } from 'react';

export default function Header(){

    const [headerHeight, setHeaderHeight] = useState('15vh');
    const [comapnyNamePadding, setCompanyNamePadding] = useState('2.5%');

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) { // Adjust scroll threshold as needed
            setHeaderHeight('10vh'); // Shrink height when scrolled down
            setCompanyNamePadding('2vh'); // Shrink height when scrolled down
        } else {
            setHeaderHeight('15vh'); // Original height at the top
            setCompanyNamePadding('5vh'); // Original height at the top
        }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ height: headerHeight }} className='initial-ht backgr'>
            <div style={{ paddingTop: comapnyNamePadding }} className='company-name-text'>Percieve.IN</div>
        </div>
    )
}