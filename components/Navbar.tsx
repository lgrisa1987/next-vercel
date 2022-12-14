import ActiveLink from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
  { text: 'Pricing', href: '/pricing' },
];

const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {menuItems.map(({ text, href }) => (
        <ActiveLink href={href} text={text} key={href} />
      ))}
    </nav>
  );
};

export default Navbar;
