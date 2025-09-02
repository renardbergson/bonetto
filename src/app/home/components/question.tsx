interface QuestionProps {
  question: string;
  answer: string;
}

const Question = ({ question, answer }: QuestionProps) => {
  return (
    <div>
      <h4 className="font-bold">{question}</h4>
      <p className="pt-2 text-base font-extralight">{answer}</p>
    </div>
  );
};

export default Question;
