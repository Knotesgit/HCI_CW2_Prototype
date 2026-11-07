/* Full researcher-archived 11-turn workshop conversation, including tables. No participant data. */
const SOURCE_TURNS = [
 {
  "turn": 1,
  "user": "hey we’re planning a creative coding workshop at uni for around 24 students on dec 4. thinking 1-4pm and maybe £600 budget. can u help us plan it?",
  "assistantBlocks": [
   {
    "type": "paragraph",
    "text": "Yes. £600 is enough for a good 24-person workshop if the university provides the room, projector, Wi-Fi and students bring/use university laptops. I would avoid hardware-heavy Arduino/physical-computing for a three-hour first workshop; it adds cost and setup risk."
   },
   {
    "type": "heading",
    "text": "Recommended concept: “Code as Canvas”"
   },
   {
    "type": "paragraph",
    "text": "Use p5.js and have everyone build an interactive generative artwork/poster. It is specifically designed for creative coding and beginners, and its browser editor avoids local installation/configuration."
   },
   {
    "type": "paragraph",
    "text": "The useful thing about this format is that beginners get something visually interesting within minutes, while experienced programmers can push the same exercise much further with animation, interaction, randomness, particles, etc."
   },
   {
    "type": "paragraph",
    "text": "A good outcome would be:"
   },
   {
    "type": "quote",
    "text": "By 4pm, every participant has made an interactive artwork they can show other people."
   },
   {
    "type": "paragraph",
    "text": "I would structure Friday 4 December, 1–4pm like this:"
   },
   {
    "type": "table",
    "rows": [
     [
      "Time",
      "Activity"
     ],
     [
      "1:00–1:15",
      "Arrival, food/drinks, show 3–4 cool example sketches"
     ],
     [
      "1:15–1:30",
      "What is creative coding? Very short p5.js introduction"
     ],
     [
      "1:30–2:05",
      "Guided build: everyone makes the same interactive generative poster"
     ],
     [
      "2:05–2:15",
      "Break"
     ],
     [
      "2:15–2:25",
      "Introduce the main creative challenge"
     ],
     [
      "2:25–3:20",
      "Open creation session — students modify/remix their project; facilitators circulate"
     ],
     [
      "3:20–3:35",
      "Final polish + submit/share projects"
     ],
     [
      "3:35–3:55",
      "Informal gallery/showcase + a few 60-second demos"
     ],
     [
      "3:55–4:00",
      "Prizes / group photo / resources for continuing"
     ]
    ]
   },
   {
    "type": "paragraph",
    "text": "The guided section should introduce only about six concepts: setup() / draw(), coordinates, shapes, colour, variables/randomness, and mouse interaction. The official beginner material similarly starts with canvas/background, shapes, colour and mouse interaction rather than trying to teach JavaScript comprehensively."
   },
   {
    "type": "paragraph",
    "text": "For the main challenge, don’t give everyone an identical assignment. Give them a starting sketch plus prompts such as Generative Album Cover, Interactive Creature, Digital Garden, Glitch Art, or Particle Universe. They can choose one or ignore the prompts entirely."
   },
   {
    "type": "heading",
    "text": "Staffing"
   },
   {
    "type": "paragraph",
    "text": "For 24 people I’d want 1 lead + 2 helpers."
   },
   {
    "type": "paragraph",
    "text": "During the creative section that’s effectively one person helping roughly eight students. One instructor trying to debug 24 people’s code simultaneously will become the main bottleneck."
   },
   {
    "type": "paragraph",
    "text": "The helpers don’t need to be p5.js experts. They mainly need basic JavaScript and should have the starter project and solutions beforehand."
   },
   {
    "type": "heading",
    "text": "£600 budget"
   },
   {
    "type": "paragraph",
    "text": "Assuming the university provides the venue/equipment, I’d allocate it roughly like this:"
   },
   {
    "type": "table",
    "rows": [
     [
      "Item",
      "Budget"
     ],
     [
      "Lead facilitator / preparation",
      "£250"
     ],
     [
      "2 student helpers × £40",
      "£80"
     ],
     [
      "Snacks + drinks for ~24",
      "£100"
     ],
     [
      "Small prizes",
      "£60"
     ],
     [
      "Printing / name tags / miscellaneous materials",
      "£30"
     ],
     [
      "Contingency",
      "£80"
     ],
     [
      "Total",
      "£600"
     ]
    ]
   },
   {
    "type": "paragraph",
    "text": "I wouldn’t spend much on merchandise. Food + good facilitation + prizes improve the event more than £150 of branded tote bags."
   },
   {
    "type": "paragraph",
    "text": "For prizes, three × £20 works nicely: Most Creative, Best Interaction, and Audience Favourite. That also avoids pretending a creative workshop has one objectively “best” programmer."
   },
   {
    "type": "heading",
    "text": "What needs preparing before 4 December"
   },
   {
    "type": "paragraph",
    "text": "The important operational stuff is fairly small:"
   },
   {
    "type": "list",
    "text": "Reserve a room with tables, reliable Wi-Fi, projector and power sockets, ideally for 12:30–4:30 rather than exactly 1–4."
   },
   {
    "type": "list",
    "text": "Confirm everyone has access to a laptop; pairs can work, but don’t deliberately design it around shared computers."
   },
   {
    "type": "list",
    "text": "Make one starter p5.js project and one finished reference project."
   },
   {
    "type": "list",
    "text": "Prepare a very short slide deck — probably 10–15 slides maximum."
   },
   {
    "type": "list",
    "text": "Make a one-page cheat sheet of the ~10 p5.js functions people will actually use."
   },
   {
    "type": "list",
    "text": "Test the p5.js Web Editor on the university network beforehand. The editor is explicitly designed to create/share/remix sketches without downloading or configuring an environment."
   },
   {
    "type": "list",
    "text": "Keep an offline fallback copy of the starter files in case Wi-Fi or the web editor fails."
   },
   {
    "type": "list",
    "text": "Send participants a pre-event message telling them to bring a charged laptop and headphones if you decide to include sound."
   },
   {
    "type": "list",
    "text": "Have a QR code/short link where everyone submits their final sketch so the showcase doesn’t turn into five minutes of HDMI-adapter warfare."
   },
   {
    "type": "paragraph",
    "text": "I’d also explicitly advertise it as “no previous coding experience required” and design the first hour accordingly. p5.js is well suited to that audience; its own teaching resources include beginner workshops specifically intended for people with no prior coding experience."
   },
   {
    "type": "paragraph",
    "text": "The main thing I would not do is turn this into a three-hour programming lecture. Roughly 45 minutes teaching / 90 minutes making / 30 minutes showcasing and socialising will feel much more like a creative workshop."
   },
   {
    "type": "paragraph",
    "text": "If this is roughly the direction you had in mind, the next useful step is to turn it into a proper event plan for your uni team: objectives, minute-by-minute run sheet, exact shopping/budget list, staff roles, preparation timeline from now → 4 Dec, and participant announcement copy."
   }
  ]
 },
 {
  "turn": 2,
  "user": "p5js sounds good. but £60 for prizes seems kinda unnecessary tbh, and we probably need some budget for accessibility too? also not sure if £250 for the lead is too much. can we rethink the £600 budget a bit?",
  "assistantBlocks": [
   {
    "type": "paragraph",
    "text": "Yeah — £60 on prizes is low-value here, and £250 for the lead only makes sense if you’re paying an external facilitator who is also doing prep. If the lead is a student, society member, PhD student, or university staff member already involved, I’d cut that substantially."
   },
   {
    "type": "paragraph",
    "text": "I’d rebalance the £600 like this:"
   },
   {
    "type": "table",
    "rows": [
     [
      "Item",
      "Revised budget"
     ],
     [
      "Lead facilitator",
      "£150"
     ],
     [
      "2 helpers",
      "£80"
     ],
     [
      "Food + drinks",
      "£120"
     ],
     [
      "Accessibility reserve",
      "£100"
     ],
     [
      "Materials / printing / adapters / misc.",
      "£50"
     ],
     [
      "Contingency",
      "£100"
     ],
     [
      "Total",
      "£600"
     ]
    ]
   },
   {
    "type": "paragraph",
    "text": "The £100 accessibility reserve is more useful than prizes. It could cover things like large-print handouts, dietary requirements beyond the standard catering order, spare headphones/earplugs, laptop/peripheral loans, transport support where appropriate, or adjustments requested by participants. You can also design accessibility into the workshop for basically no cost: high-contrast slides, large text, no colour-only instructions, written instructions alongside spoken ones, frequent breaks, accessible starter code, and a quieter workspace."
   },
   {
    "type": "paragraph",
    "text": "I would also make accessibility request-based rather than guessing what people need. Put something like “Please tell us about any access requirements when registering” on the signup form. If someone needs something expensive—e.g. professional interpreting or live captioning—that may need the university’s disability/accessibility service rather than trying to squeeze it out of this £600 event pot."
   },
   {
    "type": "paragraph",
    "text": "On the facilitator fee, I’d use roughly these bands:"
   },
   {
    "type": "list",
    "text": "£100–150: internal/student facilitator, with modest prep."
   },
   {
    "type": "list",
    "text": "£150–200: experienced facilitator doing proper prep + delivery."
   },
   {
    "type": "list",
    "text": "£250+: external professional, especially if they’re designing the whole session from scratch."
   },
   {
    "type": "paragraph",
    "text": "For your event, £150 feels like the sensible default unless you’ve already got an external creative-coding person in mind."
   },
   {
    "type": "paragraph",
    "text": "I also wouldn’t force the full £600 to be spent. If the workshop works at £450–500, keeping the rest uncommitted is better than inventing things to buy."
   }
  ]
 },
 {
  "turn": 3,
  "user": "yeah this looks better, lets go with that budget for now. but do we really need 2 helpers? not sure we can find enough people to help out, especially if most students are complete beginners",
  "assistantBlocks": [
   {
    "type": "paragraph",
    "text": "You probably don’t need 2 helpers if the workshop is designed properly."
   },
   {
    "type": "paragraph",
    "text": "For 24 mostly-beginner students, I’d plan around 1 lead + 1 helper. That gives you roughly 12 students per facilitator during the hands-on section, which is manageable if everyone starts from the same working p5.js template."
   },
   {
    "type": "paragraph",
    "text": "The bigger issue isn’t the raw student-to-helper ratio; it’s how much individual debugging you create. You can reduce that a lot by using a starter sketch, giving students small modification tasks rather than blank-page coding, keeping the JavaScript concepts limited, and having a short “common errors” sheet. Pairing students informally also helps because many beginner problems get solved between neighbours before a facilitator is needed."
   },
   {
    "type": "paragraph",
    "text": "I’d only insist on 2 helpers if you expect students to build substantially different projects, allow lots of free-form JavaScript, or have no shared starter code. In that setup, 24 beginners can overwhelm one lead and one helper quickly."
   },
   {
    "type": "paragraph",
    "text": "So I’d change the staffing budget to this:"
   },
   {
    "type": "table",
    "rows": [
     [
      "Item",
      "Budget"
     ],
     [
      "Lead facilitator",
      "£150"
     ],
     [
      "1 helper",
      "£40"
     ],
     [
      "Food + drinks",
      "£120"
     ],
     [
      "Accessibility reserve",
      "£100"
     ],
     [
      "Materials / printing / adapters",
      "£50"
     ],
     [
      "Contingency",
      "£140"
     ],
     [
      "Total",
      "£600"
     ]
    ]
   },
   {
    "type": "paragraph",
    "text": "That also gives you a useful option: budget for one confirmed helper, but keep enough contingency that you could pay a second helper later if someone becomes available."
   },
   {
    "type": "paragraph",
    "text": "For this particular p5.js workshop, 1 lead + 1 helper is the setup I’d choose."
   }
  ]
 },
 {
  "turn": 4,
  "user": "okay 1 helper sounds fine then. but uh just got an email from the students union, apparently they can only give us £420 now instead of £600 :/ can we still make this work? really dont wanna start charging students",
  "assistantBlocks": [
   {
    "type": "paragraph",
    "text": "Yes. £420 is still enough, assuming the room, projector, Wi-Fi and laptops are provided by the university and you keep the workshop browser-based."
   },
   {
    "type": "paragraph",
    "text": "I’d cut the facilitator costs slightly rather than cutting accessibility or making students pay:"
   },
   {
    "type": "table",
    "rows": [
     [
      "Item",
      "Revised budget"
     ],
     [
      "Lead facilitator",
      "£120"
     ],
     [
      "1 helper",
      "£30"
     ],
     [
      "Food + drinks",
      "£90"
     ],
     [
      "Accessibility reserve",
      "£80"
     ],
     [
      "Materials / printing / adapters",
      "£30"
     ],
     [
      "Contingency",
      "£70"
     ],
     [
      "Total",
      "£420"
     ]
    ]
   },
   {
    "type": "paragraph",
    "text": "That gives you £3.75 per student for refreshments, which is enough for simple snacks/drinks rather than full catering. The £80 accessibility pot stays protected, but it only gets spent where needed; if no paid adjustments are requested, it effectively becomes additional contingency."
   },
   {
    "type": "paragraph",
    "text": "I’d also treat £120 for the lead as a ceiling rather than a guaranteed expense. If the lead is one of your organisers or someone who would volunteer anyway, you could put that money back into accessibility, catering or contingency. If you need to recruit someone specifically to design and teach the workshop, though, paying them something is reasonable."
   },
   {
    "type": "paragraph",
    "text": "The things I would not cut are the helper and the contingency. With 24 beginners, having a second person available during debugging is worth £30, and having no spare money at all is risky."
   },
   {
    "type": "paragraph",
    "text": "So no, I don’t think you need to charge students. £420 still supports the same basic workshop; it just needs to be a fairly lean event rather than a catered/professionally facilitated one."
   }
  ]
 },
 {
  "turn": 5,
  "user": "alright £420 works then, lets stick with that. oh btw just heard back about the room booking, apparently we can only have it from 2-4pm instead of 1-4 :/ is 2 hours gonna be enough? kinda worried we’ll have to rush everything",
  "assistantBlocks": [
   {
    "type": "paragraph",
    "text": "Yes, 2 hours is enough, but only if you narrow the workshop. Trying to compress the original 3-hour plan unchanged would feel rushed."
   },
   {
    "type": "paragraph",
    "text": "For 24 beginners, I’d make the goal: everyone leaves with one working interactive p5.js sketch, not “learn creative coding broadly.”"
   },
   {
    "type": "paragraph",
    "text": "A realistic 2-hour structure is:"
   },
   {
    "type": "table",
    "rows": [
     [
      "Time",
      "Activity"
     ],
     [
      "2:00–2:10",
      "Arrival + show 2–3 examples"
     ],
     [
      "2:10–2:25",
      "Very short p5.js intro: canvas, shapes, colour, draw()"
     ],
     [
      "2:25–2:55",
      "Guided build: everyone makes the same interactive sketch"
     ],
     [
      "2:55–3:00",
      "Short break / reset"
     ],
     [
      "3:00–3:40",
      "Creative remix: change colours, motion, randomness, mouse interaction"
     ],
     [
      "3:40–3:55",
      "Quick gallery / volunteers show projects"
     ],
     [
      "3:55–4:00",
      "Wrap-up + resources"
     ]
    ]
   },
   {
    "type": "paragraph",
    "text": "The main change is that I’d drop the separate long “open project” phase. Give everyone a solid starter sketch and then let them personalise it. That prevents beginners spending 20 minutes staring at a blank editor."
   },
   {
    "type": "paragraph",
    "text": "I’d also prepare 3 levels of extension prompts so people can move at different speeds: basic changes like colour/shape, intermediate changes like randomness and animation, and optional harder additions like mouse interaction or particle effects."
   },
   {
    "type": "paragraph",
    "text": "One practical point: if the room booking is literally 2:00–4:00, you should avoid using 2:00–2:10 for technical setup. Have the lead and helper arrive earlier if access is possible, or have everything pre-tested so students can start immediately."
   },
   {
    "type": "paragraph",
    "text": "So I wouldn’t cancel or charge students. Two hours is still viable; it just needs to be a tighter workshop with one clear project and less lecture."
   }
  ]
 },
 {
  "turn": 6,
  "user": "yeah lets go with 2-4pm then. but we cant get into the room before 2 unfortunately :/ how do we stop setup taking up too much time? especially with 24 students",
  "assistantBlocks": [
   {
    "type": "paragraph",
    "text": "Yes. The way to make this work is to design it as a “walk in and start” workshop, rather than treating 2:00–2:10 as setup time."
   },
   {
    "type": "paragraph",
    "text": "The biggest win is to remove anything that needs configuring in the room. Before 4 Dec, send everyone one link containing the p5.js editor/starter sketch, and tell them to arrive with a charged laptop and a modern browser. Don’t require software installs, GitHub, VS Code, accounts, package managers, or downloads."
   },
   {
    "type": "paragraph",
    "text": "I’d organise the first few minutes like this:"
   },
   {
    "type": "table",
    "rows": [
     [
      "Time",
      "What happens"
     ],
     [
      "2:00–2:03",
      "Lead connects laptop to projector; helper gets students seated"
     ],
     [
      "2:03–2:05",
      "Everyone opens the workshop link/QR code"
     ],
     [
      "2:05",
      "Start teaching"
     ],
     [
      "2:05–2:15",
      "Intro + examples while late arrivals quietly join"
     ]
    ]
   },
   {
    "type": "paragraph",
    "text": "So realistically you lose ~5 minutes, not 15–20."
   },
   {
    "type": "paragraph",
    "text": "To make that reliable, prepare these things beforehand:"
   },
   {
    "type": "list",
    "text": "One workshop URL leading to everything: starter sketch, instructions and extension challenges. Ideally students shouldn’t need an account just to start."
   },
   {
    "type": "list",
    "text": "Put the same URL into a large QR code. Have it on your phone/laptop and print maybe 3–4 A4 copies rather than handing out 24 sheets."
   },
   {
    "type": "list",
    "text": "Have the lead laptop completely ready before entering: presentation open, p5.js examples open in browser tabs, charger and HDMI/USB-C adapter immediately accessible."
   },
   {
    "type": "list",
    "text": "Have the helper handle logistics, not teaching, for the first five minutes: seating, QR code, power sockets and anyone who can’t open the link."
   },
   {
    "type": "list",
    "text": "Ask students beforehand to come with their laptop charged. Twenty-four people simultaneously looking for sockets is exactly the kind of thing that destroys your start time."
   },
   {
    "type": "list",
    "text": "Test the room’s projector on another day beforehand if possible. You don’t need access immediately before the event; you just need to know whether it uses HDMI, USB-C, wireless presentation, a lectern PC, etc."
   },
   {
    "type": "list",
    "text": "Carry your own HDMI/USB-C adapter rather than trusting that one will exist."
   },
   {
    "type": "list",
    "text": "Keep the starter project extremely simple and already working. Students should be editing code, not copying 30 lines from a slide before they see anything happen."
   },
   {
    "type": "list",
    "text": "Keep an offline copy of the slides and starter code on the lead laptop. Wi-Fi failure shouldn’t prevent you from teaching the first section."
   },
   {
    "type": "paragraph",
    "text": "I’d also change the workshop opening slightly. Don’t begin with “everyone get set up and tell me when you’re ready.” That’s how 24-person workshops stall."
   },
   {
    "type": "paragraph",
    "text": "At 2:05, start showing the creative examples and explaining what they’re going to build. Anyone still connecting to Wi-Fi or opening the link can do that while listening. Then by roughly 2:15 everyone should be ready for the first coding step."
   },
   {
    "type": "paragraph",
    "text": "That leaves something like 2:15–2:50 guided coding → 2:50–2:55 break → 2:55–3:40 creative remix → 3:40–3:55 showcase → 3:55–4:00 wrap-up."
   },
   {
    "type": "paragraph",
    "text": "So the room restriction isn’t really the dangerous part. The dangerous part would be 24 beginners all needing individual technical setup. If we eliminate that requirement, starting at 2:05 is realistic."
   }
  ]
 },
 {
  "turn": 7,
  "user": "ok that makes sense. we havent actually sorted out signups yet tho. when should we open/close registration? and how do we ask about accessibility needs without leaving it too late?",
  "assistantBlocks": [
   {
    "type": "paragraph",
    "text": "For a 4 December workshop with only 24 places, I’d open registration fairly soon and separate the accessibility deadline from the final signup deadline."
   },
   {
    "type": "paragraph",
    "text": "A sensible timeline would be:"
   },
   {
    "type": "table",
    "rows": [
     [
      "Date",
      "Action"
     ],
     [
      "2–6 Nov",
      "Open registration"
     ],
     [
      "20 Nov",
      "Priority deadline for accessibility / adjustment requests"
     ],
     [
      "27 Nov",
      "Main registration closes, or earlier if 24 places fill"
     ],
     [
      "28–30 Nov",
      "Confirm places + contact waitlist"
     ],
     [
      "1 Dec",
      "Send final participant info: laptop, link, room, timing"
     ],
     [
      "4 Dec",
      "Workshop"
     ]
    ]
   },
   {
    "type": "paragraph",
    "text": "The important bit is not waiting until registration closes to look at accessibility needs. Check responses as they come in. If someone requests something that needs university support or purchasing, you want to know two weeks beforehand, not three days beforehand."
   },
   {
    "type": "paragraph",
    "text": "On the signup form, I’d include something like:"
   },
   {
    "type": "quote",
    "text": "Do you have any accessibility requirements or adjustments that would help you take part in the workshop?\nThis could include seating, visual or hearing access, sensory needs, mobility access, dietary requirements, assistive technology, or anything else you’d like us to know."
   },
   {
    "type": "quote",
    "text": "Please let us know by 20 November where possible, so we have time to arrange support. Requests after this date are still welcome, but some adjustments may take longer to organise."
   },
   {
    "type": "paragraph",
    "text": "I’d make that an optional free-text field, rather than giving people a checklist of disabilities. You care about what adjustment they need, not their diagnosis."
   },
   {
    "type": "paragraph",
    "text": "Also include a separate question for dietary requirements, because otherwise your accessibility field will get filled with “vegetarian” and you’ll have trouble distinguishing logistical needs from access adjustments."
   },
   {
    "type": "paragraph",
    "text": "For capacity, I’d do 24 confirmed places + a waitlist. Don’t register 30 assuming six won’t turn up; with a small hands-on workshop, accidentally getting 29 attendees is much worse than having two empty seats."
   },
   {
    "type": "paragraph",
    "text": "One more useful thing: when you confirm places, give people an easy way to cancel. Something like, “If you can no longer attend, please release your place so someone on the waiting list can join.” With free university events, no-shows are common enough that the waitlist is worth having."
   }
  ]
 },
 {
  "turn": 8,
  "user": "wait we still havent confirmed who’s teaching it or made the starter code lol. how early do we need to sort those out? also when should we test the room equipment?",
  "assistantBlocks": [
   {
    "type": "paragraph",
    "text": "You should sort the teacher first, because the starter code, workshop difficulty, and even the signup description depend on who is actually teaching."
   },
   {
    "type": "paragraph",
    "text": "For a 4 December workshop, I’d use this schedule:"
   },
   {
    "type": "table",
    "rows": [
     [
      "Deadline",
      "What should be done"
     ],
     [
      "6 Nov",
      "Confirm lead facilitator"
     ],
     [
      "13 Nov",
      "First working version of starter code + workshop outline"
     ],
     [
      "20 Nov",
      "Test room projector, Wi-Fi, sockets, adapters, lectern PC"
     ],
     [
      "23–27 Nov",
      "Finalise starter code, slides, QR/link, fallback files"
     ],
     [
      "1–2 Dec",
      "Full 2-hour rehearsal with lead + helper"
     ],
     [
      "4 Dec",
      "Workshop"
     ]
    ]
   },
   {
    "type": "paragraph",
    "text": "The lead facilitator is the urgent one. If you still don’t have someone by around 6–9 November, I’d actively simplify the workshop so an internal student/staff member can run it rather than waiting for a specialist."
   },
   {
    "type": "paragraph",
    "text": "The starter code does not need to be polished immediately. By 13 November, you mainly need a version that proves the workshop works: open link → run sketch → make a few changes → get a visible result. Then you can improve instructions and extension challenges later."
   },
   {
    "type": "paragraph",
    "text": "For the room, test it at least two weeks beforehand, ideally around 20 November. Specifically test:"
   },
   {
    "type": "list",
    "text": "projector/lectern connection"
   },
   {
    "type": "list",
    "text": "HDMI/USB-C requirements"
   },
   {
    "type": "list",
    "text": "university Wi-Fi with the p5.js editor"
   },
   {
    "type": "list",
    "text": "power socket availability"
   },
   {
    "type": "list",
    "text": "whether the room PC/browser blocks anything"
   },
   {
    "type": "list",
    "text": "visibility of code from the back of the room"
   },
   {
    "type": "paragraph",
    "text": "Because you can’t enter before 2pm on the day, I’d also do a second very quick equipment check during the week of the workshop if the booking team allows it. The main risk isn’t the p5.js content; it’s discovering at 2:00pm that the projector needs an adapter you don’t have."
   },
   {
    "type": "paragraph",
    "text": "So the immediate order is: confirm teacher → make rough starter sketch → then open registration with confidence. I wouldn’t advertise a detailed workshop format before those first two are settled."
   }
  ]
 },
 {
  "turn": 9,
  "user": "wait didnt you say we should open signups around nov 2-6? but now ur saying we should wait until the teacher and starter code are sorted, which might take until nov 13 😭\n\nso when are we actually supposed to open registration?",
  "assistantBlocks": [
   {
    "type": "paragraph",
    "text": "You’re right — those two timelines conflicted."
   },
   {
    "type": "paragraph",
    "text": "You do not need the starter code finished before opening registration. You only need the event concept, date/time, room, capacity, and a credible plan for who will teach it."
   },
   {
    "type": "paragraph",
    "text": "So I’d use this timeline instead:"
   },
   {
    "type": "table",
    "rows": [
     [
      "Date",
      "What happens"
     ],
     [
      "2–6 Nov",
      "Confirm or shortlist the lead facilitator"
     ],
     [
      "6–9 Nov",
      "Open registration"
     ],
     [
      "13 Nov",
      "First working starter sketch + session outline"
     ],
     [
      "20 Nov",
      "Accessibility priority deadline + room/equipment test"
     ],
     [
      "27 Nov",
      "Registration closes / waitlist finalised"
     ],
     [
      "1–2 Dec",
      "Final materials + rehearsal"
     ],
     [
      "4 Dec",
      "Workshop"
     ]
    ]
   },
   {
    "type": "paragraph",
    "text": "The key distinction is:"
   },
   {
    "type": "list",
    "text": "Before registration opens: you need to know the workshop is actually going ahead and roughly who can deliver it."
   },
   {
    "type": "list",
    "text": "Before the workshop: you need the starter code, slides, exercises, room test, etc."
   },
   {
    "type": "paragraph",
    "text": "So I would not wait until 13 Nov to open signups. That wastes useful recruitment time."
   },
   {
    "type": "paragraph",
    "text": "If you still haven’t confirmed a lead by around 9 Nov, you can still open registration if one of your organisers is willing and able to run the p5.js session as a fallback. What you shouldn’t do is advertise an event with literally nobody capable of delivering it."
   },
   {
    "type": "paragraph",
    "text": "So the clean answer is: aim to open signups around 6–9 November."
   }
  ]
 },
 {
  "turn": 10,
  "user": "ok got it. can u put everything we need to do before the workshop into one detailed checklist? wanna share it with the rest of the team so we dont miss anything.\n\ninclude deadlines, who’s responsible for what, equipment, accessibility, participant emails, backup plans etc. also point out anything that could mess up our schedule.\n\nno need to go over the budget or workshop timings again, we already sorted those out.",
  "assistantBlocks": [
   {
    "type": "paragraph",
    "text": "Yep — here’s a single shareable checklist with the dependencies cleaned up so the dates don’t contradict each other."
   },
   {
    "type": "heading",
    "text": "Creative Coding Workshop — Pre-Workshop Checklist"
   },
   {
    "type": "paragraph",
    "text": "Event date: 4 December 2026\nCapacity: 24 students\nFormat: Beginner-friendly p5.js creative coding workshop"
   },
   {
    "type": "heading",
    "text": "Team roles"
   },
   {
    "type": "paragraph",
    "text": "Assign one named person to each role. One person can hold multiple roles, but every task below should have a clear owner."
   },
   {
    "type": "paragraph",
    "text": "Event Lead — overall coordination, deadlines, room, Students’ Union contact\nLead Facilitator — workshop content, starter code, slides, teaching\nWorkshop Helper — participant support and technical troubleshooting\nAccessibility / Participant Contact — registration, access requirements, participant emails\nTech / Room Owner — equipment testing, adapters, backup materials"
   },
   {
    "type": "heading",
    "text": "By 6 November — Confirm the people running it"
   },
   {
    "type": "heading",
    "text": "Lead facilitator"
   },
   {
    "type": "list",
    "text": "Event Lead: Confirm the Lead Facilitator."
   },
   {
    "type": "list",
    "text": "Agree that they are available on 4 December."
   },
   {
    "type": "list",
    "text": "Confirm they are comfortable teaching p5.js to complete beginners."
   },
   {
    "type": "list",
    "text": "Confirm who is responsible for preparing the starter sketch and slides."
   },
   {
    "type": "list",
    "text": "Make sure they understand that the session should require no local software installation."
   },
   {
    "type": "heading",
    "text": "Helper"
   },
   {
    "type": "list",
    "text": "Event Lead: Confirm one Workshop Helper if possible."
   },
   {
    "type": "list",
    "text": "Helper should be comfortable with basic JavaScript/p5.js troubleshooting."
   },
   {
    "type": "list",
    "text": "If no helper is available yet, continue recruiting, but do not delay the entire event."
   },
   {
    "type": "heading",
    "text": "Important dependency"
   },
   {
    "type": "paragraph",
    "text": "Do not let facilitator recruitment drift indefinitely."
   },
   {
    "type": "paragraph",
    "text": "If no external/experienced facilitator is confirmed by roughly 9 November, decide who on the organising team will run the workshop as the fallback."
   },
   {
    "type": "heading",
    "text": "6–9 November — Open registration"
   },
   {
    "type": "paragraph",
    "text": "Owner: Accessibility / Participant Contact"
   },
   {
    "type": "list",
    "text": "Create registration form."
   },
   {
    "type": "list",
    "text": "Set capacity to 24 confirmed participants."
   },
   {
    "type": "list",
    "text": "Enable or maintain a waitlist after capacity is reached."
   },
   {
    "type": "list",
    "text": "Collect:"
   },
   {
    "type": "list",
    "text": "name"
   },
   {
    "type": "list",
    "text": "university email"
   },
   {
    "type": "list",
    "text": "whether they can bring/use a laptop"
   },
   {
    "type": "list",
    "text": "optional accessibility/adjustment requirements"
   },
   {
    "type": "list",
    "text": "separate dietary requirements"
   },
   {
    "type": "list",
    "text": "Clearly state that no previous coding experience is required."
   },
   {
    "type": "list",
    "text": "Tell participants they will need access to a laptop and browser."
   },
   {
    "type": "list",
    "text": "State the 20 November priority deadline for accessibility requests."
   },
   {
    "type": "list",
    "text": "Make clear that requests after that date are still welcome, but some adjustments may take longer to arrange."
   },
   {
    "type": "list",
    "text": "Give participants an easy way to cancel their place."
   },
   {
    "type": "heading",
    "text": "Accessibility question"
   },
   {
    "type": "paragraph",
    "text": "Use an optional free-text question asking what adjustments would help the participant take part."
   },
   {
    "type": "paragraph",
    "text": "Do not ask people to disclose a diagnosis unless there is a genuine reason."
   },
   {
    "type": "heading",
    "text": "By 13 November — First complete workshop prototype"
   },
   {
    "type": "paragraph",
    "text": "Owner: Lead Facilitator"
   },
   {
    "type": "paragraph",
    "text": "This does not need to look polished yet. It needs to prove that the workshop works."
   },
   {
    "type": "list",
    "text": "Create the starter p5.js sketch."
   },
   {
    "type": "list",
    "text": "Confirm it opens reliably in a browser."
   },
   {
    "type": "list",
    "text": "Make sure students immediately see a working visual result."
   },
   {
    "type": "list",
    "text": "Avoid requiring GitHub, VS Code, npm, extensions, downloads, or accounts where possible."
   },
   {
    "type": "list",
    "text": "Create the basic guided exercise."
   },
   {
    "type": "list",
    "text": "Create beginner extension tasks."
   },
   {
    "type": "list",
    "text": "Create optional harder extension tasks for faster students."
   },
   {
    "type": "list",
    "text": "Prepare a finished example sketch."
   },
   {
    "type": "list",
    "text": "Test the full path:\nopen link → run sketch → modify something → see result."
   },
   {
    "type": "list",
    "text": "Ask someone other than the facilitator to try the instructions without explanation."
   },
   {
    "type": "heading",
    "text": "Red flag"
   },
   {
    "type": "paragraph",
    "text": "If a beginner cannot get from the starter link to a working sketch in a few minutes, simplify it now."
   },
   {
    "type": "heading",
    "text": "13–20 November — Prepare accessibility and participant materials"
   },
   {
    "type": "paragraph",
    "text": "Owner: Accessibility / Participant Contact + Lead Facilitator"
   },
   {
    "type": "heading",
    "text": "Accessibility"
   },
   {
    "type": "list",
    "text": "Review accessibility responses as they arrive — do not wait until registration closes."
   },
   {
    "type": "list",
    "text": "Contact anyone whose request needs clarification."
   },
   {
    "type": "list",
    "text": "Identify anything requiring university support or advance purchasing."
   },
   {
    "type": "list",
    "text": "Escalate specialist requirements to the relevant university accessibility/disability service where appropriate."
   },
   {
    "type": "list",
    "text": "Make slides high contrast and readable from the back of the room."
   },
   {
    "type": "list",
    "text": "Use sufficiently large text, especially for code examples."
   },
   {
    "type": "list",
    "text": "Do not rely on colour alone to convey meaning."
   },
   {
    "type": "list",
    "text": "Provide written instructions as well as spoken explanations."
   },
   {
    "type": "list",
    "text": "Make digital materials compatible with zoom/magnification."
   },
   {
    "type": "list",
    "text": "Plan seating flexibility for anyone who needs it."
   },
   {
    "type": "list",
    "text": "Keep dietary requirements separate from access requirements."
   },
   {
    "type": "heading",
    "text": "Workshop materials"
   },
   {
    "type": "list",
    "text": "Create one simple workshop landing page/document containing:"
   },
   {
    "type": "list",
    "text": "starter sketch link"
   },
   {
    "type": "list",
    "text": "basic instructions"
   },
   {
    "type": "list",
    "text": "extension activities"
   },
   {
    "type": "list",
    "text": "useful p5.js references"
   },
   {
    "type": "list",
    "text": "Create a short, memorable URL if possible."
   },
   {
    "type": "list",
    "text": "Generate a QR code for the same link."
   },
   {
    "type": "list",
    "text": "Prepare several printed copies of the QR code."
   },
   {
    "type": "list",
    "text": "Prepare a concise cheat sheet for the p5.js functions used in the workshop."
   },
   {
    "type": "heading",
    "text": "By 20 November — Test the room and equipment"
   },
   {
    "type": "paragraph",
    "text": "Owner: Tech / Room Owner"
   },
   {
    "type": "paragraph",
    "text": "Because there is no access to the room before the booking begins on the day, this test is important."
   },
   {
    "type": "paragraph",
    "text": "Test in the actual room if possible."
   },
   {
    "type": "heading",
    "text": "Display"
   },
   {
    "type": "list",
    "text": "Projector/display works."
   },
   {
    "type": "list",
    "text": "Lead laptop can connect to it."
   },
   {
    "type": "list",
    "text": "Check whether the room uses:"
   },
   {
    "type": "list",
    "text": "HDMI"
   },
   {
    "type": "list",
    "text": "USB-C"
   },
   {
    "type": "list",
    "text": "DisplayPort"
   },
   {
    "type": "list",
    "text": "lectern PC"
   },
   {
    "type": "list",
    "text": "wireless presentation system"
   },
   {
    "type": "list",
    "text": "Confirm the required adapter."
   },
   {
    "type": "list",
    "text": "Check that code text is readable from the back of the room."
   },
   {
    "type": "heading",
    "text": "Internet"
   },
   {
    "type": "list",
    "text": "Connect to university Wi-Fi."
   },
   {
    "type": "list",
    "text": "Open the exact p5.js editor/site students will use."
   },
   {
    "type": "list",
    "text": "Run the actual starter sketch."
   },
   {
    "type": "list",
    "text": "Check that university network restrictions do not block required resources."
   },
   {
    "type": "heading",
    "text": "Room"
   },
   {
    "type": "list",
    "text": "Check power socket availability."
   },
   {
    "type": "list",
    "text": "Check whether extension leads are necessary and permitted."
   },
   {
    "type": "list",
    "text": "Check seating/table arrangement for 24 laptops."
   },
   {
    "type": "list",
    "text": "Confirm accessible entrance/routes/seating."
   },
   {
    "type": "list",
    "text": "Locate toilets and any nearby quieter space if relevant."
   },
   {
    "type": "heading",
    "text": "Equipment to have yourselves"
   },
   {
    "type": "list",
    "text": "Lead laptop."
   },
   {
    "type": "list",
    "text": "Lead laptop charger."
   },
   {
    "type": "list",
    "text": "Required display adapter."
   },
   {
    "type": "list",
    "text": "Spare compatible adapter if available."
   },
   {
    "type": "list",
    "text": "Workshop Helper laptop."
   },
   {
    "type": "list",
    "text": "Printed QR codes."
   },
   {
    "type": "list",
    "text": "Offline copy of slides."
   },
   {
    "type": "list",
    "text": "Offline copy of starter code and completed example."
   },
   {
    "type": "list",
    "text": "Extension lead/power strip only if approved and necessary."
   },
   {
    "type": "heading",
    "text": "20 November — Accessibility priority deadline"
   },
   {
    "type": "paragraph",
    "text": "Owner: Accessibility / Participant Contact"
   },
   {
    "type": "list",
    "text": "Review all requests received so far."
   },
   {
    "type": "list",
    "text": "Confirm arrangements with affected participants where appropriate."
   },
   {
    "type": "list",
    "text": "Order/arrange anything requiring lead time."
   },
   {
    "type": "list",
    "text": "Do not reject later requests automatically; this is a planning deadline, not a hard exclusion deadline."
   },
   {
    "type": "heading",
    "text": "Schedule risk"
   },
   {
    "type": "paragraph",
    "text": "Accessibility arrangements that require third-party support, specialist equipment, captioning, interpreting, transport, or room changes can take substantially longer than ordinary workshop preparation."
   },
   {
    "type": "paragraph",
    "text": "Escalate these as soon as they appear."
   },
   {
    "type": "heading",
    "text": "20–27 November — Finish workshop materials"
   },
   {
    "type": "paragraph",
    "text": "Owner: Lead Facilitator"
   },
   {
    "type": "list",
    "text": "Finalise starter sketch."
   },
   {
    "type": "list",
    "text": "Finalise slides."
   },
   {
    "type": "list",
    "text": "Finalise guided exercise."
   },
   {
    "type": "list",
    "text": "Finalise extension challenges."
   },
   {
    "type": "list",
    "text": "Finalise cheat sheet."
   },
   {
    "type": "list",
    "text": "Check all links."
   },
   {
    "type": "list",
    "text": "Make sure nothing depends on the facilitator’s personal account or private files."
   },
   {
    "type": "list",
    "text": "Make backup copies of all materials."
   },
   {
    "type": "list",
    "text": "Share materials with the Workshop Helper."
   },
   {
    "type": "list",
    "text": "Walk the Helper through likely beginner problems."
   },
   {
    "type": "heading",
    "text": "Prepare a “common problems” sheet"
   },
   {
    "type": "paragraph",
    "text": "Include quick fixes for things such as:"
   },
   {
    "type": "list",
    "text": "typo/syntax errors"
   },
   {
    "type": "list",
    "text": "accidentally deleting brackets"
   },
   {
    "type": "list",
    "text": "sketch not running"
   },
   {
    "type": "list",
    "text": "page needing refresh"
   },
   {
    "type": "list",
    "text": "wrong browser tab"
   },
   {
    "type": "list",
    "text": "lost starter code"
   },
   {
    "type": "list",
    "text": "Wi-Fi problems"
   },
   {
    "type": "list",
    "text": "student getting far behind the guided exercise"
   },
   {
    "type": "heading",
    "text": "By 27 November — Close main registration"
   },
   {
    "type": "paragraph",
    "text": "Owner: Accessibility / Participant Contact"
   },
   {
    "type": "list",
    "text": "Close registration if it has not already filled."
   },
   {
    "type": "list",
    "text": "Confirm the 24 participants."
   },
   {
    "type": "list",
    "text": "Maintain a waitlist."
   },
   {
    "type": "list",
    "text": "Contact anyone whose registration information is incomplete."
   },
   {
    "type": "list",
    "text": "Remind confirmed participants to release their place if they can no longer attend."
   },
   {
    "type": "list",
    "text": "Start offering cancelled places to the waitlist promptly."
   },
   {
    "type": "paragraph",
    "text": "Do not overbook on the assumption that people will fail to attend."
   },
   {
    "type": "heading",
    "text": "27–30 November — Final technical check"
   },
   {
    "type": "paragraph",
    "text": "Owner: Tech / Room Owner + Lead Facilitator"
   },
   {
    "type": "list",
    "text": "Re-test every public workshop link."
   },
   {
    "type": "list",
    "text": "Test QR code using a different phone."
   },
   {
    "type": "list",
    "text": "Test starter sketch in at least two common browsers."
   },
   {
    "type": "list",
    "text": "Check presentation works without internet."
   },
   {
    "type": "list",
    "text": "Check starter project exists offline."
   },
   {
    "type": "list",
    "text": "Confirm display adapter is physically available, not merely “somewhere in the department”."
   },
   {
    "type": "list",
    "text": "Confirm Lead Facilitator and Helper still have the event in their calendars."
   },
   {
    "type": "paragraph",
    "text": "If another short room visit is permitted during this period, do a second equipment check."
   },
   {
    "type": "heading",
    "text": "1 December — Send participant information email"
   },
   {
    "type": "paragraph",
    "text": "Owner: Accessibility / Participant Contact"
   },
   {
    "type": "paragraph",
    "text": "Email all confirmed participants with:"
   },
   {
    "type": "list",
    "text": "date and room/location"
   },
   {
    "type": "list",
    "text": "reminder that the session starts promptly"
   },
   {
    "type": "list",
    "text": "request to bring a charged laptop"
   },
   {
    "type": "list",
    "text": "note that no previous coding experience is required"
   },
   {
    "type": "list",
    "text": "workshop link if appropriate"
   },
   {
    "type": "list",
    "text": "reminder to contact organisers with any outstanding accessibility needs"
   },
   {
    "type": "list",
    "text": "reminder to cancel/release their place if they can no longer attend"
   },
   {
    "type": "list",
    "text": "contact details for event-day problems"
   },
   {
    "type": "paragraph",
    "text": "Avoid asking participants to install software in advance unless it becomes absolutely necessary."
   },
   {
    "type": "heading",
    "text": "1–2 December — Full rehearsal"
   },
   {
    "type": "paragraph",
    "text": "Owner: Lead Facilitator + Workshop Helper"
   },
   {
    "type": "paragraph",
    "text": "Run through the workshop using the actual materials."
   },
   {
    "type": "list",
    "text": "Open the workshop from the same link students will receive."
   },
   {
    "type": "list",
    "text": "Start from the untouched starter sketch."
   },
   {
    "type": "list",
    "text": "Follow the instructions exactly as written."
   },
   {
    "type": "list",
    "text": "Check that a beginner can reasonably keep up."
   },
   {
    "type": "list",
    "text": "Deliberately introduce a few common code errors and practise recovering from them."
   },
   {
    "type": "list",
    "text": "Confirm the Helper understands where to intervene."
   },
   {
    "type": "list",
    "text": "Identify anything that should be removed rather than explained."
   },
   {
    "type": "list",
    "text": "Freeze the core starter code after rehearsal unless there is a genuine bug."
   },
   {
    "type": "heading",
    "text": "Important"
   },
   {
    "type": "paragraph",
    "text": "Do not make major content changes on 3–4 December unless something is actually broken."
   },
   {
    "type": "paragraph",
    "text": "Last-minute “improvements” are a common source of broken links and mismatched slides/code."
   },
   {
    "type": "heading",
    "text": "3 December — Final confirmation"
   },
   {
    "type": "paragraph",
    "text": "Owner: Event Lead"
   },
   {
    "type": "list",
    "text": "Check facilitator attendance."
   },
   {
    "type": "list",
    "text": "Check helper attendance."
   },
   {
    "type": "list",
    "text": "Confirm room booking is still valid."
   },
   {
    "type": "list",
    "text": "Confirm participant list."
   },
   {
    "type": "list",
    "text": "Check accessibility arrangements."
   },
   {
    "type": "list",
    "text": "Charge all organiser laptops."
   },
   {
    "type": "list",
    "text": "Pack adapters and chargers."
   },
   {
    "type": "list",
    "text": "Download all offline backups."
   },
   {
    "type": "list",
    "text": "Print QR codes/materials."
   },
   {
    "type": "list",
    "text": "Make participant contact list accessible to the appropriate organiser."
   },
   {
    "type": "list",
    "text": "Check for any last-minute cancellations and offer places to waitlisted students where practical."
   },
   {
    "type": "heading",
    "text": "Backup plans"
   },
   {
    "type": "heading",
    "text": "If the university Wi-Fi fails"
   },
   {
    "type": "paragraph",
    "text": "Owner: Lead Facilitator / Tech Owner"
   },
   {
    "type": "list",
    "text": "Keep slides locally."
   },
   {
    "type": "list",
    "text": "Keep starter code locally."
   },
   {
    "type": "list",
    "text": "Keep completed examples locally."
   },
   {
    "type": "list",
    "text": "Have downloadable/local p5.js workshop files available if practical."
   },
   {
    "type": "list",
    "text": "Continue explanation/demo from the facilitator’s laptop while connectivity is investigated."
   },
   {
    "type": "heading",
    "text": "If the online editor fails"
   },
   {
    "type": "list",
    "text": "Have a known-working local/offline version of the starter project available."
   },
   {
    "type": "list",
    "text": "Avoid designing exercises that fundamentally depend on cloud features."
   },
   {
    "type": "heading",
    "text": "If the projector fails"
   },
   {
    "type": "list",
    "text": "First try the spare adapter / lectern PC."
   },
   {
    "type": "list",
    "text": "Have slides/materials accessible through the workshop link so students can follow on their own screens."
   },
   {
    "type": "list",
    "text": "Continue with the guided exercise rather than spending a large part of the session debugging AV equipment."
   },
   {
    "type": "heading",
    "text": "If the Lead Facilitator is unavailable"
   },
   {
    "type": "paragraph",
    "text": "Decide this before the final week."
   },
   {
    "type": "list",
    "text": "Identify one named fallback person."
   },
   {
    "type": "list",
    "text": "Give them access to all slides, code, notes and answers."
   },
   {
    "type": "list",
    "text": "The fallback version should use the same starter project but can simplify optional material."
   },
   {
    "type": "heading",
    "text": "If the Helper cancels"
   },
   {
    "type": "list",
    "text": "Workshop still goes ahead."
   },
   {
    "type": "list",
    "text": "Encourage students to work with neighbours."
   },
   {
    "type": "list",
    "text": "Use the starter code and structured extensions rather than open-ended debugging."
   },
   {
    "type": "list",
    "text": "Event organisers handle logistical issues so the Lead Facilitator can concentrate on teaching."
   },
   {
    "type": "heading",
    "text": "If several students have laptop problems"
   },
   {
    "type": "list",
    "text": "Encourage pairs temporarily."
   },
   {
    "type": "list",
    "text": "Have at least one organiser laptop available if possible."
   },
   {
    "type": "list",
    "text": "Avoid promising one spare laptop per participant unless the university has explicitly arranged this."
   },
   {
    "type": "heading",
    "text": "If more than 24 people turn up"
   },
   {
    "type": "list",
    "text": "Prioritise confirmed registrations."
   },
   {
    "type": "list",
    "text": "Do not silently convert a 24-person workshop into a much larger session."
   },
   {
    "type": "list",
    "text": "Allow extras only if the room capacity, equipment and facilitator workload genuinely permit it."
   },
   {
    "type": "heading",
    "text": "Things most likely to derail the schedule"
   },
   {
    "type": "heading",
    "text": "1. No confirmed facilitator"
   },
   {
    "type": "paragraph",
    "text": "This is the first critical dependency."
   },
   {
    "type": "paragraph",
    "text": "Decision point: 9 November.\nIf nobody external is confirmed, activate an internal fallback rather than continually postponing preparation."
   },
   {
    "type": "heading",
    "text": "2. Starter project becomes too ambitious"
   },
   {
    "type": "paragraph",
    "text": "The project should be designed for complete beginners."
   },
   {
    "type": "paragraph",
    "text": "If the facilitator keeps adding JavaScript concepts, cut features rather than adding teaching time."
   },
   {
    "type": "heading",
    "text": "3. Accessibility request discovered late"
   },
   {
    "type": "paragraph",
    "text": "Check registration responses continuously."
   },
   {
    "type": "paragraph",
    "text": "Do not wait for the registration closing date."
   },
   {
    "type": "heading",
    "text": "4. Room technology has not been tested"
   },
   {
    "type": "paragraph",
    "text": "Because organisers cannot enter early on the day, a projector/network problem immediately consumes workshop time."
   },
   {
    "type": "paragraph",
    "text": "Test the actual setup in advance."
   },
   {
    "type": "heading",
    "text": "5. Students need software installation/accounts"
   },
   {
    "type": "paragraph",
    "text": "This creates 24 separate setup problems."
   },
   {
    "type": "paragraph",
    "text": "Keep the normal route browser-based and link-based."
   },
   {
    "type": "heading",
    "text": "6. Broken links or different versions of starter code"
   },
   {
    "type": "paragraph",
    "text": "Use one canonical workshop link and freeze the final core materials after rehearsal."
   },
   {
    "type": "heading",
    "text": "7. Facilitator becomes the only person who knows how anything works"
   },
   {
    "type": "paragraph",
    "text": "The Helper and at least one organiser should have copies of all materials and know the fallback procedure."
   },
   {
    "type": "heading",
    "text": "8. Registration/no-show management is ignored"
   },
   {
    "type": "paragraph",
    "text": "Maintain the waitlist and make cancellation easy."
   },
   {
    "type": "heading",
    "text": "9. Last-minute content redesign"
   },
   {
    "type": "paragraph",
    "text": "After the rehearsal, fix bugs rather than redesigning the workshop."
   },
   {
    "type": "heading",
    "text": "Final ownership check"
   },
   {
    "type": "paragraph",
    "text": "Before the final week, the Event Lead should be able to answer yes to all of these:"
   },
   {
    "type": "list",
    "text": "We know exactly who is teaching."
   },
   {
    "type": "list",
    "text": "We know who the Helper is."
   },
   {
    "type": "list",
    "text": "Someone owns participant communications."
   },
   {
    "type": "list",
    "text": "Someone owns accessibility arrangements."
   },
   {
    "type": "list",
    "text": "Someone owns room/technical equipment."
   },
   {
    "type": "list",
    "text": "The starter sketch works."
   },
   {
    "type": "list",
    "text": "A beginner has tested the instructions."
   },
   {
    "type": "list",
    "text": "The actual room equipment has been tested."
   },
   {
    "type": "list",
    "text": "Every participant knows what to bring."
   },
   {
    "type": "list",
    "text": "Every important file exists offline."
   },
   {
    "type": "list",
    "text": "We know what happens if the internet, projector, facilitator or Helper fails."
   },
   {
    "type": "paragraph",
    "text": "The main dates I’d treat as genuinely hard internal deadlines are 9 Nov for facilitator/fallback, 13 Nov for a working prototype, 20 Nov for room testing/accessibility planning, and 1–2 Dec for the rehearsal. Everything else has a little more flexibility."
   }
  ]
 },
 {
  "turn": 11,
  "user": "uhh this is way too long lol 😭 can u make it shorter? maybe around 1000-1200 words so the team can actually read it\n\nstill need all the important deadlines, whos doing what, and things that could delay us. just cut the repeated stuff",
  "assistantBlocks": [
   {
    "type": "paragraph",
    "text": "Yeah, the previous version was too operationally detailed. Here’s a tighter version that keeps the decisions and deadlines without repeating every contingency three times."
   },
   {
    "type": "heading",
    "text": "Creative Coding Workshop — Team Checklist"
   },
   {
    "type": "paragraph",
    "text": "Event: p5.js Creative Coding Workshop\nDate: 4 December 2026\nCapacity: 24 students\nAudience: Mostly complete beginners"
   },
   {
    "type": "heading",
    "text": "1. Assign clear owners"
   },
   {
    "type": "paragraph",
    "text": "One person can cover multiple roles, but every area needs a named owner."
   },
   {
    "type": "paragraph",
    "text": "Event Lead"
   },
   {
    "type": "list",
    "text": "Keeps track of deadlines."
   },
   {
    "type": "list",
    "text": "Confirms facilitator/helper."
   },
   {
    "type": "list",
    "text": "Handles room and Students’ Union coordination."
   },
   {
    "type": "paragraph",
    "text": "Lead Facilitator"
   },
   {
    "type": "list",
    "text": "Designs and teaches the workshop."
   },
   {
    "type": "list",
    "text": "Creates starter code, slides and exercises."
   },
   {
    "type": "paragraph",
    "text": "Workshop Helper"
   },
   {
    "type": "list",
    "text": "Supports students during coding."
   },
   {
    "type": "list",
    "text": "Helps troubleshoot basic JavaScript/p5.js problems."
   },
   {
    "type": "paragraph",
    "text": "Participant & Accessibility Contact"
   },
   {
    "type": "list",
    "text": "Manages registration and waitlist."
   },
   {
    "type": "list",
    "text": "Handles participant emails."
   },
   {
    "type": "list",
    "text": "Reviews accessibility and dietary requirements."
   },
   {
    "type": "paragraph",
    "text": "Tech Owner"
   },
   {
    "type": "list",
    "text": "Tests the room and equipment."
   },
   {
    "type": "list",
    "text": "Prepares adapters and offline backups."
   },
   {
    "type": "heading",
    "text": "By 6–9 November — Confirm teaching + open registration"
   },
   {
    "type": "heading",
    "text": "Confirm the Lead Facilitator"
   },
   {
    "type": "paragraph",
    "text": "Owner: Event Lead"
   },
   {
    "type": "paragraph",
    "text": "Ideally confirm the Lead Facilitator by 6 November."
   },
   {
    "type": "paragraph",
    "text": "They should:"
   },
   {
    "type": "list",
    "text": "Be available on 4 December."
   },
   {
    "type": "list",
    "text": "Be comfortable teaching beginner-level p5.js."
   },
   {
    "type": "list",
    "text": "Agree to prepare the starter code and teaching materials."
   },
   {
    "type": "list",
    "text": "Understand that the workshop should be browser-based with minimal setup."
   },
   {
    "type": "paragraph",
    "text": "Also try to confirm one Workshop Helper around this time."
   },
   {
    "type": "heading",
    "text": "Important deadline"
   },
   {
    "type": "paragraph",
    "text": "If you still do not have an external or experienced facilitator by 9 November, choose an internal fallback rather than delaying everything else."
   },
   {
    "type": "paragraph",
    "text": "The event should not depend on finding the “perfect” teacher at the last minute."
   },
   {
    "type": "heading",
    "text": "Open registration: 6–9 November"
   },
   {
    "type": "paragraph",
    "text": "Owner: Participant & Accessibility Contact"
   },
   {
    "type": "paragraph",
    "text": "You do not need the finished starter code before opening registration."
   },
   {
    "type": "paragraph",
    "text": "The registration form should collect:"
   },
   {
    "type": "list",
    "text": "Name."
   },
   {
    "type": "list",
    "text": "University email."
   },
   {
    "type": "list",
    "text": "Whether they can bring/use a laptop."
   },
   {
    "type": "list",
    "text": "Optional accessibility/adjustment requirements."
   },
   {
    "type": "list",
    "text": "Dietary requirements separately."
   },
   {
    "type": "paragraph",
    "text": "State clearly that:"
   },
   {
    "type": "list",
    "text": "No previous coding experience is required."
   },
   {
    "type": "list",
    "text": "Participants should bring a laptop."
   },
   {
    "type": "list",
    "text": "There are 24 places."
   },
   {
    "type": "list",
    "text": "A waitlist will be used once places fill."
   },
   {
    "type": "list",
    "text": "Participants should release their place if they can no longer attend."
   },
   {
    "type": "paragraph",
    "text": "Include an optional accessibility question such as:"
   },
   {
    "type": "quote",
    "text": "Do you have any accessibility requirements or adjustments that would help you take part in the workshop?"
   },
   {
    "type": "paragraph",
    "text": "Set 20 November as the priority deadline for access requests, while making clear that later requests are still welcome."
   },
   {
    "type": "heading",
    "text": "By 13 November — Working workshop prototype"
   },
   {
    "type": "paragraph",
    "text": "Owner: Lead Facilitator"
   },
   {
    "type": "paragraph",
    "text": "By this point, the workshop does not need to be polished, but it must actually work."
   },
   {
    "type": "paragraph",
    "text": "Prepare:"
   },
   {
    "type": "list",
    "text": "One working p5.js starter sketch."
   },
   {
    "type": "list",
    "text": "A basic guided exercise."
   },
   {
    "type": "list",
    "text": "A completed example."
   },
   {
    "type": "list",
    "text": "Simple extension tasks for faster students."
   },
   {
    "type": "list",
    "text": "A rough version of the slides/instructions."
   },
   {
    "type": "paragraph",
    "text": "The participant experience should be:"
   },
   {
    "type": "paragraph",
    "text": "open link → run sketch → change something → immediately see a result"
   },
   {
    "type": "paragraph",
    "text": "Avoid anything requiring:"
   },
   {
    "type": "list",
    "text": "VS Code setup."
   },
   {
    "type": "list",
    "text": "Git/GitHub."
   },
   {
    "type": "list",
    "text": "npm."
   },
   {
    "type": "list",
    "text": "Package installation."
   },
   {
    "type": "list",
    "text": "Complicated accounts or logins."
   },
   {
    "type": "paragraph",
    "text": "Have another organiser try the starter instructions without help. If they struggle to get started, simplify them before continuing."
   },
   {
    "type": "heading",
    "text": "13–20 November — Accessibility and workshop materials"
   },
   {
    "type": "paragraph",
    "text": "Owners: Participant Contact + Lead Facilitator"
   },
   {
    "type": "paragraph",
    "text": "Check accessibility responses as they arrive. Do not wait until registration closes."
   },
   {
    "type": "paragraph",
    "text": "If someone requests something requiring university support, specialist equipment, captioning, interpreting or other arrangements, raise it immediately."
   },
   {
    "type": "paragraph",
    "text": "Build basic accessibility into the materials:"
   },
   {
    "type": "list",
    "text": "Large, readable slide text."
   },
   {
    "type": "list",
    "text": "High contrast."
   },
   {
    "type": "list",
    "text": "Do not use colour alone to explain code or instructions."
   },
   {
    "type": "list",
    "text": "Provide written instructions alongside spoken teaching."
   },
   {
    "type": "list",
    "text": "Allow flexible seating where possible."
   },
   {
    "type": "list",
    "text": "Make digital materials easy to zoom."
   },
   {
    "type": "paragraph",
    "text": "Prepare one main workshop link containing:"
   },
   {
    "type": "list",
    "text": "Starter sketch."
   },
   {
    "type": "list",
    "text": "Instructions."
   },
   {
    "type": "list",
    "text": "Extension challenges."
   },
   {
    "type": "list",
    "text": "Useful p5.js resources."
   },
   {
    "type": "paragraph",
    "text": "Also create a QR code linking to the same place."
   },
   {
    "type": "paragraph",
    "text": "Keep everything centred around one canonical link so students do not end up using different versions."
   },
   {
    "type": "heading",
    "text": "By 20 November — Test the actual room"
   },
   {
    "type": "paragraph",
    "text": "Owner: Tech Owner"
   },
   {
    "type": "paragraph",
    "text": "This is particularly important because the team cannot access the room before 2pm on the day."
   },
   {
    "type": "paragraph",
    "text": "Test:"
   },
   {
    "type": "list",
    "text": "Projector/display."
   },
   {
    "type": "list",
    "text": "Lead laptop connection."
   },
   {
    "type": "list",
    "text": "HDMI/USB-C/lectern requirements."
   },
   {
    "type": "list",
    "text": "University Wi-Fi."
   },
   {
    "type": "list",
    "text": "The actual p5.js editor and starter sketch."
   },
   {
    "type": "list",
    "text": "Visibility of code from the back of the room."
   },
   {
    "type": "list",
    "text": "Power socket availability."
   },
   {
    "type": "list",
    "text": "Seating for 24 laptop users."
   },
   {
    "type": "list",
    "text": "Accessible entrance and seating."
   },
   {
    "type": "paragraph",
    "text": "Confirm exactly which adapters are needed and make sure the team actually has them."
   },
   {
    "type": "paragraph",
    "text": "Do not rely on “the room probably has one.”"
   },
   {
    "type": "paragraph",
    "text": "If possible, arrange a second quick check during the final week."
   },
   {
    "type": "heading",
    "text": "20 November — Accessibility priority deadline"
   },
   {
    "type": "paragraph",
    "text": "Owner: Participant & Accessibility Contact"
   },
   {
    "type": "paragraph",
    "text": "Review all access requests received so far."
   },
   {
    "type": "paragraph",
    "text": "By this point:"
   },
   {
    "type": "list",
    "text": "Clarify anything unclear with participants."
   },
   {
    "type": "list",
    "text": "Arrange any requested adjustments."
   },
   {
    "type": "list",
    "text": "Contact relevant university support services if needed."
   },
   {
    "type": "list",
    "text": "Order or obtain anything that requires advance preparation."
   },
   {
    "type": "paragraph",
    "text": "This is a planning deadline, not a cutoff. Continue accepting later requests where possible."
   },
   {
    "type": "heading",
    "text": "20–27 November — Finalise workshop materials"
   },
   {
    "type": "paragraph",
    "text": "Owner: Lead Facilitator"
   },
   {
    "type": "paragraph",
    "text": "Finish:"
   },
   {
    "type": "list",
    "text": "Starter code."
   },
   {
    "type": "list",
    "text": "Slides."
   },
   {
    "type": "list",
    "text": "Guided exercise."
   },
   {
    "type": "list",
    "text": "Extension challenges."
   },
   {
    "type": "list",
    "text": "Short p5.js cheat sheet."
   },
   {
    "type": "list",
    "text": "Completed example."
   },
   {
    "type": "paragraph",
    "text": "Give all materials to the Workshop Helper as well."
   },
   {
    "type": "paragraph",
    "text": "Prepare a short list of likely beginner problems and fixes, for example:"
   },
   {
    "type": "list",
    "text": "Syntax error."
   },
   {
    "type": "list",
    "text": "Missing bracket."
   },
   {
    "type": "list",
    "text": "Sketch stops running."
   },
   {
    "type": "list",
    "text": "Student accidentally deletes starter code."
   },
   {
    "type": "list",
    "text": "Browser or Wi-Fi problem."
   },
   {
    "type": "list",
    "text": "Student falls behind."
   },
   {
    "type": "paragraph",
    "text": "Keep the workshop content deliberately narrow. If the material starts growing, remove concepts rather than increasing complexity."
   },
   {
    "type": "heading",
    "text": "By 27 November — Close registration"
   },
   {
    "type": "paragraph",
    "text": "Owner: Participant & Accessibility Contact"
   },
   {
    "type": "paragraph",
    "text": "Close the main registration around 27 November, unless all 24 places fill earlier."
   },
   {
    "type": "paragraph",
    "text": "Then:"
   },
   {
    "type": "list",
    "text": "Confirm the final participant list."
   },
   {
    "type": "list",
    "text": "Maintain the waitlist."
   },
   {
    "type": "list",
    "text": "Contact anyone with missing information."
   },
   {
    "type": "list",
    "text": "Remind participants to cancel if they can no longer attend."
   },
   {
    "type": "list",
    "text": "Offer cancelled places to the waitlist."
   },
   {
    "type": "paragraph",
    "text": "Do not intentionally overbook assuming some people will fail to turn up."
   },
   {
    "type": "heading",
    "text": "27–30 November — Final technical check"
   },
   {
    "type": "paragraph",
    "text": "Owners: Tech Owner + Lead Facilitator"
   },
   {
    "type": "paragraph",
    "text": "Test the exact materials students will use."
   },
   {
    "type": "paragraph",
    "text": "Check:"
   },
   {
    "type": "list",
    "text": "All links still work."
   },
   {
    "type": "list",
    "text": "QR code works."
   },
   {
    "type": "list",
    "text": "Starter sketch works in common browsers."
   },
   {
    "type": "list",
    "text": "Slides work offline."
   },
   {
    "type": "list",
    "text": "Starter code and completed example are saved offline."
   },
   {
    "type": "list",
    "text": "Required adapters are physically available."
   },
   {
    "type": "paragraph",
    "text": "Avoid making unnecessary changes after this point."
   },
   {
    "type": "heading",
    "text": "1 December — Participant email"
   },
   {
    "type": "paragraph",
    "text": "Owner: Participant & Accessibility Contact"
   },
   {
    "type": "paragraph",
    "text": "Send confirmed participants one final email containing:"
   },
   {
    "type": "list",
    "text": "Date and room."
   },
   {
    "type": "list",
    "text": "Reminder that the workshop starts promptly."
   },
   {
    "type": "list",
    "text": "Bring a charged laptop."
   },
   {
    "type": "list",
    "text": "No previous coding experience required."
   },
   {
    "type": "list",
    "text": "Workshop link, if appropriate."
   },
   {
    "type": "list",
    "text": "How to contact the team about outstanding access requirements."
   },
   {
    "type": "list",
    "text": "How to cancel their place."
   },
   {
    "type": "paragraph",
    "text": "Do not suddenly introduce new software-installation requirements in this email."
   },
   {
    "type": "heading",
    "text": "1–2 December — Full rehearsal"
   },
   {
    "type": "paragraph",
    "text": "Owners: Lead Facilitator + Workshop Helper"
   },
   {
    "type": "paragraph",
    "text": "Run through the workshop using the actual slides, links and code."
   },
   {
    "type": "paragraph",
    "text": "Check:"
   },
   {
    "type": "list",
    "text": "Instructions work from the untouched starter sketch."
   },
   {
    "type": "list",
    "text": "The Helper understands the exercises."
   },
   {
    "type": "list",
    "text": "Common coding errors can be resolved quickly."
   },
   {
    "type": "list",
    "text": "The workshop remains beginner-friendly."
   },
   {
    "type": "list",
    "text": "Nothing depends on the facilitator’s private account or files."
   },
   {
    "type": "paragraph",
    "text": "After the rehearsal, freeze the core materials."
   },
   {
    "type": "paragraph",
    "text": "Only fix genuine bugs after this point. Avoid last-minute redesigns."
   },
   {
    "type": "heading",
    "text": "3 December — Final confirmation"
   },
   {
    "type": "paragraph",
    "text": "Owner: Event Lead"
   },
   {
    "type": "paragraph",
    "text": "Confirm:"
   },
   {
    "type": "list",
    "text": "Lead Facilitator attending."
   },
   {
    "type": "list",
    "text": "Helper attending."
   },
   {
    "type": "list",
    "text": "Room booking still correct."
   },
   {
    "type": "list",
    "text": "Participant list ready."
   },
   {
    "type": "list",
    "text": "Accessibility arrangements ready."
   },
   {
    "type": "list",
    "text": "Laptops charged."
   },
   {
    "type": "list",
    "text": "Adapters packed."
   },
   {
    "type": "list",
    "text": "QR codes/materials ready."
   },
   {
    "type": "list",
    "text": "Offline copies of slides and code available."
   },
   {
    "type": "heading",
    "text": "Backup plans"
   },
   {
    "type": "heading",
    "text": "Wi-Fi or p5.js editor fails"
   },
   {
    "type": "paragraph",
    "text": "Keep offline copies of:"
   },
   {
    "type": "list",
    "text": "Slides."
   },
   {
    "type": "list",
    "text": "Starter code."
   },
   {
    "type": "list",
    "text": "Completed examples."
   },
   {
    "type": "paragraph",
    "text": "The facilitator should still be able to demonstrate and teach while the issue is investigated."
   },
   {
    "type": "heading",
    "text": "Projector fails"
   },
   {
    "type": "paragraph",
    "text": "Try the spare adapter or lectern computer first."
   },
   {
    "type": "paragraph",
    "text": "Participants should also have access to the workshop materials on their own screens."
   },
   {
    "type": "heading",
    "text": "Helper cancels"
   },
   {
    "type": "paragraph",
    "text": "The event can still run with one facilitator."
   },
   {
    "type": "paragraph",
    "text": "Encourage students to help neighbours and keep exercises structured rather than highly open-ended."
   },
   {
    "type": "heading",
    "text": "Facilitator cancels"
   },
   {
    "type": "paragraph",
    "text": "Have one named backup person identified before the final week and give them access to all materials."
   },
   {
    "type": "heading",
    "text": "Student laptop problems"
   },
   {
    "type": "paragraph",
    "text": "Allow temporary pair work. If possible, have one organiser laptop available as an emergency spare."
   },
   {
    "type": "heading",
    "text": "Main schedule risks"
   },
   {
    "type": "paragraph",
    "text": "The things most likely to delay or derail preparation are:"
   },
   {
    "type": "paragraph",
    "text": "1. No facilitator confirmed by 9 November.\nActivate the internal fallback rather than delaying registration and materials."
   },
   {
    "type": "paragraph",
    "text": "2. Starter project becomes too ambitious.\nRemember that most participants are beginners. Cut features instead of adding more teaching."
   },
   {
    "type": "paragraph",
    "text": "3. Accessibility requests are checked too late.\nReview them continuously, not just after registration closes."
   },
   {
    "type": "paragraph",
    "text": "4. Room technology is not tested.\nBecause there is no setup access before the workshop, an AV or Wi-Fi problem at 2pm immediately eats into teaching time."
   },
   {
    "type": "paragraph",
    "text": "5. Students need individual software setup.\nKeep the standard workflow browser-based."
   },
   {
    "type": "paragraph",
    "text": "6. Different versions of links/code start circulating.\nUse one main workshop link and freeze the materials after rehearsal."
   },
   {
    "type": "paragraph",
    "text": "7. Last-minute content changes.\nAfter 1–2 December, fix bugs only."
   },
   {
    "type": "heading",
    "text": "Key deadlines at a glance"
   },
   {
    "type": "paragraph",
    "text": "6–9 Nov: Confirm facilitator/fallback and open registration.\n13 Nov: Working starter project ready.\n20 Nov: Accessibility priority deadline + room/equipment test.\n27 Nov: Registration closes and materials nearly final.\n1 Dec: Final participant email.\n1–2 Dec: Full rehearsal.\n3 Dec: Final equipment/team check.\n4 Dec: Workshop."
   },
   {
    "type": "paragraph",
    "text": "This is the version I’d actually send to the organising team—the longer one is more useful as an internal operations document than something everyone needs to read."
   }
  ]
 }
];