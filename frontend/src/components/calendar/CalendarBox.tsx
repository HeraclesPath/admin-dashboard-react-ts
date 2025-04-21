import { useState } from 'react';
import {
  DateSelectArg,
  EventApi,
  EventClickArg,
  EventContentArg,
  formatDate,
} from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './CalendarUtils';

const CalendarBox = () => {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (confirm(`Delete the event '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove();
    }
  };

  const renderEventContent = ({ timeText, event }: EventContentArg) => (
    <div className="mx-1 flex gap-1 text-ellipsis overflow-hidden">
      <b>{timeText}</b>
      <i>{event.title}</i>
    </div>
  );

  const renderSidebarEvent = (event: EventApi) => (
    <div
      key={event.id}
      className="w-full flex flex-col items-start gap-3 p-3 bg-base-200 dark:bg-neutral dark:text-neutral-content rounded-lg"
    >
      <div className="flex flex-wrap gap-2">
        <b>{formatDate(event.start!, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
        {event.end && <span className="whitespace-nowrap">until</span>}
        {event.end && (
          <b>{formatDate(event.end!, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
        )}
      </div>
      <div>{event.title}</div>
    </div>
  );

  return (
    <div className="w-full flex flex-col xl:flex-row gap-5 xl:gap-0">
      {/* Sidebar */}
      <aside className="xl:w-[200px] 2xl:w-[250px] flex flex-col items-start xl:mr-4 gap-4">
        <h3>Events</h3>

        <div className="hidden xl:flex w-full flex-col items-start gap-3">
          {currentEvents.map(renderSidebarEvent)}
        </div>

        <div className="carousel w-full xl:hidden rounded-lg gap-3">
          {currentEvents.map((event) => (
            <div
              key={event.id}
              className="carousel-item flex-col items-start gap-3 p-3 bg-base-200 dark:bg-neutral dark:text-neutral-content rounded-lg"
            >
              <div className="flex flex-wrap gap-2">
                <b>{formatDate(event.start!, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
                {event.end && <span className="whitespace-nowrap">until</span>}
                {event.end && (
                  <b>{formatDate(event.end!, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
                )}
              </div>
              <div className="line-clamp-1">{event.title}</div>
            </div>
          ))}
        </div>
      </aside>

      {/* Calendar */}
      <section className="grow h-[85vh] xl:h-auto 3xl:h-[80vh]">
        <FullCalendar
          height="100%"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          editable
          selectable
          selectMirror
          dayMaxEvents
          initialEvents={INITIAL_EVENTS}
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          eventsSet={setCurrentEvents}
        />
      </section>
    </div>
  );
};

export default CalendarBox;
