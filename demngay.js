$(document).ready(function () {
    var demngay1 = setInterval(function () {
        CountDownDay("22/01/2024", ".text-countera");
        CountDownDay("24/12/2023", ".text-counterb");
        CountDownDay("24/12/2023", ".text-counter-exten");
        CountDownDay("28/12/2023", ".text-counterd");
        CountDownDay("22/01/2024", ".text-counter-itest");
        CountDownDay("16/06/2024", ".text-counter-kttt");
        CountDownDay("20/06/2024", ".text-counter-tacnoto");
        CountDownDay("22/08/2024", ".text-counter-cnxh");
        CountDownDay("22/10/2024", ".text-counter-tacdr");
    }, 1000);
});

function CountDownDay(datetime, classname) {
    const lastEditDate = moment(datetime, "DD/MM/YYYY");

    const currentDate = moment();

    const day = currentDate.diff(lastEditDate, "days");
    if (day > 365) {
        var years = Math.floor(day / 365);
        $(classname).html("Cập nhật " + years + " năm trước");
    } else if (day > 30) {
        var months = Math.floor(day / 30);
        $(classname).html("Cập nhật " + months + " tháng trước");
    } else if (day > 7) {
        var weeks = Math.floor(day / 7);
        $(classname).html("Cập nhật " + weeks + " tuần trước");
    } else {
        $(classname).html("Cập nhật " + day + " ngày trước");
    }
}
