const SearchPc = () => {
    return (
        <div className="home-search d-none d-md-block">
            <form action="#" method="post">
                <div className="d-flex">
                    <input type="text" name="filter-input" id="pc-filter-input" className="form-control form-control--search" placeholder="Tìm kiếm sàn ..." />
                    <button type="submit" name="search" className="btn btn-primary btn-search"><i className="icon-search-white mr-3"></i>Tìm kiếm</button>
                </div>
                <div className="home-filter-1 slideClose">
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="home-search__left form-row">
                            <div className="col-md-3">
                                <div className="dropdown">
                                    <button className="btn btn-light dropdown-toggle dropdown-toggle--small w-100" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reset="Min Deposit">
                                        Min Deposit
                                    </button>
                                    <div className="dropdown-menu">
                                        <div className="popover-header">Min Deposit</div>
                                        <div className="form-row mb-3 mt-3">
                                            <div className="col"><input type="text" name="min-deposit-min" id="min-deposit-min" className="form-control form-control--small range-min" placeholder="Từ" /></div>
                                            -
                                            <div className="col"><input type="text" name="min-deposit-max" id="min-deposit-max" className="form-control form-control--small range-max" placeholder="Đến" /></div>
                                        </div>
                                        <div id="deposit-range-slider" className="range-slider mb-3" data-min="0" data-max="1000"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="dropdown">
                                    <button className="btn btn-light dropdown-toggle dropdown-toggle--small w-100" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reset="Đòn Bẩy">
                                        Đòn Bẩy
                                    </button>
                                    <div className="dropdown-menu">
                                        <div className="popover-header">Đòn Bẩy</div>
                                        <div className="form-row mb-3 mt-3">
                                            <div className="col"><input type="text" name="leverage-min" id="leverage-min" className="form-control form-control--small range-min" placeholder="Từ" /></div>
                                            -
                                            <div className="col"><input type="text" name="leverage-max" id="leverage-max" className="form-control form-control--small range-max" placeholder="Đến" /></div>
                                        </div>
                                        <div id="leverage-range-slider" className="range-slider mb-3" data-min="0" data-max="1000"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <select className="form-control selectpicker" multiple name="product" title="Sản Phẩm Giao Dịch" data-header="Sản Phẩm Giao Dịch" data-selected-text-format="count" data-size="10">
                                    <option data-tokens="Forex" value="Forex">Forex</option>
                                    <option data-tokens="Stock" value="Stock">Stock</option>
                                    <option data-tokens="CFDs" value="CFDs">CFDs</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select className="form-control selectpicker" multiple name="account" title="Tài Khoản Giao Dịch" data-header="Tài Khoản Giao Dịch" data-selected-text-format="count" data-size="10">
                                    <option data-tokens="Demo" value="Demo">Demo</option>
                                    <option data-tokens="Standard" value="Standard">Standard</option>
                                    <option data-tokens="VIP" value="VIP">VIP</option>
                                    <option data-tokens="ENC" value="ENC">ENC</option>
                                    <option data-tokens="Khác" value="Khác">Khác</option>
                                </select>
                            </div>
                        </div>
                        <div className="home-search__right">
                            <button id="home-filter-more" type="button" className="btn btn-link mr-3"><i className="fa fa-chevron-down mr-1" aria-hidden="true"></i> Mở rộng</button>
                            <button type="reset" name="reset-home-search" className="btn btn-link cl-red px-0"><i className="fa fa-repeat mr-1" aria-hidden="true"></i> Đặt lại</button>
                        </div>
                    </div>
                </div>
                <div className="home-filter-2 mt-2 slideClose">
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="home-search__left form-row">
                            <div className="col-md-3">
                                <select className="form-control selectpicker" name="copyTrade" title="Copy Giao Dịch" data-header="Copy Giao Dịch" multiple data-max-options="1">
                                    <option data-tokens="Có" value="Yes">Có</option>
                                    <option data-tokens="Không" value="No">Không</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select className="form-control selectpicker" name="promotion" title="Tin Khuyến Mãi" data-header="Tin Khuyến Mãi" multiple data-max-options="1">
                                    <option data-tokens="Có" value="Yes">Có</option>
                                    <option data-tokens="Không" value="No">Không</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select className="form-control selectpicker" multiple name="checkCountry" data-live-search="true" title="Xuất Xứ" data-selected-text-format="count" data-size="10" data-header="Xuất Xứ">
                                    <option data-tokens="$country" value="$country">Xuất Xứ</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select className="form-control selectpicker" name="isVietnam" title="Hỗ Trợ Tiếng Việt" data-header="Hỗ Trợ Tiếng Việt" multiple data-max-options="1">
                                    <option data-tokens="Có" value="Yes">Có</option>
                                    <option data-tokens="Không" value="No">Không</option>
                                </select>
                            </div>
                        </div>
                        <div className="home-search__right">
                            <button id="home-filter-less" type="button" className="btn btn-link mr-3"><i className="fa fa-chevron-up mr-1" aria-hidden="true"></i> Thu gọn</button>
                            <button type="reset" name="reset-home-search" className="btn btn-link cl-red px-0"><i className="fa fa-repeat mr-1" aria-hidden="true"></i> Đặt lại</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchPc;