document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number');

    const updateCount = (counter, target) => {
        let count = 0;
        const increment = target / 200; // Tốc độ đếm, có thể điều chỉnh
        const interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                counter.textContent = target;
                clearInterval(interval);
            } else {
                counter.textContent = Math.ceil(count);
            }
        }, 20); // Thay đổi để điều chỉnh tốc độ đếm
    };

    const handleScroll = () => {
        counters.forEach(counter => {
            const rect = counter.getBoundingClientRect();
            if (rect.top < window.innerHeight && !counter.classList.contains('counted')) {
                counter.classList.add('counted');
                const target = +counter.getAttribute('data-target');
                updateCount(counter, target);
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Kiểm tra khi tải trang
});

document.addEventListener('DOMContentLoaded', () => {
    const elementsToReveal = document.querySelectorAll('.hidden');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Phần tử cần ít nhất 10% diện tích để xuất hiện
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Ngừng theo dõi sau khi phần tử đã được hiển thị
            }
        });
    }, observerOptions);

    elementsToReveal.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Hiển thị tất cả các mục khi trang tải
    portfolioItems.forEach(item => {
        item.style.display = 'block';
        setTimeout(() => item.classList.add('show'), 10); // Thêm lớp show với độ trễ nhỏ
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => item.classList.add('show'), 10); // Thêm lớp show với độ trễ nhỏ
                } else {
                    item.classList.remove('show');
                    setTimeout(() => item.style.display = 'none', 500); // Ẩn các mục không phù hợp với độ trễ để kết thúc hiệu ứng lướt
                }
            });
        });
    });
});

// Thêm hiệu ứng hover cho các mục portfolio
document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hover');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('hover');
        });
    });
});

// Thêm hiệu ứng cho các nút khi di chuột qua
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add('hover');
        });

        button.addEventListener('mouseout', () => {
            button.classList.remove('hover');
        });
    });
});

// Thêm hiệu ứng di chuyển nhẹ cho các phần tử khi cuộn
document.addEventListener('DOMContentLoaded', () => {
    const elementsToMove = document.querySelectorAll('.move-on-scroll');

    const handleScrollEffect = () => {
        elementsToMove.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top;
            const elementBottom = rect.bottom;

            if (elementTop < window.innerHeight && elementBottom > 0) {
                const moveAmount = (window.innerHeight - rect.top) / 10; // Tính toán độ di chuyển
                element.style.transform = `translateY(${moveAmount}px)`;
            } else {
                element.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', handleScrollEffect);
    handleScrollEffect(); // Kiểm tra khi tải trang
});

// Initialize EmailJS
emailjs.init('0lKK3wKSEmy1l6_Ga'); // Thay 'YOUR_USER_ID' bằng User ID của bạn

// Function to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Send email using EmailJS
    emailjs.send('service_wylgejm', 'template_zldo5iv', {
        name: name,
        email: email,
        message: message
    })
    .then(function(response) {
        alert('Message sent successfully!');
        form.reset(); // Reset form after successful submission
    }, function(error) {
        alert('Failed to send message. Please try again.');
        console.error('Error:', error);
    });
});

