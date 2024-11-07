import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-100">
      <header className="text-center p-8 bg-white shadow-lg">
        <h1 className="text-4xl font-bold animate__animated animate__fadeInDown">
          Hoàng Kiến Văn & Ngô Việt Hoài
        </h1>
        <h2 className="text-2xl mt-2 animate__animated animate__fadeInUp">
          Save the Date
        </h2>
        <p className="text-xl mt-1 animate__animated animate__fadeInUp">
          04 Tháng 4 2024
        </p>
        <img
          className="max-w-full h-auto mt-4 animate__animated animate__fadeIn"
          src="https://cdn.biihappy.com/ziiweb/default/website/3b48bc6125ce6d186297a3e90a11085e.jpeg"
          alt="Wedding Save the Date"
        />
      </header>

      <section className="p-6 bg-white shadow-lg mt-4 mx-4 rounded-lg animate__animated animate__fadeIn">
        <h3 className="text-3xl font-semibold">Hoàng Kiến Văn - The Groom</h3>
        <p className="mt-2">
          Là bác sĩ nha khoa hiện đang công tác tại một phòng khám nha khoa ở
          Quận 1 thành phố Hồ Chí Minh.
        </p>
        <div className="mt-4 space-x-2">
          <a
            className="text-blue-500 hover:underline"
            href="https://instagram.com/"
          >
            Instagram
          </a>
          <a
            className="text-blue-500 hover:underline"
            href="https://twitter.com/"
          >
            Twitter
          </a>
          <a
            className="text-blue-500 hover:underline"
            href="https://facebook.com/"
          >
            Facebook
          </a>
        </div>

        <h3 className="text-3xl font-semibold mt-6">
          Ngô Việt Hoài - The Bride
        </h3>
        <p className="mt-2">
          Cô gái đến từ xứ Huế mộng mơ, hiện đang sinh sống và làm việc tại Sài
          Gòn.
        </p>
        <div className="mt-4 space-x-2">
          <a
            className="text-blue-500 hover:underline"
            href="https://instagram.com/"
          >
            Instagram
          </a>
          <a
            className="text-blue-500 hover:underline"
            href="https://twitter.com/"
          >
            Twitter
          </a>
          <a
            className="text-blue-500 hover:underline"
            href="https://facebook.com/"
          >
            Facebook
          </a>
        </div>
      </section>

      <section className="p-6 bg-white shadow-lg mt-4 mx-4 rounded-lg animate__animated animate__fadeIn">
        <h2 className="text-3xl font-semibold">We are Getting Married</h2>
        <p className="mt-2">
          Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như
          đám cưới của chúng tôi.
        </p>
        <p className="mt-2">Kiến Văn & Việt Hoài</p>
        <p className="mt-2">Con ông: Hoàng Anh Kiệt</p>
        <p className="mt-2">Con bà: Nguyễn Thị Hoài</p>
        <p className="mt-2">Con ông: Ngô Xuân Nghĩa</p>
        <p className="mt-2">Con bà: Trần Hồng Thắm</p>
      </section>

      <section className="p-6 bg-white shadow-lg mt-4 mx-4 rounded-lg animate__animated animate__fadeIn">
        <h2 className="text-3xl font-semibold">Chuyện tình yêu</h2>
        <article className="mt-4">
          <h4 className="text-2xl font-semibold">December 12 2015</h4>
          <img
            className="max-w-full h-auto mt-2 animate__animated animate__fadeIn"
            src="https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/0f99c255f7aa7714d366ebde51c86d53.jpeg"
            alt="Love Story"
          />
          <p className="mt-2">
            Bạn có tin vào tình yêu online không? Tôi đã từng không tin vào tình
            yêu online...
          </p>
        </article>
        {/* Bạn có thể thêm nhiều bài viết tương tự cho các câu chuyện tình yêu khác */}
      </section>

      <section className="p-6 bg-white shadow-lg mt-4 mx-4 rounded-lg animate__animated animate__fadeIn">
        <h2 className="text-3xl font-semibold">Hộp Quà</h2>
        <p className="mt-2">
          Chúng tôi rất cảm kích nếu bạn muốn gửi tặng chúng tôi một món quà.
          Dưới đây là thông tin tài khoản ngân hàng của chúng tôi:
        </p>
        <div className="mt-4">
          <h3 className="text-2xl font-semibold">Tài khoản ngân hàng</h3>
          <p className="mt-2">Ngân hàng: Vietcombank</p>
          <p className="mt-2">Chủ tài khoản: Hoàng Kiến Văn</p>
          <p className="mt-2">Số tài khoản: 1234567890</p>
        </div>
      </section>

      <footer className="text-center p-6 bg-white shadow-lg mt-4">
        <h2 className="text-3xl font-semibold">Liên Hệ</h2>
        <p className="mt-2">
          Nếu bạn có bất kỳ câu hỏi nào, xin vui lòng liên hệ với chúng tôi qua
          email hoặc điện thoại.
        </p>
        <div className="mt-4">
          <p>Email: hoangkienvan@example.com</p>
          <p>Điện thoại: 0123-456-789</p>
        </div>
        <p className="mt-4">
          © 2024 Hoàng Kiến Văn & Ngô Việt Hoài. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
