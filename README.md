<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Giới thiệu

Đây là dự án tốt nghiệp của sinh viên trường Cao đẳng FPT Polytechnic. Dự án này được xây dựng bằng Laravel, một framework PHP mạnh mẽ và dễ sử dụng. Mục tiêu của dự án là xây dựng một hệ thống quản lý bài viết và người dùng với các tính năng như phân trang, tìm kiếm, và thông báo.

## Các tính năng chính

- **Quản lý người dùng**: Thêm, sửa, xóa và phân quyền người dùng.
- **Quản lý bài viết**: Thêm, sửa, xóa và tìm kiếm bài viết.
- **Phân trang**: Sử dụng phân trang để hiển thị danh sách người dùng và bài viết.
- **Thông báo**: Sử dụng `react-hot-toast` để hiển thị thông báo cho người dùng.
- **Tìm kiếm**: Tìm kiếm người dùng và bài viết theo từ khóa.

## Công nghệ sử dụng

- **Laravel**: Framework PHP mạnh mẽ và dễ sử dụng.
- **React**: Thư viện JavaScript để xây dựng giao diện người dùng.
- **Bootstrap**: Framework CSS để xây dựng giao diện người dùng đẹp và responsive.
- **Axios**: Thư viện JavaScript để thực hiện các yêu cầu HTTP.
- **react-hot-toast**: Thư viện JavaScript để hiển thị thông báo.

## Cài đặt

1. Clone repository về máy của bạn:
    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. Cài đặt các package PHP:
    ```bash
    composer install
    ```

3. Cài đặt các package JavaScript:
    ```bash
    npm install
    ```

4. Tạo file `.env` từ file `.env.example` và cấu hình các thông số cần thiết:
    ```bash
    cp .env.example .env
    ```

5. Tạo khóa ứng dụng:
    ```bash
    php artisan key:generate
    ```

6. Chạy các migration để tạo các bảng trong cơ sở dữ liệu:
    ```bash
    php artisan migrate
    ```

7. Chạy server:
    ```bash
    php artisan serve
    ```

8. Chạy Webpack để biên dịch các file JavaScript và CSS:
    ```bash
    npm run dev
    ```

## Sử dụng

- Truy cập vào `http://localhost:8000` để xem ứng dụng.
- Đăng nhập bằng tài khoản quản trị viên để quản lý người dùng và bài viết.

## Đóng góp

Cảm ơn bạn đã quan tâm đến việc đóng góp cho dự án này! Hướng dẫn đóng góp có thể được tìm thấy trong tài liệu [Laravel documentation](https://laravel.com/docs/contributions).

## Bảo mật

Nếu bạn phát hiện ra lỗ hổng bảo mật trong Laravel, vui lòng gửi email tới Taylor Otwell qua [taylor@laravel.com](mailto:taylor@laravel.com). Tất cả các lỗ hổng bảo mật sẽ được giải quyết kịp thời.

## Giấy phép

Framework Laravel là phần mềm mã nguồn mở được cấp phép theo [MIT license](https://opensource.org/licenses/MIT).