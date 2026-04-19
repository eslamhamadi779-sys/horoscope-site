// ===============================
// بيانات الأبراج
// ===============================

const zodiacData = {
    "الحمل": {
        symbol: "♈",
        traits: "شجاع، نشيط، قيادي، يحب التحدي.",
        flaws: "متسرع، عصبي أحيانًا، عنيد.",
        match: "الأسد، القوس، الجوزاء",
        clash: "السرطان، الجدي"
    },

    "الثور": {
        symbol: "♉",
        traits: "عملي، صبور، وفي، يحب الاستقرار.",
        flaws: "عنيد، بطيء التغيير، غيور.",
        match: "العذراء، الجدي، السرطان",
        clash: "الأسد، الدلو"
    },

    "الجوزاء": {
        symbol: "♊",
        traits: "ذكي، اجتماعي، سريع التعلم.",
        flaws: "متقلب، مشتت، مزاجي.",
        match: "الميزان، الدلو، الحمل",
        clash: "العذراء، الحوت"
    },

    "السرطان": {
        symbol: "♋",
        traits: "حنون، عاطفي، مخلص.",
        flaws: "حساس جدًا، متردد، انطوائي.",
        match: "الثور، الحوت، العقرب",
        clash: "الحمل، الميزان"
    },

    "الأسد": {
        symbol: "♌",
        traits: "واثق، كريم، قائد بالفطرة.",
        flaws: "مغرور أحيانًا، يحب السيطرة.",
        match: "الحمل، القوس، الميزان",
        clash: "الثور، العقرب"
    },

    "العذراء": {
        symbol: "♍",
        traits: "منظم، ذكي، يهتم بالتفاصيل.",
        flaws: "ناقد كثيرًا، قلق.",
        match: "الثور، الجدي، السرطان",
        clash: "الجوزاء، القوس"
    },

    "الميزان": {
        symbol: "♎",
        traits: "عادل، لبق، اجتماعي.",
        flaws: "متردد، يتجنب المواجهة.",
        match: "الجوزاء، الأسد، الدلو",
        clash: "السرطان، الجدي"
    },

    "العقرب": {
        symbol: "♏",
        traits: "غامض، قوي، وفي.",
        flaws: "غيور، انتقامي أحيانًا.",
        match: "السرطان، الحوت، الجدي",
        clash: "الأسد، الدلو"
    },

    "القوس": {
        symbol: "♐",
        traits: "مرح، مغامر، صريح.",
        flaws: "متهور، لا يحب القيود.",
        match: "الحمل، الأسد، الميزان",
        clash: "العذراء، الحوت"
    },

    "الجدي": {
        symbol: "♑",
        traits: "طموح، مسؤول، عملي.",
        flaws: "بارد أحيانًا، عنيد.",
        match: "الثور، العذراء، العقرب",
        clash: "الحمل، الميزان"
    },

    "الدلو": {
        symbol: "♒",
        traits: "مبدع، مستقل، ذكي.",
        flaws: "غامض، عنيد، بارد.",
        match: "الجوزاء، الميزان، القوس",
        clash: "الثور، العقرب"
    },

    "الحوت": {
        symbol: "♓",
        traits: "رومانسي، حساس، خيالي.",
        flaws: "يهرب من الواقع، متردد.",
        match: "السرطان، العقرب، الثور",
        clash: "الجوزاء، القوس"
    }
};


// ===============================
// تحديد البرج من التاريخ
// ===============================

function getZodiac(day, month) {

    if ((month == 3 && day >= 21) || (month == 4 && day <= 19))
        return "الحمل";

    else if ((month == 4 && day >= 20) || (month == 5 && day <= 20))
        return "الثور";

    else if ((month == 5 && day >= 21) || (month == 6 && day <= 20))
        return "الجوزاء";

    else if ((month == 6 && day >= 21) || (month == 7 && day <= 22))
        return "السرطان";

    else if ((month == 7 && day >= 23) || (month == 8 && day <= 22))
        return "الأسد";

    else if ((month == 8 && day >= 23) || (month == 9 && day <= 22))
        return "العذراء";

    else if ((month == 9 && day >= 23) || (month == 10 && day <= 22))
        return "الميزان";

    else if ((month == 10 && day >= 23) || (month == 11 && day <= 21))
        return "العقرب";

    else if ((month == 11 && day >= 22) || (month == 12 && day <= 21))
        return "القوس";

    else if ((month == 12 && day >= 22) || (month == 1 && day <= 19))
        return "الجدي";

    else if ((month == 1 && day >= 20) || (month == 2 && day <= 18))
        return "الدلو";

    else
        return "الحوت";
}


// ===============================
// تشغيل الزر
// ===============================

function checkZodiac() {

    let dateInput = document.querySelector("input[type='date']").value;
    let result = document.getElementById("result");

    if (dateInput === "") {
        result.innerHTML = "من فضلك اختر تاريخ الميلاد أولًا";
        return;
    }

    let birthDate = new Date(dateInput);

    let day = birthDate.getDate();
    let month = birthDate.getMonth() + 1;

    let zodiac = getZodiac(day, month);

    let info = zodiacData[zodiac];

    result.innerHTML =
        "برجك هو: " + zodiac + " " + info.symbol + "<br><br>" +
        "المميزات: " + info.traits + "<br><br>" +
        "العيوب: " + info.flaws + "<br><br>" +
        "يتوافق مع: " + info.match + "<br><br>" +
        "يختلف مع: " + info.clash;
}
