interface Course {
  id: number;
  title: string;
  description: string;
  supplements?: Supplement[];
  languages?: string[];
}

interface Supplement {
  label: string;
  link: string;
}
