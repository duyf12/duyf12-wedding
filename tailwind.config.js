/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        heart: "flyUp 5s ease-in-out infinite", // Tạo hiệu ứng bay lên
      },
      keyframes: {
        flyUp: {
          "0%": {
            transform: "translateY(100vh) rotate(0deg)", // Bắt đầu từ dưới cùng và không xoay
            opacity: 1, // Đậm khi bắt đầu
          },
          "50%": {
            transform: "translateY(50vh) rotate(10deg)", // Lắc nhẹ sang phải ở giữa
            opacity: 1, // Mờ dần một chút giữa chừng
          },
          "100%": {
            transform: "translateY(-100vh) rotate(-10deg)", // Lắc nhẹ sang trái khi đến đỉnh
            opacity: 0.2, // Mờ dần khi lên gần trên cùng
          },
        },
      },
      fontFamily: {
        sans: ["Bellota Text", "Arial", "sans-serif"], // Thêm font chữ tùy chỉnh
        script: ["Great Vibes", "cursive"],
        thuy: ["Dancing Script", "cursive"], // Font chính: Dancing Script
        duy: ["Parisienne", "cursive"],
      },
    },
  },
  plugins: [],
};
