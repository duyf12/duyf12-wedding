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
import { CircleDollarSign, MessageCircle, Image } from "lucide-react";
import YouTube from "react-youtube";

function App() {
  return (
    <div className="bg-[#f6f1f3]">
      <Home />
      <Button />
      <Video />
      <Iamge />
      <Calendar />
      <ThankYou />
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
  return (
    <div className="p-6">
      <div className="h-10 bg-[#c9b5b6] flex justify-center items-center rounded-md text-white">
        <MessageCircle size={17} />
        <div className="ml-1">Gửi lời chúc</div>
      </div>
      <div className=" h-10 bg-[#c9b5b6] flex justify-center items-center rounded-md mt-1 text-white">
        <MessageCircle size={17} />
        <div className="ml-1">Xác nhận tham dự</div>
      </div>
      <div className="h-10 bg-[#c9b5b6] flex justify-center items-center rounded-md mt-1 text-white">
        <CircleDollarSign size={17} />
        <div className="ml-1">Mừng cưới</div>
      </div>
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
  return (
    <div className="bg-[#f6f1f3]">
      <div className=" h-24 pt-6 flex justify-center items-center">
        Video Cưới
      </div>
      <div className=" pb-6  flex justify-center items-center">
        Tình yêu không làm cho thế giới quay tròn
      </div>
      <div className="flex justify-center items-center ">
        <YouTube
          videoId="aXKi9vo51xQ"
          opts={videoOptions}
          className="  overflow-hidden rounded-lg"
        />
      </div>
    </div>
  );
};

const image = [cuoi1, cuoi2, cuoi3, cuoi4, cuoi5, cuoi6];

const Iamge = () => {
  return (
    <div className="bg-[#f6f1f3]">
      <div className=" h-28 pt-6 flex justify-center items-center">
        Video Cưới
      </div>
      <div className=" pb-6  flex justify-center items-center px-6 text-center">
        Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó
        sâu sẽ cho bạn dũng khí
      </div>
      <div className=" columns-2 sm:columns-2 lg:columns-3 py-10 md: py:py-20 gap-4 px-4">
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
      </div>
      <div className="flex justify-center items-center">
        <div className="h-10 w-40 bg-[#c9b5b6] flex justify-center items-center rounded-full text-white">
          <Image size={17} />
          <div className="ml-1">Tất cả ảnh</div>
        </div>
      </div>
    </div>
  );
};

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
              className={`p-3 text-center    ${
                day == 24
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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#f6f1f3]">
      <Calendar1 days={days} firstDayOfMonth={firstDayOfMonth} />
      <div className="p-4 mt-10">
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
      </div>
    </div>
  );
};

const ThankYou = () => {
  return (
    <div className="mt-14 ">
      <div>
        <img src={couple} alt="sdsd" />
      </div>
      <div className="text-center text-[#a88290] mt-10">
        Cảm ơn tất cả những người bạn thân yêu của tôi!
      </div>
      <div className="text-center px-6 text-[#a88290]">
        Tôi biết các bạn rất bận rộn, bận rộn với công việc, bận rộn với công
        việc gia đình…
      </div>
      <div className="text-center px-6 text-[#a88290]">
        Nhưng tất cả đã có mặt hôm nay để chúc mừng tinh yêu và hạnh phúc của
        chúng tôi.
      </div>
      <div className="text-center px-6 text-[#a88290]">
        Một lần nữa chân thành cảm ơn tất cả các bạn!
      </div>
      <div className="text-center px-6 mt-14 text-[#a88290]">
        groom{" "}
        <span className="text-[#bb7996] font-semibold text-2xl">
          Mai Duy ♥ Mai Thủy{" "}
        </span>
        bride
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
    <div className="z-50 h-16 bg-gray-500  px-20 flex items-center justify-center absolute w-full">
      <div className="w-1/4 bg-lime-200 justify-center items-center flex">
        Duy Thủy
      </div>
      <div className="w-3/4 flex  justify-center items-center bg-red-500">
        {titleTab.map((name, index) => (
          <div key={index} className="px-5 py-4 text-center ">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
