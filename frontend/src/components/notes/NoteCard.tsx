import { Dispatch, SetStateAction } from 'react';

type NoteCardProps = {
  setNoteSelected: Dispatch<SetStateAction<boolean>>;
  selectedCard: { title: string; body: string };
  setSelectedCard: Dispatch<SetStateAction<{ title: string; body: string }>>;
  setTitleSelected: Dispatch<SetStateAction<string>>;
  setBodySelected: Dispatch<SetStateAction<string>>;
  setTopicSelected: Dispatch<SetStateAction<string>>;
  title: string;
  body: string;
  date: string;
  author: string;
  topic: string;
};

const NoteCard = ({
  setNoteSelected,
  selectedCard,
  setSelectedCard,
  setTitleSelected,
  setBodySelected,
  setTopicSelected,
  title,
  body,
  date,
  author,
  topic,
}: NoteCardProps) => {
  const isSelected = selectedCard.title === title && selectedCard.body === body;

  const handleClick = () => {
    setNoteSelected(true);
    setSelectedCard({ title, body });
    setTitleSelected(title);
    setBodySelected(body);
    setTopicSelected(topic);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full btn min-h-[auto] h-auto rounded-3xl border-none flex flex-col items-start text-start group ${
        isSelected
          ? 'bg-primary text-primary-content dark:bg-primary dark:text-primary-content'
          : 'bg-[#f7f7f7] hover:bg-primary hover:text-primary-content dark:bg-neutral dark:hover:bg-primary'
      }`}
    >
      <div className="card-body items-start text-start px-4 py-7 gap-3">
        <h4 className="card-title xl:text-base font-bold">{title}</h4>
        <p
          className={`xl:text-sm leading-loose font-normal line-clamp-2 mb-1 group-hover:text-primary-content ${
            isSelected ? 'text-primary-content' : 'text-neutral-400 dark:text-base-content'
          }`}
        >
          {body}
        </p>
        <div
          className={`w-full flex justify-between items-center text-xs group-hover:text-primary-content ${
            isSelected ? 'text-primary-content' : 'text-neutral-400'
          }`}
        >
          <span>{date}</span>
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
