# Dates

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Formatting Dates](#formatting-dates)
- [Editing a Date](#editing-a-date)


## Introduction

- `Date` is a JS built-in object for handling **date** and **time** functionality
  - `new Date()` creates a `Date` object pointing to the current moment in time
- internally, dates are expressed in milliseconds since Jan 1st 1970 (UTC)
  - important because as far as computers are concerned, that's where it all began
- **Note**: UNIX timestamp reasons in seconds while JS dates reason in milliseconds
- passing 0 we'd get a `Date` object that represents the time at Jan 1st 1970 (UTC)
- if we have a UNIX timestamp, we can instantiate a JS Date object by using:

  ```js
  const timestamp = 1530826365;
  new Date(timestamp * 1000);
  ```

- if we pass a string rather than a number, then the `Date` object uses the `parse()` method to determine which date we are passing
- `Date.parse()` returns a timestamp (milliseconds) rather than a `Date` object
- Note that the exact value we get depends on our system timezone in Node.js, or in the case of browser code, the user's timezone

  ```js
  new Date('2018-07-22');
  new Date('2018-07'); // July 1st 2018, 00:00:00
  new Date('2018'); // Jan 1st 2018, 00:00:00
  new Date('07/22/2018');
  new Date('2018/07/22');
  new Date('2018/7/22');
  new Date('July 22, 2018');
  new Date('July 22, 2018 07:22:13');
  new Date('2018-07-22 07:22:13');
  new Date('2018-07-22T07:22:13');
  new Date('25 March 2018');
  new Date('25 Mar 2018');
  new Date('25 March, 2018');
  new Date('March 25, 2018');
  new Date('March 25 2018');
  new Date('March 2018'); // Mar 1st 2018, 00:00:00
  new Date('2018 March'); // Mar 1st 2018, 00:00:00
  new Date('2018 MARCH'); // Mar 1st 2018, 00:00:00
  new Date('2018 march'); // Mar 1st 2018, 00:00:00

  Date.parse('2018-07-22');
  Date.parse('2018-07'); // July 1st 2018, 00:00:00
  Date.parse('2018'); // Jan 1st 2018, 00:00:00
  Date.parse('07/22/2018');
  Date.parse('2018/07/22');
  Date.parse('2018/7/22');
  Date.parse('July 22, 2018');
  Date.parse('July 22, 2018 07:22:13');
  Date.parse('2018-07-22 07:22:13');
  Date.parse('2018-07-22T07:22:13');
  ```

- we can also pass a set of ordered values that represent each part of a date: year, month (starting from 0), day, hour, minutes, seconds and milliseconds
  - minimum should be 3 parameters, but most JS engines also interpret less than these

  ```js
  new Date(2018, 6, 22, 7, 22, 13, 0);
  new Date(2018, 6, 22);

  new Date(2018, 6); // Sun Jul 01 2018 00:00:00 GMT+0200 (Central European Summer Time)
  new Date(2018); // Thu Jan 01 1970 01:00:02 GMT+0100 (Central European Standard Time)
  ```

- resulting date is relative to the timezone of our computer, means that **two different computers might output a different value for the same date object**
  - JS, without any information about the timezone, will consider the date as UTC, and will automatically perform a conversion to the current computer timezone
- we can create a new `Date` object in 4 ways:
  - passing **no parameters**, creates a Date object that represents "now"
  - passing a **number**, which represents the milliseconds from 1 Jan 1970 00:00 GMT
  - passing a **string**, which represents a date
  - passing a **set of parameters**, which represent the different parts of a date


### Timezones

- when initializing a date we can pass a timezone, so the date is not assumed UTC and then converted to your local timezone
- we can specify a timezone by adding it in +HOURS format, or by adding the timezone name wrapped in parentheses
  - specifying a wrong timezone name in the parentheses, JS will default to UTC without complaining
  - specifying a wrong numeric format, JS will complain with an "Invalid Date" error

  ```js
  new Date('July 22, 2018 07:22:13 +0700');
  new Date('July 22, 2018 07:22:13 (CET)');
  ```


## Formatting Dates

```js
const date = new Date('July 22, 2018 07:22:13');
```

- built-in methods that will generate a string representing that date

  ```js
  date.toString(); // "Sun Jul 22 2018 07:22:13 GMT+0200 (Central European Summer Time)"
  date.toTimeString(); //"07:22:13 GMT+0200 (Central European Summer Time)"
  date.toUTCString(); // "Sun, 22 Jul 2018 05:22:13 GMT"
  date.toDateString(); // "Sun Jul 22 2018"
  date.toISOString(); // "2018-07-22T05:22:13.000Z" (ISO 8601 format)
  date.toLocaleString(); // "22/07/2018, 07:22:13"
  date.toLocaleTimeString(); // "07:22:13"
  ```

- more low level methods to get a value out of a date, and construct any kind of result we want

  ```js
  date.getDate(); // 22
  date.getDay(); // 0 (0 means sunday, 1 means monday..)
  date.getFullYear(); // 2018
  date.getMonth(); // 6 (starts from 0)
  date.getHours(); // 7
  date.getMinutes(); // 22
  date.getSeconds(); // 13
  date.getMilliseconds(); // 0 (not specified)
  date.getTime(); // 1532236933000
  date.getTimezoneOffset(); // -120 (will vary depending on where you are and when you check - this is CET during the summer). Returns the timezone difference expressed in minutes
  ```

- UTC versions of these methods, that return the UTC value rather than the values adapted to your current timezone

  ```js
  date.getUTCDate(); // 22
  date.getUTCDay(); // 0 (0 means sunday, 1 means monday..)
  date.getUTCFullYear(); // 2018
  date.getUTCMonth(); // 6 (starts from 0)
  date.getUTCHours(); // 5 (not 7 like above)
  date.getUTCMinutes(); // 22
  date.getUTCSeconds(); // 13
  date.getUTCMilliseconds(); // 0 (not specified)
  ```


## Editing a Date

- `setDate()` and `setMonth()` methods start numbering from 0, e.g., March is month 2

  ```js
  const date = new Date('July 22, 2018 07:22:13')

  date.setDate(newValue); // July 23, 2018 07:22:13
  date.setFullYear(newValue); // avoid setYear(), it's deprecated
  date.setMonth(newValue);
  date.setHours(newValue);
  date.setMinutes(newValue);
  date.setSeconds(newValue);
  date.setMilliseconds(newValue);
  date.setTime(newValue);
  ```

- **Fun fact**: those methods "overlap", e.g., `date.setHours(48)`, will increment the day as well
- **Good to know**: we can add more than one parameter to `setHours()` to also set minutes, seconds and milliseconds: `setHours(0, 0, 0, 0)` - the same applies to `setMinutes()` and `setSeconds()`
- _set_ methods also have an UTC equivalent:

  ```js
  date.setUTCDate(newValue);
  date.setUTCDay(newValue);
  date.setUTCFullYear(newValue);
  date.setUTCMonth(newValue);
  date.setUTCHours(newValue);
  date.setUTCMinutes(newValue);
  date.setUTCSeconds(newValue);
  date.setUTCMilliseconds(newValue);
  ```
