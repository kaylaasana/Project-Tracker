function updateTimeData() {
    var currentDate = dayjs().format('MMM-D-YYYY h:mm:ss');
    $('#current-date').text(currentDate);
}
updateTimeData();
setInterval(updateTimeData, 1000);