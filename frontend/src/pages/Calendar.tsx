import CalendarBox from '../components/calendar/CalendarBox';

const Calendar = () => {
  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-5 xl:gap-8">
        <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
          Calendar
        </h2>
        <div className="w-full p-0 m-0 relative">
          <CalendarBox />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
