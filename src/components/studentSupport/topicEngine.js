const SOMETHING_ELSE = {
  id: "something-else",
  title: "Something else",
  subtitle: "Share whatever is on your mind.",
};

const byBand = {
  child: [
    { id: "school-hard", title: "School feels a bit hard lately", subtitle: "Lessons, homework or a tough day." },
    { id: "friend-worry", title: "I feel shy with friends", subtitle: "Joining in or feeling left out." },
    { id: "home-feelings", title: "I have big feelings at home", subtitle: "Sad, angry or confused and not sure why." },
    { id: "try-new", title: "I want to feel braver", subtitle: "Trying new things without so much worry." },
  ],
  earlyTeen: [
    { id: "school-stress", title: "School feels stressful lately", subtitle: "Tests, homework and keeping up." },
    { id: "concentrate", title: "I'm finding it hard to concentrate", subtitle: "Mind wandering when you need to focus." },
    { id: "friends", title: "Friendships feel confusing", subtitle: "Fitting in, groups or feeling left out." },
    { id: "personal-early", title: "I want to talk about something personal", subtitle: "A private worry you don't have to name yet." },
  ],
  midTeen: [
    { id: "exam-pressure", title: "There's too much pressure right now", subtitle: "Marks, expectations or comparison." },
    { id: "motivation", title: "I don't feel motivated to study", subtitle: "Starting feels heavy even when you care." },
    { id: "identity", title: "I feel unsure about myself", subtitle: "Confidence, belonging or who you're becoming." },
    { id: "personal-mid", title: "I want to talk about something personal", subtitle: "Home, friends or something you haven't said aloud." },
  ],
  senior: [
    { id: "future", title: "The future feels overwhelming", subtitle: "Boards, college or 'what next'." },
    { id: "burnout", title: "I'm tired of pushing so hard", subtitle: "Exhaustion that rest hasn't quite fixed." },
    { id: "compare", title: "I keep comparing myself to others", subtitle: "Results, social media or classmates." },
    { id: "personal-senior", title: "I want to talk about something personal", subtitle: "A private worry that needs a calm space." },
  ],
  youngAdult: [
    { id: "independence", title: "I'm figuring things out on my own", subtitle: "College, work or new responsibility." },
    { id: "direction", title: "I feel stuck about my next step", subtitle: "Courses, career or what actually fits." },
    { id: "lonely", title: "I feel disconnected lately", subtitle: "Friends, family or starting over somewhere new." },
    { id: "personal-adult", title: "I want to talk about something personal", subtitle: "A worry that deserves unhurried attention." },
  ],
};

const gradeBand = (grade = "") => {
  const g = String(grade).toLowerCase();
  if (/(kg|1|2|3|4|5)\b/.test(g)) return "child";
  if (/(6|7|8)\b/.test(g)) return "earlyTeen";
  if (/(9|10)\b/.test(g)) return "midTeen";
  if (/(11|12)\b/.test(g)) return "senior";
  if (/(college|ug|pg|univ)/.test(g)) return "youngAdult";
  return null;
};

export const getAgeBand = (age, grade) => {
  const fromGrade = gradeBand(grade);
  if (fromGrade) return fromGrade;
  const n = Number(age);
  if (Number.isFinite(n)) {
    if (n <= 11) return "child";
    if (n <= 14) return "earlyTeen";
    if (n <= 16) return "midTeen";
    if (n <= 18) return "senior";
    return "youngAdult";
  }
  return "midTeen";
};

export const getAgeBasedTopics = (age, grade) => {
  const band = getAgeBand(age, grade);
  return [...byBand[band], SOMETHING_ELSE];
};

export const ensureTopicSet = (topics = [], age, grade) => {
  const cleaned = topics
    .filter((topic) => topic?.title)
    .map((topic, index) => ({
      id: String(topic.id || `topic-${index}`),
      title: topic.title,
      subtitle: topic.subtitle || topic.description || "",
    }));

  const withoutElse = cleaned.filter(
    (topic) => !/something else/i.test(topic.title),
  );
  const fallback = getAgeBasedTopics(age, grade).slice(0, 4);
  const four = (withoutElse.length >= 4 ? withoutElse : fallback).slice(0, 4);
  return [...four, SOMETHING_ELSE];
};
