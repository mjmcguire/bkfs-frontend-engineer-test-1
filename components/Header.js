import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/extraction">
            <a style={linkStyle}>Extraction</a>
        </Link>
        <Link href="/classification">
            <a style={linkStyle}>Classification</a>
        </Link>
    </div>
);

export default Header;