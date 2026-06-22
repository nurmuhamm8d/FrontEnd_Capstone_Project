export interface FeedbackItem {
  feedback: string;
  reporter: {
    photoUrl: string;
    name: string;
    citeUrl: string;
  };
}

export const feedbackData: FeedbackItem[] = [
  {
    feedback:
      'Picks up new tools fast and is not afraid to dig into the source of a problem instead of guessing. Good attention to detail in UI work.',
    reporter: {
      photoUrl: '/assets/images/reviewer-1.jpg',
      name: 'Mentor, EPAM Tech Orda',
      citeUrl: 'https://university.epam.com',
    },
  },
  {
    feedback:
      'Reliable teammate, communicates clearly about blockers and always follows up on feedback.',
    reporter: {
      photoUrl: '/assets/images/reviewer-2.jpg',
      name: 'Peer reviewer',
      citeUrl: 'https://github.com/nurmuhamm8d',
    },
  },
];
