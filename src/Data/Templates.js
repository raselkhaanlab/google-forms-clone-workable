import eventReg from "Assets/eventReg.png";
import newForm from "Assets/newForm.png";
import partyInv from "Assets/partyInv.png";
import rsvp from "Assets/rsvp.png";
import contactInfo from "Assets/contactInfo.png";

export const formTemplates = [
  { name: "Blank", img: newForm, url: "/create/blank" },
  {
    name: "Event Registration",
    img: eventReg,
    url: "/create/event-registeration",
  },
  {
    name: "Contact Information",
    img: contactInfo,
    url: "/create/contact-information",
  },
  { name: "Party Invite", img: partyInv, url: "/create/party-invite" },
  { name: "RSVP", img: rsvp, url: "/create/rsvp" },
];

export const ownershipFilters = [
  "Owned by anyone",
  "Owned by me",
  "Not owned by me",
];

export const formSamples = [
  {
    id: "nudrigb43754398",
    title: "CN Lab Groups",
    img: contactInfo,
    date: "Jul 10, 2021",
    lastAction: "modified",
    shared: false,
  },
  {
    id: "dghejrhgkeergh",
    title: "Party Invite",
    img: partyInv,
    date: "Jan 11, 2022",
    lastAction: "created",
    shared: true,
  },
  {
    id: "hrejbdyugdgerhg",
    title: "Event Registeration",
    img: eventReg,
    date: "Apr 23, 2020",
    lastAction: "created",
    shared: false,
  },
];