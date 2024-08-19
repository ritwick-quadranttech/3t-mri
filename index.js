// navbar fixed function
var lastscroltop = 0;
let head = document.querySelector("header")
window.addEventListener("scroll", function () {
    var scrolToTop = window.scrollY || this.document.documentElement.scrollTop
    if (scrolToTop > lastscroltop) {
        head.classList.add("head")
    } else {
        head.classList.remove("head")
    }
})

// specility slider
const swiper = new Swiper('.specialty-content-images', {
    // loop: true,
    slidesPerView: 2.5,
    spaceBetween: 40,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    autoplay: {
        delay: 3000,
      },
    // Navigation arrows
    navigation: {
        nextEl: '.swiperbuttonnext1',
        prevEl: '.swiperbuttonprev1',
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 1.1
        },
        640: {
            slidesPerView: 1.4
        },
        768: {
            slidesPerView: 1.6
        },
        767: {
            slidesPerView: 1.6
        },
        980: {
            slidesPerView: 1.3
        },
        1024: {
            slidesPerView: 1.4
        },
        1200: {
            slidesPerView: 2.2
        },
    }

});

// reviews slider
const review = new Swiper('.reviewes', {
    loop: false,
    grabCursor: true,
    spaceBetween: false,

    // If we need pagination
    pagination: {
        el: '.swiperpagination',
        clickable: true,
        dynamicBullets: true
    },
    autoplay: {
        delay: 3000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-buttonnext',
        prevEl: '.swiper-buttonprev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        1280: {
            slidesPerView: 1
        },
        1536: {
            slidesPerView: 1
        }
    }

});


// start qustion-banner
let faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
    console.warn(faq);

    faq.addEventListener("click", () => {

        if (faq.classList.contains('active')) {
            faq.classList.remove("active")
        } else {
            // faq.addEventListener("click",()=>{
            //     console.warn("condition");

            //     faqs.forEach(item=>{
            //         item.classList.remove('active')
            //     })
            // })
            faq.classList.toggle("active");

        }
    })
})


// -------------------counter section-----------

document.addEventListener("DOMContentLoaded", function() {
    const targetValue = 173000;
    const counterElement = document.querySelector('.count');
    let count = 0;
    let isCounting = false;
    let intervalId;

    function startCounting() {
        if (isCounting) return; // Prevent multiple intervals
        isCounting = true;

        const duration = 5000; // Duration in milliseconds to reach the target value
        const incrementTime = 50; // Time between increments in milliseconds
        const increments = duration / incrementTime;
        const incrementValue = targetValue / increments;

        intervalId = setInterval(() => {
            count += incrementValue;
            if (count >= targetValue) {
                count = targetValue;
                clearInterval(intervalId);
                counterElement.textContent = count.toLocaleString();
            } else {
                counterElement.textContent = Math.floor(count).toLocaleString();
            }
        }, incrementTime);
    }

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const triggerPoint = document.querySelector('.counting').offsetTop;

        if (scrollPosition > triggerPoint) {
            startCounting();
        }
    });
});


// ------------backto top button------
function scrolToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// ------------loder tranform------------
const sections = document.querySelectorAll(".animated");
const observer_opacity = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});
sections.forEach((client) => {
    observer_opacity.observe(client);
});