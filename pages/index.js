import Head from 'next/head';
import Layout from '../components/layout';
import Review from '../components/home/review';
import TradingView from '../components/home/trading-view';

const Main = () => (
  <div className="home-main">
      <div className="home-search-mobile d-md-none">
          <div className="d-flex search-with-icon" data-toggle="modal" data-target="#home-filter">
              <input type="text" className="form-control" placeholder="Tìm kiếm sàn ..." />
              <button type="button" name="search" className="btn btn-icon-search"><i className="icon-search-primary"></i></button>
          </div>
      </div>
      <picture>
          <source srcSet="/images/baner-fx-02.jpg" media="(min-width: 768px)" />
          <img srcSet="/images/banner-mobile.png" alt="Chuyên trang tìm kiếm, đánh giá, so sánh sàn Forex hàng đầu Việt Nam" className="w-100" />
      </picture>
  </div>
);

const FilterMobile = () => {
  const handleSubmit = (event) => {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  return <div className="modal fade modal-full" id="home-filter" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog m-0 mx-md-auto">
            <div className="modal-content border-0 rounded-0">
                <div className="modal-body bg-gray">
                    <div className="d-flex align-items-center justify-content-between mb-4 pb-1">
                        <h2 className="modal-title">Tìm kiếm sàn</h2>
                        <button type="button" className="btn btn-close p-0" data-dismiss="modal"><img src="/images/icons/icon-close.svg" alt="Close" /></button>
                    </div>
                    <form action="#" method="post">
                        <div className="d-flex search-with-icon no-boxshadow mb-3">
                            <input type="text" name="filter-input" className="form-control" placeholder="Tìm kiếm sàn ..." />
                            <button type="submit" name="search" className="btn btn-icon-search"><i className="icon-search-primary"></i></button>
                        </div>
                        <div className="modal-search-item accordion">
                            <h3 className="modal-search-item__ttl">Xuất xứ</h3>
                            <div className="mt-3">
                                <select value={['2', '3']} onChange={handleSubmit} className="form-control selectpicker" multiple name="checkCountry" data-live-search="true" title="Xuất Xứ" data-selected-text-format="count" data-size="10" data-header="Xuất Xứ">
                                  <option data-tokens="2" value="2">2</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-search-item">
                            <div className="d-flex align-items-start justify-content-between">
                                <h3 className="modal-search-item__ttl">Min Deposit</h3>
                                <span className="modal-search-result">$0 - $1000</span>
                            </div>
                            <div className="form-row d-none">
                                <div className="col"><input type="text" name="min-deposit-min" id="min-deposit-min-mobile" className="form-control form-control--small range-min" placeholder="Từ" /></div>
                                -
                                <div className="col"><input type="text" name="min-deposit-max" id="min-deposit-max-mobile" className="form-control form-control--small range-max" placeholder="Đến" /></div>
                            </div>
                            <div id="deposit-range-slider-mobile" className="range-slider" data-min="0" data-max="1000"></div>
                        </div>
                        <div className="modal-search-item">
                            <div className="d-flex align-items-start justify-content-between">
                                <h3 className="modal-search-item__ttl">Đòn Bẩy</h3>
                                <span className="modal-search-result">1 : 0 - 1 : 1000</span>
                            </div>
                            <div className="form-row d-none">
                                <div className="col"><input type="text" name="leverage-min" id="leverage-min-mobile" className="form-control form-control--small range-min" placeholder="Từ" /></div>
                                -
                                <div className="col"><input type="text" name="leverage-max" id="leverage-max-mobile" className="form-control form-control--small range-max" placeholder="Đến" /></div>
                            </div>
                            <div id="leverage-range-slider-mobile" className="range-slider" data-min="0" data-max="1000"></div>
                        </div>
                        <div className="modal-search-item">
                            <h3 className="modal-search-item__ttl">Sản Phẩm Giao Dịch</h3>
                            <ul className="modal-search-list">
                                <li><label className="checkbox-rect"><input type="checkbox" name="product" value="Forex" /><span>Forex</span></label></li>
                                <li><label className="checkbox-rect"><input type="checkbox" name="product" value="Stock" /><span>Stock</span></label></li>
                                <li><label className="checkbox-rect"><input type="checkbox" name="product" value="CFDs" /><span>CFDs</span></label></li>
                            </ul>
                        </div>
                        <div className="modal-search-item">
                            <h3 className="modal-search-item__ttl">Tài Khoản Giao Dịch</h3>
                            <ul className="modal-search-list">
                                <li><label className="checkbox-rect"><input type="checkbox" name="account" value="Demo" /><span>Demo</span></label></li>
                                <li><label className="checkbox-rect"><input type="checkbox" name="account" value="Standard" /><span>Standard</span></label></li>
                                <li><label className="checkbox-rect"><input type="checkbox" name="account" value="VIP" /><span>VIP</span></label></li>
                                <li><label className="checkbox-rect"><input type="checkbox" name="account" value="ENC" /><span>ENC</span></label></li>
                                <li><label className="checkbox-rect"><input type="checkbox" name="account" value="Khác" /><span>Khác</span></label></li>
                            </ul>
                        </div>
                        <div className="modal-search-item">
                            <div className="d-flex align-items-center justify-content-between">
                                <h3 className="modal-search-item__ttl mb-0"><label className="mb-0" htmlFor="isVietnamMobile">Hỗ Trợ Tiếng Việt</label></h3>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" id="isVietnamMobile" name="isVietnam" className="custom-control-input" value="1" />
                                    <label className="custom-control-label" htmlFor="isVietnamMobile"></label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-search-item">
                            <div className="d-flex align-items-center justify-content-between">
                                <h3 className="modal-search-item__ttl mb-0"><label className="mb-0" htmlFor="copyTradeMobile">Copy Giao Dịch</label></h3>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" id="copyTradeMobile" name="copyTrade" className="custom-control-input" value="1" />
                                    <label className="custom-control-label" htmlFor="copyTradeMobile"></label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-search-item">
                            <div className="d-flex align-items-center justify-content-between">
                                <h3 className="modal-search-item__ttl mb-0"><label className="mb-0" htmlFor="promotionMobile">Tin Khuyến Mãi</label></h3>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" id="promotionMobile" name="promotion" className="custom-control-input" value="1" />
                                    <label className="custom-control-label" htmlFor="promotionMobile"></label>
                                </div>
                            </div>
                        </div>
                        <p><button type="reset" name="reset-home-search" className="btn btn-link cl-red"><i className="fa fa-repeat mr-2" aria-hidden="true"></i> Đặt lại</button></p>
                        <p className="mb-0"><button type="submit" name="submit-filter" className="btn btn-primary btn-modal-search w-100"><i className="icon-search-white mr-2 text-uppercase"></i> Tìm kiếm</button></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

const Home = () => (
  <Layout>
    <Head>
      <title>Home page</title>
    </Head>

    <Main />
    <FilterMobile />
    
    <Review>
      <div className="d-none d-md-block mb-5 mt-1 pb-2 pt-3">
        <TradingView />
      </div>
    </Review>
  </Layout>
);

export default Home;