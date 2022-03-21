hbs.registerHelper('dateFormat', function (date, options) {
  const formatToUse =
    (arguments[1] && arguments[1].hash && arguments[1].hash.format) ||
    'DD/MM/YYYY';
  return moment(date).format(formatToUse);
});

hbs.registerHelper('newDate', function (arg1, arg2, arg3, options) {
  return moment(arg1 + ' ' + arg2 + ', ' + arg3);
});

hbs.registerHelper('dateNow', () => {
  return new Date();
});

hbs.registerHelper('daysOfMonth', function (arg1, arg2) {
  const daysofThisMonth = Array.from(
    Array(moment(new Date(arg1 + ', ' + arg2)).daysInMonth()),
    (_, i) => i + 1
  );
  return daysofThisMonth;
});

hbs.registerHelper('durationBetween', function (arg1, arg2, options) {
  const startDate = moment(new Date(arg1));
  const endDate = moment(new Date(arg2));
  return moment.duration(endDate.diff(startDate)).asHours();
});

hbs.registerHelper('ifEquals', function (arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

hbs.registerHelper('times', function (n, block) {
  var accum = '';
  for (var i = 1; i < n; ++i) accum += block.fn(i);
  return accum;
});
