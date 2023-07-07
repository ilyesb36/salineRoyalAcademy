import Image from 'next/image';
import style from '../styles/components/CompetitionCard.module.scss';
import fonts from '../styles/fonts.module.scss';
import MedalIcon from '@/public/icons/medal';
import { useEffect, useState } from 'react';

type CompetitionCardProps = {
  instrument: string;
  title: string;
  place: string;
  date: Date;
  award: number;
};

export default function CompetitionCard({
  instrument,
  title,
  place,
  date,
  award,
}: CompetitionCardProps) {
  const [countdown, setCountdown] = useState(''); // Initialiser avec une chaîne vide

  useEffect(() => {
    const calculateCountdown = (date: Date) => {
      const currentDate = new Date();
      const timeDifference = date.getTime() - currentDate.getTime();

      if (timeDifference <= 0) {
        return 'Past';
      }

      const seconds = Math.floor(timeDifference / 1000) % 60;
      const minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
      const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    const updateCountdown = () => {
      const newCountdown = calculateCountdown(date);
      setCountdown(newCountdown);
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={style.competition_card}>
      <div>
        <div className={style.icon}>
          <Image
            src={`/icons/${instrument}.svg`}
            alt="icon instrument"
            height={10}
            width={11}
          />
        </div>
        <span className={fonts.paragraph_semi_bold}>{title}</span>
      </div>
      <div>
        <ul>
          <li>
            <Image src="/icons/ping.svg" alt="icon " height={16} width={16} />
            <span className={fonts.info_regular}>{place}</span>
          </li>
          <li>
            <Image
              src="/icons/calendar.svg"
              alt="icon "
              height={16}
              width={16}
            />
            <span className={fonts.info_regular}>
              {date.toLocaleDateString('en-US')}
            </span>
          </li>
          <li>
            <MedalIcon fill="#000" />
            <span className={fonts.info_regular}>{award}</span>
          </li>
        </ul>
        <div className={style.countdown}>
          <span className={fonts.paragraph_medium}>{countdown}</span>
        </div>
      </div>
    </div>
  );
}
