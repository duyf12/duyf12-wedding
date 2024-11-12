import React, { useEffect, useState } from 'react';

const FallingHearts = () => {
    const [hearts, setHearts] = useState([]);
    const [scrollEnd, setScrollEnd] = useState(false);

    // Hàm tạo vị trí ngẫu nhiên và thêm một trái tim mới vào danh sách hearts
    const addHeart = () => {
        const randomX = Math.floor(Math.random() * window.innerWidth);

        const randomDuration = Math.random() * 2 + 10; // Thời gian rơi từ 3-5s
        setHearts((prevHearts) => [
            ...prevHearts,
            {
                id: Math.random(),
                x: randomX,
                duration: randomDuration,
            },
        ]);
    };

    // Kiểm tra khi cuộn tới cuối trang
    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setScrollEnd(true);
        } else {
            setScrollEnd(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Nếu chưa đạt đến cuối trang, thêm trái tim
        if (!scrollEnd) {
            const interval = setInterval(addHeart, 2000); // Thêm một trái tim mỗi 0.5 giây
            return () => clearInterval(interval);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollEnd]);

    return (
        <div className="overflow-hidden ">
            {hearts.map((heart) => (
                <span
                    key={heart.id}
                    className="absolute text-red-500 text-3xl animate-fall"
                    style={{
                        left: `${heart.x}px`,
                        animationDuration: `${heart.duration}s`,
                    }}
                >
                    ❤️
                </span>
            ))}
        </div>
    );
};

export default FallingHearts;
