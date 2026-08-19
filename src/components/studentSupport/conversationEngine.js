import { isHighRiskMessage } from "./safety";

const listeningOpeners = [
  "Thank you for telling me. You don't have to have the perfect words.",
  "I'm here with you. Let's take this one piece at a time.",
  "That matters. You can say as much or as little as feels okay.",
];

const helpfulClose = {
  text: "Does this feel helpful so far?",
  quickReplies: ["Yes, this helped", "I want to talk more", "Talk to a Counsellor"],
  showHelpfulPrompt: true,
};

const pick = (list, used = []) => {
  const fresh = list.filter((item) => !used.includes(item));
  const pool = fresh.length ? fresh : list;
  return pool[Math.floor(Math.random() * pool.length)];
};

const includesAny = (text, words) =>
  words.some((word) => text.includes(word));

const detectTheme = (text) => {
  const t = text.toLowerCase();
  if (includesAny(t, ["pressure", "exam", "marks", "test", "board", "expectation"])) return "pressure";
  if (includesAny(t, ["tired", "sleep", "exhaust", "burnout", "drained"])) return "tired";
  if (includesAny(t, ["concentrate", "focus", "distract", "attention"])) return "focus";
  if (includesAny(t, ["motivat", "don't feel like study", "dont feel like study", "lazy", "procrastin"])) return "motivation";
  if (includesAny(t, ["friend", "bully", "left out", "lonely", "alone"])) return "social";
  if (includesAny(t, ["parent", "home", "family", "fight", "scold"])) return "family";
  if (includesAny(t, ["future", "college", "career", "what next"])) return "future";
  if (includesAny(t, ["personal", "private", "secret"])) return "personal";
  if (includesAny(t, ["study", "homework", "school", "class"])) return "school";
  return "open";
};

const threads = {
  pressure: {
    explore:
      "Pressure can sit in the body as tightness, rushing thoughts, or a feeling that nothing you do is enough. Which of those feels closest?",
    replies: ["I feel rushed all the time", "Nothing I do feels enough", "I freeze before I start", "I'm not sure"],
    guide:
      "When pressure is high, the kindest first step is often smaller than a full timetable. Try a 15-minute start: one subject, one tiny piece, phone in another room. After that, pause and notice how you feel — not only what you finished.",
  },
  tired: {
    explore:
      "Tiredness isn't always laziness. Sometimes it's too little rest, too much holding-it-together, or a brain that never gets to switch off. What feels most true?",
    replies: ["I'm not sleeping well", "My mind won't switch off", "I'm doing too much", "I don't know"],
    guide:
      "Tonight, protect one small rest ritual: same wind-down time, screens a little earlier, and one sentence in a notebook — 'today was heavy because…'. Rest is part of studying, not the opposite of it.",
  },
  focus: {
    explore:
      "Concentration usually slips for a reason — worry, noise, a task that feels too big, or simply an overloaded day. What gets in the way most?",
    replies: ["My mind keeps wandering", "The work feels too big", "There's too much noise", "I get pulled to my phone"],
    guide:
      "Try a 10–10–2 loop: 10 minutes on one page, 10 slow breaths if you drift, 2 minutes of movement. You are training attention, not forcing it.",
  },
  motivation: {
    explore:
      "That sounds frustrating. Sometimes when studying starts feeling difficult, there's something underneath it — pressure, tiredness, boredom or simply feeling stuck. Which feels closest to what you're experiencing?",
    replies: ["Too much pressure", "I'm tired", "I can't concentrate", "I don't know"],
    guide:
      "Motivation often follows a start, not the other way around. Choose the smallest possible next step — open the book, read one paragraph, write one line. Then decide if you continue. That's enough for today.",
  },
  social: {
    explore:
      "Friendships can quietly shape how safe school feels. Are you missing connection, dealing with conflict, or feeling unseen?",
    replies: ["I feel left out", "There's conflict", "I don't know who to trust", "I just feel lonely"],
    guide:
      "You don't have to fix the whole group. One honest, low-stakes reach-out — a message, sitting with one person, or telling a trusted adult — is often the most human next step.",
  },
  family: {
    explore:
      "Home can be both comfort and pressure. Is it more about arguments, feeling unheard, or carrying things you don't say out loud?",
    replies: ["We argue a lot", "I feel unheard", "I hide how I feel", "It's complicated"],
    guide:
      "You are allowed to need space and still love your family. If a calm talk feels possible, try one feeling + one need: 'I felt [feeling] when [moment]. I need [need].' If it doesn't feel safe, a counsellor can help you hold that.",
  },
  future: {
    explore:
      "The future can feel like a test you haven't been given the paper for. Is it more confusion, comparison, or fear of choosing wrong?",
    replies: ["I don't know what I want", "Everyone else seems ahead", "I'm scared of choosing wrong", "All of it"],
    guide:
      "You don't need a final answer this week. Pick one small experiment: a conversation, a shortlist of 2 options, or one hour exploring a subject you actually like. Direction grows from trying, not from panicking.",
  },
  personal: {
    explore:
      "You don't have to name everything. Would it help to talk about school, home, friendships, or a feeling you can't quite place?",
    replies: ["A feeling I can't name", "Something at school", "Something at home", "I'd rather type it"],
    guide:
      "Whatever it is, you don't have to carry it neatly. Keep sharing in your own words. If you'd like a real person alongside you, a MyPeegu counsellor can walk with you from here.",
  },
  school: {
    explore:
      "School can feel heavy in lots of ways — work, people, or the sense that you should be coping better. What is sitting heaviest today?",
    replies: ["The workload", "How I feel in class", "People around me", "I don't know"],
    guide:
      "Let's shrink today: one class or one task that matters most, then a short break you actually take. Coping is allowed to be ordinary.",
  },
  open: {
    explore:
      "I'm listening. If it helps, you can tell me whether this is more about school, how you're feeling, people around you, or something else entirely.",
    replies: ["School", "How I feel", "People around me", "Something else"],
    guide:
      "You've already done something brave by putting this into words. What would feel like a kind next step for you — a small action, talking more, or reaching a counsellor?",
  },
};

