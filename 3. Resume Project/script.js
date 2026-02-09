
        function toggleTheme() {
            const checkbox = document.getElementById("theme-toggle-checkbox");
            const label = document.getElementById("theme-label");

            const isDark = checkbox.checked;
            document.body.classList.toggle("dark-theme", isDark);
            label.textContent = isDark ? "Light" : "Dark";

            localStorage.setItem("theme", isDark ? "dark" : "light");
        }


        window.addEventListener("load", () => {
            const savedTheme = localStorage.getItem("theme");
            const checkbox = document.getElementById("theme-toggle-checkbox");
            const label = document.getElementById("theme-label");

            if (savedTheme === "dark") {
                document.body.classList.add("dark-theme");
                checkbox.checked = true;
                label.textContent = "Light";
            } else {
                label.textContent = "Dark";
            }
        });

        function toggleMenu() {
    document.getElementById("mobile-nav").classList.toggle("show");
}
