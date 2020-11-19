import Head from 'next/head';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
    <div>
        <Head>
            <link rel="icon" href="/images/favicon.webp" />
            <meta name="description" content="day la cai di co rip san" />
            <link rel="preload" href="//fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap" as="style" />
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==" crossorigin="anonymous" />
        </Head>

        <Header />
        
        {children}

        <Footer />
    </div>
);

export default Layout;