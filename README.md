# GL Revision Lab

A single-file GitHub Pages revision app for Year 7 GL assessment practice. It covers the English and Maths topic list, adds generated practice questions, includes original comprehension practice, timed exam-style sessions, weak-topic replay, richer matching games, improved online Topic VS, and a British-voice spelling game.

Live site: https://AbdullahGulrezasdwa.github.io/Study

## What Is Inside

- Topic dashboard with filters for subject, unit, topic, mode, question count and difficulty.
- PeerJS Topic VS rooms for any subject, unit, topic or mixed dashboard filter, with ready checks, synced starts, live timers and host rematches.
- Practice modes: multiple choice, type answer, comprehension lab, flashcards, richer matching, speed round, elimination and timed mixed exam.
- Weak-topic replay using mistakes saved in `localStorage`.
- Missed-question review at the end of a session, with quick replay.
- Generated Maths practice for number, algebra, statistics and geometry topics.
- English practice for reading, comprehension, vocabulary, grammar, punctuation, fiction, non-fiction, rhetoric, argument, summary, comparison and literature analysis.
- Original GL-style comprehension sheets inspired by the structure of the supplied PDFs: one extract at the top with all questions underneath.
- Optional `comprehension-bank.js` data file next to `index.html`; when present it adds 35 original extract sheets with 280 questions automatically.
- Session-level repeat protection so question sets avoid duplicate prompt/answer pairs whenever enough unique items exist.
- Multiple-choice-only questions for prompts that do not work well as typed answers.
- Spelling Lab with custom word lists, browser British voice playback, exact spelling checks, timed solo VS, same-device 2-player VS and optional PeerJS online friend VS.
- No backend, build step, accounts or API key required.

## Topic Coverage

English coverage includes retrieval, inference, vocabulary, comprehension skills, spelling in context, choosing the appropriate word, sentence completion, grammar, punctuation, parts of speech, tenses, sentence structure, subject-verb agreement, conjunctions, figurative language, fiction extracts, non-fiction extracts, rhetorical devices, argument, summarising, compare and contrast, author study, character analysis, plot structure, setting and theme.

Maths coverage includes multiples and factors, primes, time calculations, decimal ordering, rounding, fractions, negative numbers, Roman numerals, mixed/improper fractions, fractions/decimals/percentages, percentages of amounts, fractions of amounts, one number as a percentage of another, simplifying ratios, sharing in a ratio, direct proportion, sequences, pattern sequences, simplifying expressions, substitution, equations, averages, pie charts, line graphs, probability, perimeter, angle types, coordinates, area, volume, translations/reflections, missing angles, radius/diameter and circumference.

## GitHub Pages

This project intentionally stays as:

```text
Study/
  index.html
  comprehension-bank.js
  README.md
```

That means GitHub Pages can host it directly. Open `index.html` locally or publish the repository through GitHub Pages.

## Local Use

No install is required. You can open `index.html` directly in a browser.

For a local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Spelling Voice Notes

The spelling voice uses the browser's built-in `speechSynthesis` API. The app now ranks real UK voices first, including common Edge/Windows voices such as Microsoft Sonia, Ryan, Libby, George and Hazel, plus Google UK English, Daniel and Serena where available. Browsers only expose voices installed on the device, so the app shows how many UK voices it can actually see and falls back safely when none are available.

Topic VS and online spelling friend VS use PeerJS from a CDN. Topic VS works with any dashboard topic/filter by sending the same generated question set to both players. Topic VS now uses a ready lobby, synced match start, 20-second question timers, live friend-answer status and host rematches. If PeerJS does not load or a connection fails, all solo practice, comprehension, exam modes, weak-topic replay and same-device spelling VS still work.

## Privacy

Progress, spelling words, best scores and weak-topic data are stored only in the browser using `localStorage`. Nothing is uploaded by the app.

## Editing

The app is deliberately vanilla HTML, CSS and JavaScript so it is easy to change and deploy. Add new topic practice by editing the topic map and question generators inside `index.html`; add more reading extracts by editing `comprehension-bank.js`.
