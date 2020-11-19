import Link from 'next/link';

const Footer = () => (
    <footer id="footer">
        <div className="container my-2">
            <div className="d-md-flex justify-content-between">
                <div className="f-left">
                    <div className="text-md-left text-center">
                        <div className="f-logo"><img src="/images/logo.png" srcSet="/images/logo@2x.png 2x" alt="fxInsites" /></div>
                        <p className="f-sologan">Một sản phẩm của CTCP Insites Việt Nam</p>
                    </div>
                    <nav className="social-nav mt-3 pt-1 text-center d-md-none">
                        <Link href="https://www.facebook.com/groups/2682496968657269/"><a target="_blank"><i className="icon-fb icon-fb--white"></i></a></Link>
                        <Link href="https://t.me/joinchat/AAAAAFLCMqFR_H-mImrL_Q"><a target="_blank" className="ml-lg-3 ml-xl-4"><i className="icon-tele icon-tele--white"></i></a></Link>
                        <Link href="https://zalo.me/g/pzdece167"><a target="_blank" className="ml-lg-3 ml-xl-4"><i className="icon-zalo icon-zalo--white"></i></a></Link>
                    </nav>
                    <div className="f-contact text-md-left text-center">
                        <p className="mb-2 mb-md-3">Tầng 3, Vietcomreal Tower<br />
                        Số 68 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM</p>
                        <p className="mb-4 pb-2">Email: marketing@insites.com.vn</p>
                        <p className="mb-0"><a href="tel:0906326177" className="btn btn-outline-light btn-tel ml-auto mr-auto mx-md-0"><i className="icon-tel icon-tel--white mr-2 mr-md-3"></i>0906 326 177</a></p>
                    </div>
                </div>
                <div className="f-right">
                    <ul className="f-list-nav d-md-none">
                        <li><a href="#">Tìm kiếm sàn forex</a></li>
                        <li><a href="#">Đánh giá sàn forex</a></li>
                        <li><a href="#">So sánh sàn forex</a></li>
                        <li><a href="#">Phân tích thị trường</a></li>
                        <li><a href="#">Tín hiệu giao dịch</a></li>
                        <li><a href="#">Tin khuyến mãi</a></li>
                        <li><a href="#">Tin kinh tế</a></li>
                        <li><a href="#">Tỉ giá Forex</a></li>
                        <li><a href="#">Giá vàng</a></li>
                    </ul>
                    <div className="f-form mb-md-5 pb-md-1">
                        <form id="subscribe-form" action="#" method="post" noValidate>
                            <p className="text-md-left text-center">Đăng ký nhận tin khuyến mãi mới nhất<br className="d-md-none" /> từ các sàn giao dịch</p>
                            <div className="d-flex">
                                <input type="email" name="subcribe-email" className="form-control form-control--mail" placeholder="Nhập email tại đây..." required />
                                <button type="submit" name="search" className="btn btn-primary btn-send">Gửi</button>
                            </div>
                        </form>
                    </div>
                    <div className="d-none d-md-flex justify-content-between">
                        <div className="f-col">
                            <h3 className="f-nav-ttl">Tiện ích</h3>
                            <ul>
                                <li><a href="#">Tìm kiếm sàn forex</a></li>
                                <li><a href="#">So sánh sàn forex</a></li>
                                <li><a href="#">Đánh giá sàn forex</a></li>                            
                                <li><a href="#">Tín hiệu giao dịch</a></li>
                            </ul>
                        </div>
                        <div className="f-col">
                            <h3 className="f-nav-ttl">Tin tức</h3>
                            <ul>
                                <li><a href="#">Khuyến mãi</a></li>
                                <li><a href="#">Đánh giá sàn forex</a></li>
                                <li><a href="#">Phân tích thị trường</a></li>
                                <li><a href="#">Lịch kinh tế</a></li>
                            </ul>
                        </div>
                        <div className="f-col">
                            <h3 className="f-nav-ttl">Thông tin</h3>
                            <ul>
                                <li><a href="#">Liên hệ</a></li>
                            </ul>
                            <nav className="social-nav">
                                <Link href="https://www.facebook.com/groups/2682496968657269/"><a target="_blank"><i className="icon-fb icon-fb--white"></i></a></Link>
                                <Link href="https://t.me/joinchat/AAAAAFLCMqFR_H-mImrL_Q"><a target="_blank" className="ml-lg-3 ml-xl-4"><i className="icon-tele icon-tele--white"></i></a></Link>
                                <Link href="https://zalo.me/g/pzdece167"><a target="_blank" className="ml-lg-3 ml-xl-4"><i className="icon-zalo icon-zalo--white"></i></a></Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;