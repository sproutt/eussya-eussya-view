import { Grass, GrassAction } from "context-api/action/grass-action";
import { MissionStatus } from "enum/mission-status";

const grassReducer = (state: Grass, action: GrassAction): Grass => {
  switch (action.type) {
    case "SAVE":
      let grass: Grass = new Map();
      let date = new Date();
      let today = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
      };
      let temp = today;
      for (let index = 0; index < 140; index++) {
        let key = `${temp.year}-${temp.month}-${temp.date}`;
        grass.set(key, {
          year: temp.year,
          month: temp.month,
          date: temp.date,
          count: 0,
          day: new Date(key).getDay(),
        });
        temp = minusOneDate(temp);
      }

      action.data.forEach((d) => {
        let key = `${d.year}-${d.month}-${d.date}`;
        if (d.status === MissionStatus.COMPLETE && grass.has(key)) {
          let data = grass.get(key);
          grass.set(key, {
            ...data!,
            count: data!.count + 1,
          });
        }
      });

      return grass;
    default:
      return state;
  }
};

const minusOneDate = (dates: {
  year: number;
  month: number;
  date: number;
}): { year: number; month: number; date: number } => {
  let datesByMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let datesByLeapYearMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let year = dates.year;
  let month = dates.month;
  let date = dates.date;
  if (date - 1 === 0 && month - 1 < 0) {
    year = year - 1;
    month = 11;
    date = 31;
    return { year, month, date };
  }
  if (date - 1 === 0 && month - 1 === 1 && isLeapyear(year)) {
    month = month - 1;
    date = datesByLeapYearMonth[month - 1];
    return { year, month, date };
  }
  if (date - 1 === 0) {
    month = month - 1;
    date = datesByMonth[month - 1];
    return { year, month, date };
  }
  date = date - 1;
  return { year, month, date };
};

const isLeapyear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export default grassReducer;
