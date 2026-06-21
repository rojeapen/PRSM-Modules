export interface QuizOption {
  text: string
  correct: boolean
}

export interface QuizDef {
  id: string
  /** Optional pill shown above the question (e.g. "Question 1 of 2"). */
  blockTitle?: string
  question: string
  options: QuizOption[]
  /** Feedback HTML shown after answering. */
  feedback: {
    correct: string
    wrong: string
  }
}

/** Which quiz ids appear on each slide — used to gate the Next button. */
export const slideQuizzes: Record<number, string[]> = {
  1: [],
  2: [],
  3: ['q1', 'q2'],
  4: [],
  5: [],
  6: ['q_mild', 'q_untreated'],
  7: ['q3', 'q4'],
  8: ['q_nurse'],
  9: [],
  10: ['q5'],
  11: ['q6'],
  12: [],
}

export const quizzes: Record<string, QuizDef> = {
  q1: {
    id: 'q1',
    blockTitle: 'Question 1 of 2',
    question: 'Which symptom Anna experienced is the most immediately life-threatening?',
    options: [
      { text: 'A) Red, itchy hives on her skin', correct: false },
      { text: 'B) Her throat closing and difficulty breathing', correct: true },
      { text: 'C) Feeling dizzy and confused', correct: false },
      { text: 'D) Her lips and tongue starting to swell', correct: false },
    ],
    feedback: {
      correct:
        '<strong>Correct!</strong> Airway closure and difficulty breathing is the most immediately fatal symptom. Without air, the body shuts down within minutes.',
      wrong:
        '<strong>Not quite.</strong> The most life-threatening symptom is the throat closing and difficulty breathing. The body can shut down in minutes without air.',
    },
  },
  q2: {
    id: 'q2',
    blockTitle: 'Question 2 of 2',
    question:
      'Anna’s reaction was triggered by peanuts in a granola bar she didn’t know contained peanuts. What does this tell us about severe allergies?',
    options: [
      { text: 'A) She should have read the label more carefully — it’s her own fault.', correct: false },
      {
        text: 'B) Allergens can be hidden in unexpected foods, making allergies hard to avoid even when you’re careful.',
        correct: true,
      },
      { text: 'C) She must not have a very serious allergy if she didn’t notice the peanuts.', correct: false },
      { text: 'D) Granola bars should be banned from school cafeterias.', correct: false },
    ],
    feedback: {
      correct:
        '<strong>Correct!</strong> Allergens can be hidden in processed or mislabeled foods. Even very careful people can be exposed accidentally.',
      wrong:
        '<strong>Not quite.</strong> Allergens are often hidden in unexpected places, including mislabeled foods. It was not Anna\'s fault.',
    },
  },
  q_mild: {
    id: 'q_mild',
    blockTitle: 'Question 1 of 2',
    question:
      'Your friend eats a cookie and shortly after develops some hives on his right arm. They can breathe and speak normally. What is this most likely?',
    options: [
      { text: 'A) Anaphylaxis — use the EpiPen immediately.', correct: false },
      { text: 'B) A mild allergic reaction — symptoms are localized.', correct: true },
      { text: 'C) Nothing to worry about — allergies always go away on their own.', correct: false },
      { text: 'D) Impossible to tell — all allergic reactions are the same.', correct: false },
    ],
    feedback: {
      correct:
        '<strong>Correct!</strong> Localized symptoms with no breathing difficulty point to a mild allergic reaction. However, you must stay vigilant in case additional symptoms appear. Anaphylaxis involves multiple body systems, especially the airway.',
      wrong:
        '<strong>Not quite.</strong> A mild reaction affects one area and does not involve breathing difficulty. Anaphylaxis would show symptoms across multiple systems, including the airway.',
    },
  },
  q_untreated: {
    id: 'q_untreated',
    blockTitle: 'Question 2 of 2',
    question: 'Why is it so dangerous to wait and see if anaphylaxis improves on its own?',
    options: [
      { text: 'A) It probably will improve — most reactions are not that serious.', correct: false },
      { text: 'B) Waiting is fine as long as you give Benadryl right away.', correct: false },
      {
        text: 'C) The airway can swell shut and blood pressure can collapse within 15–30 minutes, leading to death.',
        correct: true,
      },
      { text: 'D) It makes it harder for doctors to know what triggered the reaction.', correct: false },
    ],
    feedback: {
      correct:
        '<strong>Correct!</strong> Without epinephrine, the airway can swell shut and blood pressure can collapse. Anaphylaxis will not improve on its own and can be fatal within 15-30 minutes.',
      wrong:
        '<strong>Not quite.</strong> Anaphylaxis does not get better on its own. Without epinephrine, the airway can swell shut and death can occur within 15-30 minutes. Benadryl is far too slow and does not treat the airway.',
    },
  },
  q3: {
    id: 'q3',
    blockTitle: 'Question 1 of 2',
    question:
      'Your classmate just got stung by a bee. Which combination of symptoms would make you treat it as anaphylaxis?',
    options: [
      { text: 'A) The sting hurts and there’s a small red mark around it.', correct: false },
      { text: 'B) They say their arm feels sore and warm.', correct: false },
      { text: 'C) They develop hives across their chest AND are struggling to breathe.', correct: true },
      { text: 'D) They feel nervous and their heart is beating fast from the scare.', correct: false },
    ],
    feedback: {
      correct:
        '<strong>Correct!</strong> Anaphylaxis involves multiple body systems at once. Hives (skin) combined with breathing difficulty (airways) is a classic red flag.',
      wrong:
        '<strong>Not quite.</strong> The key warning sign is symptoms in multiple body systems simultaneously. Skin reactions AND breathing problems together signal anaphylaxis.',
    },
  },
  q4: {
    id: 'q4',
    blockTitle: 'Question 2 of 2',
    question:
      'Anaphylaxis affects ________ of the body at once, which is what makes it different from a regular allergic reaction.',
    options: [
      { text: 'A) One specific area', correct: false },
      { text: 'B) Multiple systems', correct: true },
      { text: 'C) Only the respiratory system', correct: false },
      { text: 'D) Only the skin', correct: false },
    ],
    feedback: {
      correct:
        '<strong>Correct!</strong> Anaphylaxis is defined by its impact across multiple body systems, including skin, airways, cardiovascular, and more.',
      wrong:
        '<strong>Not quite.</strong> Anaphylaxis affects multiple body systems simultaneously. That is what distinguishes it from a typical localized allergic reaction.',
    },
  },
  q_nurse: {
    id: 'q_nurse',
    blockTitle: 'Knowledge Check',
    question: 'During a school emergency, where is the FIRST place you should look for an epinephrine auto-injector?',
    options: [
      { text: 'A) The cafeteria, since that is where most reactions happen.', correct: false },
      { text: 'B) The nurse’s office — that is where EAIs are always kept at school.', correct: true },
      { text: 'C) The front office, since the principal keeps medications there.', correct: false },
      { text: 'D) Wait for the person to produce their own EpiPen from their bag.', correct: false },
    ],
    feedback: {
      correct:
        '<strong>Correct!</strong> Every school keeps epinephrine auto-injectors in the nurse\'s office. That is always your first stop in a school emergency. Know where it is before you ever need it.',
      wrong:
        '<strong>Not quite.</strong> EAIs are kept in the nurse\'s office at school. That is always the first place to look. Do not wait for the person to find their own EpiPen if their condition is worsening rapidly.',
    },
  },
  q5: {
    id: 'q5',
    blockTitle: 'Knowledge Check',
    question: 'Anna used her EpiPen and says she feels much better. What should happen next?',
    options: [
      { text: 'A) She should go back to class — the EpiPen fixed the problem.', correct: false },
      { text: 'B) She should call her parents and take the bus home to rest.', correct: false },
      {
        text: 'C) Call 911 — she must go to the hospital even if she feels better, because a second reaction can occur.',
        correct: true,
      },
      { text: 'D) She should take a Benadryl and monitor her symptoms for an hour.', correct: false },
    ],
    feedback: {
      correct:
        '<strong>Correct!</strong> The EpiPen buys time but does not end the reaction. A second wave (biphasic reaction) can happen hours later. Hospital care is always required.',
      wrong:
        '<strong>Not quite.</strong> Even if Anna feels better, she must go to the hospital. The EpiPen wears off in 15-20 minutes, and a second severe reaction can happen hours later.',
    },
  },
  q6: {
    id: 'q6',
    blockTitle: 'Knowledge Check',
    question:
      'You’re the only person near Anna during her reaction and you don’t know how to use her EpiPen. What’s the BEST thing to do?',
    options: [
      { text: 'A) Do nothing — you might make things worse.', correct: false },
      { text: 'B) Yell for help, call 911, and stay with Anna — keep her calm.', correct: true },
      { text: 'C) Run to get help and come back as fast as you can.', correct: false },
      { text: 'D) Search online for how to use the EpiPen.', correct: false },
    ],
    feedback: {
      correct:
        '<strong>Correct!</strong> You do not need to know how to use the EpiPen to make a difference. Staying with Anna, yelling for help, and calling 911 is exactly the right action.',
      wrong:
        '<strong>Not quite.</strong> Never leave someone in anaphylaxis alone since they can lose consciousness. Stay, yell for help loudly, and call 911.',
    },
  },
}
