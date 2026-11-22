// Curated PDFs from the internet, shown in the "Notes" section of a subject.
//
// To add more, append an entry under the exact subject name used in seed.js.
// Rules for every entry:
//   - `url` must be a direct https link that opens a PDF.
//   - Only link to material the author/university published for free public access
//     (open textbooks, university lecture notes, standards bodies). Links open on the
//     original site; the PDF is never copied onto this server.
//   - After editing run `npm run check-pdfs` (tests every link), then `npm run seed`.
//     The seed is safe to repeat: entries are matched by URL and never duplicated.
module.exports = {
  // ---------------- Semester 1 ----------------
  'Calculus and Linear Algebra': [
    {
      title: 'Calculus – Gilbert Strang (MIT OpenCourseWare)',
      description: 'Full calculus textbook by Prof. Gilbert Strang: limits, derivatives, integrals, series and applications.',
      url: 'https://ocw.mit.edu/ans7870/resources/Strang/Edited/Calculus/Calculus.pdf',
      source: 'MIT OpenCourseWare',
    },
    {
      title: 'Linear Algebra – Jim Hefferon (free textbook)',
      description: 'Free undergraduate linear algebra text: Gauss\u2019 method, vector spaces, linear maps, determinants, eigenvalues. Includes exercises.',
      url: 'https://hefferon.net/linearalgebra/book.pdf',
      source: 'Jim Hefferon (CC BY-SA / GFDL)',
    },
  ],
  'Engineering Physics': [
    {
      title: 'Vibrations and Waves – Benjamin Crowell',
      description: 'Oscillations, waves, sound and light. Covers the wave and optics portions of engineering physics.',
      url: 'https://www.lightandmatter.com/vw.pdf',
      source: 'Light and Matter (CC BY-SA)',
    },
    {
      title: 'Light and Matter – Benjamin Crowell',
      description: 'Free physics textbook: optics, electricity, atoms and quantum ideas with worked examples.',
      url: 'https://www.lightandmatter.com/lm.pdf',
      source: 'Light and Matter (CC BY-SA)',
    },
    {
      title: 'Simple Nature – Benjamin Crowell',
      description: 'Calculus-based introduction to mechanics, thermodynamics, electromagnetism and modern physics.',
      url: 'https://www.lightandmatter.com/sn.pdf',
      source: 'Light and Matter (CC BY-SA)',
    },
  ],

  // ---------------- Semester 2 ----------------
  'Data Structures': [
    {
      title: 'Data Structures Using C – Lecture Notes',
      description: 'Lecture notes on data structures in C: arrays, linked lists, stacks, queues, trees, graphs, searching and sorting.',
      url: 'https://cet.edu.in/lecturefiles/280_DS%20Complete.pdf',
      source: 'College of Engineering and Technology, Bhubaneswar',
    },
    {
      title: 'Open Data Structures (C++ edition) – Pat Morin',
      description: 'Free open textbook: lists, hash tables, trees, heaps, graphs and sorting with analysis. Code examples in C++.',
      url: 'https://opendatastructures.org/ods-cpp.pdf',
      source: 'opendatastructures.org (CC BY)',
    },
  ],

  // ---------------- Semester 3 ----------------
  'Operating System': [
    {
      title: 'OSTEP – Introduction to Operating Systems',
      description: 'Opening chapter of Operating Systems: Three Easy Pieces: what an OS does, virtualization, concurrency and persistence.',
      url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/intro.pdf',
      source: 'Arpaci-Dusseau, University of Wisconsin\u2013Madison',
    },
    {
      title: 'OSTEP – CPU Scheduling',
      description: 'Scheduling policies explained: FIFO, SJF, STCF, Round Robin and multi-level feedback queues.',
      url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf',
      source: 'Arpaci-Dusseau, University of Wisconsin\u2013Madison',
    },
    {
      title: 'OSTEP – Paging: Introduction',
      description: 'Virtual memory with paging: address translation, page tables and their costs.',
      url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/vm-paging.pdf',
      source: 'Arpaci-Dusseau, University of Wisconsin\u2013Madison',
    },
  ],
  'Web Technologies': [
    {
      title: 'Eloquent JavaScript – Marijn Haverbeke',
      description: 'Complete free book on JavaScript, the DOM, events, Node.js and building web applications.',
      url: 'https://eloquentjavascript.net/Eloquent_JavaScript.pdf',
      source: 'eloquentjavascript.net (CC BY-NC)',
    },
    {
      title: 'HTML Notes for Professionals',
      description: 'Concise reference to HTML elements, forms, tables, media and accessibility.',
      url: 'https://books.goalkicker.com/HTMLBook/HTMLNotesForProfessionals.pdf',
      source: 'GoalKicker (CC BY-SA)',
    },
    {
      title: 'CSS Notes for Professionals',
      description: 'Concise reference to CSS selectors, the box model, flexbox, grid and responsive design.',
      url: 'https://books.goalkicker.com/CSSBook/CSSNotesForProfessionals.pdf',
      source: 'GoalKicker (CC BY-SA)',
    },
  ],

  // ---------------- Semester 4 ----------------
  'Database Management Systems': [
    {
      title: 'Database System Concepts – Chapter 1: Introduction (7th ed. slides)',
      description: 'Silberschatz, Korth & Sudarshan slides: DBMS purpose, data models, relational model, database design and architecture.',
      url: 'https://www.cs.vassar.edu/_media/courses/cs381-2019/ch1.pdf',
      source: 'Vassar College (slides by Silberschatz, Korth, Sudarshan)',
    },
    {
      title: 'Database System Concepts – Chapter 1: Introduction (5th ed. slides)',
      description: 'Companion slides covering DBMS fundamentals, views of data, database languages and transaction management.',
      url: 'https://www.cs.purdue.edu/homes/bb/cs348/www-S08/slides/ch1.pdf',
      source: 'Purdue University (slides by Silberschatz, Korth, Sudarshan)',
    },
  ],
  'Data Communications and Computer Networks': [
    {
      title: 'Beej\u2019s Guide to Network Programming',
      description: 'Classic free guide to sockets, TCP/UDP, IP addressing and client\u2013server programming in C.',
      url: 'https://beej.us/guide/bgnet/pdf/bgnet_usl_c_1.pdf',
      source: 'Brian \u201cBeej\u201d Hall',
    },
    {
      title: 'RFC 791 – Internet Protocol (IP)',
      description: 'The original IPv4 specification: addressing, fragmentation and datagram format.',
      url: 'https://www.rfc-editor.org/rfc/pdfrfc/rfc791.txt.pdf',
      source: 'RFC Editor (IETF)',
    },
    {
      title: 'RFC 9293 – Transmission Control Protocol (TCP)',
      description: 'The current TCP standard: connection setup, reliability, flow and congestion control.',
      url: 'https://www.rfc-editor.org/rfc/pdfrfc/rfc9293.txt.pdf',
      source: 'RFC Editor (IETF)',
    },
  ],

  // ---------------- Semester 5 ----------------
  'Software Engineering': [
    {
      title: 'SWEBOK Guide v3 – Software Engineering Body of Knowledge',
      description: 'IEEE Computer Society guide covering requirements, design, construction, testing, maintenance and quality.',
      url: 'https://ieeecs-media.computer.org/media/education/swebok/swebok-v3.pdf',
      source: 'IEEE Computer Society',
    },
    {
      title: 'The Scrum Guide (2020)',
      description: 'Official definition of Scrum: roles, events and artifacts for agile software development.',
      url: 'https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf',
      source: 'scrumguides.org (Schwaber & Sutherland)',
    },
  ],
};
