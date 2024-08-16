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
        768: {
            slidesPerView: 1
        },
        980: {
            slidesPerView: 1.3
        },
        1200: {
            slidesPerView: 2.5
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
    faq.addEventListener("click", () => {
        if (faq.classList.contains('active')) {
            faq.classList.remove("active")

        } else {

            faq.classList.toggle("active");

        }
    })
})

// -------------------counter section-----------
// Function to handle the intersection change
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            counter(entry.target)
        }
    });
}

// Create an IntersectionObserver instance
const countOberver = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the container
    rootMargin: '0px', // Margin around the root
    threshold: 0.1 // Trigger callback when 10% of the element is visible
});


const myNum = document.querySelectorAll('.count');
let speed = 10;

myNum.forEach((myCount) => {
    countOberver.observe(myCount);
})

const counter = (myCount) => {
    let target_count = Number(myCount.dataset.count)
    let init_count = target_count - 100;
    const updateNumber = () => {
        init_count = init_count + 1
        myCount.innerText = init_count;

        if (init_count < target_count) {
            setTimeout(() => { updateNumber() }, speed)
        }
    }

    updateNumber();
}
// backto top button
function scrolToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// ------------loder tranform
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