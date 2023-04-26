import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./order.module.css";
import clsx from "clsx";

function Order() {
  return (
    <React.Fragment>
      <Header />
      <div className={clsx(styles.container, "container")}>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Tất cả</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Đang thực hiện</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Đã hoàn thành</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Đã hủy</a>
          </li>
        </ul>
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr className="align-middle">
              <th style={{width: "10%"}}>Mã đơn</th>
              <th style={{width: "20%"}}>Hàng mua</th>
              <th style={{width: "10%"}}>Tổng tiền</th>
              <th style={{width: "10%"}}>Người nhận</th>
              <th style={{width: "10%"}}>SĐT</th>
              <th style={{width: "20%"}}>Địa chỉ</th>
              <th style={{width: "10%"}}>Ngày</th>
              <th style={{width: "10%"}}>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B20PT060</td>
              <td>
                <p className="fw-normal mb-1">Chicken</p>
                <p className="text-muted mb-0">Số lượng: 1</p>
              </td>
              <td>100.000đ</td>
              <td>Trần Doãn Đô</td>
              <td>035 695 8883</td>
              <td>Ngõ 146 đường Thanh Bình Phường Mộ Lao quận Hà Đông</td>
              <td>20-2-2022</td>
              <td>
                <div className="dropdown">
                  <div className="btn-group">
                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Cancel
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Process</a></li>
                      <li><a className="dropdown-item" href="#">Success</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>B20PT060</td>
              <td>
                <p className="fw-normal mb-1">Chicken</p>
                <p className="text-muted mb-0">Số lượng: 1</p>
              </td>
              <td>100.000đ</td>
              <td>Trần Doãn Đô</td>
              <td>035 695 8883</td>
              <td>Ngõ 146 đường Thanh Bình Phường Mộ Lao quận Hà Đông</td>
              <td>20-2-2022</td>
              <td>
                <div className="dropdown">
                  <div className="btn-group">
                    <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Success
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Process</a></li>
                      <li><a className="dropdown-item" href="#">Cancel</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>B20PT060</td>
              <td>
                <p className="fw-normal mb-1">Chicken</p>
                <p className="text-muted mb-0">Số lượng: 1</p>
              </td>
              <td>100.000đ</td>
              <td>Trần Doãn Đô</td>
              <td>035 695 8883</td>
              <td>Ngõ 146 đường Thanh Bình Phường Mộ Lao quận Hà Đông</td>
              <td>20-2-2022</td>
              <td>
                <div className="dropdown">
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Process
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Success</a></li>
                      <li><a className="dropdown-item" href="#">Cancel</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>B20PT060</td>
              <td>
                <p className="fw-normal mb-1">Chicken</p>
                <p className="text-muted mb-0">Số lượng: 1</p>
              </td>
              <td>100.000đ</td>
              <td>Trần Doãn Đô</td>
              <td>035 695 8883</td>
              <td>Ngõ 146 đường Thanh Bình Phường Mộ Lao quận Hà Đông</td>
              <td>20-2-2022</td>
              <td>
                <div className="dropdown">
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Process
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Success</a></li>
                      <li><a className="dropdown-item" href="#">Cancel</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>B20PT060</td>
              <td>
                <p className="fw-normal mb-1">Chicken</p>
                <p className="text-muted mb-0">Số lượng: 1</p>
              </td>
              <td>100.000đ</td>
              <td>Trần Doãn Đô</td>
              <td>035 695 8883</td>
              <td>Ngõ 146 đường Thanh Bình Phường Mộ Lao quận Hà Đông</td>
              <td>20-2-2022</td>
              <td>
                <div className="dropdown">
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Process
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Success</a></li>
                      <li><a className="dropdown-item" href="#">Cancel</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>B20PT060</td>
              <td>
                <p className="fw-normal mb-1">Chicken</p>
                <p className="text-muted mb-0">Số lượng: 1</p>
              </td>
              <td>100.000đ</td>
              <td>Trần Doãn Đô</td>
              <td>035 695 8883</td>
              <td>Ngõ 146 đường Thanh Bình Phường Mộ Lao quận Hà Đông</td>
              <td>20-2-2022</td>
              <td>
                <div className="dropdown">
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Process
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Success</a></li>
                      <li><a className="dropdown-item" href="#">Cancel</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>B20PT060</td>
              <td>
                <p className="fw-normal mb-1">Chicken</p>
                <p className="text-muted mb-0">Số lượng: 1</p>
              </td>
              <td>100.000đ</td>
              <td>Trần Doãn Đô</td>
              <td>035 695 8883</td>
              <td>Ngõ 146 đường Thanh Bình Phường Mộ Lao quận Hà Đông</td>
              <td>20-2-2022</td>
              <td>
                <div className="dropdown">
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Process
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Success</a></li>
                      <li><a className="dropdown-item" href="#">Cancel</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>B20PT060</td>
              <td>
                <p className="fw-normal mb-1">Chicken</p>
                <p className="text-muted mb-0">Số lượng: 1</p>
              </td>
              <td>100.000đ</td>
              <td>Trần Doãn Đô</td>
              <td>035 695 8883</td>
              <td>Ngõ 146 đường Thanh Bình Phường Mộ Lao quận Hà Đông</td>
              <td>20-2-2022</td>
              <td>
                <div className="dropdown">
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Process
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Success</a></li>
                      <li><a className="dropdown-item" href="#">Cancel</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>B20PT060</td>
              <td>
                <p className="fw-normal mb-1">Chicken</p>
                <p className="text-muted mb-0">Số lượng: 1</p>
              </td>
              <td>100.000đ</td>
              <td>Trần Doãn Đô</td>
              <td>035 695 8883</td>
              <td>Ngõ 146 đường Thanh Bình Phường Mộ Lao quận Hà Đông</td>
              <td>20-2-2022</td>
              <td>
                <div className="dropdown">
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Process
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Success</a></li>
                      <li><a className="dropdown-item" href="#">Cancel</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>B20PT060</td>
              <td>
                <p className="fw-normal mb-1">Chicken</p>
                <p className="text-muted mb-0">Số lượng: 1</p>
              </td>
              <td>100.000đ</td>
              <td>Trần Doãn Đô</td>
              <td>035 695 8883</td>
              <td>Ngõ 146 đường Thanh Bình Phường Mộ Lao quận Hà Đông</td>
              <td>20-2-2022</td>
              <td>
                <div className="dropdown">
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Process
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Success</a></li>
                      <li><a className="dropdown-item" href="#">Cancel</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>B20PT060</td>
              <td>
                <p className="fw-normal mb-1">Chicken</p>
                <p className="text-muted mb-0">Số lượng: 1</p>
              </td>
              <td>100.000đ</td>
              <td>Trần Doãn Đô</td>
              <td>035 695 8883</td>
              <td>Ngõ 146 đường Thanh Bình Phường Mộ Lao quận Hà Đông</td>
              <td>20-2-2022</td>
              <td>
                <div className="dropdown">
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Process
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Success</a></li>
                      <li><a className="dropdown-item" href="#">Cancel</a></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Order;
