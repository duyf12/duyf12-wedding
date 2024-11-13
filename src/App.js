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
import { CircleDollarSign, MessageCircle, Image } from "lucide-react";
import YouTube from "react-youtube";
import FallingHearts from "./FallingHearts";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
function App() {
  return (
    <div className="bg-[#f6f1f3]">
      {/* <HeartAnimation1 /> */}
      <Home />
      <Button />
      <Video />
      <Iamge />
      <Calendar />
      <ThankYou />
      <Couple />
      <Groom />
      <Event />
      <Message />
    </div>
  );
}

const Home = () => {
  return (
    <div className="h-screen bg-lime-200">
      <div className="h-[10vh] bg-[#d6c3ca] flex justify-center items-center text-white">
        Kiến Văn ♥ Việt Hoài sắp kết hôn.
      </div>
      <div className="h-[90vh] bg-[#f6f1f3] justify-center items-center">
        <div className="flex justify-center items-center pt-4">
          <div
            style={{ backgroundImage: `url(${cuoi1})` }}
            className=" h-[400px] w-[400px] bg-center bg-cover rounded-full "
          ></div>
        </div>
        <div className="h-16  flex justify-center items-end text-[#a88290] font-medium">
          24-11
        </div>
        <div className="h-16  flex justify-center items-center text-[#a88290] font-medium">
          Kiến Văn - Việt Hoài
        </div>
        <div className="h-20  flex justify-center items-center text-[#a88290]">
          We are getting married
        </div>
        <div className="h-20  flex justify-center items-center text-[#a88290]">
          Ngày 04 tháng 04 năm 2024
        </div>
      </div>
    </div>
  );
};

const Button = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "all",
  });

  return (
    <div className="p-6" ref={ref}>
      <motion.div
        animate={{ x: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1, type: "spring", delay: 0.2 }}
        className="h-10 bg-[#c9b5b6] flex justify-center items-center rounded-md text-white"
      >
        <MessageCircle size={17} />
        <div className="ml-1">Gửi lời chúc</div>
      </motion.div>
      <motion.div
        animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1, type: "spring", delay: 0.2 }}
        className=" h-10 bg-[#c9b5b6] flex justify-center items-center rounded-md mt-1 text-white"
      >
        <MessageCircle size={17} />
        <div className="ml-1">Xác nhận tham dự</div>
      </motion.div>
      <motion.div
        animate={{ x: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1, type: "spring", delay: 0.2 }}
        className="h-10 bg-[#c9b5b6] flex justify-center items-center rounded-md mt-1 text-white"
      >
        <CircleDollarSign size={17} />
        <div className="ml-1">Mừng cưới</div>
      </motion.div>
    </div>
  );
};



