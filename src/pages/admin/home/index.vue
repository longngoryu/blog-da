<template>
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" style="max-height: 730px">
        <img src="../../../assets/3cogai.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption">
          <h4
            class="text-sm lg:relative bottom-56"
            style="
              font-family: 'Courier New', Courier, monospace;
              font-size: 40px;
              align-content: flex-start;
            "
          >
            Du lịch
          </h4>
          <p
            class="text-sm lg:relative bottom-48"
            style="font-style: italic; font-size: 25px"
          >
            Cuộc sống là một hành trình, hãy tận hưởng từng khoảnh khắc trên con đường đó
          </p>
          <button
            class="self-start px-8 py-1 text-lg font-medium rounded-3xl dark:bg-violet-600 dark:text-gray-50"
            style="
              background: linear-gradient(
                  to right bottom,
                  rgb(112, 0, 164) 20%,
                  rgb(70, 230, 255)
                )
                200%;
              box-shadow: 2px 6px 3px 1px rgb(167, 167, 167);
            "
          >
            <router-link
              :to="{ name: 'admin-dulich' }"
              style="text-decoration: none; color: #ffff"
            >
              View
            </router-link>
          </button>
        </div>
      </div>
      <div class="carousel-item" style="max-height: 720px">
        <img
          src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?cs=srgb&dl=pexels-elevate-1267320.jpg&fm=jpg"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption">
          <h4
            class="text-sm text-sm lg:relative bottom-56"
            style="
              font-family: 'Courier New', Courier, monospace;
              font-size: 40px;
              align-content: flex-start;
            "
          >
            Ẩm thực
          </h4>
          <p
            class="text-sm text-sm lg:relative bottom-48"
            style="font-style: italic; font-size: 30px"
          >
            Hương vị tinh túy ẩn chứa trên thế giới
          </p>
          <button
            class="self-start px-8 py-1 text-lg font-medium rounded-3xl dark:bg-violet-600 dark:text-gray-50"
            style="
              background: linear-gradient(
                  to right bottom,
                  rgb(112, 0, 164) 20%,
                  rgb(70, 230, 255)
                )
                200%;
              box-shadow: 2px 6px 3px 1px rgb(167, 167, 167);
            "
          >
            <router-link
              :to="{ name: 'admin-amthuc' }"
              style="text-decoration: none; color: #ffff"
            >
              View
            </router-link>
          </button>
        </div>
      </div>
      <div class="carousel-item" style="max-height: 720px">
        <img
          src="https://www.thesun.co.uk/wp-content/uploads/2017/10/nintchdbpict000321711565.jpg?strip=all&quality=100&w=1200&h=800&crop=1"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption">
          <h4
            class="text-sm text-sm lg:relative bottom-56"
            style="font-family: 'Courier New', Courier, monospace; font-size: 40px"
          >
            Cảnh quan thế giới
          </h4>
          <p
            class="text-sm text-sm lg:relative bottom-48"
            style="font-style: italic; font-size: 30px"
          >
            Du lịch là cách để bạn nhìn nhận thế giới từ một góc nhìn khác.
          </p>
          <button
            class="self-start px-8 py-1 text-lg font-medium rounded-3xl dark:bg-violet-600 dark:text-gray-50"
            style="
              background: linear-gradient(
                  to right bottom,
                  rgb(112, 0, 164) 20%,
                  rgb(70, 230, 255)
                )
                200%;
              box-shadow: 2px 6px 3px 1px rgb(167, 167, 167);
            "
          >
            <router-link
              :to="{ name: 'admin-kyquan' }"
              style="text-decoration: none; color: #ffff"
            >
              View
            </router-link>
          </button>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!--      mục 1 -->
  <section
    class="dark:bg-gray-100 dark:text-gray-800"
    style="
      margin-top: 70px;
      background: linear-gradient(
        to bottom,
        rgb(250, 250, 250),
        rgb(106, 208, 255),
        rgb(100, 255, 172),
        rgb(255, 255, 255)
      );
    "
  >
    <div class="container flex flex-row mx-auto lg:flex-col">
      <div
        class="w-full lg:w-1/3"
        style="
          background-image: url('https://pasal.edu.vn/upload_images/images/2023/05/31/tat-tan-tat-tu-vung-ielts-chu-de-travel-ban-nhat-dinh-phai-biet-1.png');
          background-position: center;
          background-size: cover;
          border-radius: 1% 58%;
          box-shadow: 3px 4px 8px 3px;
        "
      ></div>
      <div class="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
        <h1><font-awesome-icon :icon="['fas', 'car-rear']" style="color: black" /></h1>
        <h2
          class="text-3xl font-semibold leading-none"
          style="
            background: linear-gradient(black, rgb(51, 0, 133), rgb(186, 76, 255));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          "
        >
          Những Chuyến Đi Ý Nghĩa
        </h2>
        <h3 class="mt-4 mb-8 text-sm" style="letter-spacing: 1px; color: #fff">
          Bạn có muốn xem chuyến đi các Quốc Gia của tôi không ?
        </h3>
        <button
          class="self-start px-10 py-3 text-lg font-medium rounded-3xl dark:bg-violet-600 dark:text-gray-50"
          style="
            background: linear-gradient(
                to right bottom,
                rgb(112, 0, 164) 20%,
                rgb(70, 230, 255)
              )
              200%;
            box-shadow: 2px 6px 3px 1px rgb(167, 167, 167);
          "
        >
          <router-link :to="{ name: 'admin-chuyendi' }" style="text-decoration: none;color:#ffff ">
         
          <span class="ms-3 me-3">Get Started</span>
        </router-link>
        </button>
      </div>
    </div>
  </section>

  <!--  ẩm thực-->

  <!-- <div class="container my-24 mx-auto md:px-6">
    <section class="mb-32 text-center">
      <div class="mb-12 flex flex-wrap justify-center">
        <div class="w-full shrink-0 grow-0 basis-auto px-3 md:w-10/12">
          <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init data-te-ripple-color="light">
            <img
              src="https://img.freepik.com/free-photo/delicious-smoke-cooked-food_23-2151259742.jpg?t=st=1714449281~exp=1714452881~hmac=edfae69cc2285805bc40b1828fbd95238abe945303aec36702e24fc6698d8691&w=996"
              class="w-full" />

            <a href="#!">
              <div
                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
              </div>
            </a>
          </div>
        </div>

        <div class="w-full shrink-0 grow-0 basis-auto px-3 md:w-8/12 xl:w-6/12">
          <h5 class="mb-3 text-lg font-bold">

            Ẩm Thực
          </h5>

          <p class="mb-6">
            Món ăn mang hương vị từng quốc gia khác nhau.
          </p>
          <a data-te-ripple-init data-te-ripple-color="light"
            class="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal no-underline text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            style=" background: linear-gradient( to right bottom,rgb(255, 63, 63), rgb(255, 62, 229));box-shadow: 2px 6px 3px 1px rgb(167, 167, 167);"
            href="" role="button">View</a>
        </div>
      </div>
    </section>
  </div> -->
  <!--      tiếp -->

  <!-- bài viết các nước  -->
  
  <section class="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
    <div class="container p-6 mx-auto space-y-8">
      <div class="space-y-2 text-center">
        <h2
          class="text-3xl font-bold"
          style="
            background: linear-gradient(
              rgb(51, 0, 133),
              rgb(186, 76, 255),
              rgb(255, 255, 255)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            background-size: 220% 100%;
          "
        >
          TIN TỨC
        </h2>
        <p class="font-italic text-sm dark:text-gray-600">
          Cùng mình khám phá những điều thú vị
        </p>
      </div>
      <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        <article class="flex flex-col dark:bg-gray-50">
          <img
            alt=""
            class="object-cover w-full h-72 dark:bg-gray-500"
            src="https://danviet.mediacdn.vn/2021/4/12/dl13-1618184399989307226374.jpg"
            style="object-position: top"
          />
          <div class="flex flex-col flex-1 p-6">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            ></a>
            <a
              rel="noopener noreferrer"
              href="#"
              class="tracking-wider uppercase hover:underline"
              style="
                background: linear-gradient(
                  rgb(76, 0, 79),
                  rgb(255, 107, 107),
                  rgb(255, 255, 255)
                );
                width: 46px;
                height: 25px;
                text-align: center;
                border-radius: 12px;
                color: #fff;
                font-weight: bold;
                font-size: 10px;
              "
            >
              <span style="font-weight: bold">View</span>
            </a>
            <h3
              class="flex-1 py-2 text-lg font-semibold leading-snug"
              style="
                background: linear-gradient(to bottom, #51ff4f, rgb(50, 108, 255));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                background-size: 100% 100%;
              "
            >
             5 ngày du lịch Đà Lạt             </h3>
            <div
              class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600"
            >
              <span>February 15, 2024</span>
              <span>21.6K views</span>
            </div>
          </div>
        </article>
        <article class="flex flex-col dark:bg-gray-50">
          <img
            alt=""
            class="object-cover w-full h-72 dark:bg-gray-500"
            src="https://wiki-travel.com.vn/Uploads/picture/camnhi-201624111651-bien-tien-dong-ngoc-nu.jpg"
          />

          <div class="flex flex-col flex-1 p-6">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            ></a>
            <a
              rel="noopener noreferrer"
              href="#"
              class="text-xs tracking-wider uppercase hover:underline"
              style="
                background: linear-gradient(
                  rgb(76, 0, 79),
                  rgb(255, 107, 107),
                  rgb(255, 255, 255)
                );
                width: 46px;
                height: 25px;
                text-align: center;
                border-radius: 12px;
                color: #fff;
                font-weight: bold;
                font-size: 10px;
              "
            >
              <!-- <router-link
                :to="{ name: 'admin-views' }" style="text-decoration: none;color:#ffff ">
              </router-link> -->
              <span style="font-weight: bold">View</span>
            </a>
            <h3
              class="flex-1 py-2 text-lg font-semibold leading-snug"
              style="
background: linear-gradient(to bottom,#51ff4f ,rgb(50, 108, 255) );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 220% 100%;   }
  
"
            >
             Khu vui lịch Suối Tiên trải nghiệm đáng nhớ
            </h3>
            <div
              class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600"
            >
              <span>June 10, 2024</span>
              <span>12.5K views</span>
            </div>
          </div>
        </article>
        <article class="flex flex-col dark:bg-gray-50">
          <img
            alt=""
            class="object-cover w-full h-72 dark:bg-gray-500"
            src="https://zoomtravel.vn/upload/images/8-dac-san-quy-nhon-nen-mua-lam-qua-1.jpg"
          />

          <div class="flex flex-col flex-1 p-6">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            ></a>
            <a
              rel="noopener noreferrer"
              href="#"
              class="text-xs tracking-wider uppercase hover:underline"
              style="
                background: linear-gradient(
                  rgb(76, 0, 79),
                  rgb(255, 107, 107),
                  rgb(255, 255, 255)
                );
                width: 46px;
                height: 25px;
                text-align: center;
                border-radius: 12px;
                color: #fff;
                font-weight: bold;
                font-size: 10px;
              "
            >
              <!-- <router-link :to="{ name: 'vietnam' }" style="text-decoration: none;color:#ffff ">
              </router-link> -->
              <span style="font-weight: bold">View</span>
            </a>
            <h3
              class="flex-1 py-2 text-lg font-semibold leading-snug"
              style="
                background: linear-gradient(to bottom, #51ff4f, rgb(50, 108, 255));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                background-size: 220% 100%;
              "
            >
             Top 8 đặc sản Quy Nhơn nên mua làm quà
            </h3>
            <div
              class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600"
            >
              <span>May 24, 2024</span>
              <span>21.3K views</span>
            </div>
          </div>
        </article>
        <article class="flex flex-col dark:bg-gray-50">
          <img
            alt=""
            class="object-cover w-full h-72 dark:bg-gray-500"
            src="https://phanthietvn.com/wp-content/uploads/2022/09/review-chan-thuc-3-ngay-4-dem-tu-binh-duong-di-phu-quy-7.jpg"
            style="object-position: center"
          />
          <div class="flex flex-col flex-1 p-6">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            ></a>
            <a
              rel="noopener noreferrer"
              href="#"
              class="text-xs tracking-wider uppercase hover:underline"
              style="
                background: linear-gradient(
                  rgb(76, 0, 79),
                  rgb(255, 107, 107),
                  rgb(255, 255, 255)
                );
                width: 46px;
                height: 25px;
                text-align: center;
                border-radius: 12px;
                color: #fff;
                font-weight: bold;
                font-size: 10px;
              "
            >
              <!-- <router-link :to="{ name: 'VietNam' }" style="text-decoration: none;color:#ffff ">
              </router-link> -->
              <span style="font-weight: bold">View</span>
            </a>
            <h3
              class="flex-1 py-2 text-lg font-semibold leading-snug"
              style="
                background: linear-gradient(to bottom, #51ff4f, rgb(50, 108, 255));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
              "
            >
             Đảo phú quý 2 này 1 đêm
            </h3>
            <div
              class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600"
            >
              <span>February 12, 2024</span>
              <span>26.9K views</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
  <!--  giới thiệu bản thân -->

  <div class="p-6 sm:p-12 dark:bg-gray-50 dark:text-gray-800">
    <div class="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
      <img
        src="https://i.pinimg.com/564x/21/b9/2a/21b92a24348e4857f25805fdb5206f08.jpg"
        alt=""
        class="self-center flex-shrink-0 w- h-48 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300"
      />
      <div class="flex flex-col">
        <h4 class="text-lg font-semibold text-center md:text-left">Salomé</h4>
        <p class="dark:text-gray-600">
          Tôi là người nga, hiện tại công việc của tôi là kinh doanh. Tôi luôn khao khát
          được đặt chân đến những vùng đất mới, trải nghiệm những nền văn hóa mới và hòa
          mình vào thiên nhiên hùng vĩ. Trong tôi luôn tràn đầy niềm háo hức được khám phá
          thế giới, được học hỏi những điều mới mẻ và được chia sẻ những trải nghiệm của
          mình với mọi người.
        </p>
        <p>
          Tôi hy vọng rằng những chia sẻ của tôi sẽ giúp bạn hiểu hơn trải nghiệm du lịch
          của một du khách Nga ưa thích khám phá.
        </p>
      </div>
    </div>
    <div class="flex justify-center pt-4 space-x-4 align-center">
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="GitHub"
        class="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
      >
        <svg
          viewBox="0 0 496 512"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 fill-current"
        >
          <path
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          ></path>
        </svg>
      </a>
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Dribble"
        class="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
      >
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 fill-current"
        >
          <path
            d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"
          ></path>
        </svg>
      </a>
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Twitter"
        class="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
      >
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 fill-current"
        >
          <path
            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
          ></path>
        </svg>
      </a>
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Email"
        class="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
      >
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 fill-current"
        >
          <path
            d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
          ></path>
        </svg>
      </a>
    </div>
  </div>

  <!--  các bài viết tiếp theo -->
  <!-- <div class="max-w-screen-xl p-5 mx-auto">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
      <div
        class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group"
        style="background-image: url(https://img.freepik.com/free-photo/red-velvet-cake-heart-shape-garnished-with-raspberries-mint-leaves_140725-5897.jpg?t=st=1714077935~exp=1714081535~hmac=5e7a77966928cf01a0675f8ab9ab6822b82474304f2951be78c619ab9e6e6f9d&w=740);">
        <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b  ">
        </div>
        <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
          <a rel="noopener noreferrer" href="#" style="color: red; background-color: white;"
            class="px-3 py-2 text-xs font-semibold tracking-wider uppercase no-underline dark:bg-violet-600">
       
              <span style="font-weight: bold;">ART</span>
          </a>
          <div class="flex flex-col justify-start text-center dark:text-gray-800">
            <span class="text-3xl font-semibold leading-none tracking-wide" style="color: #fff; ">31</span>
            <span class="leading-none uppercase" style="color: red; ">Jul</span>
          </div>
        </div>
        <h2 class="z-10 p-5">
          <a rel="noopener noreferrer" href="#" style="color:#fff;"
            class="font-medium text-md no-underline lg:text-2xl lg:font-semibold">

              <span class="ms-3 me-3">Món ăn ngon nhất tôi từng nếm ở các nước </span>
          </a>
        </h2>
      </div>
      <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group"
        style="background-image: url(https://th.bing.com/th/id/OIP.tBa_uQ0EcHgTZp7dE7I4bwHaJn?w=493&h=640&rs=1&pid=ImgDetMain);">
        <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b">
        </div>
        <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
          <a rel="noopener noreferrer" href="#"
            class="px-3 py-2 text-xs font-semibold tracking-wider uppercase no-underline dark:text-gray-800 dark:bg-violet-600"
            style="color: red; background-color: white;">Politics</a>
          <div class="flex flex-col justify-start text-center dark:text-gray-800">
            <span class="text-3xl font-semibold leading-none tracking-wide" style="color: #fff">04</span>
            <span class="leading-none uppercase" style="color: red; ">Aug</span>
          </div>
        </div>
        <h2 class="z-10 p-5">
          <a rel="noopener noreferrer" href="#" class=" text-md no-underline text-base text-gray-900 dark:text-white"
            style="color:#fff; background-color: black;">
        
              <span class="ms-3 me-3">Điều bí ẩn ở Ai Cập </span>
             </a>
        </h2>
      </div>
      <div class="relative flex items-end justify-start w-full text-leftbg-center bg-cover cursor-pointer h-96 group"
        style="background-image: url(https://www.swr.de/swr2/leben-und-gesellschaft/1688735017039%2Ceventim-ticketmaster-106~_v-1x1@2dL_-029cdd853d61a51824ed2ee643deeae504b065c1.jpg);">
        <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b ">
        </div>
        <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
          <a rel="noopener noreferrer" href="#"
            class="px-3 py-2 text-xs font-semibold tracking-wider no-underline dark:text-gray-800 dark:bg-violet-600"
            style="color: red; background-color: white;">Health</a>
          <div class="flex flex-col justify-start text-center dark:text-gray-800">
            <span class="text-3xl font-semibold leading-none tracking-wide" style="color: #fff">01</span>
            <span class="leading-none uppercase" style="color: red; ">Aug</span>
          </div>
        </div>
        <h2 class="z-10 p-5">
          <a rel="noopener noreferrer" href="#" class="text-md no-underline text-base text-gray-900 dark:text-white"
            style="color:#fff; background-color: black;">
      
              <span class="ms-3 me-3">Âm nhạc tôi nghe ở các nước </span>
          </a>
        </h2>
      </div>
      <div class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group"
        style="background-image: url(https://kenh14cdn.com/2020/3/26/kzv1584721239-1585199423475866220608.jpg);">
        <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b ">
        </div>
        <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
          <a rel="noopener noreferrer" href="#"
            class="px-3 py-2 text-xs font-semibold tracking-wider uppercase no-underline dark:bg-violet-600"
            style="color: red; background-color: white;">Science</a>
          <div class="flex flex-col justify-start text-center dark:text-gray-800">
            <span class="text-3xl font-semibold leading-none tracking-wide" style="color: #fff">28</span>
            <span class="leading-none uppercase" style="color: red;">Jul</span>
          </div>
        </div>
        <h2 class="z-10 p-5">
          <a rel="noopener noreferrer" href="#" class="text-md no-underline text-base text-gray-900 dark:text-white"
     
              <span >Văn hóa tôi thích </span>
            </a>
        </h2>
      </div>
      <div class="relative flex items-end justify-start w-full text-leftbg-center bg-cover cursor-pointer h-96 group"
        style="background-image: url(https://i.pinimg.com/originals/1a/0e/ac/1a0eac58edc0548e0006f9e475692160.jpg);">
        <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b ">
        </div>
        <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
          <a rel="noopener noreferrer" href="#"
            class="px-3 py-2 text-xs font-semibold tracking-wider uppercase no-underline dark:text-gray-800 dark:bg-violet-600"
            style="color: red; background-color: white;"> Sports</a>
          <div class="flex flex-col justify-start text-center dark:text-gray-800">
            <span class="text-3xl font-semibold leading-none tracking-wide" style="color: #fff">19</span>
            <span class="leading-none uppercase" style="color: red; ;">Jul</span>
          </div>
        </div>
        <h2 class="z-10 p-5">
          <a rel="noopener noreferrer" href="#" class="text-md no-underline text-base text-gray-900 dark:text-white"
            style="color:#fff; background-color: black;">
     
              <span class="ms-3 me-3">Trang phục đẹp nhất tôi từng thấy </span>
          </a>
        </h2>
      </div>
    </div>
  </div> -->
  <!--  -->
  <!-- Container for demo purpose -->
  <!-- <div class="container my-24 mx-auto md:px-6" style="box-shadow: 3px 4px 9px 3px">
    <section class="mb-32 text-center lg:text-left">
      <h2 class="mb-12 text-center text-3xl font-bold">
        Những chuyến đi ý nghĩa nhất
      </h2>

      <div class="grid gap-x-6 lg:grid-cols-3 lg:gap-x-12">
        <div
          class="mb-6 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0"
          data-te-ripple-init data-te-ripple-color="light">
          <div class="relative overflow-hidden bg-cover bg-no-repeat" style="max-height: 290px;">
            <img src="https://i.pinimg.com/564x/90/35/bc/9035bc061821bf61b523b38ff57cbb24.jpg"
              class="w-full rounded-t-lg" />
            <a href="#!">
              <div
                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]">
              </div>
            </a>
            <svg class="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320">
              <path fill="currentColor"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
          <div class="p-6">
            <h5 class="mb-4 text-lg font-bold">Việt Nam</h5>
            <p class="mb-6">
              Du lịch Việt Nam không chỉ là khám phá cảnh đẹp thiên nhiên hay tìm hiểu văn hóa độc đáo mà còn là trải
              nghiệm những cảm xúc khó quên. Mỗi du khách đến với Việt Nam đều sẽ có những câu chuyện, những kỷ niệm
              riêng để mãi ghi nhớ.
            </p>
            <a href="#!" data-te-ripple-init data-te-ripple-color="light"
              class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              style="background: linear-gradient(rgb(127, 28, 249),rgb(255, 47, 47));background-size: 260% 100%;">View</a>
          </div>
        </div>

        <div
          class="mb-6 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0">
          <div class="relative overflow-hidden bg-cover bg-no-repeat  " data-te-ripple-init data-te-ripple-color="light"
            style="max-height: 290px;">
            <img src="https://i.pinimg.com/564x/c0/19/23/c019235b9d62329da9de99dc37400df6.jpg"
              class="w-full rounded-t-lg " />
            <a href="#!">
              <div
                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]">
              </div>
            </a>
            <svg class="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320">
              <path fill="currentColor"
                d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
          <div class="p-6">
            <h5 class="mb-4 text-lg font-bold">Nhật bản</h5>
            <p class="mb-6">
              Tokyo là một thành phố tuyệt vời để du lịch với nhiều địa điểm tham quan, hoạt động và trải nghiệm độc
              đáo. Du khách đến Tokyo chắc chắn sẽ có một kỳ nghỉ đáng nhớ.
            </p>
            <a href="#!" data-te-ripple-init data-te-ripple-color="light"
              class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              style="background: linear-gradient(rgb(127, 28, 249),rgb(255, 47, 47));background-size: 260% 100%;">View</a>
          </div>
        </div>

        <div
          class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light"
            style="max-height: 290px;">
            <img src="https://i.pinimg.com/564x/10/40/12/104012b8337dc7fc4f7e8f813e5cc776.jpg"
              class="w-full rounded-t-lg" />
            <a href="#!">
              <div
                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]">
              </div>
            </a>
            <svg class="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320">
              <path fill="currentColor"
                d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
          <div class="p-6">
            <h5 class="mb-4 text-lg font-bold">Hy lạp</h5>
            <p class="mb-6">
              Du khách có thể thưởng thức nhiều món ăn Hy Lạp truyền thống. Ngoài ra, Hy Lạp còn có nhiều nhà hàng quốc
              tế, nơi du khách có thể thưởng thức các món ăn từ khắp nơi trên thế giới.
            </p>
            <a href="#!" data-te-ripple-init data-te-ripple-color="light"
              class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              style="background: linear-gradient(rgb(127, 28, 249),rgb(255, 47, 47));background-size: 260% 100%;">View</a>
          </div>
        </div>
      </div>
    </section>
  </div> -->

  <!--  kết thúc -->

  <!-- tiếp -->
  <div class="container my-24 mx-auto md:px-6">
    <section class="mb-32 text-center lg:text-left">
      <div class="py-12 md:px-6 md:px-12">
        <div class="container mx-auto xl:px-32">
          <div class="flex grid items-center lg:grid-cols-2">
            <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
              <div
                class="relative z-[1] block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsl(192,61%,46%)] dark:shadow-black/20 md:px-12 lg:-mr-14"
              >
                <h2 class="mb-2 text-3xl font-bold" style="color: #fff">
                  Những bài học quý giá từ những chuyến du lịch
                </h2>
                <p class="mb-4 font-semibold">Khám phá bản thân</p>
                <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                  Mỗi chuyến đi đều là cơ hội để ta khám phá bản thân, tìm ra những điểm
                  mạnh, điểm yếu và những đam mê mới. Du lịch giúp ta trưởng thành hơn, tự
                  tin hơn và sẵn sàng đối mặt với mọi thử thách trong cuộc sống. Du lịch
                  là một món quà quý giá mà cuộc sống ban tặng cho mỗi chúng ta. Hãy lên
                  kế hoạch cho những chuyến đi thú vị và khám phá những điều tuyệt vời mà
                  thế giới đang chờ đợi bạn!
                </p>
                <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                  Du lịch không chỉ đơn thuần là việc di chuyển từ nơi này đến nơi khác,
                  ngắm nhìn cảnh đẹp và thưởng thức ẩm thực. Mỗi chuyến đi đều là một hành
                  trình khám phá bản thân, mở rộng tầm nhìn và mang đến cho ta những bài
                  học quý giá.
                </p>
                <ul class="flex justify-center lg:justify-start">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        style="color: pink"
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        style="color: pink"
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        style="color: pink"
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        style="color: pink"
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      class="w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:mb-12 lg:mb-0" style="box-shadow: 3px 4px 18px 5px">
              <img
                src="https://img.freepik.com/free-photo/lifestyle-bright-portrait-exited-young-brunette-woman-dancing-having-fun-tropical-resort-holding-tasty-sweet-lemonade-wearing-boho-style-bikini-kimono-relax-travel_291049-758.jpg?t=st=1714449455~exp=1714453055~hmac=6c16586799191f5ac1391afcbde094368f5cfb5d7bd22971e9f2ad7775d04597&w=996"
                class="lg:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!--  đáng giá -->


  <!-- Container for demo purpose -->
  <div class="container my-24 mx-auto md:px-6">
    <section class="mb-32 text-center">
      <h2
        class="mb-12 text-3xl font-bold"
        style="
          border: 2px solid white;
          padding: 10px;
          background: linear-gradient(
            to right,
            rgb(255, 255, 255),
            rgb(0, 110, 255),
            rgb(223, 96, 255),
            rgb(255, 255, 255)
          );
          border: 0px;
          border-radius: 10px;
        "
      >
        Đánh giá
      </h2>

      <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
        <div class="mb-12 md:mb-0">
          <div class="mb-6 flex justify-center">
            <img
              src="https://i.pinimg.com/736x/e6/e5/46/e6e54604e5eec918ac9e6de9a5988ae2.jpg"
              class="w-32 rounded-full shadow-lg dark:shadow-black/20"
            />
          </div>
          <h5 class="mb-2 text-lg font-bold">Leonardo DiCaprio</h5>
          <h6 class="mb-4 font-medium text-primary dark:text-primary-400">Người xem</h6>
          <p class="mb-4">
            "Tôi rất thích cách bạn viết blog. Bài viết của bạn rất hấp dẫn và thú vị,
            khiến tôi muốn đi du lịch ngay lập tức!"
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
              class="inline-block w-6"
            >
              <path
                fill="currentColor"
                d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
              />
            </svg>
          </p>
          <ul class="mb-0 flex justify-center">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                class="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                class="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                class="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                class="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                class="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                />
              </svg>
            </li>
          </ul>
        </div>
        <div class="mb-12 md:mb-0">
          <div class="mb-6 flex justify-center">
            <img
              src="https://i.pinimg.com/736x/bf/69/c2/bf69c2e31dd86f08392ecee06fb8b658.jpg"
              class="w-32 rounded-full shadow-lg dark:shadow-black/20"
              style="width: 130px; height: 130px"
            />
          </div>
          <h5 class="mb-2 text-lg font-bold">Min</h5>
          <h6 class="mb-4 font-medium text-primary dark:text-primary-400">Người xem</h6>
          <p class="mb-4">
            "Blog của bạn đã truyền cảm hứng cho tôi đi du lịch nhiều hơn. Cảm ơn bạn đã
            chia sẻ những câu chuyện và hình ảnh đẹp về những nơi bạn đã đến."
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
              class="inline-block w-6"
            >
              <path
                fill="currentColor"
                d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
              />
            </svg>
          </p>
          <ul class="mb-0 flex justify-center">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                class="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                class="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                class="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                class="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                class="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                />
              </svg>
            </li>
          </ul>
        </div>
        <div class="mb-0">
          <div class="mb-6 flex justify-center">
            <img
              src="https://i.pinimg.com/736x/35/65/80/35658049dc9777cd1463a59476e5dce1.jpg"
              class="w-32 rounded-full shadow-lg dark:shadow-black/20"
            />
          </div>
          <h5 class="mb-2 text-lg font-bold">John Smith</h5>
          <h6 class="mb-4 font-medium text-primary dark:text-primary-400">Người xem</h6>
          <p class="mb-4">
            "Cảm ơn bạn đã chia sẻ những trải nghiệm thú vị của bạn về địa điểm du lịch.
            Nó khiến tôi cảm thấy như được đi du lịch cùng bạn vậy."
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
              class="inline-block w-6"
            >
              <path
                fill="currentColor"
                d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
              />
            </svg>
          </p>
          <ul class="mb-0 flex justify-center">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                class="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                class="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                class="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                class="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                class="w-5 text-warning"
              >
                <path
                  fill="currentColor"
                  d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
  <!--   đánh  gía sao -->
   <ProductList
    style="text-align: center"
    :products="products"
    @editProduct="handleEditProduct"
    @productDeleted="fetchProducts"
  />

  <br />

  
  <div
    class="flex flex-col max-w-xl p-8 rounded-xl lg:p-12 mx-auto dark:bg-gray-50 dark:text-gray-800"
    style="margin-top: 50px; box-shadow: 1px 2px 4px 5px gray"
  >
    <div class="flex flex-col items-center w-full">
      <h2 class="text-3xl font-semibold text-center">Hãy để lại đánh giá của bạn</h2>
      <div class="flex flex-col items-center py-6 space-y-3">
        <span class="text-center">Bạn thấy blog như nào?</span>
        <div class="flex space-x-3">
          <button type="button">
            <div class="star-rating">
              <div class="stars">
                <label class="number"
                  ><input type="radio" name="rating" value="0"
                /></label>
                <label class="star"><input type="radio" name="rating" value="1" /></label>
                <label class="star"><input type="radio" name="rating" value="2" /></label>
                <label class="star"
                  ><input type="radio" name="rating" value="3" checked
                /></label>
                <label class="star"><input type="radio" name="rating" value="4" /></label>
                <label class="star"><input type="radio" name="rating" value="5" /></label>
                <div class="number-rating"></div>
              </div>
            </div>
          </button>
        </div>
      </div>

      <form @submit.prevent="handleSubmit">
        <div class="flex flex-col w-full">
          <div style="text-align: center">
            <ProductForm
              :editingProduct="editingProduct"
              :isEditing="isEditing"
              @productAdded="fetchProducts"
              @productUpdated="handleProductUpdated"
              @cancelEdit="handleCancelEdit"
            />
          </div>
        </div>
      </form>
    </div>
  </div>

  <br >  
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProductList from "../../../components/CommentList.vue";
import ProductForm from "../../../components/CommentForm.vue";
import { supabase } from "../../../supabase.js";


// Declare reactive state
const products = ref([]);
const isEditing = ref(false);
const editingProduct = ref({ id: null, name: "", description: "", price: 0 });

// Fetch products on component mount
onMounted(async () => {
  fetchProducts();
});

// Function to fetch products from the database
const fetchProducts = async () => {
  const { data } = await supabase.from("products").select();
  products.value = data;
};

// Handle product edit
const handleEditProduct = (product) => {
  isEditing.value = true;
  editingProduct.value = { ...product };
};

// Handle product update
const handleProductUpdated = () => {
  isEditing.value = false;
  editingProduct.value = { id: null, name: "", description: "", price: 0 , image:""};
  fetchProducts();
};


// Handle edit cancellation
const handleCancelEdit = () => {
  isEditing.value = false;
  editingProduct.value = { id: null, name: "", description: "", price: 0,image:"" };
};


</script>

<style>
/*  css cho phần dẫn link bài viết  */

.zoom {
  /* Existing styles from your code */
  transition: transform 0.5s ease-in-out;
  /* Adjust duration and timing function as desired */
}

.zoom:hover img {
  transform: scale(1.1);
}

/* Optional: Styling for the overlay on hover */
.zoom:hover .overlay {
  opacity: 1;
}

.overlay {
  /* Existing styles from your code */
}

.overlay h5 {
  /* Existing styles from your code */
}

/*  đánh giá sao */

:root {
  --tran: all 0.5s ease 0s;
  --dark: #1c2429;
  --back: #1d659f;
}

.star:hover,
.star:has(~ .star:hover),
.star:has(:checked),
.star:has(~ .star :checked) {
  --star: #ffdc15;
}

.number:hover ~ .star:has(~ .star :checked) .number:hover ~ .star:has(:checked),
.star:hover ~ .star:has(~ .star :checked),
.star:hover ~ .star:has(:checked) {
  --star: #ffffff;
}

.number:hover ~ .star:has(~ .star :checked):after,
.number:hover ~ .star:has(:checked):after,
.star:hover ~ .star:has(~ .star :checked):after,
.star:hover ~ .star:has(:checked):after {
  clip-path: polygon(
    28% 55%,
    2% 41%,
    30% 31%,
    36% 1%,
    53% 24%,
    28% 55%,
    35% 62%,
    68% 44%,
    98% 52%,
    73% 68%,
    75% 99%,
    52% 80%,
    24% 91%,
    35% 62%
  );
}

.number:hover ~ .star:has(~ .star :checked),
.number:hover ~ .star:has(:checked),
.star:hover ~ .star:has(~ .star :checked),
.star:hover ~ .star:has(:checked) {
  background: var(--dark);
  transition: all 0.1s ease 0s;
  transition: var(--tran);
}

.star:has(:checked) {
  transform: scale(1.25);
  transition-timing-function: linear(
    0 0%,
    0 2.27%,
    0.02 4.53%,
    0.04 6.8%,
    0.06 9.07%,
    0.1 11.33%,
    0.14 13.6%,
    0.25 18.15%,
    0.39 22.7%,
    0.56 27.25%,
    0.77 31.8%,
    1 36.35%,
    0.89 40.9%,
    0.85 43.18%,
    0.81 45.45%,
    0.79 47.72%,
    0.77 50%,
    0.75 52.27%,
    0.75 54.55%,
    0.75 56.82%,
    0.77 59.1%,
    0.79 61.38%,
    0.81 63.65%,
    0.85 65.93%,
    0.89 68.2%,
    1 72.7%,
    0.97 74.98%,
    0.95 77.25%,
    0.94 79.53%,
    0.94 81.8%,
    0.94 84.08%,
    0.95 86.35%,
    0.97 88.63%,
    1 90.9%,
    0.99 93.18%,
    0.98 95.45%,
    0.99 97.73%,
    1 100%
  );
}

.star-rating {
  max-width: 430px;
  padding: 2vmin 10vmin 2.25vmin 4vmin;
  border-radius: 10vmin;
  font-size: 5vmin;
  position: relative;
  background: var(--dark);
}

.stars {
  display: flex;
}

.star {
  display: grid;
  place-items: center;
  padding: 1vmin;
  cursor: pointer;
  transition: var(--tran);
  background: radial-gradient(
    circle at 50% 50%,
    #ffffff 1vmin,
    #fff0 calc(1vmin + 1px) 100%
  );
}

.star input,
.star::before,
.star::after {
  grid-area: star;
  width: 4vmin;
  height: 5vmin;
  margin: 0 0.5vmin;
}

.star [type="radio"] {
  appearance: none;
}

.star::before,
.star::after {
  content: "";
  width: 100%;
  height: 100%;
  clip-path: polygon(
    50% 0%,
    66% 32%,
    100% 38%,
    78% 64%,
    83% 100%,
    50% 83%,
    17% 100%,
    22% 64%,
    0 38%,
    34% 32%
  );
}

.star::after {
  transition: all ease-in-out 130ms;
  width: calc(100% - 0.25vmin);
  height: calc(100% - 0.25vmin);
  background: var(--star);
}

.number-rating:before {
  content: "0";
  font-family: "Days One", sans-serif;
  display: grid;
  place-items: center;
  background: linear-gradient(rgb(255, 115, 107), rgb(169, 10, 213), rgb(87, 224, 255));
  color: #fff280;
  position: absolute;
  margin-top: -3.1vmin;
  border-radius: 100%;
  margin-left: 2vmin;
  font-size: 6vmin;
  width: 13vmin;
  height: 13vmin;
}

body:has(.star:nth-child(2) > input:checked) .star-rating .number-rating:before {
  content: "1";
}

body:has(.star:nth-child(3) > input:checked) .star-rating .number-rating:before {
  content: "2";
}

body:has(.star:nth-child(4) > input:checked) .star-rating .number-rating:before {
  content: "3";
}

body:has(.star:nth-child(5) > input:checked) .star-rating .number-rating:before {
  content: "4";
}

body:has(.star:nth-child(6) > input:checked) .star-rating .number-rating:before {
  content: "5";
}

body:has(.number:hover) .star-rating .number-rating:before {
  content: "0" !important;
}

body:has(.star:nth-child(2):hover) .star-rating .number-rating:before {
  content: "1" !important;
}

body:has(.star:nth-child(3):hover) .star-rating .number-rating:before {
  content: "2" !important;
}

body:has(.star:nth-child(4):hover) .star-rating .number-rating:before {
  content: "3" !important;
}

body:has(.star:nth-child(5):hover) .star-rating .number-rating:before {
  content: "4" !important;
}

body:has(.star:nth-child(6):hover) .star-rating .number-rating:before {
  content: "5" !important;
}

.number {
  display: none;
}
</style>
