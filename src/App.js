/* eslint-disable no-lone-blocks */
import logo from "./logo.svg";
import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import cuoi1 from "./images/cuoi1.jpg";
import cuoi2 from "./images/cuoi2.jpg";
import cuoi3 from "./images/cuoi3.jpg";
import cuoi4 from "./images/cuoi4.jpg";
import cuoi5 from "./images/cuoi5.jpg";
import cuoi6 from "./images/cuoi6.jpg";

import couple from "./images/sub_title.png";
import couple2 from "./images/couple.png";
import icon from "./images/icon.png";

import bride from "./images/bride.png";
import groom from "./images/groom.jpg";
import nhagai from "./images/nhagai.png";
import nhatrai from "./images/nhatrai.jpeg";

import main_bg from "./images/main_bg.png";
import hoa2 from "./images/hoa2.png";

import test1 from "./images/test1.jpg";

import { CircleDollarSign, MessageCircle, Image } from "lucide-react";
import YouTube from "react-youtube";
import { ref, push, set, onValue, remove } from "firebase/database";
import { database } from "./firebase";

import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
function App() {
  const refHome = useRef(null);
  const refButton = useRef(null);
  const refVideo = useRef(null);
  const refMessage = useRef(null);
  const refMoney = useRef(null);

  console.log("Firebase Database:", database);
  const togleButton = (type) => {
    console.log("vào đây");

    if (type == "money") {
      refMoney.current.scrollIntoView({ behavior: "smooth" });
    } else {
      refMessage.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-[#f6f1f3]">
      <Home />

      <Button
        onclick={(type) => {
          togleButton(type);
        }}
      />
      <Video />
      <Iamge />

      <Calendar />
      <IamgeLife />
      <ThankYou />
      <Couple />
      <Groom />
      <Event />
      <div ref={refMessage}>
        <Message />
      </div>
      <div ref={refMoney}>
        <Money />
      </div>
      <End />
      <HeartAnimation1 />
    </div>
  );
}

// <div
//             style={{ backgroundImage: `url(${cuoi1})` }}
//             className=" h-[400px] w-[400px] bg-center bg-cover rounded-full "
//           ></div>

// <img
// src={cuoi1}
// alt="Your photo"
// className="w-[380px] h-[380px]  z-10 absolute  bg-center bg-cover rounded-full   object-cover"
// />

const Home = () => {
  const refImage = useRef(null);
  const isInViewImage = useInView(refImage, { amount: "some" });

  const refText = useRef(null);
  const isInViewText = useInView(refText, { amount: "some" });

  const refTextTo = useRef(null);
  const isInViewTextTo = useInView(refTextTo, { amount: "some" });
  return (
    <div className="min-h-screen  font-sans">
      <div className="text-lg sm:text-2xl h-[10vh] bg-[#d6c3ca] flex justify-center items-center text-white text-center px-4">
        Mai Duy ♥ Mai Thủy sắp kết hôn.
      </div>
      <div className="min-h-[90vh]   flex flex-col items-center ">
        <div className="flex sm:hidden  justify-center items-center mb-4 transition-all duration-500 ">
          <div
            ref={refImage}
            className=" h-[420px] w-[420px] bg-center bg-cover rounded-full "
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: isInViewImage ? 1 : 0,
                opacity: isInViewImage ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
              className=" mt-10 w-[410px] h-[410px]  relative flex justify-center items-center  transition-all duration-500"
            >
              <img
                src={main_bg}
                alt="Circular frame"
                className="z-20  absolute  bg-center bg-cover    "
              />
              <img
                src={cuoi1}
                alt="Your photo"
                className="w-[330px] h-[330px]  z-10 absolute  bg-center bg-cover rounded-full   object-cover"
              />
            </motion.div>
          </div>
        </div>
        <div
          ref={refText}
          className=" mt-10 block sm:hidden ext-center text-[#a88290] font-medium  transition-all duration-500 "
        >
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{
              y: isInViewText ? 0 : 40,
              opacity: isInViewText ? 1 : 0,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="text-3xl text-center"
          >
            24-11
          </motion.div>
          <motion.div className="mt-4 text-4xl text-center flex font-bold">
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{
                y: isInViewText ? 0 : -40,
                opacity: isInViewText ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
            >
              Mai Duy
            </motion.div>
            <div className="px-2">-</div>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: isInViewText ? 0 : 40,
                opacity: isInViewText ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
            >
              Mai Thủy
            </motion.div>
          </motion.div>
          <div className="mt-4 ">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: isInViewText ? 0 : -40,
                opacity: isInViewText ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
              className=" text-xl text-center"
            >
              We are getting married
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{
              y: isInViewText ? 0 : -40,
              opacity: isInViewText ? 1 : 0,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className=" mt-2 text-xl text-center"
          >
            Ngày 24 tháng 11 năm 2024
          </motion.div>
        </div>
        {/* khi màn to */}
        <div className=" hidden sm:block  justify-center items-center transition-all duration-500 ">
          {/* Hình ảnh */}
          <div
            style={{ backgroundImage: `url(${test1})` }}
            className=" min-h-[90vh]  w-screen bg-center   bg-cover  flex  justify-center items-center  "
          >
            <div ref={refTextTo} className=" text-[#a88290]">
              <div className="  flex text-5xl md:text-6xl transition-all duration-500 font-bold custom-text-border ">
                <motion.div
                  initial={{ y: -40, opacity: 0 }}
                  animate={{
                    y: isInViewTextTo ? 0 : -40,
                    opacity: isInViewTextTo ? 1 : 0,
                  }}
                  transition={{ type: "spring", delay: 0.2, duration: 1 }}
                >
                  Mai Duy
                </motion.div>
                <motion.div
                  animate={{
                    scale: [0.2, 1, 0.2, 1, 0.2], // Keyframes for horizontal shake
                  }}
                  transition={{
                    duration: 5, // Duration of the shake
                    ease: "easeInOut", // Easing function
                    repeat: Infinity, // Repeat the animation
                    repeatType: "loop", // Loop the shake animation
                  }}
                  className="px-2"
                >
                  ❤️
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{
                    y: isInViewTextTo ? 0 : 40,
                    opacity: isInViewTextTo ? 1 : 0,
                  }}
                  transition={{ type: "spring", delay: 0.2, duration: 1 }}
                >
                  Mai Thủy
                </motion.div>
              </div>
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{
                  y: isInViewTextTo ? 0 : 40,
                  opacity: isInViewTextTo ? 1 : 0,
                }}
                transition={{ type: "spring", delay: 0.2, duration: 1 }}
                className=" text-1xl md:text-2xl  text-center mt-10 transition-all duration-500 font-bold"
              >
                ----- 24/11/2024 -----
              </motion.div>
            </div>
          </div>
        </div>

        {/* Thông tin */}
      </div>
    </div>
  );
};

const Button = ({ onclick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "all",
  });

  const onClickButton = (type) => {
    onclick(type);
  };

  return (
    <div
      className=" sm:p-6 block sm:flex justify-around  transition-all duration-500 font-sans"
      ref={ref}
    >
      {/* Gửi lời chúc */}
      <motion.div
        animate={{ x: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1, type: "spring", delay: 0.2 }}
        className=" cursor-pointer h-12 w-full max-w-xs bg-[#c9b5b6] flex justify-center items-center rounded-md text-white  mx-auto "
        onClick={() => {
          onClickButton("message");
        }}
      >
        <MessageCircle size={17} />
        <div className="ml-1">Gửi lời chúc</div>
      </motion.div>

      <motion.div
        animate={{ x: isInView ? 0 : -50, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1, type: "spring", delay: 0.2 }}
        className="cursor-pointer sm:mt-0 mt-10  h-12 w-full max-w-xs bg-[#c9b5b6] flex justify-center items-center rounded-md text-white  mx-auto transition-all duration-500"
        onClick={() => {
          onClickButton("money");
        }}
      >
        <CircleDollarSign size={17} />
        <div className="ml-1">Mừng cưới</div>
      </motion.div>
    </div>
  );
};

const Video = () => {
  const videoOptions = {
    playerVars: {
      autoplay: 1,
    },
  };

  const refTitle = useRef(null);
  const refTitle2 = useRef(null);
  const refVideo = useRef(null);
  const isInViewTitle = useInView(refTitle, { amount: "all" });
  const isInViewTitle2 = useInView(refTitle2, { amount: "all" });
  const isInViewVideo = useInView(refVideo, { amount: "some" });

  return (
    <div className="font-sans bg-[#f6f1f3] py-6">
      {/* Tiêu đề 1 */}
      <motion.div
        ref={refTitle}
        animate={{ y: isInViewTitle ? 0 : 50, opacity: isInViewTitle ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
        className="font-script text-4xl md:text-5xl font-semibold text-center mb-4 text-[#a88290] transition-all duration-500"
      >
        Video Cưới
      </motion.div>

      {/* Tiêu đề 2 */}
      <motion.div
        ref={refTitle2}
        animate={{
          y: isInViewTitle2 ? 0 : 50,
          opacity: isInViewTitle2 ? 1 : 0,
        }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
        className="text-lg md:text-xl text-center mb-6 text-[#a88290] transition-all duration-500"
      >
        Tình yêu không làm cho thế giới quay tròn
      </motion.div>

      {/* Video */}
      <motion.div
        ref={refVideo}
        animate={{ y: isInViewVideo ? 0 : 50 }}
        transition={{ duration: 1.5, type: "spring", delay: 0.2 }}
        className="flex justify-center items-center"
      >
        <div className="">
          <YouTube
            videoId="aXKi9vo51xQ"
            opts={videoOptions}
            className="overflow-hidden rounded-lg   w-[390px]  h-[220px]  sm:w-[640px] sm:h-[360px] transition-all duration-500"
          />
        </div>
      </motion.div>
    </div>
  );
};

const Iamge = () => {
  const refTitle = useRef(null);
  const refTitle2 = useRef(null);
  const refImage1 = useRef(null);
  const refImage2 = useRef(null);
  const refImage3 = useRef(null);
  const refImage = useRef(null);
  const refAll = useRef(null);

  const isInViewTitle = useInView(refTitle, { amount: "all" });
  const isInViewTitle2 = useInView(refTitle2, { amount: "all" });
  const isInView1 = useInView(refImage1, { amount: "some" });
  const isInView2 = useInView(refImage2, { amount: "some" });
  const isInView3 = useInView(refImage3, { amount: "some" });
  const isInViewAll = useInView(refAll, { amount: "all" });

  return (
    <div className="font-sans bg-[#f6f1f3] py-6 px-4">
      {/* Tiêu đề chính */}
      <div ref={refTitle} className="h-24 flex justify-center items-center">
        <motion.div
          animate={{
            y: isInViewTitle ? 0 : 50,
            opacity: isInViewTitle ? 1 : 0,
          }}
          transition={{ type: "spring", delay: 0.2, duration: 1 }}
          className="font-script text-4xl md:text-5xl font-semibold text-center text-[#a88290] transition-all duration-500"
        >
          Album Hình Cưới
        </motion.div>
      </div>

      {/* Phần mô tả */}
      <div
        ref={refTitle2}
        className="pb-6 flex justify-center items-center px-6 text-center"
      >
        <motion.div
          animate={{
            y: isInViewTitle2 ? 0 : 50,
            opacity: isInViewTitle2 ? 1 : 0,
          }}
          transition={{ duration: 1, type: "spring", delay: 0.2 }}
          className="text-lg md:text-xl text-[#a88290] transition-all duration-500"
        >
          Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai
          đó sâu sẽ cho bạn dũng khí
        </motion.div>
      </div>

      {/* Grid hình ảnh */}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 transition-all duration-500">
        {[
          { src: cuoi1 },
          { src: cuoi2 },
          { src: cuoi3 },
          { src: cuoi4 },
          { src: cuoi5 },
          { src: cuoi6 },
        ].map((image, index) => (
          <motion.div
            key={index}
            ref={index === 0 ? refImage1 : index === 1 ? refImage2 : refImage3}
            animate={{
              y: index % 2 === 0 ? (isInView2 ? 0 : -40) : isInView2 ? 0 : 40,
              opacity: isInView2 ? 1 : 0,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className=" mb-4 break-inside-avoid  overflow-hidden"
          >
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="transform transition duration-500 hover:scale-125 w-full object-cover rounded-lg border-2  border-white"
            />
          </motion.div>
        ))}
      </div>

      {/* Button Xem tất cả */}
      {/* <div ref={refAll} className="flex justify-center items-center mt-6">
        <motion.div
          animate={{ y: isInViewAll ? 0 : -40, opacity: isInViewAll ? 1 : 0 }}
          transition={{ type: "spring", delay: 0.2, duration: 1 }}
          className="h-10 w-40 bg-[#c9b5b6] flex justify-center items-center rounded-full text-white"
        >
          <Image size={17} />
          <div className="ml-1">Tất cả ảnh</div>
        </motion.div>
      </div> */}
    </div>
  );
};

const IamgeLife = () => {
  const refTitle = useRef(null);
  const refTitle2 = useRef(null);
  const refImage1 = useRef(null);
  const refImage2 = useRef(null);
  const refImage3 = useRef(null);
  const refImage = useRef(null);
  const refAll = useRef(null);

  const isInViewTitle = useInView(refTitle, { amount: "all" });
  const isInViewTitle2 = useInView(refTitle2, { amount: "all" });
  const isInView1 = useInView(refImage1, { amount: "some" });
  const isInView2 = useInView(refImage2, { amount: "some" });
  const isInView3 = useInView(refImage3, { amount: "some" });
  const isInViewAll = useInView(refAll, { amount: "all" });

  return (
    <div className="font-sans bg-[#f6f1f3] py-6 px-4">
      {/* Tiêu đề chính */}
      <div ref={refTitle} className="h-24 flex justify-center items-center">
        <motion.div
          animate={{
            y: isInViewTitle ? 0 : 50,
            opacity: isInViewTitle ? 1 : 0,
          }}
          transition={{ type: "spring", delay: 0.2, duration: 1 }}
          className="font-script text-4xl md:text-5xl font-semibold text-center text-[#a88290] transition-all duration-500"
        >
          Những khoẳng khắc
        </motion.div>
      </div>

      {/* Phần mô tả */}
      <div
        ref={refTitle2}
        className="pb-6 flex justify-center items-center px-6 text-center"
      >
        <motion.div
          animate={{
            y: isInViewTitle2 ? 0 : 50,
            opacity: isInViewTitle2 ? 1 : 0,
          }}
          transition={{ duration: 1, type: "spring", delay: 0.2 }}
          className="text-lg md:text-xl text-[#a88290] transition-all duration-500"
        >
          Mỗi khoảnh khắc bên nhau đều như một món quà tuyệt vời, khiến tình yêu
          của chúng tôi ngày càng sâu đậm hơn, mãi mãi bền vững
        </motion.div>
      </div>

      {/* Grid hình ảnh */}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 transition-all duration-500">
        {[
          { src: cuoi1 },
          { src: cuoi2 },
          { src: cuoi3 },
          { src: cuoi4 },
          { src: cuoi5 },
          { src: cuoi6 },
        ].map((image, index) => (
          <motion.div
            key={index}
            ref={index === 0 ? refImage1 : index === 1 ? refImage2 : refImage3}
            animate={{
              y: index % 2 === 0 ? (isInView2 ? 0 : -40) : isInView2 ? 0 : 40,
              opacity: isInView2 ? 1 : 0,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className=" mb-4 break-inside-avoid  overflow-hidden"
          >
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="transform transition duration-500 hover:scale-125 w-full object-cover rounded-lg border-2  border-white"
            />
          </motion.div>
        ))}
      </div>

      {/* Button Xem tất cả */}
      {/* <div ref={refAll} className="flex justify-center items-center mt-6">
        <motion.div
          animate={{ y: isInViewAll ? 0 : -40, opacity: isInViewAll ? 1 : 0 }}
          transition={{ type: "spring", delay: 0.2, duration: 1 }}
          className="h-10 w-40 bg-[#c9b5b6] flex justify-center items-center rounded-full text-white"
        >
          <Image size={17} />
          <div className="ml-1">Tất cả ảnh</div>
        </motion.div>
      </div> */}
    </div>
  );
};

// const Image

{
  /* <div className=" columns-2 sm:columns-2 lg:columns-3 py-10 md: py:py-20 gap-4 px-4">
{image.map((src, index) => {
  return (
    <div
      key={index}
      className="mb-4 break-inside-avoid border-2 rounded-lg border-white"
    >
      <img src={src} className="w-full object-cover rounded-lg" />
    </div>
  );
})}
</div> */
}

const Calendar1 = ({ days, firstDayOfMonth }) => {
  // Hàm tạo lịch
  function createCalendar(days, firstDayOfMonth) {
    const calendar = [];
    let week = new Array(7).fill(null); // Mảng tuần, mỗi tuần có 7 ô ngày
    let currentDay = 1;
    let startDay = firstDayOfMonth - 1; // Chuyển sang chỉ số mảng

    // Thêm ngày vào tuần đầu tiên
    for (let i = startDay; i < 7; i++) {
      if (currentDay <= days.length) {
        week[i] = currentDay++;
      }
    }
    calendar.push(week);

    // Thêm các tuần tiếp theo
    while (currentDay <= days.length) {
      week = new Array(7).fill(null);
      for (let i = 0; i < 7; i++) {
        if (currentDay <= days.length) {
          week[i] = currentDay++;
        }
      }
      calendar.push(week);
    }

    return calendar;
  }

  const calendar = createCalendar(days, firstDayOfMonth);

  return (
    <div className="font-sans calendar-container sm:max-w-xl max-w-sm mx-auto pt-10 transition-all duration-500">
      {/* Header: Days of the week */}
      <div className=" border-t  border-[#c6c6c6]"></div>
      <div className="grid grid-cols-7 gap-1 text-center font-bold text-sm mt-2 mb-2">
        <div className="text-[#bca0ac]">CN</div>
        <div className=" text-[#bca0ac]">Thứ 2</div>
        <div className=" text-[#bca0ac]">Thứ 3</div>
        <div className="text-[#bca0ac]">Thứ 4</div>
        <div className=" text-[#bca0ac]">Thứ 5</div>
        <div className=" text-[#bca0ac]">Thứ 6</div>
        <div className=" text-[#bca0ac]">Thứ 7</div>
      </div>
      <div className=" border-t  border-[#c6c6c6]"></div>
      {/* Body: Days of the month */}
      {calendar.map((week, index) => (
        <div className="grid grid-cols-7 gap-1" key={index}>
          {week.map((day, idx) => (
            <div
              className={`p-3 text-center ${
                day === 24
                  ? "bg-[#c19f9d] rounded-full text-white"
                  : "text-[#bca0ac]"
              }`}
              key={idx}
            >
              {day || ""}
            </div>
          ))}
        </div>
      ))}
      <div className=" border-t mt-4 border-[#c6c6c6]"></div>
    </div>
  );
};

const Calendar = () => {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const firstDayOfMonth = 6; // Ngày đầu tiên trong tháng bắt đầu vào thứ 6
  const targetDate = new Date("2024-11-24T12:00:00");

  const [timeLeft, setTimeLeft] = useState({});

  const refCalendar = useRef(null);
  const refCountdown = useRef(null);

  const isInViewCalendar = useInView(refCalendar, { amount: "some" });
  const isInViewCountdown = useInView(refCountdown, { amount: "some" });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate - new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return {};
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="font-sans bg-[#f6f1f3]">
      <motion.div
        ref={refCalendar}
        animate={{
          // x: isInViewCalendar ? 0 : 40,
          y: isInViewCalendar ? 0 : 40,
          opacity: isInViewCalendar ? 1 : 0,
        }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
      >
        <Calendar1 days={days} firstDayOfMonth={firstDayOfMonth} />
      </motion.div>

      <motion.div
        ref={refCountdown}
        animate={{
          // x: isInViewCountdown ? 0 : 40,
          y: isInViewCountdown ? 0 : 40,
          opacity: isInViewCountdown ? 1 : 0,
        }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
        className="p-4 mt-10"
      >
        {timeLeft.days !== undefined ? (
          <div className="flex justify-evenly items-center font-bold">
            {["days", "hours", "minutes", "seconds"].map((unit) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="text-5xl text-[#b893a3]">{timeLeft[unit]}</div>
                <div className="text-[#bca0ac] capitalize">{unit}</div>
              </div>
            ))}
          </div>
        ) : (
          <span>Thời gian đã đến!</span>
        )}
      </motion.div>
    </div>
  );
};

const ThankYou = () => {
  const refImage = useRef(null);
  const isInViewImage = useInView(refImage, { amount: "some" });

  const refText1 = useRef(null);
  const isInViewText1 = useInView(refText1, { amount: "some" });

  const refText2 = useRef(null);
  const isInViewText2 = useInView(refText2, { amount: "some" });

  const refText3 = useRef(null);
  const isInViewText3 = useInView(refText3, { amount: "some" });

  const refText4 = useRef(null);
  const isInViewText4 = useInView(refText4, { amount: "some" });

  const refTextCouple = useRef(null);
  const isInViewTextCouple = useInView(refTextCouple, { amount: "some" });

  return (
    <div className="mt-14 font-sans ">
      <motion.div
        ref={refImage}
        animate={{ y: isInViewImage ? 0 : 40, opacity: isInViewImage ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
        className="flex justify-center items-center"
      >
        <img src={couple} alt="sdsd" />
      </motion.div>
      <motion.div
        ref={refText1}
        animate={{ y: isInViewText1 ? 0 : 40, opacity: isInViewText1 ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
        className="text-center text-[#a88290] mt-10"
      >
        Cảm ơn tất cả những người bạn thân yêu của tôi!
      </motion.div>
      <motion.div
        ref={refText2}
        animate={{ y: isInViewText2 ? 0 : -40, opacity: isInViewText2 ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
        className="text-center px-6 text-[#a88290]"
      >
        Tôi biết các bạn rất bận rộn, bận rộn với công việc, bận rộn với công
        việc gia đình…
      </motion.div>
      <motion.div
        ref={refText3}
        animate={{ y: isInViewText3 ? 0 : 40, opacity: isInViewText3 ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
        className="text-center px-6 text-[#a88290]"
      >
        Nhưng tất cả đã có mặt hôm nay để chúc mừng tinh yêu và hạnh phúc của
        chúng tôi.
      </motion.div>
      <motion.div
        ref={refText4}
        animate={{ y: isInViewText4 ? 0 : -40, opacity: isInViewText4 ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
        className="text-center px-6 text-[#a88290]"
      >
        Một lần nữa chân thành cảm ơn tất cả các bạn!
      </motion.div>
      <div
        ref={refTextCouple}
        className="text-center px-6 mt-14 text-[#a88290] flex justify-center items-end"
      >
        <motion.div
          animate={{
            y: isInViewTextCouple ? 0 : -40,
            opacity: isInViewTextCouple ? 1 : 0,
          }}
          transition={{ type: "spring", delay: 0.2, duration: 1 }}
          className=" sm:mr-16 mr-6"
        >
          groom
        </motion.div>
        <motion.div
          animate={{
            y: isInViewTextCouple ? 0 : 60,
            opacity: isInViewTextCouple ? 1 : 0,
          }}
          transition={{ type: "spring", delay: 0.2, duration: 1 }}
          className="text-[#bb7996] font-semibold text-2xl sm:text-4xl transition-all duration-500"
        >
          Mai Duy ♥ Mai Thủy
        </motion.div>
        <motion.div
          animate={{
            y: isInViewTextCouple ? 0 : 40,
            opacity: isInViewTextCouple ? 1 : 0,
          }}
          transition={{ type: "spring", delay: 0.2, duration: 1 }}
          className="sm:ml-16 ml-6"
        >
          bride
        </motion.div>
      </div>
    </div>
  );
};
//cũ
const Couple = () => {
  const refIcon = useRef(null);
  const isInViewIcon = useInView(refIcon, { amount: "some" });
  return (
    <div ref={refIcon} className=" p-4 mt-8 ">
      <motion.div
        animate={{ scale: isInViewIcon ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
        className="flex justify-center items-center"
      >
        <img src={icon} className=" object-cover rounded-lg" />
      </motion.div>
      <motion.div
        animate={{
          y: isInViewIcon ? 0 : 60,
          scale: isInViewIcon ? 1 : 0,
        }}
        transition={{ type: "spring", delay: 0.2, duration: 1.2 }}
        className="flex justify-center items-center "
      >
        <img
          src={couple2}
          alt="jhuj"
          className="transform transition duration-500 hover:scale-125 mt-4 object-cover rounded-lg h-[60vh] "
        />
      </motion.div>
    </div>
  );
};

const Groom = () => {
  const refText1 = useRef(null);
  const isInViewText1 = useInView(refText1, { amount: "some" });

  const refText2 = useRef(null);
  const isInViewText2 = useInView(refText2, { amount: "some" });

  const refImageGroom = useRef(null);
  const isInViewImageGroom = useInView(refImageGroom, { amount: "some" });

  const refImageBride = useRef(null);
  const isInViewImageBride = useInView(refImageBride, { amount: "some" });

  const refText3 = useRef(null);
  const isInViewText3 = useInView(refText3, { amount: "some" });

  const refText4 = useRef(null);
  const isInViewText4 = useInView(refText4, { amount: "some" });

  return (
    <div className=" font-sans p-4 mt-8">
      <motion.div
        ref={refText1}
        animate={{ y: isInViewText1 ? 0 : 40, opacity: isInViewText1 ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
        className="font-script  flex justify-center items-center text-4xl md:text-5xl"
      >
        Cô Dâu & Chú Rể
      </motion.div>
      <motion.div
        ref={refText2}
        animate={{ y: isInViewText2 ? 0 : 40, opacity: isInViewText2 ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1.1 }}
        className="flex justify-center items-center  mt-4"
      >
        Giới thiệu một chú rể đẹp trai và cô dâu xinh gái
      </motion.div>
      <div className="block sm:flex justify-center transition-all duration-500">
        <div className="mt-8 ">
          <motion.div
            ref={refImageGroom}
            animate={{
              opacity: isInViewImageGroom ? 1 : 0,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="flex justify-center items-center "
          >
            <img
              src={groom}
              alt="koko"
              className=" transform transition duration-500 hover:scale-125  w-[50vh]  object-cover rounded-lg"
            />
          </motion.div>
          <motion.div
            ref={refText3}
            animate={{
              y: isInViewText3 ? 0 : -40,
              opacity: isInViewText3 ? 1 : 0,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className=" text-2xl font-script flex justify-center items-center mt-2 text-[#5f5e62] font-bold"
          >
            Mai Duy
          </motion.div>
          <div className=" flex justify-center items-center text-[#847275]">
            <motion.div
              animate={{
                y: isInViewText3 ? 0 : -40,
                opacity: isInViewText3 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
            >
              Con ông:
            </motion.div>
            <motion.div
              animate={{
                y: isInViewText3 ? 0 : 40,
                opacity: isInViewText3 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
              className="text-[#5f5e62] font-bold ml-2"
            >
              Mai Văn Hoàng
            </motion.div>
          </div>
          <div className="flex justify-center items-center text-[#847275]">
            <motion.div
              animate={{
                y: isInViewText3 ? 0 : -40,
                opacity: isInViewText3 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
            >
              Con bà:
            </motion.div>
            <motion.div
              animate={{
                y: isInViewText3 ? 0 : 40,
                opacity: isInViewText3 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
              className="text-[#5f5e62] font-bold ml-2"
            >
              Mai Thị Xuân
            </motion.div>
          </div>
          <motion.div
            animate={{
              y: isInViewText3 ? 0 : 40,
              opacity: isInViewText3 ? 1 : 0,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="flex justify-center items-center px-4 text-center text-[#847275]"
          >
            Là bác sĩ nha khoa hiện đang công tác tại một phòng khám nha khoa ở
            Hà nội...
          </motion.div>
        </div>
        <div>
          <motion.div
            ref={refImageBride}
            animate={{
              opacity: isInViewImageBride ? 1 : 0,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="flex justify-center items-center mt-8 "
          >
            <img
              src={bride}
              alt="sds"
              className="transform transition duration-500 hover:scale-125  w-[50vh]  object-cover rounded-lg"
            />
          </motion.div>

          <motion.div
            ref={refText4}
            animate={{
              y: isInViewText4 ? 0 : -40,
              opacity: isInViewText4 ? 1 : 0,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="text-2xl font-script flex justify-center items-center mt-2 text-[#5f5e62] font-bold"
          >
            Mai Thủy
          </motion.div>
          <div className="flex justify-center items-center text-[#847275]">
            <motion.div
              animate={{
                y: isInViewText4 ? 0 : -40,
                opacity: isInViewText4 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
            >
              Con ông:
            </motion.div>
            <motion.div
              animate={{
                y: isInViewText4 ? 0 : 40,
                opacity: isInViewText4 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
              className="text-[#5f5e62] font-bold ml-2"
            >
              Mai Văn Thành
            </motion.div>
          </div>
          <div className="flex justify-center items-center text-[#847275]">
            <motion.div
              animate={{
                y: isInViewText4 ? 0 : -40,
                opacity: isInViewText4 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
            >
              Con bà:
            </motion.div>
            <motion.div
              animate={{
                y: isInViewText4 ? 0 : 40,
                opacity: isInViewText4 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
              className="text-[#5f5e62] font-bold ml-2"
            >
              Nguyễn Thị Thắm
            </motion.div>
          </div>
          <motion.div
            animate={{
              y: isInViewText4 ? 0 : 40,
              opacity: isInViewText4 ? 1 : 0,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="flex justify-center items-center px-4 text-center text-[#847275]"
          >
            Là bác sĩ nha khoa hiện đang công tác tại một phòng khám nha khoa ở
            Hà nội...
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Event = () => {
  const refText1 = useRef(null);
  const isInViewText1 = useInView(refText1, { amount: "some" });

  const refText2 = useRef(null);
  const isInViewText2 = useInView(refText2, { amount: "some" });

  const refImageGroom = useRef(null);
  const isInViewImageGroom = useInView(refImageGroom, { amount: "some" });

  const refImageBride = useRef(null);
  const isInViewImageBride = useInView(refImageBride, { amount: "some" });

  const refText3 = useRef(null);
  const isInViewText3 = useInView(refText3, { amount: "some" });

  const refText4 = useRef(null);
  const isInViewText4 = useInView(refText4, { amount: "some" });

  const openMapGroom = () => {
    window.open(
      "https://www.google.com/maps/place/20%C2%B013'42.9%22N+106%C2%B020'07.3%22E/@20.228572,106.3347083,263m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d20.228572!4d106.335352?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  const openMapBride = () => {
    window.open(
      "https://www.google.com/maps/place/20%C2%B013'41.1%22N+106%C2%B019'50.1%22E/@20.228095,106.3299293,263m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d20.228095!4d106.330573?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  return (
    <div className="font-sans p-4 mt-4">
      <motion.div
        ref={refText1}
        animate={{
          y: isInViewText1 ? 0 : 40,
          opacity: isInViewText1 ? 1 : 0,
        }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
        className=" text-4xl md:text-5xl font-script flex justify-center items-center  text-center text-[#555356]"
      >
        Sự kiện cưới
      </motion.div>
      <motion.div
        ref={refText2}
        animate={{
          y: isInViewText2 ? 0 : 40,
          opacity: isInViewText2 ? 1 : 0,
        }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
        className="mt-4 flex justify-center items-center  text-center px-4 text-[#555356]"
      >
        Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám
        cưới của chúng tôi!
      </motion.div>
      <div className="block sm:flex justify-evenly transition-all duration-500 ">
        <div className="mt-8 ">
          <motion.div
            ref={refImageGroom}
            animate={{
              y: isInViewText3 ? 0 : 40,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="flex sm:justify-normal  justify-center items-center transition-all duration-500"
          >
            <img
              src={nhagai}
              alt="koko"
              className="  w-[50vh]  object-cover rounded-lg"
            />
          </motion.div>
          <motion.div
            ref={refText3}
            animate={{
              y: isInViewText3 ? 0 : -40,
              opacity: isInViewText3 ? 1 : 0,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="  mt-2  font-bold"
          >
            <div className="text-[#555356]">
              <span className="font-medium">LỄ VU QUY</span> - 13h30 24/11/2024
            </div>
            <div className="text-[#847275] mt-2">
              Tiệc cưới nhà gái - 11h 24/11/2024
            </div>
            <div className="text-[#847275] pr-4 ">
              Tư gia nhà gái - Xóm 16 Hải Nam, Hải Hậu, Nam Định
            </div>
            <div
              onClick={openMapBride}
              className=" cursor-pointer  mt-2 bg-[#c9b5b6]  px-2 py-1 rounded inline-block text-white "
            >
              Xem bản đồ
            </div>
          </motion.div>
        </div>
        <div>
          <motion.div
            ref={refImageBride}
            animate={{
              y: isInViewText3 ? 0 : 40,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="flex sm:justify-normal  justify-center items-center mt-8 transition-all duration-500"
          >
            <img
              src={nhatrai}
              alt="sds"
              className=" w-[50vh]  object-cover rounded-lg"
            />
          </motion.div>
          <motion.div
            ref={refText4}
            animate={{
              y: isInViewText4 ? 0 : -40,
              opacity: isInViewText4 ? 1 : 0,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="  mt-2  font-bold"
          >
            <div className="text-[#555356]">
              <span className="font-medium">LỄ Thành Hôn</span> - 13h50
              24/11/2024
            </div>
            <div className="text-[#847275] mt-2">
              Tiệc cưới nhà trai - 11h 24/11/2024
            </div>
            <div className="text-[#847275] pr-4 ">
              Tư gia nhà trai - Xóm 15 Hải Nam, Hải Hậu, Nam Định
            </div>
            <div
              onClick={openMapGroom}
              className=" cursor-pointer mt-2 bg-[#c9b5b6]  px-2 py-1 rounded inline-block text-white "
            >
              Xem bản đồ
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Message = () => {
  const refText1 = useRef(null);
  const isInViewText1 = useInView(refText1, { amount: "some" });

  const refText2 = useRef(null);
  const isInViewText2 = useInView(refText2, { amount: "some" });

  const refTextInput1 = useRef(null);
  const isInViewInput1 = useInView(refTextInput1, { amount: "some" });

  const refTextInput2 = useRef(null);
  const isInViewInput2 = useInView(refTextInput2, { amount: "some" });

  const [name, setName] = useState(""); // Tên người gửi
  const [message, setMessage] = useState(""); // Nội dung lời chúc
  const [messages, setMessages] = useState([]); // Danh sách lời chúc

  // Hàm lưu lời chúc vào Firebase
  const saveMessage = (name, message) => {
    const messagesRef = ref(database, "messages"); // Tham chiếu tới "messages"
    const newMessageRef = push(messagesRef); // Tạo một ID mới
    set(newMessageRef, { name, message, timestamp: Date.now() }) // Lưu dữ liệu vào Firebase
      .then(() => console.log("Message saved"))
      .catch((error) => console.error("Error saving message:", error));
  };

  // Hàm lấy danh sách lời chúc từ Firebase
  useEffect(() => {
    const messagesRef = ref(database, "messages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.values(data).sort(
          (a, b) => b.timestamp - a.timestamp
        ); // Sắp xếp theo thời gian (mới nhất trước)
        setMessages(messageList);
      } else {
        setMessages([]); // Không có dữ liệu
      }
    });
  }, []);

  // Hàm xử lý khi gửi lời chúc
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      saveMessage(name, message); // Lưu tên và lời chúc vào Firebase
      setName(""); // Xóa nội dung ô nhập tên
      setMessage(""); // Xóa nội dung ô nhập lời chúc
    }
  };

  const handleDeleteAll = () => {
    const messagesRef = ref(database, "messages");
    remove(messagesRef)
      .then(() => {
        console.log("All messages deleted");
        setMessages([]); // Xóa danh sách lời chúc hiển thị trong giao diện
      })
      .catch((error) => console.error("Error deleting messages:", error));
  };

  return (
    <div className="font-sans p-4 mt-4">
      <motion.div
        ref={refText1}
        animate={{
          y: isInViewText1 ? 0 : 40,
          opacity: isInViewText1 ? 1 : 0,
        }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
        className="font-script  text-4xl md:text-5xl flex justify-center items-center  text-center text-[#555356]"
      >
        Sổ lưu bút
      </motion.div>
      <motion.div
        ref={refText2}
        animate={{
          y: isInViewText2 ? 0 : 40,
          opacity: isInViewText2 ? 1 : 0,
        }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
        className="flex justify-center items-center  text-center px-4 text-[#555356] mt-2"
      >
        Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám
        cưới của chúng tôi!
      </motion.div>
      {/* <div onClick={handleDeleteAll}>xóa</div> */}
      <div className="mt-6 flex justify-center items-center">
        <div className="w-full sm:w-[500px]  bg-[#ecd9d9] p-3 rounded-lg mt-4 transition-all duration-500">
          <div ref={refTextInput1} className="flex justify-between">
            <motion.div
              animate={{
                y: isInViewInput1 ? 0 : -40,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Họ và tên"
                className="w-[200px] sm:w-[240px]  px-2 py-2 border rounded text-[#555356] focus:outline-none focus:ring-4 focus:ring-[#b4bfe2] transition-all duration-500"
              />
            </motion.div>
          </div>
          <motion.div
            animate={{
              y: isInViewInput1 ? 0 : 40,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
          >
            <textarea
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              class="mt-3 w-full h-[150px] border  text-[#555356] rounded p-2  resize-none focus:outline-none focus:ring-4 focus:ring-[#b4bfe2]"
              placeholder="Nhập lời chúc của bạn"
            ></textarea>
          </motion.div>
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={handleSubmit}
          >
            <motion.div
              animate={{
                y: isInViewInput1 ? 0 : -40,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
              className="  bg-[#c9b5b6] mt-3 px-4 py-2 rounded inline-block text-white "
            >
              GỬI LỜI CHÚC
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div className="mt-6 flex justify-center items-center">
        <div
          ref={refTextInput2}
          className="w-full sm:w-[500px] bg-[#ecd9d9] p-3 rounded-lg mt-4 transition-all duration-500"
        >
          {messages.map((name, index) => {
            return (
              <motion.div
                animate={{
                  y: isInViewInput2 ? 0 : 40,
                }}
                transition={{ type: "spring", delay: 0.2, duration: 1 }}
                className=" px-2 py-2 bg-white rounded mt-2 "
              >
                <div className="text-[#555356] text-2xl font-semibold">
                  {name.name}
                </div>
                <div className="text-[#555356] mt-2 break-words">
                  {name.message}
                </div>
              </motion.div>
            );
          })}

          <div className=" h-10 px-2 py-2 "></div>
        </div>
      </motion.div>
    </div>
  );
};

const Money = () => {
  const refText1 = useRef(null);
  const isInViewText1 = useInView(refText1, { amount: "some" });

  const refText2 = useRef(null);
  const isInViewText2 = useInView(refText2, { amount: "some" });

  const refImageGroom = useRef(null);
  const isInViewImageGroom = useInView(refImageGroom, { amount: "some" });

  const refImageBride = useRef(null);
  const isInViewImageBride = useInView(refImageBride, { amount: "some" });

  const refText3 = useRef(null);
  const isInViewText3 = useInView(refText3, { amount: "some" });

  const refText4 = useRef(null);
  const isInViewText4 = useInView(refText4, { amount: "some" });

  return (
    <div className="font-sans p-4 mt-8">
      <motion.div
        ref={refText1}
        animate={{ y: isInViewText1 ? 0 : 40, opacity: isInViewText1 ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
        className="font-script  text-4xl md:text-5xl flex justify-center items-center "
      >
        Hộp mừng cưới
      </motion.div>

      <div className="block sm:flex justify-center transition-all duration-500">
        <div className="mt-8  bg-white sm:mr-20 mr-0 py-4 rounded-lg">
          <motion.div
            animate={{
              opacity: isInViewImageBride ? 1 : 0,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="flex justify-center items-center mb-4 "
          >
            ĐẾN CHÚ RỂ
          </motion.div>
          <motion.div
            ref={refImageGroom}
            animate={{
              opacity: isInViewImageGroom ? 1 : 0,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="flex justify-center items-center px-4"
          >
            <img
              src={groom}
              alt="koko"
              className="  w-[30vh]  object-cover rounded-lg"
            />
          </motion.div>

          <div
            ref={refText3}
            className="mt-2 flex justify-center items-center text-[#847275]"
          >
            <motion.div
              animate={{
                x: isInViewText3 ? 0 : -40,
                opacity: isInViewText3 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
            >
              Ngân hàng:
            </motion.div>
            <motion.div
              animate={{
                x: isInViewText3 ? 0 : 40,
                opacity: isInViewText3 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
              className="text-[#5f5e62] font-bold ml-2"
            >
              MB bank
            </motion.div>
          </div>

          <div className="flex justify-center items-center text-[#847275]">
            <motion.div
              animate={{
                x: isInViewText3 ? 0 : -40,
                opacity: isInViewText3 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
            >
              Tên tài khoản:
            </motion.div>
            <motion.div
              animate={{
                x: isInViewText3 ? 0 : 40,
                opacity: isInViewText3 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
              className="text-[#5f5e62] font-bold ml-2"
            >
              Mai Văn Duy
            </motion.div>
          </div>
          <div className="flex justify-center items-center text-[#847275]">
            <motion.div
              animate={{
                x: isInViewText3 ? 0 : -40,
                opacity: isInViewText3 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
            >
              Số tài khoản:
            </motion.div>
            <motion.div
              animate={{
                x: isInViewText3 ? 0 : 40,
                opacity: isInViewText3 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
              className="text-[#5f5e62] font-bold ml-2"
            >
              1871263871628736
            </motion.div>
          </div>
        </div>
        <div className="sm:ml-20 ml-0 bg-white mt-8 py-4 rounded-lg">
          <motion.div
            animate={{
              opacity: isInViewImageBride ? 1 : 0,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="flex justify-center items-center mb-4 "
          >
            ĐẾN CÔ DÂU
          </motion.div>
          <motion.div
            ref={refImageBride}
            animate={{
              opacity: isInViewImageBride ? 1 : 0,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="flex justify-center items-center   mx-4 "
          >
            <img
              src={bride}
              alt="sds"
              className=" w-[30vh]  object-cover rounded-lg"
            />
          </motion.div>

          <div
            ref={refText4}
            className="mt-2 flex justify-center items-center text-[#847275]"
          >
            <motion.div
              animate={{
                x: isInViewText4 ? 0 : -40,
                opacity: isInViewText4 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
            >
              Ngân hàng:
            </motion.div>
            <motion.div
              animate={{
                x: isInViewText4 ? 0 : 40,
                opacity: isInViewText4 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
              className="text-[#5f5e62] font-bold ml-2"
            >
              MB bank
            </motion.div>
          </div>
          <div className="flex justify-center items-center text-[#847275]">
            <motion.div
              animate={{
                x: isInViewText4 ? 0 : -40,
                opacity: isInViewText4 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
            >
              Tên tài khoản:
            </motion.div>
            <motion.div
              animate={{
                x: isInViewText4 ? 0 : 40,
                opacity: isInViewText4 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
              className="text-[#5f5e62] font-bold ml-2"
            >
              Mai Văn Duy
            </motion.div>
          </div>
          <div className="flex justify-center items-center text-[#847275]">
            <motion.div
              animate={{
                x: isInViewText4 ? 0 : -40,
                opacity: isInViewText4 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
            >
              Số tài khoản:
            </motion.div>
            <motion.div
              animate={{
                x: isInViewText4 ? 0 : 40,
                opacity: isInViewText4 ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
              className="text-[#5f5e62] font-bold ml-2"
            >
              8723487234324
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const End = () => {
  const refImage = useRef(null);
  const isInViewImage = useInView(refImage, { amount: "some" });

  const refText = useRef(null);
  const isInViewText = useInView(refText, { amount: "some" });

  return (
    <div className="font-sans flex justify-center items-center">
      <div>
        <div
          ref={refImage}
          className="  h-[420px] w-[420px] bg-center bg-cover rounded-full "
        >
          <motion.div
            animate={{
              scale: isInViewImage ? 1 : 0,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="  mt-10 w-[410px] h-[410px]  relative flex justify-center items-center "
          >
            <img
              src={hoa2}
              alt="Circular frame"
              className="transition duration-500 hover:scale-105 z-20  absolute  bg-center bg-cover    "
            />
            <img
              src={cuoi1}
              alt="Your photo"
              className="transition duration-500 hover:scale-125 w-[300px] h-[300px]  ml-4 mt-4 z-10 absolute  bg-center bg-cover rounded-full   object-cover"
            />
          </motion.div>
        </div>

        <div ref={refText} className="mt-10 mb-10 ">
          <motion.div
            animate={{
              y: isInViewText ? 0 : -40,
            }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="font-bold  text-[#555356] flex justify-center items-center text-3xl"
          >
            Thank you!
          </motion.div>
          <div className=" text-[#555356] flex justify-center items-center text-3xl">
            <motion.div
              animate={{
                x: isInViewText ? 0 : -40,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
            >
              --
            </motion.div>
            <motion.div
              animate={{
                scale: isInViewText ? 1 : 0,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
              className="px-2"
            >
              Mai Duy & Mai Thủy
            </motion.div>
            <motion.div
              animate={{
                x: isInViewText ? 0 : -40,
              }}
              transition={{ type: "spring", delay: 0.2, duration: 1 }}
            >
              --
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const titleTab = [
  "Cặp đôi",
  "Chuyện tình yêu",
  "Phù Dâu & Phù Rể",
  "Album Hình Cưới",
  "Sự kiện cưới",
  "Sổ Lưu Bút",
  "Mừng Cưới",
];
const Tab = () => {
  return (
    <div className="z-40 h-16 bg-gray-500  px-20 flex items-center justify-center absolute w-full">
      <div className="w-1/4 bg-lime-200 justify-center items-center flex">
        Duy Thủy
      </div>
      <div className="w-3/4 flex  justify-center items-center ">
        {titleTab.map((name, index) => (
          <div key={index} className="px-5 py-4 text-center ">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

const HeartAnimation1 = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Thêm một vài trái tim ban đầu ngay khi component được render
    const initialHearts = Array.from({ length: 5 }, () => ({
      id: Date.now() + Math.random(), // Tạo id duy nhất cho mỗi trái tim
      left: Math.random() * 90, // Vị trí trái tim ngẫu nhiên theo chiều ngang
      animationDuration: Math.random() * (40 - 30) + 30, // Thời gian bay ngẫu nhiên
    }));
    setHearts(initialHearts);

    // Interval để thêm trái tim mới sau mỗi 5 giây
    const interval = setInterval(() => {
      setHearts((prev) => {
        if (prev.length >= 20) {
          return [
            ...prev.slice(1),
            {
              id: Date.now(),
              left: Math.random() * 90,
              animationDuration: Math.random() * (40 - 30) + 30,
            },
          ];
        } else {
          return [
            ...prev,
            {
              id: Date.now(),
              left: Math.random() * 90,
              animationDuration: Math.random() * (40 - 30) + 30,
            },
          ];
        }
      });
    }, 5000); // Thêm trái tim mỗi 5 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component bị hủy
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-2xl animate-heart"
          style={{
            left: `calc(${heart.left}% - 20px)`,
            animationDuration: `${heart.animationDuration}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default App;