const Video = () => {
  const videoOptions = {
    height: "220",
    width: "390",
    playerVars: {
      autoplay: 1,
    },
  };

  const refTitle = useRef(null);
  const refTitle2 = useRef(null);
  const refVideo = useRef(null);
  const isInViewTitle = useInView(refTitle, {
    amount: "all",
  });
  const isInViewTitle2 = useInView(refTitle2, {
    amount: "all",
  });
  const isInViewVideo = useInView(refVideo, { amount: "all" });

  return (
    <div className="bg-[#f6f1f3]">
      <motion.div
        ref={refTitle}
        animate={{ y: isInViewTitle ? 0 : 50, opacity: isInViewTitle ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
        className=" h-24 pt-6 flex justify-center items-center"
      >
        Video Cưới
      </motion.div>
      <div>
        <motion.div
          ref={refTitle2}
          animate={{
            y: isInViewTitle2 ? 0 : 50,
            opacity: isInViewTitle2 ? 1 : 0,
          }}
          transition={{ type: "spring", delay: 0.2, duration: 1 }}
          className=" pb-6  flex justify-center items-center"
        >
          Tình yêu không làm cho thế giới quay tròn
        </motion.div>
      </div>

      <div>
        <motion.div
          ref={refVideo}
          animate={{
            // scale: isInViewVideo ? 1 : 0.5,
            opacity: isInViewVideo ? 1 : 0,
          }}
          transition={{ duration: 1, type: "spring", delay: 0.2, duration: 1 }}
          className="flex justify-center items-center "
        >
          <YouTube
            videoId="aXKi9vo51xQ"
            opts={videoOptions}
            className="  overflow-hidden rounded-lg"
          />
        </motion.div>
      </div>


    </div>
  );
};

const image = [cuoi1, cuoi2, cuoi3, cuoi4, cuoi5, cuoi6];

const Iamge = () => {

  const refTitle = useRef(null);
  const refTitle2 = useRef(null);
  const refVideo = useRef(null);
  const isInViewTitle = useInView(refTitle, {
    amount: "all",
  });
  const isInViewTitle2 = useInView(refTitle2, {
    amount: "all",
  });
  const isInViewVideo = useInView(refVideo, { amount: "all" });
  const refImage1 = useRef(null);
  const isInView1 = useInView(refImage1, { amount: "some" });

  const refImage2 = useRef(null);
  const isInView2 = useInView(refImage2, { amount: "some" });
  const refImage3 = useRef(null);
  const isInView3 = useInView(refImage3, { amount: "some" });


  const refAll = useRef(null);
  const isInViewAll = useInView(refAll, { amount: "all" });
  return (
    <div className="bg-[#f6f1f3]">
      <div
        ref={refTitle}
        className=" h-28 pt-6 flex justify-center items-center ">
        <motion.div
          animate={{ y: isInViewTitle ? 0 : 50, opacity: isInViewTitle ? 1 : 0 }}
          transition={{ type: "spring", delay: 0.2, duration: 1 }}>
          Album Hình Cưới
        </motion.div>

      </div>
      <div
        ref={refTitle2}

        className=" pb-6  flex justify-center items-center px-6 text-center ">
        <motion.div animate={{ y: isInViewTitle2 ? 0 : 50, opacity: isInViewTitle2 ? 1 : 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.2 }}>
          Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó
          sâu sẽ cho bạn dũng khí
        </motion.div>

      </div>
      <div className="  py-10  px-4">
        <div
          ref={refImage1}
          className="mb-4 break-inside-avoid border-2 rounded-lg border-white bg-red-400 flex w-full justify-evenly">
          <motion.div
            animate={{ x: isInView1 ? 0 : -40, opacity: isInView1 ? 1 : 0 }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="mr-1 w-1/2">
            <img src={cuoi1} className=" object-cover rounded-lg" />
          </motion.div>
          <motion.div
            animate={{ x: isInView1 ? 0 : 40, opacity: isInView1 ? 1 : 0 }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}

            className="ml-1 w-1/2">
            <img src={cuoi2} className=" object-cover rounded-lg" />
          </motion.div>
        </div>

        <div
          ref={refImage2}
          className="mb-4 break-inside-avoid border-2 rounded-lg border-white bg-red-400 flex justify-evenly"
        >
          <motion.div
            animate={{ x: isInView2 ? 0 : 40, opacity: isInView2 ? 1 : 0 }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="mr-1 w-1/2"
          >
            <img src={cuoi3} className=" object-cover rounded-lg" />
          </motion.div>
          <motion.div
            animate={{ x: isInView2 ? 0 : -40, opacity: isInView2 ? 1 : 0 }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="ml-1 w-1/2"
          >
            <img src={cuoi4} className=" object-cover rounded-lg" />
          </motion.div>
        </div>


        <div
          ref={refImage3}
          className="mb-4 break-inside-avoid border-2 rounded-lg border-white bg-red-400 flex justify-evenly"
        >
          <motion.div
            animate={{ x: isInView3 ? 0 : -40, opacity: isInView3 ? 1 : 0 }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="mr-1 w-1/2"
          >
            <img src={cuoi3} className=" object-cover rounded-lg" />
          </motion.div>
          <motion.div
            animate={{ x: isInView3 ? 0 : 40, opacity: isInView3 ? 1 : 0 }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            className="ml-1 w-1/2"
          >
            <img src={cuoi4} className=" object-cover rounded-lg" />
          </motion.div>
        </div>


      </div>
      <div
        ref={refAll}
        className="flex justify-center items-center">
        <motion.div
          animate={{ y: isInViewAll ? 0 : 40, opacity: isInViewAll ? 1 : 0 }}
          transition={{ type: "spring", delay: 0.2, duration: 1 }}

          className="h-10 w-40 bg-[#c9b5b6] flex justify-center items-center rounded-full text-white">
          <Image size={17} />
          <div className="ml-1">Tất cả ảnh</div>
        </motion.div>
      </div>
    </div>
  );
};

// const Image


// {image.map((src, index) => {
//   return (
//     <motion.div
//       ref={ref}
//       animate={{ x: isInViewTitle ? 0 : 50, opacity: isInViewTitle ? 1 : 0 }}
//       transition={{ type: "spring", delay: index * 0.1 }}
//       key={index}
//       className="mb-4 break-inside-avoid border-2 rounded-lg border-white bg-red-400"
//     >
//       <img src={src} className="w-full object-cover rounded-lg" />
//     </motion.div>
//   );
// })}

const Calendar1 = ({ days, firstDayOfMonth }) => {
  // Hàm tạo lịch
  function createCalendar(days, firstDayOfMonth) {
    const calendar = [];
    let week = new Array(7).fill(null); // Mảng tuần, mỗi tuần có 7 ô ngày
    let currentDay = 1;
    let startDay = firstDayOfMonth - 1; // Chuyển sang chỉ số mảng (0: Chủ nhật, 1: Thứ 2, ..., 7: Thứ 7)

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
    <div className="calendar-container max-w-sm mx-auto pt-10">
      {/* Header: Days of the week */}
      <div className=" border-t  border-[#c6c6c6]"></div>
      <div className="grid grid-cols-7 gap-1 text-center font-bold text-sm mt-2 mb-2">
        <div className="text-[#bca0ac] ">CN</div>
        <div className=" text-[#bca0ac]">Thứ 2</div>
        <div className=" text-[#bca0ac]">Thứ 3</div>
        <div className="text-[#bca0ac] ">Thứ 4</div>
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
              className={`p-3 text-center    ${day == 24
                ? "bg-[#c19f9d] rounded-full text-white "
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
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  const firstDayOfMonth = 6;
  const targetDate = new Date("2024-11-24T12:00:00");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }


  const refCalendar = useRef(null);
  const isInViewCa = useInView(refCalendar, { amount: "some" });

  const refDay = useRef(null);
  const isInViewDay = useInView(refDay, { amount: "some" });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#f6f1f3]">

      <motion.div
        ref={refCalendar}
        // initial={{ x: 30, y: 60, opacity: 0 }}
        animate={{
          // x: isInViewCa ? 0 : 60,
          // y: isInViewCa ? 0 : 60,

          x: isInViewCa ? 0 : -40,  // Di chuyển từ trái qua phải
          y: isInViewCa ? 0 : 40,
          opacity: isInViewCa ? 1 : 0,
        }}
        transition={{ type: "spring", delay: 0.2, duration: 1 }}
      >
        <Calendar1 days={days} firstDayOfMonth={firstDayOfMonth} />
      </motion.div>

      <motion.div
        ref={refDay}
        animate={{
          x: isInViewDay ? 0 : 40,
          y: isInViewDay ? 0 : 40,
          opacity: isInViewCa ? 1 : 0,
        }}
        className="p-4 mt-10">
        {timeLeft.days !== undefined ? (
          <div className="flex justify-around items-center">
            <div className="">
              <div className="flex justify-center items-center text-5xl text-[#b893a3]">
                {timeLeft.days}
              </div>
              <div className="flex justify-center items-center text-[#bca0ac]">
                Ngày{" "}
              </div>
            </div>
            <div>
              <div className="flex  justify-center items-center text-5xl text-[#b893a3]">
                {timeLeft.hours}
              </div>
              <div className="flex justify-center items-center text-[#bca0ac]">
                Giờ{" "}
              </div>
            </div>
            <div>
              <div className="flex  justify-center items-center text-5xl text-[#b893a3]">
                {timeLeft.minutes}
              </div>
              <div className="flex justify-center items-center text-[#bca0ac]">
                Phút{" "}
              </div>
            </div>
            <div>
              <div className="flex  justify-center items-center text-5xl text-[#b893a3]">
                {timeLeft.seconds}
              </div>
              <div className="flex justify-center items-center text-[#bca0ac]">
                Giây{" "}
              </div>
            </div>
          </div>
        ) : (
          <span></span>
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
    <div className="mt-14 ">
      <motion.div
        ref={refImage}
        animate={{ y: isInViewImage ? 0 : 40, opacity: isInViewImage ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1, }}
      >
        <img src={couple} alt="sdsd" />
      </motion.div>
      <motion.div
        ref={refText1}
        animate={{ x: isInViewText1 ? 0 : 40, opacity: isInViewText1 ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1, }}
        className="text-center text-[#a88290] mt-10">
        Cảm ơn tất cả những người bạn thân yêu của tôi!
      </motion.div>
      <motion.div
        ref={refText2}
        animate={{ x: isInViewText2 ? 0 : -40, opacity: isInViewText2 ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1, }}
        className="text-center px-6 text-[#a88290]">
        Tôi biết các bạn rất bận rộn, bận rộn với công việc, bận rộn với công
        việc gia đình…
      </motion.div>
      <motion.div
        ref={refText3}
        animate={{ x: isInViewText3 ? 0 : 40, opacity: isInViewText3 ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1, }}
        className="text-center px-6 text-[#a88290]">
        Nhưng tất cả đã có mặt hôm nay để chúc mừng tinh yêu và hạnh phúc của
        chúng tôi.
      </motion.div>
      <motion.div
        ref={refText4}
        animate={{ x: isInViewText4 ? 0 : -40, opacity: isInViewText4 ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1, }}
        className="text-center px-6 text-[#a88290]">
        Một lần nữa chân thành cảm ơn tất cả các bạn!
      </motion.div>
      <div
        ref={refTextCouple}
        className="text-center px-6 mt-14 text-[#a88290] flex justify-evenly items-end">
        <motion.div
          animate={{ x: isInViewTextCouple ? 0 : -40, opacity: isInViewTextCouple ? 1 : 0 }}
          transition={{ type: "spring", delay: 0.2, duration: 1, }}
        >
          groom
        </motion.div>
        <motion.div
          animate={{ y: isInViewTextCouple ? 0 : 60, opacity: isInViewTextCouple ? 1 : 0 }}
          transition={{ type: "spring", delay: 0.2, duration: 1, }}
          className="text-[#bb7996] font-semibold text-2xl">
          Mai Duy ♥ Mai Thủy
        </motion.div>
        <motion.div
          animate={{ x: isInViewTextCouple ? 0 : 40, opacity: isInViewTextCouple ? 1 : 0 }}
          transition={{ type: "spring", delay: 0.2, duration: 1, }}
        >
          bride
        </motion.div>
      </div>
    </div>
  );
};

const Couple = () => {
  const refIcon = useRef(null);
  const isInViewIcon = useInView(refIcon, { amount: "some" });
  return (
    <div
      ref={refIcon}
      className="p-4 mt-8">
      <motion.div
        animate={{ scale: isInViewIcon ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1, }}
      >
        <img src={icon} className=" object-cover rounded-lg" />
      </motion.div>
      <motion.div
        animate={{ y: isInViewIcon ? 0 : 40, opacity: isInViewIcon ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1, }}
      >
        <img src={couple2} className="mt-4 object-cover rounded-lg" />
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
    <div className="p-4 mt-8">
      <motion.div
        ref={refText1}
        animate={{ y: isInViewText1 ? 0 : 40, opacity: isInViewText1 ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1, }}
        className=" flex justify-center items-center text-3xl">
        Cô Dâu & Chú Rể
      </motion.div>
      <motion.div
        ref={refText2}
        animate={{ y: isInViewText2 ? 0 : 40, opacity: isInViewText2 ? 1 : 0 }}
        transition={{ type: "spring", delay: 0.2, duration: 1.1, }}
        className="flex justify-center items-center  mt-4">
        Giới thiệu một chú rể đẹp trai và cô dâu xinh đẹp
      </motion.div>
      <div className="mt-8">
        <motion.div
          ref={refImageGroom}
          animate={{ rotateY: isInViewImageGroom ? 0 : 120 }}
          transition={{ type: "spring", delay: 0.2, duration: 1, }}
        >
          <img src={groom} className=" object-cover rounded-lg" />
        </motion.div>
        <motion.div
          ref={refText3}
          animate={{ y: isInViewText3 ? 0 : -40, opacity: isInViewText3 ? 1 : 0 }}
          transition={{ type: "spring", delay: 0.2, duration: 1, }}
          className="flex justify-center items-center mt-2 text-[#5f5e62] font-bold">
          Mai Duy
        </motion.div>
        <div className="flex justify-center items-center text-[#847275]">
          <motion.div
            animate={{ x: isInViewText3 ? 0 : -40, opacity: isInViewText3 ? 1 : 0 }}
            transition={{ type: "spring", delay: 0.2, duration: 1, }}>
            Con ông:
          </motion.div>
          <motion.div
            animate={{ x: isInViewText3 ? 0 : 40, opacity: isInViewText3 ? 1 : 0 }}
            transition={{ type: "spring", delay: 0.2, duration: 1, }}
            className="text-[#5f5e62] font-bold ml-2">Mai Văn Hoàng</motion.div>
        </div>
        <div className="flex justify-center items-center text-[#847275]">
          <motion.div
            animate={{ x: isInViewText3 ? 0 : -40, opacity: isInViewText3 ? 1 : 0 }}
            transition={{ type: "spring", delay: 0.2, duration: 1, }}>
            Con bà:
          </motion.div>
          <motion.div
            animate={{ x: isInViewText3 ? 0 : 40, opacity: isInViewText3 ? 1 : 0 }}
            transition={{ type: "spring", delay: 0.2, duration: 1, }}
            className="text-[#5f5e62] font-bold ml-2">Mai Thị Xuân</motion.div>
        </div>
        <motion.div
          animate={{ y: isInViewText3 ? 0 : 40, opacity: isInViewText3 ? 1 : 0 }}
          transition={{ type: "spring", delay: 0.2, duration: 1, }}
          className="flex justify-center items-center px-4 text-center text-[#847275]">
          Là bác sĩ nha khoa hiện đang công tác tại một phòng khám nha khoa ở Hà
          nội...
        </motion.div>
      </div>
      <motion.div
        ref={refImageBride}
        animate={{ rotateY: isInViewImageGroom ? 0 : -120 }}
        transition={{ type: "spring", delay: 0.2, duration: 1, }}
        className="mt-8">
        <img src={bride} className=" object-cover rounded-lg" />
      </motion.div>

      <div className="flex justify-center items-center mt-2 text-[#5f5e62] font-bold">
        Mai Thủy
      </div>
      <div className="flex justify-center items-center text-[#847275]">
        Con ông:{" "}
        <span className="text-[#5f5e62] font-bold ml-2">Mai Văn Thành</span>
      </div>
      <div className="flex justify-center items-center text-[#847275]">
        Con bà:{" "}
        <span className="text-[#5f5e62] font-bold ml-2">Nguyễn Thị Thắm</span>
      </div>
      <div className="flex justify-center items-center px-4 text-center text-[#847275]">
        Là dược sĩ hiện đang công tác tại một phòng khám nha khoa ở Hà nội...
      </div>
    </div>
  );
};

const Event = () => {
  return (
    <div className="p-4 mt-4">
      <div className="flex justify-center items-center text-3xl text-center text-[#555356]">
        Sự kiện cưới
      </div>
      <div className="flex justify-center items-center  text-center px-4 text-[#555356]">
        Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám
        cưới của chúng tôi!
      </div>
      <div className="mt-6">
        <div>
          <img src={nhagai} className=" object-cover rounded-t-lg" />
        </div>
        <div className="bg-[#ecd9d9] p-3 rounded-b-lg">
          <div className="text-[#555356]">
            <span className="font-medium">LỄ VU QUY</span> - 13h30 24/11/2024
          </div>
          <div className="text-[#555356]">
            Tiệc cưới nhà gái - 11h 24/11/2024
          </div>
          <div className="text-[#555356]">
            Tư gia nhà gái - Xóm 16 Hải Nam, Hải Hậu, Nam Định
          </div>
          <div className=" mt-2 bg-[#c9b5b6]  px-2 py-1 rounded inline-block text-white ">
            Xem bản đồ
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div>
          <img src={nhatrai} className=" object-cover rounded-t-lg" />
        </div>
        <div className="bg-[#ecd9d9] p-3 rounded-b-lg">
          <div className="text-[#555356]">
            <span className="font-medium">LỄ THÀNH HÔN</span> - 14h05 24/11/2024
          </div>
          <div className="text-[#555356]">
            Tiệc cưới nhà trai - 11h 24/11/2024
          </div>
          <div className="text-[#555356]">
            Tư gia nhà gái - Xóm 15 Hải Nam, Hải Hậu, Nam Định
          </div>
          <div className=" mt-2 bg-[#c9b5b6]  px-2 py-1 rounded inline-block text-white ">
            Xem bản đồ
          </div>
        </div>
      </div>
    </div>
  );
};

const Message = () => {
  return (
    <div className="p-4 mt-4">
      <div className="flex justify-center items-center text-3xl text-center text-[#555356]">
        Sự kiện cưới
      </div>
      <div className="flex justify-center items-center  text-center px-4 text-[#555356] mt-2">
        Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám
        cưới của chúng tôi!
      </div>

      <div className="bg-[#ecd9d9] p-3 rounded-lg mt-4">
        <div className="flex justify-between">
          <input
            placeholder="Họ và tên"
            className="w-[180px] px-2 py-2 border rounded text-[#555356] focus:outline-none focus:ring-4 focus:ring-[#b4bfe2]"
          />
          <input
            placeholder="Email"
            className="w-[180px] px-2 py-2 border rounded text-[#555356] focus:outline-none focus:ring-4 focus:ring-[#b4bfe2]"
          />
        </div>
        <div>
          <textarea
            class="mt-3 w-full h-[150px] border  text-[#555356] rounded p-2  resize-none focus:outline-none focus:ring-4 focus:ring-[#b4bfe2]"
            placeholder="Nhập lời chúc của bạn"
          ></textarea>
        </div>
        <div className="flex justify-center items-center">
          <div className="  bg-[#c9b5b6] mt-3 px-4 py-2 rounded inline-block text-white ">
            GỬI LỜI CHÚC
          </div>
        </div>
      </div>

      <div className="bg-[#ecd9d9] p-3 rounded-lg mt-4">
        <div className=" px-2 py-2 bg-white rounded ">
          <div className="text-[#555356]">Duy KAka</div>
          <div className="text-[#555356] mt-2">
            Chúc anh chị trăm năm hạnh phúc
          </div>
        </div>
        <div className=" px-2 py-2 bg-white rounded mt-2">
          <div className="text-[#555356]">Duy KAka</div>
          <div className="text-[#555356] mt-2">
            Chúc anh chị trăm năm hạnh phúc
          </div>
        </div>
        <div className=" h-10 px-2 py-2 "></div>
      </div>
      <div className="mt-20 mb-10">
        <div className=" text-[#555356] flex justify-center items-center text-3xl">
          Thank you!
        </div>
        <div className=" text-[#555356] flex justify-center items-center text-3xl">
          -- Mai Duy & Mai Thủy --
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

const FallingHeart = () => {
  // Tạo vị trí ngẫu nhiên cho trái tim
  const [leftPosition, setLeftPosition] = useState(`${Math.random() * 100}vw`);
  const [duration, setDuration] = useState(`${10 + Math.random() * 10}s`);
  console.log("duration= ", duration);

  useEffect(() => {
    // Cập nhật vị trí ngẫu nhiên mỗi khi component được render lại
    setLeftPosition(`${Math.random() * 100}vw`);
    setDuration(`${10 + Math.random() * 10}s`);
  }, []);

  return (
    <div
      className="absolute top-0 text-red-500 text-3xl animate-fall"
      style={{ left: leftPosition, animationDuration: duration }}
    >
      ❤️
    </div>
  );
};

const HeartAnimation = () => {
  const hearts = Array.from({ length: 10 }); // 20 trái tim

  return (
    <div className="absolute overflow-hidden h-screen w-full z-50">
      {hearts.map((_, index) => (
        <FallingHeart key={index} />
      ))}
    </div>
  );
};

const HeartAnimation1 = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(), // Tạo id duy nhất cho mỗi trái tim
        left: Math.random() * 100, // Vị trí trái tim ngẫu nhiên theo chiều ngang
        animationDuration: Math.random() * (40 - 30) + 30, // Thời gian bay ngẫu nhiên
      };
      setHearts((prev) => [...prev, newHeart]); // Thêm trái tim mới vào danh sách
    }, 5000); // Thêm trái tim mỗi giây
    return () => clearInterval(interval); // Dọn dẹp interval khi component bị hủy
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-2xl animate-heart"
          style={{
            left: `calc(${heart.left}% - 30px)`,
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
