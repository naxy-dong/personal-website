// Interestin fact(Semester 1). I skipped calc bc by answer 9 question
// Interesting fact(Semester 2). I was late for CSE 301 final exam by 30mins (out of 1 hour 30 minute exam) and barely squeezed an letter grade of A.

// Next available id: 33

const courses = [
  // index: 0 - Fall 2021
  [
    {
      id: 4,
      title: "AMS 310 - Probability Theory",
      description:
        "A survey of data analysis, probability theory, and statistics. Stem and leaf displays, box plots, schematic plots, fitting straight line relationships, discrete and continuous probability distributions, conditional distributions, binomial distribution, normal and t distributions, confidence intervals, and significance tests.",
      languages: ["R"],
    },
    {
      id: 2,
      title: "WRT 102 - Intermediate Writing Workshop",
      description:
        "A study of strategies for extended academic writing assignments including critical analysis, argument or point of view, and multi-source, college-level research essays. Students continue to develop rhetorical awareness, analytical proficiency, and academic research skills.",
      supplements: [
        {
          label: "Digitcation Portfolio",
          link: "https://stonybrook.digication.com/yuxiang-dong-writing-portfolio/home-1",
        },
      ],
    },
    {
      id: 1,
      title: "CSE 215 - Discrete Mathematics",
      description:
        "Introduction to the logical and mathematical foundations of computer science. Topics include functions, relations, and sets; recursion; elementary logic; and mathematical induction and other proof techniques.",
    },
    {
      id: 3,
      title: "AMS 210 - Applied Linear Algebra",
      description:
        "An introduction to the theory and use of vectors and matrices. Matrix theory including systems of linear equations. Theory of Euclidean and abstract vector spaces. Eigenvectors and eigenvalues. Linear transformations.",
    },
    {
      id: 5,
      title: "MUS 119 - Music Theory",
      description:
        "Beginning with the rudiments of music, such as meter, tempo, rhythm, and how to read notes in several clefs, this 'hands on' course goes on to examine how music is organized, covering scales, keys, intervals, chords, form, and style in classical music. Students also compose throughout the semester and sharpen their listening skills through attendance at concerts.",
    },
    {
      id: 6,
      title: "SBU 101 - Introduction to Stony Brook",
      description:
        "A seminar intended to integrate freshman students into the University community by providing information about Stony Brook and a forum for discussion of values, intellectual and social development, and personal as well as institutional expectations. ",
    },
  ],
  // index: 1 - Spring 2022
  [
    {
      id: 7,
      title: "CSE 214 - Data Structures & Algorithms",
      description:
        "An extension of programming methodology to data storage and manipulation on complex data sets. Topics include: programming and applications of data structures; stacks, queues, lists, binary trees, heaps, priority queues, balanced trees and graphs. Recursive programming is heavily utilized. Fundamental sorting and searching algorithms are examined along with informal efficiency comparisons.",
      supplements: [
        {
          label: "HW1 - Person Manager",
          link: "https://github.com/naxy-dong/Data-Structure-2021/tree/main/1.person-manager",
        },
        {
          label: "HW2 - Line Security Manager",
          link: "https://github.com/naxy-dong/Data-Structure-2021/tree/main/2.line-security-manager",
        },
        {
          label: "HW3 - Library Manager",
          link: "https://github.com/naxy-dong/Data-Structure-2021/tree/main/3.library-manager",
        },
        {
          label: "HW4 - Flight Simulator",
          link: "https://github.com/naxy-dong/Data-Structure-2021/tree/main/4.flight-simulator",
        },
      ],
      languages: ["Java"],
    },
    {
      id: 8,
      title: "AMS 301 - Graph Theory & Combinatorics",
      description:
        "An introduction to graph theory and combinatorial analysis. The emphasis is on solving applied problems rather than on theorems and proofs. Techniques used in problem solving include generating functions, recurrence relations, and network flows. This course develops the type of mathematical thinking that is fundamental to computer science and operations research.",
    },
    {
      id: 9,
      title: "PHY 131 & 133 - Physics 1 & Lab",
      description:
        "First part of a two-semester physics sequence for physical-sciences or engineering majors who have a strong mathematics background and are ready for a fast learning pace. It covers mechanics, wave motion, kinetic theory, and thermodynamics.",
    },
    {
      id: 10,
      title: "SBU 102 - Undergraduate College Seminar",
      description: `This course will examine the tools and techniques used for creating animated, textured, 3D models via modeling software. Students in this course will do hands-on exercises using modeling tools and will create their own animated characters using Blender3D.
        
        Topics: 3D Concepts, Using Blender3D, Meshes, Materials, Textures, 3D Animation, Using Models in Games`,
    },
  ],
  // index: 2 - Fall 2022
  [
    {
      id: 11,
      title: "CSE 216 - Programming Abstractions",
      description:
        "Intermediate-level programming concepts and paradigms, including functional programming, object-orientation, basics of type systems, memory management, program and data abstractions, parameter passing, modularity, and parallel programming. Includes weekly recitations, which provide students with experience in the practice of programming in a variety of high-level languages.",
      supplements: [
        {
          label: "HW1 - OCaml",
          link: "https://github.com/naxy-dong/Programming-Abstractions/tree/main/1.OCaml",
        },
        {
          label: "HW2 - Polymorphism & Generics",
          link: "https://github.com/naxy-dong/Programming-Abstractions/tree/main/2.Polymorphism",
        },
        {
          label: "HW3 - Functional Programming",
          link: "https://github.com/naxy-dong/Programming-Abstractions/tree/main/3.functional-programming",
        },
        {
          label: "HW4 - Iterable-BST",
          link: "https://github.com/naxy-dong/Programming-Abstractions/tree/main/4.iterable-BST",
        },
      ],
      languages: ["Java", "Python"],
    },
    {
      id: 12,
      title: "CSE 220 - Systems Fundamentals I",
      description:
        "Introduces systems-level programming concepts using the C language and assembly language, and explores the correspondence of programming constructs in these languages. Topics include internal data representation, basic instructions and control structures, bitwise operations, arithmetic operations, memory management, pointers, function calls and parameter passing, linking and loading. Included is an overview of computer architecture and organization topics, including von Neumann architecture, the memory hierarchy, and basics of pipelining.",
      supplements: [
        {
          label: "HW1 - Bit Manipulation",
          link: "https://github.com/naxy-dong/System-Fundamentals-1/tree/main/1.bit-manipulation",
        },
        {
          label: "HW2 - Encryption & Decryption",
          link: "https://github.com/naxy-dong/System-Fundamentals-1/tree/main/2.encryption-decryption",
        },
        {
          label: "HW3 - Matrix Manipulation",
          link: "https://github.com/naxy-dong/System-Fundamentals-1/tree/main/3.matrix-manipulation",
        },
        {
          label: "HW4 - Social Network",
          link: "https://github.com/naxy-dong/System-Fundamentals-1/tree/main/4.social-network",
        },
      ],
      languages: ["C"],
    },
    {
      id: 13,
      title: "CSE 475(CSE 214 TA) - Teaching Curriculum",
      description: `Teaching Assistant for CSE 214. Duties included 
      •	Prepared recitation materials and taught core data structure concepts in Java to a recitation of 27 students.
      •	Held office hours (5 hours weekly) to assist the students with homework and curriculum.
      •	Prepared and entered homework test cases in the CodeGrade auto-grading system.
      `,
    },
    {
      id: 14,
      title: "PHY 132 & 134 - Physics II & Lab",
      description:
        "Second part of a two-semester physics sequence for physical-sciences or engineering majors who have a strong mathematics background and are ready for a fast learning pace. It covers electromagnetism, electric circuit theory, and optics.",
    },
    {
      id: 32,
      title: "MUS 268: Spirit of Stony Brook Athletic Band",
      description:
        "The study and playing/marching performance of music from the marching and pep band repertoire. The course requires attendance at a preseason marching band camp prior to the beginning of the Fall term (typically one week prior). Attendance at select athletic games and some away games is also required (including some Saturdays and some evenings, outside of course meeting times).",
        supplements: [
          {
            label: "Annual Spring 2022 Concert link",
            link: "https://www.youtube.com/watch?v=BF2vbKMW3os"
          },
        ],
    },
  ],
  // index: 3 - Spring 2023
  [
    {
      id: 15,
      title: "CSE 320 - Systems Fundamentals II",
      description:
        "This course introduces C programming and essential concepts of operating systems, concurrency, and performance analysis, focused around several cross-cutting examples, such as memory management, error handling, and threaded programming. In this course, operating systems concepts are considered from the point of view of the application programmer, and the focus is on APIs for interacting with an operating system.",
      supplements: [
        {
          label: "HW1 - Diff Patch Applier",
          link: "https://github.com/naxy-dong/System-Fundamental-2/tree/main/homework_submission/cse320/hw_feedback/hw1",
        },
        {
          label: "HW2 - Debugging Larry Wall's 1985 patch program.",
          link: "https://github.com/naxy-dong/System-Fundamental-2/tree/main/homework_submission/cse320/hw_feedback/hw2",
        },
        {
          label: "HW3 - Dynamic Memory Allocator",
          link: "https://github.com/naxy-dong/System-Fundamental-2/tree/main/homework_submission/cse320/hw_feedback/hw3",
        },
        {
          label: "HW4 - Crypto Exchange Watcher",
          link: "https://github.com/naxy-dong/System-Fundamental-2/tree/main/homework_submission/cse320/hw_feedback/hw4",
        },
        {
          label: "HW5 - Multithreaded Tic Tac Toe Server",
          link: "https://github.com/naxy-dong/MultiThreaded-Tic-Tac-Toe-Server",
        },
      ],
      languages: ["C"],
    },
    {
      id: 16,
      title: "CSE 310 - Computer Networks",
      description:
        "Overview of computer networks and the Internet. Concept of end systems, access networks, clients and servers. Connection-oriented and connectionless services. Circuit switching and packet switching. Description of Internet protocol layers, including application layer, transport layer, network layer and link layer. Architecture of the current Internet and the World-Wide Web. TCP/IP protocol stack. Internet routing and addressing. Local area network protocols, Ethernet hubs and switches. Wireless LANs. Multimedia networking.",
      supplements: [
        {
          label: "HW1 - DNS resolver implementation",
          link: "https://github.com/naxy-dong/Computer-Networks/tree/main/Dong-Yuxiang-assignment1",
        },
        {
          label: "HW2 - PCAP analysis & Congestion Control",
          link: "https://github.com/naxy-dong/Computer-Networks/tree/main/Dong-Yuxiang-assignment2",
        },
        {
          label: "HW3 - ICMP Ping & ARP analysis",
          link: "https://github.com/naxy-dong/Computer-Networks/tree/main/Dong-Yuxiang-assignment3",
        },
      ],
      languages: ["Python"],
    },
    {
      id: 17,
      title: "VIP 295 - Vertical Integrated Projects",
      description:
        "The goal of this project is to explore engineering design through robotics. Students on this project will work on a range of robotics technology, such as autonomous control, mechanism design, microcontroller programming, and machine learning to establish successful models for implementation in my research. The outcomes will be implemented in a range of classes as well as in SBU and CEWIT Hackathons, workshops for K-12 students, and in informal learning environments, such as Makerspaces, libraries, and STEM museums.",
      supplements: [
        {
          label: "VIP team Website",
          link: "https://www.stonybrook.edu/commcms/vertically-integrated-projects/teams/_team_page/team_page.php?team=Robotics-driven%20Engineering%20Design%20Exploration",
        },
        {
          label: "Project Report",
          link: "https://drive.google.com/file/d/1fEsNDzgb50LCXs9Cv9o3LnqBjDKqGPBm/view?usp=sharing",
        },
      ],
      languages: ["Arduino"],
    },
    {
      id: 18,
      title: "CSE 475(CSE 216 TA) - Teaching Curriculum",
      description: `Teaching Assistant for CSE 216, duties included
      •	Lead two one-hour-long recitations weekly consisting of a total of 57 students and cover topics involving OCaml, Java, and Python.
      •	Hold office hours (3 hours weekly) and conduct review sessions before the exam to ensure student success.
      `,
    },
    {
      id: 19,
      title: "CSE 303 - Theory of Computation",
      description:
        "An introduction to the abstract notions encountered in machine computation. Topics include finite automata, regular expressions, and formal languages, with emphasis on regular and context-free grammars. Questions relating to what can and cannot be done by machines are covered by considering various models of computation, including Turing machines, recursive functions, and universal machines.",
    },
    {
      id: 20,
      title: "CSE 312 - Ethics in Computing",
      description:
        "This course deals with the impact of computers on us as individuals and on our society. Rapid changes in computing technology and in our use of that technology have changed the ways we work, play, and interact with other people. These changes have created a flood of new social, legal and ethical issues that demand critical examination.",
    },
  ],
  // index: 4 - Fall 2023
  [
    {
      id: 21,
      title: "CSE 532 - Theory of Database Systems",
      description:
        "The course will cover advanced topics in modern database systems, including object-oriented databases, rule-based databases, temporal and active databases, parallel and distributed databases, distributed object model, data mining, on-line analytical processing, data warehousing, multimedia databases.",
      supplements: [
        {
          label: "HW1 - Complex SQL queries: NY Collision Patterns",
          link: "https://github.com/naxy-dong/Theory-Of-Database-Systems/tree/main/1.NY-Collision-Patterns",
        },
        {
          label: "HW2 - SQL procedure: Compute Histogram",
          link: "https://github.com/naxy-dong/Theory-Of-Database-Systems/tree/main/2.Compute-Histogram",
        },
        {
          label: "HW3 - Spacial Queries",
          link: "https://github.com/naxy-dong/Theory-Of-Database-Systems/tree/main/3.Spacial-Queries",
        },
        {
          label: "HW4 - Hadoop & Spark: TEDS Data Analysis",
          link: "https://github.com/naxy-dong/Theory-Of-Database-Systems/tree/main/4.TEDS-Data-Analysis",
        },
        {
          label: "HW5 - XQuery: DBLP XML Queries",
          link: "https://github.com/naxy-dong/Theory-Of-Database-Systems/tree/main/5.DBLP-XML-Queries",
        },
      ],
      languages: ["SQL", "Java", "Python"],
    },
    {
      id: 22,
      title: "CSE 316 - Software Development",
      description:
        "Introduction to systematic design, development and testing of software systems, including event-driven and Web programming, information management, databases, principles and practices for secure computing, and version control. Students apply these skills in the construction of large, robust programs.",
      supplements: [
        {
          label: "Project - FakeStackOverflow",
          link: "https://github.com/sbu-ckane-f23-cse316-projectorg/projectfakeso-top-of-the-merning",
        },
      ],
      languages: ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB"],
    },
    {
      id: 23,
      title: "CSE 306 - Operating Systems",
      description:
        "Students are introduced to the structure of modern operating systems. Topics include virtual memory, resource allocation strategies, concurrency, and protection. The design and implementation of a simple operating system are performed. This course focuses on teaching the skills required to design and build modules of an operating system kernel. It covers key algorithms and architectures.",
      supplements: [
        {
          label: "HW1 - System Call",
          link: "https://github.com/naxy-dong/Operating-System/tree/main/1.system-call",
        },
        {
          label: "HW2 - Kernel Data Structure",
          link: "https://github.com/naxy-dong/Operating-System/tree/main/2.kernel-data-structure",
        },
        {
          label: "HW3 - Super Simple Distributed Shared Memory",
          link: "https://github.com/naxy-dong/Operating-System/tree/main/3.s2dsm_p2",
        },
        {
          label: "HW4 - Profiler",
          link: "https://github.com/naxy-dong/Operating-System/tree/main/4.profiler_p2",
        },
        {
          label: "HW5 - Super Simple File System",
          link: "https://github.com/naxy-dong/Operating-System/tree/main/5.s2fs",
        },
      ],
      languages: ["C"],
    },
    {
      id: 24,
      title: "CSE 355 - Computational Geometry",
      description:
        "The design and analysis of efficient algorithms to solve geometric problems that arise in computer graphics, robotics, geographical information systems, manufacturing, and optimization. Topics include convex hulls, triangulation, Voronoi diagrams, visibility, intersection, robot motion planning, and arrangements.",
    },
    {
      id: 25,
      title: "CSE 300 - Technical Communications",
      description:
        "Principles of professional technical communications for Computer Science and Information Systems majors. Topics include writing business communications, user manuals, press releases, literature reviews, and research abstracts. Persuasive oral communications and effective presentation techniques, to address a range of audiences, will also be covered.",
    },
  ],
  // index: 5 - Spring 2024
  [
    {
      id: 26,
      title: "CSE 416 - Software Engineering",
      description:
        "Introduces the basic concepts and modern tools and techniques of software engineering. Emphasizes the development of reliable and maintainable software via system requirements and specifications, software design methodologies including object-oriented design, implementation, integration, and testing; software project management; life-cycle documentation; software maintenance; and consideration of human factor issues.",
    },
    {
      id: 27,
      title: "CSE 487 - Research",
      description:
        "Research assistant for Professor Nick Nikiforakis working on the Content Integrity project. For more info: https://securitee.org/lab.html",
    },
    {
      id: 28,
      title: "CSE 361 - Web Security",
      description:
        "This course will cover all aspects of web security, including browser security, web server security, and web application security. Topics include: SOP and JavaScript; application and protocol vulnerabilities; probing, surveillance, and tracking; penetration testing; modern social engineering techniques; monetary incentives and monetization.",
    },
    {
      id: 29,
      title: "CSE 508 - Network Security",
      description:
        "Principles and practice of Computer Network Security. Cryptography, authentication protocols, public key infrastructures, IP/www/E-commerce security, firewalls, VPN, and intrusion detection.",
    },
    {
      id: 30,
      title: "CSE 373 - Analysis of Algorithms",
      description:
        "Mathematical analysis of a variety of computer algorithms including searching, sorting, matrix multiplication, fast Fourier transform, and graph algorithms. Time and space complexity. Upper-bound, lower- bound, and average-case analysis. Introduction to NP completeness. Some machine computation is required for the implementation and comparison of algorithms.",
    },
    {
      id: 31,
      title: "GEO 102 - The Earth",
      description:
        "A summary of the processes that have shaped the earth and the other terrestrial planets as inferred from study of their surface materials, structural features, and interiors. Topics include the earth in the solar system; earth materials and rock-forming processes; surface processes and their bearing on human activities; crustal deformation and global tectonics; the earth's interior; and the geological features, compositions, and evolution of the terrestrial planets.",
    },
  ],
];

export default courses;
