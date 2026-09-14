import type { LeadIntent } from "./scroll";
import { scrollToId } from "./scroll";

export const bookingUrls = {
  eventMeeting: import.meta.env.VITE_EVENT_BOOKING_URL ?? "",
  demo: import.meta.env.VITE_DEMO_BOOKING_URL ?? "",
  postEventMeeting: import.meta.env.VITE_POST_EVENT_MEETING_URL ?? "",
};

export function bookingUrlFor(intent: LeadIntent) {
  if (intent === "seamless") return bookingUrls.eventMeeting;
  if (intent === "demo") return bookingUrls.demo;
  return bookingUrls.postEventMeeting;
}

export function openBookingOrLead(intent: LeadIntent) {
  const url = bookingUrlFor(intent);
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }
  sessionStorage.setItem("da_intent", intent);
  scrollToId("lead");
}
