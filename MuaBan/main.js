// common
const $ = document.querySelector.bind(this.document);
const $$ = document.querySelectorAll.bind(this.document);

// render content
const dataList = $(".data-list");
const dataListRight = $(".global-block-002 .data-directory-list");
const dataListRightBottom = $(".global-block-003 .data-directory-list");
const appDataItem = {
  list: [
    {
      img: "https://cdn.batdongsan.vn/queue/upload/thumb/file/2022/08/05/z3583841568788-eefb48482806c9835aab48f529ba86993.jpg",
      name: "(HBP03)Bán Nhà Mới Xây HIỆP BÌNH PHƯỚC  xe hơi đậu trong nhà, Giá: 9.25 tỷ (thương lượng)",
      price: "9.25 tỷ",
      area: "62m",
      subArea: "Bán căn hộ cao cấp",
      content:
        "(HBP03)NHÀ HIỆP BÌNH PHƯỚC - Chủ Gửi Giá: 9.25 tỷ (thương lượng) —————— Bán Nhà Mới Xây Hẻm 535 Quốc Lộ 13 ...",
      user: "digitalmarketingfb05",
    },
    {
      img: "https://cdn.batdongsan.vn/queue/upload/thumb/file/2022/08/05/296244104-450023567032680-5192824219458123680-n.jpg",
      name: "Căn hộ chuẩn Singapore chỉ 45tr/m2 giáp Phú Mỹ Hưng cuối cùng",
      price: "3,7 tỷ",
      area: "81m",
      subArea: "Bán căn hộ cao cấp",
      content:
        "7 lý do bạn nên chọn mua căn hộ dự án Essensia Nam Sài Gòn vào thời điểm này - Chủ đầu tư Phú Long uy tín, tiềm lực tài chính...",
      user: "thupham.bds",
    },
    {
      img: "https://cdn.batdongsan.vn/queue/upload/thumb/file/2022/08/05/981a4ff2a654640a3d45.jpg",
      name: "Nhà mới LẠC LONG QUÂN_có 10 PHÒNG TRỌ nguồn thu ổn định_89m2_3 TẦNG",
      price: "7.3 tỷ",
      area: "89m",
      subArea: "Bán nhà riêng",
      content:
        "Nhà mới LẠC LONG QUÂN_có 10 PHÒNG TRỌ nguồn thu ổn định_89m2_3 TẦNG",
      user: "letrungbds688",
    },
    {
      img: "https://cdn.batdongsan.vn/queue/upload/thumb/file/2022/08/05/z3583841568788-eefb48482806c9835aab48f529ba86993.jpg",
      name: "(HBP03)Bán Nhà Mới Xây HIỆP BÌNH PHƯỚC  xe hơi đậu trong nhà, Giá: 9.25 tỷ (thương lượng)",
      price: "9.25 tỷ",
      area: "62m",
      subArea: "Bán căn hộ cao cấp",
      content:
        "(HBP03)NHÀ HIỆP BÌNH PHƯỚC - Chủ Gửi Giá: 9.25 tỷ (thương lượng) —————— Bán Nhà Mới Xây Hẻm 535 Quốc Lộ 13 ...",
      user: "digitalmarketingfb05",
    },
    {
      img: "https://cdn.batdongsan.vn/queue/upload/thumb/file/2022/08/05/z3583841568788-eefb48482806c9835aab48f529ba86993.jpg",
      name: "(HBP03)Bán Nhà Mới Xây HIỆP BÌNH PHƯỚC  xe hơi đậu trong nhà, Giá: 9.25 tỷ (thương lượng)",
      price: "9.25 tỷ",
      area: "62m",
      subArea: "Bán căn hộ cao cấp",
      content:
        "(HBP03)NHÀ HIỆP BÌNH PHƯỚC - Chủ Gửi Giá: 9.25 tỷ (thương lượng) —————— Bán Nhà Mới Xây Hẻm 535 Quốc Lộ 13 ...",
      user: "digitalmarketingfb05",
    },
  ],
  render: function () {
    const htmls = this.list.map((item) => {
      return `
            <div class="data-item">
                <div class="data-img">
                    <a href="">
                        <img src="${item.img}" alt="">
                    </a>
                </div>
                <div class="data-body">
                    <div class="name">
                        <a href="#">${item.name}</a>
                    </div>
                    <div class="meta">
                        <span class="meta-price">${item.price}</span>
                        <span class="meta-area">${item.area}<sup>2</sup></span>
                        <a href="#" class="meta-link">${item.subArea}</a>
                    </div>
                    <div class="content">
                        <p>${item.content}</p>
                    </div>
                    <div class="meta-footer">
                        <div class="author">
                            <div class="avata">
                                <img src="https://batdongsan.vn/public/image/avatar.png" alt="">
                            </div>
                            <a href="#" class="user">${item.user}</a>
                            <div class="preview">
                                <div class="card">
                                    <div style="width: 106px;">
                                        <div class="avata-preview">
                                            <img src="https://batdongsan.vn/public/image/avatar.png" alt="">
                                        </div>
                                        <div class="icon-social-preview">
                                            <a href="#">
                                                <img src="https://themes.myoffice.vn/upload/photo/2021/11/06/phone.png" alt="">
                                            </a>
                                            <a href="#">
                                                <img src="https://themes.myoffice.vn/upload/photo/2021/11/06/zalo.png" alt="">
                                            </a>
                                            <a href="#">
                                                <img src="https://themes.myoffice.vn/upload/photo/2021/11/06/messenger.png" alt="">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="body-preview">
                                        <div class="name-preview">
                                            <a href="#">${item.user}</a>
                                        </div>
                                        <div class="sub-preview">
                                            <p>Người dùng tự do</p>
                                        </div>
                                        <div class="phone-mail">
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-phone"></i>
                                                    0963834586
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-envelope"></i>
                                                    vantuaniqland@gmail.com
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="more-preview">
                                            <a href="#">Xem tin</a>
                                            <a href="#">Theo dõi</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span class="time">
                            <i class="fa-regular fa-clock"></i>
                            <span>5 giờ trước</span>
                        </span>
                        <a href="#" class="interactive">
                            <i class="fa-regular fa-heart"></i>
                            <span class="save">
                                Lưu tin
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            `;
    });

    dataList.innerHTML = htmls.join("");
  },
  listRight: [
    {
      name: "Nhà",
      result: "(81,803)",
    },
    {
      name: "Đất",
      result: "(18,577)",
    },
    {
      name: "Căn hộ chung cư",
      result: "(33,581)",
    },
    {
      name: "Văn phòng",
      result: "(6,488)",
    },
    {
      name: "Biệt thự",
      result: "(4,872)",
    },
    {
      name: "BĐS thương mại",
      result: "(1,066)",
    },
    {
      name: "BĐS dịch vụ",
      result: "(4,925)",
    },
    {
      name: "BĐS nông nghiệp",
      result: "(74)",
    },
    {
      name: "BĐS công nghiệp",
      result: "(2,676)",
    },
    {
      name: "BĐS tâm linh",
      result: "(0)",
    },
    {
      name: "BĐS khác",
      result: "(7)",
    },
  ],
  renderRigth: function () {
    const htmls = this.listRight.map((item) => {
      return `
                <li class="data-directory-item">
                    <a href="#">
                        <i class="fa-solid fa-angle-right"></i>
                        ${item.name}
                        <span>${item.result}</span>
                    </a>
                </li>
            `;
    });
    dataListRight.innerHTML = htmls.join("");
  },
  ListRightBottom: [
    {
      name: "ductaisongha94123",
    },
    {
      name: "Trương Quốc Sỹ",
    },
    {
      name: "shinichi22",
    },
    {
      name: "Nguyễn Thị Thu Hương",
    },
    {
      name: "lehuy1986bds",
    },
    {
      name: "NhungCamila",
    },
    {
      name: "VuongnguyenBDS",
    },
    {
      name: "xemnha100",
    },
    {
      name: "Hoangnam2459",
    },
    {
      name: "Hoangnam2459",
    },
  ],
  renderRigthBottom: function () {
    const htmls = this.ListRightBottom.map((item) => {
      return `
                <li class="data-directory-item">
                    <a href="#">
                        <i class="fa-solid fa-angle-right"></i>
                        ${item.name}
                    </a>
                </li>
            `;
    });
    dataListRightBottom.innerHTML = htmls.join("");
  },

  start: function () {
    this.render();
    this.renderRigth();
    this.renderRigthBottom();
  },
};
appDataItem.start();
//
// onclick menu
const barIcon = $(".js-bar");
const overlay = $(".over-lay");
const barContainer = $(".bar-container");
barIcon.addEventListener("click", function () {
  barContainer.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", function (e) {
  e.stopPropagation();
  barContainer.classList.remove("active");
  overlay.classList.remove("active");
});

//
// onclick li in menu
const liOnclicks = $$(".body-bar-item");
const changeIcon = $$(".icon-bar-item");
[...liOnclicks].forEach((item) => item.addEventListener("click", liBarOnclick));

function liBarOnclick(e) {
  const showsLi = e.target.querySelector(".ul-none");
  liOnclicks.forEach((item) => item.classList.remove("active"));
  showsLi.style.height = `${showsLi.scrollHeight}px`;
  e.target.classList.add("active");
  e.target.querySelector(".icon-bar-item").classList.remove("fa-angle-left");
  e.target.querySelector(".icon-bar-item").classList.add("fa-angle-down");

  if (!liOnclicks.forEach((item) => item.classList.contains("active"))) {
    liOnclicks.forEach((item) => {
      if (!item.classList.contains("active")) {
        item.querySelector(".ul-none").style.height = "0px";
        item.querySelector(".icon-bar-item").classList.remove("fa-angle-down");
        item.querySelector(".icon-bar-item").classList.add("fa-angle-left");
      }
    });
  }
}
