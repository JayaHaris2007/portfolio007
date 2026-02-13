// --- HexGridBackground Logic ---
(() => {
    const canvas = document.getElementById("hex-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let cols, rows;

    // Hexagon Grid Configuration
    const a = 2 * Math.PI / 6;
    const r = 30; // Radius
    const hexWidth = r * 2;
    const hexHeight = Math.sqrt(3) * r;

    // Mouse state
    const mouse = { x: null, y: null };

    const resizeCanvas = () => {
        const parent = canvas.parentElement;
        if (parent) {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;

            // Recalculate grid size based on new dimensions
            cols = Math.ceil(canvas.width / (hexWidth * 0.75)) + 2;
            rows = Math.ceil(canvas.height / hexHeight) + 2;
        }
    };

    const drawHex = (x, y, color, fill = false) => {
        ctx.beginPath();
        for (var i = 0; i < 6; i++) {
            ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
        }
        ctx.closePath();
        if (fill) {
            ctx.fillStyle = color;
            ctx.fill();
        } else {
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    };

    const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 1;

        if (!cols || !rows) return;

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                // Offset every other column
                const x = i * hexWidth * 0.75;
                const y = j * hexHeight + (i % 2 === 0 ? 0 : hexHeight / 2);

                // Hexagon base style
                const dist = mouse.x ? Math.hypot(mouse.x - x, mouse.y - y) : 9999;
                const isHovered = dist < 100;

                if (isHovered) {
                    drawHex(x, y, "rgba(34, 211, 238, 0.4)", true); // Fill Cyan on hover
                    drawHex(x, y, "rgba(34, 211, 238, 0.8)"); // Bright border
                }
                // else {
                //    drawHex(x, y, "rgba(255, 255, 255, 0.03)"); // Faint grid static
                // }
            }
        }
    };

    // Use ResizeObserver for robust sizing
    const resizeObserver = new ResizeObserver(() => {
        resizeCanvas();
        // draw(); // Disabled as per request
    });

    if (canvas.parentElement) {
        resizeObserver.observe(canvas.parentElement);
    }

    const handleMouseMove = (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
        // draw();  // Disabled as per request
    };
    const handleMouseLeave = () => {
        mouse.x = null;
        mouse.y = null;
        // draw();  // Disabled as per request
    };

    // canvas.addEventListener("mousemove", handleMouseMove);
    // canvas.addEventListener("mouseleave", handleMouseLeave);

    // Initial sizing and draw
    resizeCanvas();
    // draw(); // Disabled as per request
})();





// --- Navbar & Mobile Menu Logic ---
(() => {
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

        mobileLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
            });
        });
    }

    // Navbar padding transition on scroll (although glass is always on)
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.remove("py-6");
            navbar.classList.add("py-4");
        } else {
            navbar.classList.remove("py-4");
            navbar.classList.add("py-6");
        }
    });
})();

// --- Scroll Animation (Intersection Observer) ---
(() => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".fade-in-on-scroll").forEach(el => {
        observer.observe(el);
    });
})();
