import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef(null);
    const activeBox = useRef(null);
    const sections = useRef([]); // Refs for sections

    const initActiveBox = () => {
        if (lastActiveLink.current) {
            activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
            activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
            activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
            activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
        }
    };

    useEffect(initActiveBox, []);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;

        activeBox.current.style.top = event.target.offsetTop + 'px';
        activeBox.current.style.left = event.target.offsetLeft + 'px';
        activeBox.current.style.width = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight + 'px';
    };

    // Scroll handler to detect section in view
    const handleScroll = () => {
        sections.current.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                // Active the corresponding nav link
                const navItem = document.querySelectorAll('.nav-link')[index];
                lastActiveLink.current?.classList.remove('active');
                navItem.classList.add('active');
                lastActiveLink.current = navItem;

                // Update the active box position
                activeBox.current.style.top = navItem.offsetTop + 'px';
                activeBox.current.style.left = navItem.offsetLeft + 'px';
                activeBox.current.style.width = navItem.offsetWidth + 'px';
                activeBox.current.style.height = navItem.offsetHeight + 'px';
            }
        });
    };

    useEffect(() => {
        // Grab all sections that correspond to the nav items
        sections.current = document.querySelectorAll("section");

        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);

        return () => {
            // Cleanup on component unmount
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Skills',
            link: '#skills',
            className: 'nav-link',
        },
        {
            label: 'Projects',
            link: '#projects',
            className: 'nav-link'
        },
        {
            label: 'Blogspot',
            link: '#blogspot',
            className: 'nav-link'
        },
        // {
        //     label: 'Contact',
        //     link: '#contact',
        //     className: 'nav-link md:hidden'
        // }
    ];

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {navItems.map((item, index) => (
                <a
                    key={index}
                    href={item.link}
                    className={item.className}
                    ref={item.ref}
                    onClick={activeCurrentLink}
                >
                    {item.label}
                </a>
            ))}

            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
};

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
};

export default Navbar;
