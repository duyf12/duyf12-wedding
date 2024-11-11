import logo from "./logo.svg";
import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import cuoi1 from './images/cuoi1.jpg';
import cuoi2 from './images/cuoi2.jpg';
import cuoi3 from './images/cuoi3.jpg';
import cuoi4 from './images/cuoi4.jpg';
import cuoi5 from './images/cuoi5.jpg';
import cuoi6 from './images/cuoi6.jpg';
import { CircleDollarSign, MessageCircle, Image } from 'lucide-react';
import YouTube from 'react-youtube';

function App() {
  return (
    <div className="">
      <Home />
      <Button />
      <Video />
      <Iamge />
      <Calendar />
    </div>
  );
}




const Home = () => {
  return (
    <div className="h-screen bg-lime-200">
      <div className="h-[10vh] bg-[#d6c3ca] flex justify-center items-center text-white">
        Kiến Văn ♥ Việt Hoài sắp kết hôn.
      </div>
      <div className="h-[90vh] bg-[#f6f1f3] justify-center items-center" >
        <div className="flex justify-center items-center pt-4">
          <div style={{ backgroundImage: `url(${cuoi1})`, }}
            className=" h-[400px] w-[400px] bg-center bg-cover rounded-full "
          >
          </div>
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
  )
}

const Button = () => {
  return (
    <div className="p-6">
      <div className="h-10 bg-[#c9b5b6] flex justify-center items-center rounded-md text-white">
        <MessageCircle size={17} />
        <div className="ml-1">
          Gửi lời chúc</div>
      </div>
      <div className=" h-10 bg-[#c9b5b6] flex justify-center items-center rounded-md mt-1 text-white">
        <MessageCircle size={17} />
        <div className="ml-1">
          Xác nhận tham dự</div>
      </div>
      <div className="h-10 bg-[#c9b5b6] flex justify-center items-center rounded-md mt-1 text-white">
        <CircleDollarSign size={17} />
        <div className="ml-1">
          Mừng cưới</div>
      </div>
    </div>
  )
}

const Video = () => {
  const videoOptions = {
    height: '220',
    width: '390',
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
        <YouTube videoId="aXKi9vo51xQ" opts={videoOptions} className="  overflow-hidden rounded-lg" />
      </div>
    </div>
  )

}

const image = [
  cuoi1,
  cuoi2,
  cuoi3,
  cuoi4,
  cuoi5,
  cuoi6,
]


const Iamge = () => {
  return (
    <div className="bg-[#f6f1f3]">
      <div className=" h-28 pt-6 flex justify-center items-center">
        Video Cưới
      </div>
      <div className=" pb-6  flex justify-center items-center px-6 text-center">
        Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sẽ cho bạn dũng khí
      </div>
      <div className=" columns-2 sm:columns-2 lg:columns-3 py-10 md: py:py-20 gap-4 px-4">
        {image.map((src, index) => {
          return (
            <div key={index} className="mb-4 break-inside-avoid border-2 rounded-lg border-white" >
              <img src={src} className="w-full object-cover rounded-lg" />
            </div>
          )
        })}
      </div>
      <div className="flex justify-center items-center">
        <div className="h-10 w-40 bg-[#c9b5b6] flex justify-center items-center rounded-full text-white">
          <Image size={17} />
          <div className="ml-1">
            Tất cả ảnh</div>
        </div>
      </div>
    </div>
  )

}

const thu = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"]
const day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]


const Calendar1 = ({ days, firstDayOfMonth }) => {
  // Hàm tạo lịch
  function createCalendar(days, firstDayOfMonth) {
    const calendar = [];
    let week = new Array(7).fill(null);  // Mảng tuần, mỗi tuần có 7 ô ngày
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
  console.log("111");

  return (
    <div className="calendar-container max-w-sm mx-auto pt-10">
      {/* Header: Days of the week */}
      <div className="grid grid-cols-7 gap-1 text-center font-bold text-sm mb-2">
        <div className=" ">CN</div>
        <div className=" ">Thứ 2</div>
        <div className=" ">Thứ 3</div>
        <div className=" ">Thứ 4</div>
        <div className=" ">Thứ 5</div>
        <div className=" ">Thứ 6</div>
        <div className=" ">Thứ 7</div>
      </div>

      {/* Body: Days of the month */}
      {calendar.map((week, index) => (
        <div className="grid grid-cols-7 gap-1" key={index}>
          {week.map((day, idx) => (
            <div
              className={`p-3 text-center   ${day == 24 ? 'bg-white rounded-full' : ''}`}
              key={idx}
            >
              {day || ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};



const Calendar = () => {

  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  const firstDayOfMonth = 6;  // Giả sử ngày 1 là thứ 2
  return (
    <div className="bg-[#f6f1f3]">
      <Calendar1 days={days} firstDayOfMonth={firstDayOfMonth} />

    </div>
  )

}

const titleTab = ["Cặp đôi", "Chuyện tình yêu", "Phù Dâu & Phù Rể", "Album Hình Cưới", "Sự kiện cưới", "Sổ Lưu Bút", "Mừng Cưới"]
const Tab = () => {
  return <div className="z-50 h-16 bg-gray-500  px-20 flex items-center justify-center absolute w-full">
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
  </div>;
};

export default App;
