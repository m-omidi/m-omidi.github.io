document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");
    const body = document.body;
  
    // تابع تغییر آیکون
    function setIcon(isLight) {
      icon.innerHTML = isLight
        ? `<path d="M12 4.5V3m0 18v-1.5M4.5 12H3m18 0h-1.5M5.64 5.64l-1.06-1.06M18.36 18.36l-1.06-1.06M18.36 5.64l1.06-1.06M5.64 18.36l1.06-1.06M12 8a4 4 0 100 8 4 4 0 000-8z"/>`
        : `<path d="M21 12.79A9 9 0 0111.21 3a7 7 0 000 14 9 9 0 009.79-4.21z"/>`;
    }
  
    // بررسی حالت ذخیره‌شده
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      body.classList.add("light-mode");
      setIcon(true);
    } else {
      setIcon(false);
    }
  
    // تغییر با کلیک
    toggleBtn.addEventListener("click", function () {
      const isLight = body.classList.toggle("light-mode");
      setIcon(isLight);
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  });
  