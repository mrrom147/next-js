import { TabContent, TabPane, Nav, NavLink, Row, Col, Container } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import Slider from "react-slick";


import CustomArrow from '../slickArrow';

const ReviewTab = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const settings = {
        prevArrow: <CustomArrow className="slick-prev"><i className="fa fa-angle-left" aria-hidden="true"></i></CustomArrow>,
        nextArrow: <CustomArrow className="slick-next"><i className="fa fa-angle-right" aria-hidden="true"></i></CustomArrow>
    };

    return (
        <Col md="7" lg="7" xl="9" className="home-content mb-5 mb-md-0">
            <h2 className="title-h2">Đánh giá sàn Forex nổi bật</h2>
            <Nav tabs className="home-nav-tabs nav-tabs--noborder border-bottom-0">
                <NavLink 
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => { toggle('1'); }}>
                        Xếp hạng cao nhất
                </NavLink>
                <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => { toggle('2'); }}
                >
                    Xếp hạng thấp nhất
                </NavLink>
            </Nav>
            <TabContent activeTab={activeTab} className="mt-3 mt-md-4 pt-md-2">
                <TabPane tabId="1">
                <div className="home-review-item">
                        <Row>
                            <Col lg="6" className="home-review-item__left mb-3 mb-lg-0">
                                <Row className="align-items-center">
                                    <Col xs="6" md="7" className="home-review-item__logo"><img src="/images/logo/xtb.png" alt="XTB" /></Col>
                                    <Col xs="6" md="5" className="home-review-item__info">
                                        <h3 className="home-review-item__name">Fx Trading</h3>
                                        <div className="review-info">
                                            <div className="review-star">
                                                <span className="home-review-item__star">
                                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                                </span>
                                                <span className="home-review-item__star review-star__mask">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </span>
                                            </div>
                                            <span className="home-review-item__count review-count">30 đánh giá</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="6" className="home-review-item__right">
                                <Slider className="home-review-item__slider" {...settings}>
                                    <div className="home-review-item__slide">Sàn này tốt lắm, nhiều bonus cho những người mới chơi như mình. Hỗ trợ nhiệt tình, rút tiền nhanh chóng</div>
                                    <div className="home-review-item__slide">Sàn này tốt lắm, nhiều bonus cho những người mới chơi như mình. Hỗ trợ nhiệt tình, rút tiền nhanh chóng</div>
                                    <div className="home-review-item__slide">Sàn này tốt lắm, nhiều bonus cho những người mới chơi như mình. Hỗ trợ nhiệt tình, rút tiền nhanh chóng</div>
                                </Slider>
                                <p className="mb-0 text-center text-md-right"><Link href="/so-sanh/"><a className="btn btn-link font-14 p-0">Xem chi tiết</a></Link></p>
                            </Col>
                        </Row>
                    </div>
                    <div className="home-review-item">
                        <Row>
                            <Col lg="6" className="home-review-item__left mb-3 mb-lg-0">
                                <Row className="align-items-center">
                                    <Col xs="6" md="7" className="home-review-item__logo"><img src="/images/logo/xtb.png" alt="XTB" /></Col>
                                    <Col xs="6" md="5" className="home-review-item__info">
                                        <h3 className="home-review-item__name">Fx Trading</h3>
                                        <div className="review-info">
                                            <div className="review-star">
                                                <span className="home-review-item__star">
                                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                                </span>
                                                <span className="home-review-item__star review-star__mask">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </span>
                                            </div>
                                            <span className="home-review-item__count review-count">30 đánh giá</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="6" className="home-review-item__right">
                                <Slider className="home-review-item__slider" {...settings}>
                                    <div className="home-review-item__slide">Sàn này tốt lắm, nhiều bonus cho những người mới chơi như mình. Hỗ trợ nhiệt tình, rút tiền nhanh chóng</div>
                                    <div className="home-review-item__slide">Sàn này tốt lắm, nhiều bonus cho những người mới chơi như mình. Hỗ trợ nhiệt tình, rút tiền nhanh chóng</div>
                                    <div className="home-review-item__slide">Sàn này tốt lắm, nhiều bonus cho những người mới chơi như mình. Hỗ trợ nhiệt tình, rút tiền nhanh chóng</div>
                                </Slider>
                                <p className="mb-0 text-center text-md-right"><Link href="/so-sanh/"><a className="btn btn-link font-14 p-0">Xem chi tiết</a></Link></p>
                            </Col>
                        </Row>
                    </div>
                </TabPane>
                <TabPane tabId="2">
                    <div className="home-review-item">
                        <Row>
                            <Col lg="6" className="home-review-item__left mb-3 mb-lg-0">
                                <Row className="align-items-center">
                                    <Col xs="6" md="7" className="home-review-item__logo"><img src="/images/logo/xtb.png" alt="XTB" /></Col>
                                    <Col xs="6" md="5" className="home-review-item__info">
                                        <h3 className="home-review-item__name">Fx Trading</h3>
                                        <div className="review-info">
                                            <div className="review-star">
                                                <span className="home-review-item__star">
                                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                                </span>
                                                <span className="home-review-item__star review-star__mask">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </span>
                                            </div>
                                            <span className="home-review-item__count review-count">30 đánh giá</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="6" className="home-review-item__right">
                                <Slider className="home-review-item__slider" {...settings}>
                                    <div className="home-review-item__slide">Sàn này tốt lắm, nhiều bonus cho những người mới chơi như mình. Hỗ trợ nhiệt tình, rút tiền nhanh chóng</div>
                                    <div className="home-review-item__slide">Sàn này tốt lắm, nhiều bonus cho những người mới chơi như mình. Hỗ trợ nhiệt tình, rút tiền nhanh chóng</div>
                                    <div className="home-review-item__slide">Sàn này tốt lắm, nhiều bonus cho những người mới chơi như mình. Hỗ trợ nhiệt tình, rút tiền nhanh chóng</div>
                                </Slider>
                                <p className="mb-0 text-center text-md-right"><Link href="/so-sanh/"><a className="btn btn-link font-14 p-0">Xem chi tiết</a></Link></p>
                            </Col>
                        </Row>
                    </div>
                </TabPane>
            </TabContent>
            <p className="mb-0 mt-4 pt-2"><a href="#" className="text-view-more">Xem thêm đánh giá khác</a></p>
        </Col>
    )
}

