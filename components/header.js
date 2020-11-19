import Link from 'next/link';

const Header = () => (
    <header id="header">
        <div className="container">
            <div className="d-flex justify-content-center justify-content-md-between align-items-center py-3 py-lg-4 pb-md-0">
                <div className="logo"><a href="./"><img src="/images/logo.png" srcSet="assets/images/logo@2x.png 2x" alt="fxInsites" /></a></div>
                <a href="tel:0906326177" className="btn btn-outline-primary btn-tel d-none d-lg-flex"><i className="icon-tel mr-3"></i>0906 326 177</a>
            </div>

            <nav className="navbar navbar-expand-lg mt-md-4">
                <button className="navbar-toggler" type="button" data-toggle="modal" data-target="#navigation">
                    <span className="hamburger-box"><span className="hamburger-inner"></span></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navigation">
                    <div className="text-right mb-3 d-lg-none">
                        <button type="button" className="btn btn-close p-0" data-dismiss="modal"><img src="/images/icons/icon-close.svg" alt="Close" /></button>
                    </div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active d-none d-lg-block">
                            <Link href="/"><a className="nav-link">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/tim-kiem/"><a className="nav-link"><span className="nav-link-icon icon-search2"></span>Tìm kiếm</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/so-sanh/"><a className="nav-link"><span className="nav-link-icon icon-exchange"></span>So sánh</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/so-sanh/"><a className="nav-link"><span className="nav-link-icon icon-review"></span>Đánh giá</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/so-sanh/"><a className="nav-link"><span className="nav-link-icon icon-chart"></span>Sàn giao dịch uy tín</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/so-sanh/"><a className="nav-link"><span className="nav-link-icon icon-help"></span>Hỗ trợ tiện tích</a></Link>
                            <ul className="navbar-nav-sub">
                                <li className="nav-item"><Link href="/so-sanh/"><a className="nav-link">Tín hiệu giao dịch</a></Link></li>
                                <li className="nav-item"><Link href="/so-sanh/"><a className="nav-link">Lịch kinh tế</a></Link></li>
                                <li className="nav-item"><Link href="/so-sanh/"><a className="nav-link">Giá vàng</a></Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href="/so-sanh/"><a className="nav-link"><span className="nav-link-icon icon-phone"></span>Liên hệ</a></Link>
                        </li>
                    </ul>
                    <div className="h-social">
                        <Link href="https://www.facebook.com/groups/2682496968657269/"><a target="_blank"><i className="icon-fb"></i></a></Link>
                        <Link href="https://t.me/joinchat/AAAAAFLCMqFR_H-mImrL_Q"><a target="_blank" className="ml-lg-3 ml-xl-4"><i className="icon-tele"></i></a></Link>
                        <Link href="https://zalo.me/g/pzdece167"><a target="_blank" className="ml-lg-3 ml-xl-4"><i className="icon-zalo"></i></a></Link>
                    </div>
                </div>
            </nav>
        </div>
    </header>
);

export default Header;