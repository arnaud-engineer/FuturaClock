    /* -----------------------------
        CONST
       ----------------------------- */

var languageDisplay = "FR";

// FR lists
var daysOfWeekNamesFR = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
var monthsNamesFR = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    /* -----------------------------
        DATE
       ----------------------------- */

        function getCurrentDateHTML()
        {
            var currentDate = new Date;
            currentDate.setTime(Date.now());

            var dWeek = getDayOfWeekName(currentDate.getDay()); //0,6
            var d = currentDate.getUTCDate(); //0,31
            var mm = getMonthName(currentDate.getMonth()); //0,11
            var yyyy = currentDate.getFullYear();

            var displayCurrentDate = dWeek + " " + d + " " + mm/* + " " + yyyy*/;

            return displayCurrentDate;
        }

            function getDayOfWeekName(dWeek)
            {
                if(languageDisplay == "FR")
                    return daysOfWeekNamesFR[dWeek];
                else
                    return "ERR001 : Unknow language"
            }

            function getMonthName(month)
            {
                if(languageDisplay == "FR")
                    return monthsNamesFR[month];
                else
                    return "ERR001 : Unknow language"
            }

        function refreshCurrentDate()
        {
            var cD = getCurrentDateHTML();
            document.getElementById("date").innerHTML = cD;
        }

    /* -----------------------------
        WEEK
       ----------------------------- */

        function getCurrentWeekHTML()
        {
            var currentDate = new Date;
            currentDate.setTime(Date.now());
            var yyyy = currentDate.getFullYear();

            var displayCurrentWeek = yyyy + " - Semaine " + getWeekNumber(currentDate);

            return displayCurrentWeek;
        }

            function getWeekNumber(d)
            {
                // SRC : http://zerosixthree.se/snippets/get-week-of-the-year-with-jquery/
                var onejan = new Date(d.getFullYear(),0,1);
                return Math.ceil((((d - onejan) / 86400000) + onejan.getDay()+1)/7);
            }

        function refreshCurrentWeek()
        {
            var cW = getCurrentWeekHTML();
            document.getElementById("week").innerHTML = cW;
        }

    /* -----------------------------
        TIME
       ----------------------------- */

        function getCurrentTimeHTML()
        {
            var currentTime = new Date;
            currentTime.setTime(Date.now());

            var hh = twoDecimals(currentTime.getHours());
            var mm = twoDecimals(currentTime.getMinutes());
            var ss = twoDecimals(currentTime.getSeconds());

            var displayCurrentTime = '<span class="digit hh">' + hh.charAt(0)+ '</span>' + '<span class="digit hh">' + hh.charAt(1)+ '</span>' + " " + '<span class="digit mm">' + mm.charAt(0)+ '</span>' + '<span class="digit mm">' + mm.charAt(1)+ '</span>' + " " + '<span class="digit ss">' + ss.charAt(0)+ '</span>' + '<span class="digit ss">' + ss.charAt(1)+ '</span>' ;
            return displayCurrentTime;
        }


        function getCurrentTime()
        {
            var currentTime = new Date;
            currentTime.setTime(Date.now());

            var hh = twoDecimals(currentTime.getHours());
            var mm = twoDecimals(currentTime.getMinutes());
            var ss = twoDecimals(currentTime.getSeconds());

            var displayCurrentTime = hh + ":" + mm;
            return displayCurrentTime;
        }

        function refreshCurrentTime()
        {
            var cTHTML = getCurrentTimeHTML();
            document.getElementById("time").innerHTML = cTHTML;
            var cT = getCurrentTime();
            document.title = cT;
        }

        function twoDecimals(n)
        {
            var res = n;
            if(n<10)
            {
                res = "0" + n;
            }
            return res.toString();
        }

setTimeout(() => {// Wait the html to be loaded (TODO : event listener)
    refreshCurrentTime();
    window.setInterval('refreshCurrentTime()', 500); 
    refreshCurrentDate();
    window.setInterval('refreshCurrentDate()', 500); 
    refreshCurrentWeek();
    window.setInterval('refreshCurrentWeek()', 500); 
}, 300);