const ReviewSide = () => {
    const [width, setWidth] = useState(0);

    const sliderBroker = {
        variableWidth: true,
        arrows: false
    }

    useEffect(() => {
        updateWindowDimensions();
        window.addEventListener('resize', updateWindowDimensions);
    }, [width]);

    const updateWindowDimensions = () => {
        setWidth(window.innerWidth);
    }

    return (
        <Col md="5" lg="5" xl="4" className="home-side">
            <div className="home-side-item home-side-box">
                <h3 className="side-title"><a href="./reputation-brokers.php">Top sàn giao dịch uy tín <i className="fa fa-angle-right ml-1" aria-hidden="true"></i></a></h3>
                { width > 768 ? 
                <div className="top-broker-slider">
                    <div className="home-side-broker">
                        <Row className="align-items-center">
                            <Col md="6" xl="7" className="home-side-broker__left">
                                <div className="home-side-broker__logo"><img src="/images/logo/XM.png" alt="XM" /></div>
                            </Col>
                            <Col md="6" xl="5" className="home-side-broker__right">
                                <p className="text-verify mb-2"><i className="fa fa-check-circle" aria-hidden="true"></i> Verified Broker</p>
                                <Link href="/"><a className="btn btn-warning btn-font-small" target="_blank">Mở tài khoản</a></Link>
                            </Col>
                        </Row>
                    </div>
                    <div className="home-side-broker">
                        <Row className="align-items-center">
                            <Col md="6" xl="7" className="home-side-broker__left">
                                <div className="home-side-broker__logo"><img src="/images/logo/xtrade.png" alt="xtrade" /></div>
                            </Col>
                            <Col md="6" xl="5" className="home-side-broker__right">
                                <p className="text-verify mb-2"><i className="fa fa-check-circle" aria-hidden="true"></i> Verified Broker</p>
                                <Link href="/"><a className="btn btn-warning btn-font-small" target="_blank">Mở tài khoản</a></Link>
                            </Col>
                        </Row>
                    </div>
                    <div className="home-side-broker">
                        <Row className="align-items-center">
                            <Col md="6" xl="7" className="home-side-broker__left">
                                <div className="home-side-broker__logo"><img src="/images/logo/xDirect.png" alt="xDirect" /></div>
                            </Col>
                            <Col md="6" xl="5" className="home-side-broker__right">
                                <p className="text-verify mb-2"><i className="fa fa-check-circle" aria-hidden="true"></i> Verified Broker</p>
                                <Link href="/"><a className="btn btn-warning btn-font-small" target="_blank">Mở tài khoản</a></Link>
                            </Col>
                        </Row>
                    </div>
                    <div className="home-side-broker">
                        <Row className="align-items-center">
                            <Col md="6" xl="7" className="home-side-broker__left">
                                <div className="home-side-broker__logo"><img src="/images/logo/PSB_forex.png" alt="PSB forex" /></div>
                            </Col>
                            <Col md="6" xl="5" className="home-side-broker__right">
                                <p className="text-verify mb-2"><i className="fa fa-check-circle" aria-hidden="true"></i> Verified Broker</p>
                                <Link href="/"><a className="btn btn-warning btn-font-small" target="_blank">Mở tài khoản</a></Link>
                            </Col>
                        </Row>
                    </div>
                    <div className="home-side-broker">
                        <Row className="align-items-center">
                            <Col md="6" xl="7" className="home-side-broker__left">
                                <div className="home-side-broker__logo"><img src="/images/logo/Nadex_2.png" alt="Nadex" /></div>
                            </Col>
                            <Col md="6" xl="5" className="home-side-broker__right">
                                <p className="text-verify mb-2"><i className="fa fa-check-circle" aria-hidden="true"></i> Verified Broker</p>
                                <Link href="/"><a className="btn btn-warning btn-font-small" target="_blank">Mở tài khoản</a></Link>
                            </Col>
                        </Row>
                    </div>
                </div>
                : <Slider className="top-broker-slider" {...sliderBroker}>
                <div className="home-side-broker">
                    <Row className="align-items-center">
                        <Col md="6" xl="7" className="home-side-broker__left">
                            <div className="home-side-broker__logo"><img src="/images/logo/XM.png" alt="XM" /></div>
                        </Col>
                        <Col md="6" xl="5" className="home-side-broker__right">
                            <p className="text-verify mb-2"><i className="fa fa-check-circle" aria-hidden="true"></i> Verified Broker</p>
                            <Link href="/"><a className="btn btn-warning btn-font-small" target="_blank">Mở tài khoản</a></Link>
                        </Col>
                    </Row>
                </div>
                <div className="home-side-broker">
                    <Row className="align-items-center">
                        <Col md="6" xl="7" className="home-side-broker__left">
                            <div className="home-side-broker__logo"><img src="/images/logo/xtrade.png" alt="xtrade" /></div>
                        </Col>
                        <Col md="6" xl="5" className="home-side-broker__right">
                            <p className="text-verify mb-2"><i className="fa fa-check-circle" aria-hidden="true"></i> Verified Broker</p>
                            <Link href="/"><a className="btn btn-warning btn-font-small" target="_blank">Mở tài khoản</a></Link>
                        </Col>
                    </Row>
                </div>
                <div className="home-side-broker">
                    <Row className="align-items-center">
                        <Col md="6" xl="7" className="home-side-broker__left">
                            <div className="home-side-broker__logo"><img src="/images/logo/xDirect.png" alt="xDirect" /></div>
                        </Col>
                        <Col md="6" xl="5" className="home-side-broker__right">
                            <p className="text-verify mb-2"><i className="fa fa-check-circle" aria-hidden="true"></i> Verified Broker</p>
                            <Link href="/"><a className="btn btn-warning btn-font-small" target="_blank">Mở tài khoản</a></Link>
                        </Col>
                    </Row>
                </div>
                <div className="home-side-broker">
                    <Row className="align-items-center">
                        <Col md="6" xl="7" className="home-side-broker__left">
                            <div className="home-side-broker__logo"><img src="/images/logo/PSB_forex.png" alt="PSB forex" /></div>
                        </Col>
                        <Col md="6" xl="5" className="home-side-broker__right">
                            <p className="text-verify mb-2"><i className="fa fa-check-circle" aria-hidden="true"></i> Verified Broker</p>
                            <Link href="/"><a className="btn btn-warning btn-font-small" target="_blank">Mở tài khoản</a></Link>
                        </Col>
                    </Row>
                </div>
                <div className="home-side-broker">
                    <Row className="align-items-center">
                        <Col md="6" xl="7" className="home-side-broker__left">
                            <div className="home-side-broker__logo"><img src="/images/logo/Nadex_2.png" alt="Nadex" /></div>
                        </Col>
                        <Col md="6" xl="5" className="home-side-broker__right">
                            <p className="text-verify mb-2"><i className="fa fa-check-circle" aria-hidden="true"></i> Verified Broker</p>
                            <Link href="/"><a className="btn btn-warning btn-font-small" target="_blank">Mở tài khoản</a></Link>
                        </Col>
                    </Row>
                </div>
            </Slider> }
            </div>
            <Row className="home-side-item banner-full mx-md-0">
                <Link href="https://fxinsites.com/">
                    <a target="_blank">
                        <picture>
                            <source srcSet="/images/compare-banner-a.png" media="(min-width: 768px)" />
                            <img srcSet="/images/compare-banner-a-m.png" alt="So sánh sàn Tháng 10/2020" className="w-100" />
                        </picture>
                    </a>
                </Link>
            </Row>
        </Col>
    );
}

const Review = ({ children }) => {
    return (
        <div className="section bg-gray pb-md-5">
            <Container>
                { children }

                <Row>
                    <ReviewTab />
                    <ReviewSide />
                </Row>
            </Container>
        </div>
    )
}

export default Review;