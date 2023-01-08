import {
  listProduct,
  listImg,
  listRight,
  listReviewCompany,
  listReviewPerson,
} from "./data.js";

window.addEventListener("load", function () {
  // common
  const $ = document.querySelector.bind(this.document);
  const $$ = document.querySelectorAll.bind(this.document);

  // search on tablet and mobile
  const searchTabMobile = $(".header-width-search--sm");
  const iconSearch = $(".icon-search");

  iconSearch.addEventListener("click", function () {
    searchTabMobile.classList.toggle("active");
    formLoginSm.classList.remove("active");
  });

  // login on tablet and mobile
  const iconUser = $(".js-user-icon-sm");
  const formLoginSm = $(".onsm");
  iconUser.addEventListener("click", function () {
    formLoginSm.classList.toggle("active");
    searchTabMobile.classList.remove("active");
  });
  // slider show banner
  const showSliders = $(".slider-show");
  const sliderItems = $$(".slider-show-item");
  const dotItems = $$(".dot-slider-item");

  let autoBanner = (showSliders.onclick = function () {
    sliderItems.forEach((item) => {
      item.classList.toggle("active");
    });
    dotItems.forEach((item) => {
      item.classList.toggle("active");
    });
  });
  dotItems.forEach((item, index) => {
    const sliderItem = sliderItems[index];
    item.onclick = function () {
      $(".slider-show-item.active").classList.remove("active");
      $(".dot-slider-item.active").classList.remove("active");
      item.classList.add("active");
      sliderItem.classList.add("active");
    };
  });
  setInterval(autoBanner, 8000);

  // render data-item
  const dataList = $(".data-list");
  const dataListRight = $(".global-block-002 .data-directory-list");
  const reviewCompany = $(".review-company-wrap");
  const reviewPerson = $(".review-person-wrap");
  const dataAreasImg = $(".areas-img");

  function renderProduct() {
    const htmls = listProduct.map((item) => {
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
    dataList.insertAdjacentHTML("beforeend", htmls.join(""));
  }
  function renderRigth() {
    const htmls = listRight.map((item) => {
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
    dataListRight.insertAdjacentHTML("beforeend", htmls.join(""));
  }
  function renderAreasImg() {
    const htmls = listImg.map((item) => {
      return `<div class="areas-img-item c-12 l-3 m-4">
      <div class="img-main">
          <a href="">
              <img src="${item.img}"
                  alt="">
          </a>
      </div>
      <div class="img-gallery">
          <div class="img-gallery1-3">
              <div class="img-gallery1">
                  <img src="${item.imgChild1}"
                      alt="">
              </div>
              <div class="img-gallery2">
                  <img src="${item.imgChild2}"
                      alt="">
              </div>
              <div class="img-gallery3">
                  <img src="${item.imgChild3}"
                      alt="">
              </div>
          </div>
      </div>
      <div class="body-sub">
          <div class="body-sub-name">
              <a href="#">${item.name}</a>
          </div>
          <div class="body-sub-meta">
              <span>${item.meta}</span>
          </div>
      </div>
  </div>`;
    });
    dataAreasImg.insertAdjacentHTML("beforeend", htmls.join(""));
  }
  function renderViewCompany() {
    const htmls = listReviewCompany.map((item) => {
      return `
          <div class="review-company-item c-6 l-2 m-3">
          <div class="item-boder">
              <div class="img">
                  <a href="#">
                      <img src="${item.img}" alt="">
                  </a>
              </div>
              <div class="body">
                  <div class="name">
                      <a href="#">${item.name}</a>
                  </div>
                  <div class="rate">
                      <div class="rate-start">
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                      </div>
                      <a href="#">${item.rate}</a>
                  </div>
                  <div class="number">
                      <ul>
                          <li>
                              <div class="medium">
                                  <span>${item.medium}</span>
                                  <br>
                                  <span>Môi giới</span>
                              </div>
                          </li>
                          <li>
                              <div class="view">
                                  <span>${item.view}</span>
                                  <br>
                                  <span>Lượt xem</span>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div class="more">
                      <a href="#">xem thêm</a>
                  </div>
              </div>
          </div>
      </div>
          `;
    });

    reviewCompany.insertAdjacentHTML("beforeend", htmls.join(""));
  }
  function renderViewPerson() {
    const htmls = listReviewPerson.map((item) => {
      return `
              <div class="review-person-item c-6 l-2 m-3">
              <div class="item-boder">
                  <div class="img">
                      <a href="#">
                          <img src="${item.img}" alt="">
                      </a>
                  </div>
                  <div class="body">
                      <div class="name">
                          <a href="#">${item.name}</a>
                      </div>
                      <div class="rate">
                          <div class="rate-start">
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                          </div>
                          <a href="#">${item.rate}</a>
                      </div>
                      <div class="number">
                          <ul>
                              <li>
                                  <div class="medium">
                                      <span>${item.medium}</span>
                                      <br>
                                      <span>Tin đăng</span>
                                  </div>
                              </li>
                              <li>
                                  <div class="view">
                                      <span>${item.view}</span>
                                      <br>
                                      <span>Lượt xem</span>
                                  </div>
                              </li>
                          </ul>
                      </div>
                      <div class="more">
                          <a href="#">xem thêm</a>
                      </div>
                  </div>
              </div>
          </div>
          `;
    });
    reviewPerson.insertAdjacentHTML("beforeend", htmls.join(""));
  }
  renderProduct();
  renderRigth();
  renderAreasImg();
  renderViewCompany();
  renderViewPerson();

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
  [...liOnclicks].forEach((item) =>
    item.addEventListener("click", liBarOnclick)
  );

  function liBarOnclick(e) {
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
      console.log(e.target);
      e.target.parentNode.querySelector(".ul-none").style.height = "0px";
      e.target.parentNode
        .querySelector(".icon-bar-item")
        .classList.remove("fa-angle-down");
      e.target.parentNode
        .querySelector(".icon-bar-item")
        .classList.add("fa-angle-left");
      return;
    }
    const showsLi = e.target.querySelector(".ul-none");
    liOnclicks.forEach((item) => item.classList.remove("active"));
    showsLi.style.height = `${showsLi.scrollHeight}px`;
    e.target.classList.add("active");
    e.target.querySelector(".icon-bar-item").classList.remove("fa-angle-left");
    e.target.querySelector(".icon-bar-item").classList.add("fa-angle-down");
    if (!liOnclicks.forEach((item) => item.classList.contains("active"))) {
      liOnclicks.forEach((item) => {
        if (!item.classList.contains("active")) {
          item.classList.remove("active");
          item.querySelector(".ul-none").style.height = "0px";
          item
            .querySelector(".icon-bar-item")
            .classList.remove("fa-angle-down");
          item.querySelector(".icon-bar-item").classList.add("fa-angle-left");
          // console.log(item);
          return;
        }
      });
    }
  }

  // NEWS slider
  const listNews = $(".slider-news");
  const newsItem = $(".slider-news-item");
  let autoSliderNews = function () {
    listNews.scrollLeft += newsItem.clientWidth;
    if (listNews.scrollWidth - listNews.clientWidth === listNews.scrollLeft) {
      listNews.scrollLeft = 0;
    }
  };
  setInterval(autoSliderNews, 8000);
  // EVENTS slider
  const listEvents = $(".slider-event");
  const eventsItem = $(".slider-event-item");
  let autoSliderEvents = function () {
    listEvents.scrollLeft += eventsItem.clientWidth;
    if (
      listEvents.scrollWidth - listEvents.clientWidth ===
      listEvents.scrollLeft
    ) {
      listEvents.scrollLeft = 0;
    }
  };
  setInterval(autoSliderEvents, 8000);

  // handle click LAND slider
  const prevLand = $(".land .prev");
  const nextLand = $(".land .next");
  const landList = $(".slider-land");
  const landItems = $(".out-grow");

  let nextCLickLand = () => {
    landList.scrollLeft += landItems.clientWidth;
    if (landList.scrollWidth - landList.clientWidth === landList.scrollLeft) {
      landList.scrollLeft = 0;
    }
  };
  let prevCLickLand = () => {
    landList.scrollLeft -= landItems.clientWidth;
    if ((landList.scrollLeft = 0)) return;
  };

  nextLand.addEventListener("click", nextCLickLand);
  prevLand.addEventListener("click", prevCLickLand);
  setInterval(nextCLickLand, 8000);

  // handle click AREAS slider
  const prevArea = $(".area .prev");
  const nextArea = $(".area .next");
  const areaList = $(".areas-img");
  const areaItems = $(".areas-img-item");
  let nextClickArea = () => {
    areaList.scrollLeft += areaItems.clientWidth;
    if (areaList.scrollWidth - areaList.clientWidth === areaList.scrollLeft) {
      areaList.scrollLeft = 0;
    }
  };
  let prevClickArea = () => {
    areaList.scrollLeft -= areaItems.clientWidth;
    if ((areaList.scrollLeft = 0)) return;
  };
  prevArea.addEventListener("click", prevClickArea);
  nextArea.addEventListener("click", nextClickArea);
  setInterval(nextClickArea, 8000);

  // handle click REVIEWCOMPANY slider
  const rvCompanyList = $(".review-company-wrap");
  const rvCompanyItems = $(".review-company-item");
  const prevRvCompany = $(".company .prev");
  const nextRvCompany = $(".company .next");
  let nextClickRvCompany = () => {
    rvCompanyList.scrollLeft += rvCompanyItems.clientWidth + 9;
    if (
      rvCompanyList.scrollWidth - rvCompanyList.clientWidth ===
      rvCompanyList.scrollLeft
    ) {
      rvCompanyList.scrollLeft = 0;
    }
  };

  function prev(list, item) {
    list.scrollLeft -= item.clientWidth;
    if ((list.scrollLeft = 0)) return;
  }

  let prevClickRvCompany = () => {
    rvCompanyList.scrollLeft -= rvCompanyItems.clientWidth;
    if ((rvCompanyList.scrollLeft = 0)) return;
  };

  prevRvCompany.addEventListener("click", prevClickRvCompany);
  nextRvCompany.addEventListener("click", nextClickRvCompany);
  setInterval(nextClickRvCompany, 8000);
  // handle click REVIEWMEMBER slider
  const rvMemberList = $(".review-person-wrap");
  const rvMemberItems = $(".review-person-item");
  const prevRvMember = $(".member .prev");
  const nextRvMember = $(".member .next");
  let nextClickRvMember = () => {
    rvMemberList.scrollLeft += rvMemberItems.clientWidth + 9;
    if (
      rvMemberList.scrollWidth - rvMemberList.clientWidth ===
      rvMemberList.scrollLeft
    ) {
      rvMemberList.scrollLeft = 0;
    }
  };

  function prev(list, item) {
    list.scrollLeft -= item.clientWidth;
    if ((list.scrollLeft = 0)) return;
  }

  let prevClickRvMember = () => {
    rvMemberList.scrollLeft -= rvMemberItems.clientWidth;
    if ((rvMemberList.scrollLeft = 0)) return;
  };

  prevRvMember.addEventListener("click", prevClickRvMember);
  nextRvMember.addEventListener("click", nextClickRvMember);
  setInterval(nextClickRvMember, 8000);
});
