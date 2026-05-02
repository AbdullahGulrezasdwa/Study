# GL Revision Lab

A single-file GitHub Pages revision app for Year 7 GL assessment practice. It covers the English and Maths topic list, adds generated practice questions, includes timed exam-style sessions, tracks weak topics locally, and has a British-voice spelling game.

Live site: https://AbdullahGulrezasdwa.github.io/Study

## What Is Inside

- Topic dashboard with filters for subject, unit, topic, mode, question count and difficulty.
- PeerJS Topic VS rooms for any subject, unit, topic or mixed dashboard filter.
- Practice modes: multiple choice, type answer, flashcards, match terms, speed round, elimination and timed mixed exam.
- Weak-topic replay using mistakes saved in `localStorage`.
- Generated Maths practice for number, algebra, statistics and geometry topics.
- English practice for reading, vocabulary, grammar, punctuation, fiction, non-fiction, rhetoric, argument, summary, comparison and literature analysis.
- Spelling Lab with custom word lists, browser British voice playback, exact spelling checks, timed solo VS, same-device 2-player VS and optional PeerJS online friend VS.
- No backend, build step, accounts or API key required.

## Topic Coverage

English coverage includes retrieval, inference, vocabulary, spelling in context, choosing the appropriate word, sentence completion, grammar, punctuation, parts of speech, tenses, sentence structure, subject-verb agreement, conjunctions, figurative language, fiction extracts, non-fiction extracts, rhetorical devices, argument, summarising, compare and contrast, author study, character analysis, plot structure, setting and theme.

Maths coverage includes multiples and factors, primes, time calculations, decimal ordering, rounding, fractions, negative numbers, Roman numerals, mixed/improper fractions, fractions/decimals/percentages, percentages of amounts, fractions of amounts, one number as a percentage of another, simplifying ratios, sharing in a ratio, direct proportion, sequences, pattern sequences, simplifying expressions, substitution, equations, averages, pie charts, line graphs, probability, perimeter, angle types, coordinates, area, volume, translations/reflections, missing angles, radius/diameter and circumference.

## GitHub Pages

This project intentionally stays as:

```text
Study/
  index.html
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

The spelling voice uses the browser's built-in `speechSynthesis` API. The app prefers `en-GB` voices when the browser provides them. Voice names vary by device and browser, so the app includes a voice picker and a safe fallback.

Topic VS and online spelling friend VS use PeerJS from a CDN. Topic VS works with any dashboard topic/filter by sending the same generated question set to both players. If PeerJS does not load or a connection fails, all solo practice, exam modes, weak-topic replay and same-device spelling VS still work.

## Privacy

Progress, spelling words, best scores and weak-topic data are stored only in the browser using `localStorage`. Nothing is uploaded by the app.

## Editing

The app is deliberately vanilla HTML, CSS and JavaScript in one file so it is easy to change and deploy. Add new topic practice by editing the topic map and question generators inside `index.html`.
