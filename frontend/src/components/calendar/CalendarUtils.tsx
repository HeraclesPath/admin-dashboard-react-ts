import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;

const today = new Date();
const tomorrow = new Date(today);
const nextWeek = new Date(today);

tomorrow.setDate(today.getDate() + 1);
nextWeek.setDate(today.getDate() + 7);

// Generate random future dates
const randomDates = Array.from({ length: 4 }, (_, i) => {
  const d = new Date(today);
  d.setDate(today.getDate() + Math.floor(Math.random() * 8 + i * 8 + 1));
  return d.toISOString().split('T')[0];
});

const todayStr = today.toISOString().split('T')[0];
const tomorrowStr = tomorrow.toISOString().split('T')[0];
const nextWeekStr = nextWeek.toISOString().split('T')[0];

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Daily Standup Meeting',
    start: todayStr,
  },
  {
    id: createEventId(),
    title: 'Project Sync-Up',
    start: `${tomorrowStr}T19:00:00`,
  },
  {
    id: createEventId(),
    title: 'Final Deadline for Sprint',
    start: `${nextWeekStr}T20:00:00`,
  },
  {
    id: createEventId(),
    title: 'Client Kickoff Meeting',
    start: `${randomDates[0]}T09:00:00`,
  },
  {
    id: createEventId(),
    title: 'Team Celebration Lunch',
    start: `${randomDates[1]}T12:00:00`,
  },
  {
    id: createEventId(),
    title: 'Business Trip',
    start: randomDates[2],
    end: randomDates[3],
  },
];

export function createEventId() {
  return String(eventGuid++);
}

