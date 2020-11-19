import Head from 'next/head';

const Layout = ({ children }) => (
    <div>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="day la cai di co rip san" />
            <link rel="preload" href="//fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap" as="style" />
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==" crossorigin="anonymous" />
        </Head>

        <header id="header">
            <div className="container">
                <div className="d-flex justify-content-center justify-content-md-between align-items-center py-3 py-lg-4 pb-md-0">
                    <div className="logo"><a href="./"><img src="/images/logo.png" srcSet="assets/images/logo@2x.png 2x" alt="fxInsites" /></a></div>
                    <a href="tel:0906326177" className="btn btn-outline-primary btn-tel d-none d-lg-flex"><i className="icon-tel mr-3"></i>0906 326 177</a>
                </div>
            </div>
        </header>
        {children}
    </div>
);

export default Layout;