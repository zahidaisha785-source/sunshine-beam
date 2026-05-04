(function () {
    var btn = document.getElementById("sb-menu-btn");
    if (!btn) return;

    var drawer = document.getElementById("sb-drawer");
    if (!drawer) {
        drawer = document.createElement("div");
        drawer.id = "sb-drawer";
        drawer.className = "sb-drawer";
        drawer.setAttribute("aria-hidden", "true");
        drawer.innerHTML =
            '<div class="sb-drawer-backdrop"></div>' +
            '<div class="sb-drawer-panel" role="dialog" aria-modal="true" aria-label="Navigation menu">' +
            '<div class="sb-drawer-head"><span>Sunshine Beam</span>' +
            '<button type="button" class="sb-drawer-close" aria-label="Close menu">&times;</button></div>' +
            '<nav class="sb-drawer-nav" aria-label="Pages">' +
            '<a href="home-new.html" data-nav="home"><span class="sb-drawer-ico" aria-hidden="true">🏠</span>Home</a>' +
            '<a href="journal.html" data-nav="journal"><span class="sb-drawer-ico" aria-hidden="true">📝</span>Journal</a>' +
            '<a href="home-new.html" class="sb-drawer-sun" data-nav="sunshine"><span class="sb-drawer-ico" aria-hidden="true"><span class="sb-drawer-sunshine-disc"><svg class="sb-drawer-sunshine-heart" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></span></span>Sunshine</a>' +
            '<a href="healing-hub.html" data-nav="tools"><span class="sb-drawer-ico" aria-hidden="true">🌿</span>Tools</a>' +
            '<a href="profile.html" data-nav="profile"><span class="sb-drawer-ico" aria-hidden="true">👤</span>Profile</a>' +
            "</nav></div>";
        document.body.appendChild(drawer);
    }

    btn.setAttribute("aria-controls", "sb-drawer");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-haspopup", "true");

    var backdrop = drawer.querySelector(".sb-drawer-backdrop");
    var closeBtn = drawer.querySelector(".sb-drawer-close");
    var page = document.body.getAttribute("data-sb-nav");

    if (page) {
        drawer.querySelectorAll(".sb-drawer-nav a[data-nav]").forEach(function (link) {
            if (link.getAttribute("data-nav") === page) {
                link.classList.add("active");
            }
        });
    }

    function open() {
        drawer.classList.add("is-open");
        drawer.setAttribute("aria-hidden", "false");
        document.body.classList.add("sb-drawer-open");
        btn.setAttribute("aria-expanded", "true");
        if (closeBtn) closeBtn.focus();
    }

    function close() {
        drawer.classList.remove("is-open");
        drawer.setAttribute("aria-hidden", "true");
        document.body.classList.remove("sb-drawer-open");
        btn.setAttribute("aria-expanded", "false");
        btn.focus();
    }

    function toggle() {
        if (drawer.classList.contains("is-open")) close();
        else open();
    }

    btn.addEventListener("click", toggle);
    if (backdrop) backdrop.addEventListener("click", close);
    if (closeBtn) closeBtn.addEventListener("click", close);

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && drawer.classList.contains("is-open")) close();
    });

    drawer.querySelectorAll(".sb-drawer-nav a").forEach(function (a) {
        a.addEventListener("click", function () {
            close();
        });
    });
})();
