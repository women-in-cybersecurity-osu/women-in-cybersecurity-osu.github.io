import React from "react"

const events = [
  {
    name: "Schneider Downs",
    dateString: "September 19th, 2019",
    date: "September 19 2019",
    time: "7:00 - 8:00 PM",
    location: "Baker Labs 260",
    desc: "Schneider Downs pentesting team will discuss what they do.",
    rsvp: null,
    rsvpLink: null,
  },
  {
    name: "Fall Kickoff",
    dateString: "August 29th, 2019",
    date: "August 29 2019",
    time: "7:00 - 8:00 PM",
    location: "Baker Labs 260",
    desc:
      "Kickoff the year with pizza and come meet new and returning WiCyS members.",
    rsvp: null,
    rsvpLink: null,
  },
  {
    name: "Endpoint Security w/ OCIO",
    dateString: "September 5th, 2019",
    date: "September 5 2019",
    time: "7:00 - 8:00 PM",
    location: "Baker Labs 260",
    desc:
      "Andrew McCabe, a senior engineer from OCIO, will speak about endpoint security",
    rsvp: null,
    rsvpLink: null,
  },
  {
    name: "Automation of Static Code Analysis w/ OCIO",
    dateString: "September 12th, 2019",
    date: "September 12 2019",
    time: "7:00 - 8:00 PM",
    location: "Baker Labs 260",
    desc:
      "Geoff Shoupp, a senior engineer from OCIO, will discuss automating static code analysis.",
    rsvp: null,
    rsvpLink: null,
  },
  {
    name: "Physical Security + Lockpicking",
    dateString: "March 21st, 2019",
    date: "March 21 2019",
    time: "7:00 - 8:00 PM",
    location: "Baker Labs 394",
    desc:
      "Join us this Thursday for a talk on the importance of physical security. We will also practice lockpicking as an exercise.",
    rsvp: null,
    rsvpLink: null,
  },
  {
    name: "Mr. Robot Movie Night",
    dateString: "April 4th, 2019",
    date: "April 4 2019",
    time: "7:00 - 8:00 PM",
    location: "Baker Labs 394",
    desc:
      "Join us for a social in which we will eat popcorn and watch the first episode of Mr. Robot.",
    rsvp: null,
    rsvpLink: null,
  },
  {
    name: "Katherine Armitage from Battelle",
    dateString: "April 11th, 2019",
    date: "April 11 2019",
    time: "7:00 - 8:00 PM",
    location: "Baker Labs 394",
    desc:
      "Join us this week for a talk by Katherine Armitage from Battelle on cybersecurity",
    rsvp: null,
    rsvpLink: null,
  },
  {
    name: "Get Your Laptop Cyber Ready",
    dateString: "March 28th, 2019",
    date: "March 28 2019",
    time: "7:00 - 8:00 PM",
    location: "Baker Labs 394",
    desc:
      "Join us for an event in which we will get your laptop cyber ready to learn and practice cybersecurity.",
    rsvp: null,
    rsvpLink: null,
  },
  {
    name: "Board Game Night",
    dateString: "April 18th, 2019",
    date: "April 18 2019",
    time: "7:00 - 8:00 PM",
    location: "Baker Labs 394",
    desc: "Join us for a board game night to relax before finals week!",
    rsvp: null,
    rsvpLink: null,
  },
]

const sortEvents = (a, b) => {
  return new Date(b.date) - new Date(a.date)
}

const sortedEvents = events.sort(sortEvents)
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
const today = new Date()

const checkIfUpcoming = (today, eventDate) => {
  const [eventMonth, eventDay, eventYear] = eventDate.split(" ")
  console.log()
  return (
    today.getFullYear() <= parseInt(eventYear, 10) &&
    today.getMonth() <= months.indexOf(eventMonth) &&
    today.getDate() <= parseInt(eventDay, 10)
  )
}

export const UpcomingEvents = () => {
  return sortedEvents.reverse().map(
    event =>
      checkIfUpcoming(today, event.date) && (
        <div>
          <div>{event.name}</div>
          <div>{event.dateString}</div>
        </div>
      )
  )
}

export const PastEvents = () => {
  return sortedEvents.reverse().map(
    event =>
      !checkIfUpcoming(today, event.date) && (
        <div>
          <div>{event.name}</div>
          <div>{event.dateString}</div>
        </div>
      )
  )
}
