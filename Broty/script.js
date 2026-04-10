// 🔥 غير التاريخ من هنا
let startDate = new Date("2026-04-22 00:00:00");

function updateTime() {
    let now = new Date();
    let diff = startDate - now;

    if (diff <= 0) {
        document.getElementById("timer").innerHTML = "💖 بدأ حبنا 💖";

        document.getElementById("secretBtn").disabled = false;
        document.getElementById("secretBtn").innerHTML = "💌 افتحي الرسالة";

        return;
    }

    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.getElementById("timer").innerHTML =
        "بقي: " +
        days + " يوم " +
        hours + " ساعة " +
        minutes + " دقيقة " +
        seconds + " ثانية 💕";
}

// فتح الصفحة
function openPage() {
    window.location.href = "love.html";
}

setInterval(updateTime, 1000);
updateTime();