import { useEffect, useState } from "preact/hooks";
import "./Countdown.css";
import { FlipCard } from "./FlipCard";

// function CardsWrapper({}: //   days,
// //   hours,
// //   minutes,
// //   seconds,
// //   daysShuffle,
// //   hoursShuffle,
// //   minutesShuffle,
// //   secondsShuffle,
// {
//   //   days: number;
//   //   hours: number;
//   //   minutes: number;
//   //   seconds: number;
//   //   daysShuffle: boolean;
//   //   hoursShuffle: boolean;
//   //   minutesShuffle: boolean;
//   //   secondsShuffle: boolean;
// }) {
//   return (
//     <section className="Countdown">
//       <FlipCard digit={days} shuffle={daysShuffle} label="DAYS" />
//       <FlipCard digit={hours} shuffle={hoursShuffle} label="HOURS" />
//       <FlipCard digit={minutes} shuffle={minutesShuffle} label="MINUTES" />
//       <FlipCard digit={seconds} shuffle={secondsShuffle} label="SECONDS" />
//     </section>
//   );
// }

type DateTracker = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function Countdown() {
  //   const [time, setTime] = useState(new Date());
  const [dateTracker, setDateTracker] = useState<DateTracker>({
    days: 13,
    hours: 24,
    minutes: 60,
    seconds: 60,
  });
  const [daysShuffle, setDaysShuffle] = useState(true);
  const [hoursShuffle, setHoursShuffle] = useState(true);
  const [minutesShuffle, setMinutesShuffle] = useState(true);
  const [secondsShuffle, setSecondsShuffle] = useState(true);

  let timerId: number | undefined;

  function kickOff() {
    if (!timerId) {
      timerId = setInterval(updateTime, 1000);
    }
  }

  useEffect(() => {
    kickOff();

    return () => {
      clearInterval(timerId);
    };
  }, []);

  function updateTime() {
    setDateTracker((prevDateTracker) => {
      const newDateTracker: DateTracker = {
        seconds: prevDateTracker.seconds - 1,
        minutes: prevDateTracker.minutes,
        hours: prevDateTracker.hours,
        days: prevDateTracker.days,
      };

      if (newDateTracker.seconds <= 0) {
        newDateTracker.seconds = 59;
        newDateTracker.minutes = prevDateTracker.minutes - 1;
      }

      if (newDateTracker.minutes <= 0) {
        newDateTracker.minutes = 59;
        newDateTracker.hours = prevDateTracker.hours - 1;
      }

      if (newDateTracker.hours <= 0) {
        newDateTracker.hours = 24;
        newDateTracker.days--;
      }

      if (prevDateTracker.days !== newDateTracker.days) {
        setDaysShuffle((prev) => !prev);
      }

      // on hour change, update hours and shuffle state
      if (prevDateTracker.hours !== newDateTracker.hours) {
        setHoursShuffle((prev) => !prev);
      }

      // on minute change, update minutes and shuffle state
      if (prevDateTracker.minutes !== newDateTracker.minutes) {
        setMinutesShuffle((prev) => !prev);
      }

      // on second change, update seconds and shuffle state
      if (prevDateTracker.seconds !== newDateTracker.seconds) {
        setSecondsShuffle((prev) => !prev);
      }

      return newDateTracker;
    });

    // const newDateTracker: DateTracker = {
    //   seconds: seconds - 1,
    //   minutes: minutes,
    //   hours: hours,
    //   days: days,
    // };

    // if (newSeconds <= 0) {
    //   newSeconds = 60;
    //   newMinutes--;
    // }

    // if (newMinutes <= 0) {
    //   newMinutes = 60;
    //   newHours--;
    // }

    // if (newHours <= 0) {
    //   newHours = 24;
    //   newDays--;
    // }

    // // on hour change, update hours and shuffle state
    // if (hours !== newHours) {
    //   setHours(() => newHours);
    //   setHoursShuffle((prev) => !prev);
    // }

    // // on minute change, update minutes and shuffle state
    // if (minutes !== newMinutes) {
    //   setMinutes(() => newMinutes);
    //   setMinutesShuffle((prev) => !prev);
    // }

    // // on second change, update seconds and shuffle state
    // if (seconds !== newSeconds) {
    //   setSeconds((prevSec) => prevSec - 1);
    //   setSecondsShuffle((prev) => !prev);
    // }
  }

  return (
    <section className="Countdown">
      <FlipCard
        digit={dateTracker.days}
        shuffle={daysShuffle}
        label="DAYS"
        unit="days"
      />
      <FlipCard
        digit={dateTracker.hours}
        shuffle={hoursShuffle}
        label="HOURS"
        unit="hours"
      />
      <FlipCard
        digit={dateTracker.minutes}
        shuffle={minutesShuffle}
        label="MINUTES"
        unit="minutes"
      />
      <FlipCard
        digit={dateTracker.seconds}
        shuffle={secondsShuffle}
        label="SECONDS"
        unit="seconds"
      />
    </section>

    // <CardsWrapper
    // //   days={days}
    // //   daysShuffle={daysShuffle}
    // //   hours={hours}
    // //   hoursShuffle={hoursShuffle}
    // //   minutes={minutes}
    // //   minutesShuffle={minutesShuffle}
    // //   seconds={seconds}
    // //   secondsShuffle={secondsShuffle}
    // />
  );
}
