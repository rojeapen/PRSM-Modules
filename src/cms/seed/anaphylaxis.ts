import type { ModuleData } from '../types'

// The original hand-built Anaphylaxis module expressed as data. Used to seed
// Firestore and to verify the data-driven player matches the source design.

// Inline SVGs for the EAI-vs-Benadryl comparison table's verdict row.
const CHECK_CELL =
  '<span style="display:inline-flex;align-items:center;gap:7px">' +
  '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" fill="#dcfce7" stroke="#4ade80" stroke-width="1.2"></circle><path d="M5 9.5l3 3 5-6" stroke="#15803d" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>' +
  'Correct treatment for anaphylaxis</span>'
const X_CELL =
  '<span style="display:inline-flex;align-items:center;gap:7px">' +
  '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" style="flex-shrink:0"><circle cx="9" cy="9" r="8" fill="#fef2f2" stroke="#f87171" stroke-width="1.2"></circle><path d="M6 6l6 6M12 6l-6 6" stroke="#dc2626" stroke-width="1.8" stroke-linecap="round"></path></svg>' +
  'Not sufficient — may give false security</span>'

export const anaphylaxisModule: ModuleData = {
  slug: 'anaphylaxis',
  title: 'Anaphylaxis: Know It. Act Fast. Save a Life.',
  subtitle: 'A health training module for school students.',
  credit: 'Presented by PRSM Allergy Foundation',
  status: 'published',
  order: 0,
  screens: [
    // --- Screen 1: Welcome ---
    {
      id: 's1',
      title: 'Welcome',
      elements: [
        { id: 's1-h', type: 'heading', text: 'Welcome!' },
        {
          id: 's1-hero',
          type: 'hero',
          title: 'What Would You Do?',
          bodyHtml:
            'Imagine your friend suddenly can’t breathe after eating lunch. Their face is swelling and they look terrified. Do you know what to do?<br><br>This module will teach you to <strong>recognize a life-threatening allergic reaction</strong> and take the right steps to help. You could save a life.',
        },
        {
          id: 's1-tags',
          type: 'tagRow',
          tags: [
            { iconKey: 'clock', text: '~10 minutes' },
            { iconKey: 'sections', text: '12 sections' },
            { iconKey: 'question-mark', text: 'Knowledge checks' },
          ],
        },
        {
          id: 's1-c',
          type: 'callout',
          color: 'teal',
          title: 'What You’ll Learn',
          bodyHtml:
            'By the end of this module you’ll know how to spot anaphylaxis, what to do immediately, how the EpiPen works, why the hospital is always necessary, and how to support a friend who has a severe allergy.',
        },
      ],
    },

    // --- Screen 2: Meet Anna ---
    {
      id: 's2',
      title: 'Meet Anna',
      elements: [
        { id: 's2-h', type: 'heading', iconKey: 'doc', text: 'Meet Anna' },
        {
          id: 's2-scenario',
          type: 'scenario',
          iconKey: 'person',
          label: 'Anna’s Story',
          bodyHtml:
            'Anna is a 14-year-old student with a known peanut allergy. At lunch, she grabbed what looked like a plain granola bar from the cafeteria line. A few minutes after taking a bite, something felt very wrong.<br><br>Her <em>lips and tongue began to swell</em>. Her <em>throat felt like it was closing</em>. Red, itchy bumps — hives — broke out across her chest and arms. She turned to her friend and whispered, <em>“I can’t breathe… my throat is closing up.”</em><br><br>Her face went pale. She became dizzy and confused. She had an EpiPen in her backpack — prescribed by her doctor for exactly this situation.',
        },
        {
          id: 's2-c',
          type: 'callout',
          color: 'orange',
          title: 'What’s happening to Anna?',
          bodyHtml:
            'Anna is having anaphylaxis — a sudden, severe, life-threatening allergic reaction. Her body is overreacting to the peanut protein in that granola bar. Without fast action, this can become fatal within minutes.',
        },
      ],
    },

    // --- Screen 3: Quick Check ---
    {
      id: 's3',
      title: 'Quick Check: Anna’s Story',
      elements: [
        { id: 's3-h', type: 'heading', iconKey: 'check-circle', text: 'Quick Check: Anna’s Story' },
        {
          id: 's3-c',
          type: 'callout',
          color: 'teal',
          title: 'Think about what you just read',
          bodyHtml:
            'Before we go deeper, let’s make sure the key ideas from Anna’s story landed. Answer both questions below.',
        },
        {
          id: 'q1',
          type: 'quiz',
          gating: true,
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
        { id: 's3-d', type: 'divider' },
        {
          id: 'q2',
          type: 'quiz',
          gating: true,
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
      ],
    },

    // --- Screen 4: What Is Anaphylaxis ---
    {
      id: 's4',
      title: 'What Is Anaphylaxis?',
      elements: [
        { id: 's4-h', type: 'heading', iconKey: 'question-circle', text: 'What Is Anaphylaxis?' },
        {
          id: 's4-p1',
          type: 'text',
          bodyHtml:
            'Anaphylaxis (say it: <strong>an-a-fi-LAX-iss</strong>) is the most serious kind of allergic reaction. It can affect the whole body all at once and can be <strong>fatal within minutes</strong> if not treated.',
        },
        {
          id: 's4-c1',
          type: 'callout',
          color: 'blue',
          title: 'How does it happen?',
          bodyHtml:
            'When someone with a severe allergy is exposed to their trigger (like peanuts, bee stings, or certain medications), their immune system treats it as a dangerous invader and floods the body with chemicals. These chemicals cause the airways to swell, blood pressure to drop, and multiple body systems to shut down rapidly.',
        },
        { id: 's4-p2', type: 'text', bodyHtml: '<strong>Common triggers include:</strong>' },
        {
          id: 's4-list',
          type: 'list',
          ordered: false,
          itemsHtml: [
            'Food allergens — especially <strong>peanuts, tree nuts, shellfish, fish, milk, and eggs</strong>',
            'Insect stings (bees, wasps)',
            'Certain medicines (like penicillin)',
            'Latex (a type of rubber)',
          ],
        },
        {
          id: 's4-c2',
          type: 'callout',
          color: 'red',
          title: 'What happens if anaphylaxis goes untreated?',
          bodyHtml:
            'Without epinephrine, the airway can swell completely shut, blood pressure can collapse, and the heart can stop. Death can occur within <strong>15–30 minutes</strong> of symptom onset. This is not an overreaction — it is a true medical emergency every single time.',
        },
        {
          id: 's4-c3',
          type: 'callout',
          color: 'orange',
          title: 'How fast can it happen?',
          bodyHtml:
            'Symptoms can begin within seconds to minutes of exposure. This is why speed matters more than anything else.',
        },
      ],
    },

    // --- Screen 5: Mild vs Anaphylaxis + Timeline ---
    {
      id: 's5',
      title: 'Mild Reaction vs. Anaphylaxis',
      elements: [
        { id: 's5-h', type: 'heading', iconKey: 'warning-triangle', text: 'Mild Reaction vs. Anaphylaxis' },
        {
          id: 's5-p1',
          type: 'text',
          bodyHtml:
            'Not every allergic reaction is an emergency — but knowing the difference can save a life. <strong>The key is how many body systems are affected, and how fast.</strong>',
        },
        {
          id: 's5-compare',
          type: 'mildCompare',
          left: {
            title: '✓ Mild Allergic Reaction',
            itemsHtml: [
              'Localized hives or itching',
              'Runny nose or sneezing',
              'Watery, itchy eyes',
              'Mild stomach discomfort',
              'Symptoms in <strong>one area only</strong>',
              'No breathing difficulty',
              'Person can speak normally',
            ],
          },
          right: {
            title: '⚠ Anaphylaxis — Emergency!',
            itemsHtml: [
              'Throat tightening or closing',
              'Difficulty breathing or wheezing',
              'Swelling of lips, tongue, or face',
              'Dizziness, fainting, confusion',
              'Symptoms in <strong>multiple body systems</strong>',
              'Rapid or weak pulse',
              'Pale or bluish skin color',
            ],
          },
        },
        {
          id: 's5-c1',
          type: 'callout',
          color: 'orange',
          title: 'The Golden Rule',
          bodyHtml:
            'If someone has trouble breathing AND hives or swelling after eating or being stung — treat it as anaphylaxis. Do NOT wait to see if it gets worse. Acting too early is always safer than acting too late.',
        },
        { id: 's5-p2', type: 'text', bodyHtml: '<strong>What happens if anaphylaxis is left untreated?</strong>' },
        {
          id: 's5-timeline',
          type: 'timeline',
          items: [
            {
              color: '#f59e0b',
              label: '0–2m',
              title: 'Symptoms begin',
              body: 'Hives, swelling, throat tightness, dizziness appear within seconds to 2 minutes of exposure.',
            },
            {
              color: '#f87171',
              label: '5m',
              title: 'Airway narrowing worsens',
              body: 'Throat swelling becomes more severe. Breathing becomes increasingly difficult. Blood pressure starts dropping.',
            },
            {
              color: '#ef4444',
              label: '10–15m',
              title: 'Critical danger zone',
              body: 'Airway may close almost completely. Person may lose consciousness from lack of oxygen or dangerously low blood pressure.',
            },
            {
              color: '#dc2626',
              label: '15–30m',
              title: 'Potentially fatal',
              body: 'Without epinephrine, the body cannot recover on its own. Death from cardiac arrest or oxygen deprivation can occur within 15–30 minutes.',
            },
          ],
        },
        {
          id: 's5-c2',
          type: 'callout',
          color: 'red',
          title: 'The bottom line',
          bodyHtml:
            'Anaphylaxis cannot fix itself. It will not “calm down” without treatment. Every minute without epinephrine matters.',
        },
      ],
    },

    // --- Screen 6: Warning Signs + quizzes ---
    {
      id: 's6',
      title: 'Recognize the Warning Signs',
      elements: [
        { id: 's6-h', type: 'heading', iconKey: 'warning-triangle', text: 'Recognize the Warning Signs' },
        {
          id: 's6-p1',
          type: 'text',
          bodyHtml:
            'Anaphylaxis usually affects <strong>more than one part of the body at the same time</strong>. Look for these signs:',
        },
        {
          id: 's6-grid',
          type: 'symptomGrid',
          cards: [
            { iconKey: 'sym-breathing', title: 'Breathing trouble', subtext: 'Tight throat, wheezing, struggling to breathe' },
            { iconKey: 'sym-lips', title: 'Swollen lips or tongue', subtext: 'Throat closing up, trouble swallowing' },
            { iconKey: 'sym-hives', title: 'Hives or rash', subtext: 'Red, itchy welts suddenly covering the skin' },
            { iconKey: 'sym-dizzy', title: 'Dizziness or confusion', subtext: 'Feeling faint, slurring words, looking pale' },
            { iconKey: 'sym-nausea', title: 'Nausea or vomiting', subtext: 'Sudden stomach pain, cramping, throwing up' },
            { iconKey: 'sym-bluish', title: 'Bluish lips or skin', subtext: 'A sign the body isn’t getting enough oxygen' },
          ],
        },
        {
          id: 's6-c1',
          type: 'callout',
          color: 'orange',
          title: 'Key rule',
          bodyHtml:
            'If someone is having trouble breathing AND has swelling or hives after eating or being stung — treat it as anaphylaxis immediately. Don’t wait to see if it gets worse.',
        },
        { id: 's6-d1', type: 'divider' },
        { id: 's6-h2', type: 'heading', iconKey: 'check-circle', text: 'Quick Check: Mild vs. Anaphylaxis' },
        {
          id: 'q_mild',
          type: 'quiz',
          gating: true,
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
        { id: 's6-d2', type: 'divider' },
        {
          id: 'q_untreated',
          type: 'quiz',
          gating: true,
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
      ],
    },

    // --- Screen 7: Quick Check ---
    {
      id: 's7',
      title: 'Quick Check: Recognizing Anaphylaxis',
      elements: [
        { id: 's7-h', type: 'heading', iconKey: 'check-circle', text: 'Quick Check: Recognizing Anaphylaxis' },
        {
          id: 'q3',
          type: 'quiz',
          gating: true,
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
        { id: 's7-d', type: 'divider' },
        {
          id: 'q4',
          type: 'quiz',
          gating: true,
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
      ],
    },

    // --- Screen 8: Spot. Shot. Dial. ---
    {
      id: 's8',
      title: 'Spot. Shot. Dial.',
      elements: [
        { id: 's8-h', type: 'heading', iconKey: 'alert-circle', text: 'Spot. Shot. Dial.' },
        {
          id: 's8-motto',
          type: 'motto',
          eyebrow: 'Remember this motto',
          pills: [
            { iconKey: 'magnifier', text: 'Spot' },
            { iconKey: 'syringe', text: 'Shot' },
            { iconKey: 'phone', text: 'Dial' },
          ],
          caption: 'Epinephrine first — then call 911. Every second counts.',
        },
        {
          id: 's8-steps',
          type: 'steps',
          items: [
            {
              num: '1',
              title: 'Spot — recognize it fast',
              bodyHtml:
                'Hives + swelling + breathing trouble = anaphylaxis. Don’t wait to be certain. Yell for a teacher or adult immediately: <em>“This is an emergency — someone is having a severe allergic reaction!”</em>',
            },
            {
              num: '2',
              title: 'Shot — give epinephrine first',
              bodyHtml:
                'Use the EpiPen or Auvi-Q right away — <em>before</em> calling 911. This is the most critical action. Do not wait.',
            },
            {
              num: '3',
              title: 'Dial — call 911 immediately after the shot',
              bodyHtml:
                'Point at a specific person: <em>“You — call 911 right now.”</em> Don’t assume someone else will do it.',
            },
            {
              num: '4',
              title: 'Stay with the person — do not leave them alone',
              bodyHtml:
                'Keep them calm. If they feel faint, help them lie flat with legs elevated. If breathing is difficult, let them sit up.',
            },
          ],
        },
        {
          id: 's8-nurse',
          type: 'nurseHighlight',
          iconKey: 'nurse-cross',
          title: 'The Nurse’s Office',
          bodyHtml:
            'Schools keep epinephrine auto-injectors (EAIs) in the <strong>nurse\'s office</strong>. Know exactly where your school nurse\'s office is <em>right now</em> — before you ever need it. Many schools also have trained staff throughout the building who carry EAIs. Ask your teacher today who those people are and where they are located.',
        },
        {
          id: 's8-c',
          type: 'callout',
          color: 'orange',
          title: 'Why shot before dial?',
          bodyHtml:
            'Epinephrine is the only treatment that can stop anaphylaxis. Giving the shot first — even 30 seconds sooner — can be the difference between life and death. 911 is critical, but the shot cannot wait.',
        },
        { id: 's8-d', type: 'divider' },
        {
          id: 'q_nurse',
          type: 'quiz',
          gating: true,
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
      ],
    },

    // --- Screen 9: EAI + video ---
    {
      id: 's9',
      title: 'The Epinephrine Auto-Injector (EAI)',
      elements: [
        { id: 's9-h', type: 'heading', iconKey: 'eai-cross', text: 'The Epinephrine Auto-Injector (EAI)' },
        {
          id: 's9-p1',
          type: 'text',
          bodyHtml:
            'An epinephrine auto-injector is a device that delivers a pre-measured dose of <strong>epinephrine</strong> (also called adrenaline) into the outer thigh. It is the <strong>only first-line treatment for anaphylaxis</strong> — brands include the EpiPen and the Auvi-Q.',
        },
        {
          id: 's9-c1',
          type: 'callout',
          color: 'green',
          title: 'What epinephrine does',
          bodyHtml:
            'It rapidly opens up the airways, reduces swelling, raises blood pressure, and slows the allergic response — buying critical time until emergency services arrive.',
        },
        {
          id: 's9-p2',
          type: 'text',
          bodyHtml: '<strong>EAI (Epinephrine) vs. Antihistamines (like Benadryl):</strong>',
        },
        {
          id: 's9-table',
          type: 'comparisonTable',
          headers: ['EAI (Epinephrine)', 'Antihistamine (Benadryl)'],
          rows: [
            { left: 'Works in <strong>1–2 minutes</strong>', right: 'Works in <strong>30–60 minutes</strong>' },
            {
              left: 'Treats <strong>life-threatening symptoms</strong> — airway swelling, low BP',
              right: 'Only treats <strong>mild symptoms</strong> — hives, sneezing',
            },
            { left: CHECK_CELL, right: X_CELL },
          ],
        },
        {
          id: 's9-c2',
          type: 'callout',
          color: 'red',
          title: 'Never substitute Benadryl for an EAI during anaphylaxis.',
          bodyHtml: 'By the time an antihistamine kicks in, it may be too late. The airway cannot wait 30–60 minutes.',
        },
        {
          id: 's9-video',
          type: 'video',
          provider: 'youtube',
          videoId: 'jP4lkASpEUo',
          label: 'EAI Tutorial',
          introTitle: 'Watch: How to Use an Epinephrine Auto-Injector',
          introText:
            'Watch the full video below to learn how to use an epinephrine auto-injector. You must finish watching it before continuing to the next section.',
          requireWatch: true,
        },
      ],
    },

    // --- Screen 10: Hospital ---
    {
      id: 's10',
      title: 'Why the Hospital — Even After the EpiPen?',
      elements: [
        { id: 's10-h', type: 'heading', iconKey: 'medkit', text: 'Why the Hospital — Even After the EpiPen?' },
        {
          id: 's10-p1',
          type: 'text',
          bodyHtml:
            'The EpiPen helped Anna breathe again. She’s starting to feel better. So… she can just go back to class, right? <strong>Absolutely not.</strong>',
        },
        {
          id: 's10-c1',
          type: 'callout',
          color: 'red',
          title: 'The Biphasic Reaction',
          bodyHtml:
            'A biphasic reaction is a second wave of anaphylaxis that can happen <strong>hours after the first reaction</strong> — even after the EpiPen has been used and the person feels completely fine. It can be as severe or even worse than the first reaction.',
        },
        {
          id: 's10-steps',
          type: 'steps',
          items: [
            {
              num: '1',
              title: 'The EpiPen wears off',
              bodyHtml:
                'Epinephrine lasts only about 15–20 minutes. Without hospital monitoring and further treatment, symptoms can return.',
            },
            {
              num: '2',
              title: 'The hospital can give additional treatment',
              bodyHtml: 'Doctors can provide IV medications, oxygen, and monitoring that aren’t available at school.',
            },
            {
              num: '3',
              title: 'Every case of anaphylaxis requires 911',
              bodyHtml: 'Even if the EpiPen worked. Even if they feel better. No exceptions.',
            },
          ],
        },
        {
          id: 's10-c2',
          type: 'callout',
          color: 'green',
          title: 'The rule is simple:',
          bodyHtml: 'EpiPen → Call 911 → Go to the hospital. Always. Every time.',
        },
        { id: 's10-d', type: 'divider' },
        {
          id: 'q5',
          type: 'quiz',
          gating: true,
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
      ],
    },

    // --- Screen 11: Your Role ---
    {
      id: 's11',
      title: 'Your Role & Supporting Anna',
      elements: [
        { id: 's11-h', type: 'heading', iconKey: 'people', text: 'Your Role & Supporting Anna' },
        {
          id: 's11-p1',
          type: 'text',
          bodyHtml: 'You may not know how to use an EpiPen. That’s okay. <strong>You can still save a life.</strong>',
        },
        {
          id: 's11-c1',
          type: 'callout',
          color: 'blue',
          title: 'The most powerful thing any bystander can do:',
          bodyHtml:
            'Recognize what’s happening, call for help loudly and clearly, and stay with the person so they are not alone.',
        },
        {
          id: 's11-steps',
          type: 'steps',
          items: [
            {
              num: '✓',
              numColor: '#16a34a',
              title: 'Yell for help the moment you suspect anaphylaxis',
              bodyHtml: 'Don’t wait until you’re sure. Acting too early is far safer than acting too late.',
            },
            {
              num: '✓',
              numColor: '#16a34a',
              title: 'Send a specific person for help',
              bodyHtml: 'Point and say: “You — go get a teacher.” Vague requests often go unanswered.',
            },
            {
              num: '✕',
              numColor: '#dc2626',
              title: 'Don’t leave them alone to go get help yourself',
              bodyHtml: 'A person in anaphylaxis can lose consciousness quickly. Never leave them unattended.',
            },
          ],
        },
        { id: 's11-p2', type: 'text', bodyHtml: '<strong>After the emergency — how to support Anna:</strong>' },
        {
          id: 's11-list',
          type: 'list',
          ordered: false,
          itemsHtml: [
            '<strong>Remind her it wasn’t her fault.</strong> The peanuts were mislabeled — she couldn’t have known.',
            '<strong>Don’t gossip or make fun of what happened.</strong> Serious medical events aren’t content for social media.',
            '<strong>Learn about her allergy</strong> so you can help her avoid triggers in the future.',
            '<strong>Ask how she’s doing</strong> — not just right after, but in the days that follow.',
          ],
        },
        {
          id: 's11-c2',
          type: 'callout',
          color: 'purple',
          title: 'Remember',
          bodyHtml:
            'Living with a severe food allergy requires constant alertness. Your understanding and support makes school a safer, less stressful place for classmates like Anna.',
        },
        { id: 's11-d', type: 'divider' },
        {
          id: 'q6',
          type: 'quiz',
          gating: true,
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
      ],
    },

    // --- Screen 12: Completion ---
    {
      id: 's12',
      title: 'You Did It!',
      elements: [
        { id: 's12-h', type: 'heading', iconKey: 'star', text: 'You Did It!' },
        {
          id: 's12-card',
          type: 'completionCard',
          title: 'Module Complete',
          bodyHtml:
            'You now have the knowledge to recognize anaphylaxis and take life-saving action. In an emergency, confident, fast action is the difference between life and death.',
          badges: [
            { iconKey: 'badge-recognizer', text: 'Recognizer' },
            { iconKey: 'badge-responder', text: 'First Responder' },
            { iconKey: 'badge-eai', text: 'EAI Aware' },
            { iconKey: 'badge-ally', text: 'Ally' },
          ],
        },
        {
          id: 's12-survey',
          type: 'survey',
          iconKey: 'clipboard-check',
          promptHtml: '<strong>Take this survey to evaluate your understanding of anaphylaxis.</strong>',
          buttonText: 'Take the Survey →',
          url: 'https://qualtricsxm2kmfvl78w.qualtrics.com/jfe/form/SV_1C7FST4pCZqspts',
        },
        { id: 's12-p', type: 'text', bodyHtml: '<strong>Your key takeaways:</strong>' },
        {
          id: 's12-takeaways',
          type: 'takeaways',
          itemsHtml: [
            '<strong>Spot the signs:</strong> hives + swelling + breathing trouble = anaphylaxis emergency.',
            '<strong>Know the difference:</strong> mild reactions are localized; anaphylaxis hits multiple systems at once and can stop breathing.',
            '<strong>Untreated anaphylaxis is fatal:</strong> death can occur within 15–30 minutes without epinephrine. It will not improve on its own.',
            '<strong>Spot. Shot. Dial:</strong> recognize it fast, give epinephrine first, then call 911. EAIs are kept in the <strong>nurse’s office</strong> — know where it is now.',
            '<strong>Hospital every time:</strong> even after epinephrine works, a second wave can come hours later.',
            '<strong>Be a good friend:</strong> support classmates with allergies with empathy, not stigma.',
          ],
        },
      ],
    },
  ],
}
