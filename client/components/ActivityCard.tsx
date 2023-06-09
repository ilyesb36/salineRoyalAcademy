import Image from 'next/image';
import style from '../styles/components/ActivityCard.module.scss';
import fonts from '../styles/fonts.module.scss';

type ActivityCardProps = {
  instrument: string;
  title: string;
  author: string;
  creationDate: Date;
  authorLastMessage: string;
  timeLastMessage: Date;
};

export default function ActivityCard({
  instrument,
  title,
  author,
  creationDate,
  authorLastMessage,
  timeLastMessage,
}: ActivityCardProps) {
  const FormatDate = (date: Date) => {
    return date.toLocaleDateString('fr');
  };

  return (
    <div className={style.activity_card}>
      <div>
        <div className={style.icon}>
          <Image
            src={`/icons/${instrument}.svg`}
            alt="icon instrument"
            height="10"
            width="11"
          />
        </div>
        <span className={fonts.paragraph_semi_bold}>{title}</span>
      </div>
      <p className={fonts.info_regular}>
        {author} · {FormatDate(creationDate)} · {authorLastMessage} replied{' '}
        {FormatDate(timeLastMessage)}
      </p>
      <div className={style.attendees}>
        <div></div>
        <span className={fonts.info_semi_bold}>3 attendees</span>
      </div>
    </div>
  );
}
