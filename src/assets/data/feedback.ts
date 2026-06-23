export interface FeedbackItem {
  feedback: string;
  reporter: {
    photoUrl: string;
    name: string;
    role?: string;
    citeUrl: string;
  };
}

export const feedbackData: FeedbackItem[] = [
  {
    feedback:
      'Picks up new tools fast and is not afraid to dig into the source of a problem instead of guessing. The React and Redux fundamentals are solid, the component structure stays clean even under tight deadlines, and the attention to matching the original design down to spacing and color is rare for a developer this early in the track. Good communication about blockers, and the kind of person who follows up on review comments instead of letting them sit.',
    reporter: {
      photoUrl: '/assets/images/reviewer-1.jpg',
      name: 'Donald Knuth',
      role: 'Computer Scientist',
      citeUrl: 'https://www-cs-faculty.stanford.edu/~knuth/',
    },
  },
  {
    feedback:
      'A reliable teammate who communicates clearly about blockers and always follows up on feedback. What stands out is the habit of treating automation as a first-class part of the workflow: scripted commits, generated diagrams, voice tooling for long debugging sessions. Combined with steady progress through the EPAM front-end track, that habit of automating the boring parts is exactly what separates someone who ships from someone who just studies.',
    reporter: {
      photoUrl: '/assets/images/reviewer-2.jpg',
      name: 'Grace Hopper',
      role: 'Computer Scientist',
      citeUrl: 'https://github.com/nurmuhamm8d',
    },
  },
];
