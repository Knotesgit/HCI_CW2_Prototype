/* Researcher-prepared CW1 conversation. User entries verbatim; assistant entries are verbatim first paragraphs only. */
const SOURCE_TURNS = [
  {
    "turn": 1,
    "user": "hey we’re planning a creative coding workshop at uni for around 24 students on dec 4. thinking 1-4pm and maybe £600 budget. can u help us plan it?",
    "assistant": "Yes. £600 is enough for a good 24-person workshop if the university provides the room, projector, Wi-Fi and students bring/use university laptops. I would avoid hardware-heavy Arduino/physical-computing for a three-hour first workshop; it adds cost and setup risk."
  },
  {
    "turn": 2,
    "user": "p5js sounds good. but £60 for prizes seems kinda unnecessary tbh, and we probably need some budget for accessibility too? also not sure if £250 for the lead is too much. can we rethink the £600 budget a bit?",
    "assistant": "Yeah — £60 on prizes is low-value here, and £250 for the lead only makes sense if you’re paying an external facilitator who is also doing prep. If the lead is a student, society member, PhD student, or university staff member already involved, I’d cut that substantially."
  },
  {
    "turn": 3,
    "user": "yeah this looks better, lets go with that budget for now. but do we really need 2 helpers? not sure we can find enough people to help out, especially if most students are complete beginners",
    "assistant": "You probably don’t need 2 helpers if the workshop is designed properly."
  },
  {
    "turn": 4,
    "user": "okay 1 helper sounds fine then. but uh just got an email from the students union, apparently they can only give us £420 now instead of £600 :/ can we still make this work? really dont wanna start charging students",
    "assistant": "Yes. £420 is still enough, assuming the room, projector, Wi-Fi and laptops are provided by the university and you keep the workshop browser-based."
  },
  {
    "turn": 5,
    "user": "alright £420 works then, lets stick with that. oh btw just heard back about the room booking, apparently we can only have it from 2-4pm instead of 1-4 :/ is 2 hours gonna be enough? kinda worried we’ll have to rush everything",
    "assistant": "Yes, 2 hours is enough, but only if you narrow the workshop. Trying to compress the original 3-hour plan unchanged would feel rushed."
  },
  {
    "turn": 6,
    "user": "yeah lets go with 2-4pm then. but we cant get into the room before 2 unfortunately :/ how do we stop setup taking up too much time? especially with 24 students",
    "assistant": "Yes. The way to make this work is to design it as a “walk in and start” workshop, rather than treating 2:00–2:10 as setup time."
  },
  {
    "turn": 7,
    "user": "ok that makes sense. we havent actually sorted out signups yet tho. when should we open/close registration? and how do we ask about accessibility needs without leaving it too late?",
    "assistant": "For a 4 December workshop with only 24 places, I’d open registration fairly soon and separate the accessibility deadline from the final signup deadline."
  },
  {
    "turn": 8,
    "user": "wait we still havent confirmed who’s teaching it or made the starter code lol. how early do we need to sort those out? also when should we test the room equipment?",
    "assistant": "You should sort the teacher first, because the starter code, workshop difficulty, and even the signup description depend on who is actually teaching."
  },
  {
    "turn": 9,
    "user": "wait didnt you say we should open signups around nov 2-6? but now ur saying we should wait until the teacher and starter code are sorted, which might take until nov 13 😭\n\nso when are we actually supposed to open registration?",
    "assistant": "You’re right — those two timelines conflicted."
  },
  {
    "turn": 10,
    "user": "ok got it. can u put everything we need to do before the workshop into one detailed checklist? wanna share it with the rest of the team so we dont miss anything.\n\ninclude deadlines, who’s responsible for what, equipment, accessibility, participant emails, backup plans etc. also point out anything that could mess up our schedule.\n\nno need to go over the budget or workshop timings again, we already sorted those out.",
    "assistant": "Yep — here’s a single shareable checklist with the dependencies cleaned up so the dates don’t contradict each other."
  },
  {
    "turn": 11,
    "user": "uhh this is way too long lol 😭 can u make it shorter? maybe around 1000-1200 words so the team can actually read it\n\nstill need all the important deadlines, whos doing what, and things that could delay us. just cut the repeated stuff",
    "assistant": "Yeah, the previous version was too operationally detailed. Here’s a tighter version that keeps the decisions and deadlines without repeating every contingency three times."
  }
];
