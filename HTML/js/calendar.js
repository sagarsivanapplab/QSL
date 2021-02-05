// var defaultTheme = getRandom(4);
var today = new Date();
var events = [
    { id: 'cu9q73n', name: "Event #1", name: "Event #1", date: today.getMonth()+1 +'/3/'+today.getFullYear(), type: "event" },
    { id: 'imwyx6S', name: "Event #2", date: today.getMonth()+1 +'/18/'+today.getFullYear(), type: "event" },
    { id: '9jU6g6f', name: "Holiday #1", date: today.getMonth()+1 +'/10/'+today.getFullYear(), type: "holiday" },
    { id: '0g5G6ja', name: "Birthday #1", date: today.getMonth()+1 +'/14/'+today.getFullYear(), type: "birthday" },
    { id: 'y2u7UaF', name: "Holiday #2", date: today.getMonth()+1 +'/23/'+today.getFullYear(), type: "holiday" },
    { id: 'dsu7HUc', name: "Birthday #2", date: new Date(), type: "birthday" }
];
var active_events = [];
var curAdd, curRmv;

// function getRandom(max) {
//     return Math.floor((Math.random() * max));
// }
$(document).ready(function() {

    $(".month-name").css({
        'width': ($(".calendar-inner").width() + 'px')        
    });     

    $('#eventCalender').evoCalendar({
        todayHighlight: true,
        format: 'MM dd, yyyy',
        calendarEvents: [
            // { id: 'd8jai7s', name: "Author's Birthday", date: "February/15/2020", type: "birthday", everyYear: true },
            { id: 'sKn89hi', image: "images/placeholder/events-1.jpg", name: "PM opens Daam Specialized Care Center", zone: "Aspire Zone", time: "6:00AM - 9:00PM", date: new Date(), type: "event" },
            { id: 'in8bha4', image: "images/placeholder/events-2.jpg", name: "PM opens Daam Specialized Care Center", zone: "Aspire Zone", time: "6:00AM - 9:00PM", date: new Date(), type: "event" },
            { id: 'in8bha5', image: "images/placeholder/events-3.jpg", name: "PM opens Daam Specialized Care Center", zone: "Aspire Zone", time: "6:00AM - 9:00PM", date: new Date(), type: "event" },
            { id: 'in8bha6', image: "images/placeholder/events-1.jpg", name: "PM opens Daam Specialized Care Center", zone: "Aspire Zone", time: "6:00AM - 9:00PM", date: new Date(), type: "event" },
            { id: 'in8bha7', image: "images/placeholder/events-2.jpg", name: "PM opens Daam Specialized Care Center", zone: "Aspire Zone", time: "6:00AM - 9:00PM", date: new Date(), type: "event" }
            // { id: 'in8bib5', name: "2nd Qatar Asian Junior Tournament 14 years and under - Tennis <p>Khalifa Tennis and Squash Complex</p>", date: new Date(), type: "event" }
            // { id: 'im9bjc6', name: "2nd Qatar Asian Junior Tournament 14 years and under - Tennis <p>Khalifa Tennis and Squash Complex</p>", date: new Date(), type: "event" }
        ]
    });

    $('[data-set-theme]').click(function (e) {
        setTheme(e.target);
    })
    

    var total = $('.calendar-sidebar>.month-list>.calendar-months>li').length;
    $('#eventCalender .btn-next').click(function(event) {
        var activeCount = $('.calendar-months').find('.active-month').index() + 1;
        if (total == activeCount) {
            $('.calendar-sidebar>.month-list>.calendar-months>li:first-child').trigger('click');
            $('.calendar-year').find('button[data-year-val=next]').trigger('click');
        } else {
            $('.calendar-months').find('.active-month').next().trigger('click');
        }
    });
    $('#eventCalender .btn-pre').click(function(event) {
        var activeCount = $('.calendar-months').find('.active-month').index() + 1;
        if (1 == activeCount) {
            $('.calendar-sidebar>.month-list>.calendar-months>li:last-child').trigger('click');
            $('.calendar-year').find('button[data-year-val=prev]').trigger('click');
        } else {
            $('.calendar-months').find('.active-month').prev().trigger('click');
        }
    });
















    // SETTINGS DEMO CODE
    // var settingsDemo = getRandom($('[data-settings]').length);
    // var settingsDemoEl = $('[data-settings]')[settingsDemo];
    // var methodDemo = getRandom($('[data-method]').length);
    // var methodDemoEl = $('[data-method]')[methodDemo];
    // var eventDemo = getRandom($('[data-event]').length);
    // var eventDemoEl = $('[data-event]')[eventDemo];

    // showSettingsSample($(settingsDemoEl).data().settings);
    // showMethodSample($(methodDemoEl).data().method);
    // showEventSample($(eventDemoEl).data().event);

    // $('[data-settings]').on('click', function (e) {
    //     var el = $(e.target).closest('[data-settings]');
    //     var ev = el.data().settings;
    //     showSettingsSample(ev);
    // });
    // $('[data-method]').on('click', function (e) {
    //     var el = $(e.target).closest('[data-method]');
    //     var ev = el.data().method;
    //     showMethodSample(ev);
    // });
    // $('[data-event]').on('click', function (e) {
    //     var el = $(e.target).closest('[data-event]');
    //     var ev = el.data().event;
    //     showEventSample(ev);
    // });
});