export const buildWelcome = (profile, topicTitle) => {
  const name = profile?.name?.trim();
  const hello = name ? `Hi ${name.split(" ")[0]}. ` : "";
  if (topicTitle && !/something else/i.test(topicTitle)) {
    return `${hello}You chose “${topicTitle}”. I'm here to listen without judgement. What about this has been sitting with you most?`;
  }
  return `${hello}You can share whatever feels comfortable — a thought, a feeling, or just a messy sentence. What's on your mind?`;
};

export const getStatusForTurn = ({ studentText, turn }) => {
  const length = (studentText || "").trim().length;
  if (turn <= 0) return "PIVA is listening...";
  if (length > 140) return "PIVA is reflecting...";
  if (turn >= 2) return "PIVA is preparing a response...";
  return "PIVA is thinking...";
};

export const createReply = ({
  studentText,
  history = [],
  topicTitle = "",
  usedSnippets = [],
}) => {
  if (isHighRiskMessage(studentText)) {
    return { safety: true };
  }

  const theme = detectTheme(`${topicTitle} ${studentText}`);
  const thread = threads[theme] || threads.open;
  const studentTurns = history.filter((m) => m.role === "student").length;
  const lastAssistant = [...history].reverse().find((m) => m.role === "mypeegu")?.text || "";

  if (studentTurns <= 1) {
    const opener = pick(listeningOpeners, usedSnippets);
    return {
      text: `${opener}\n\n${thread.explore}`,
      quickReplies: thread.replies,
      theme,
      snippet: opener,
      showCounsellor: false,
    };
  }

  if (studentTurns === 2) {
    let guide = thread.guide;
    if (guide === lastAssistant) guide = threads.open.guide;
    return {
      text: guide,
      quickReplies: ["That helps", "I want to talk more", "Talk to a Counsellor"],
      theme,
      showCounsellor: true,
    };
  }

  if (/talk to a counsellor/i.test(studentText)) {
    return {
      text: "Sometimes talking to a real person can help too. A MyPeegu counsellor can sit with this alongside you.",
      quickReplies: ["Talk to a MyPeegu Counsellor", "Keep talking here"],
      showCounsellor: true,
    };
  }

  if (/yes, this helped|that helps/i.test(studentText)) {
    return {
      text: "I'm glad this landed. You can come back whenever something feels heavy again — no need to have it all figured out.",
      quickReplies: [],
      showFeedback: true,
    };
  }

  if (/want to talk more/i.test(studentText)) {
    return {
      text: "I'm still here. What part still feels unfinished — the feeling, the situation, or what to do next?",
      quickReplies: ["The feeling", "The situation", "What to do next"],
    };
  }

  return {
    text: helpfulClose.text,
    quickReplies: helpfulClose.quickReplies,
    showHelpfulPrompt: true,
    showCounsellor: true,
  };
};
