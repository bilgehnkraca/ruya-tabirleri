export interface DreamSymbol {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  content: {
    introduction: string;
    generalMeaning: string;
    variations: {
      title: string;
      content: string;
    }[];
    religiousMeaning: string;
    psychologicalMeaning: string;
    faqs: {
      question: string;
      answer: string;
    }[];
  };
  relatedSymbols: string[];
}
