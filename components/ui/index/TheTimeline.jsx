import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';

const customizedContent = ({ status, date }) => {
  return (
    <Card
      title={status}
      subTitle={date}
      className="max-w-lg"
    />
  );
};

const events = [
  {
    status: 'Registration & Open Submission',
    date: '01 March - 30 March 2021',
  },
  {
    status: 'Desk Evaluation',
    date: '01 April - 30 April 2021',
  },
  {
    status: 'Finalist Announcement',
    date: '02 Mei 2021 ',
  },
  {
    status: 'Grand Final (Online Presentation)',
    date: '19 May 2021',
  },
  {
    status: 'Webinar and Awarding Session',
    date: '20 May 2021',
  },
];

export default function TheTimeline() {
  return (
    <Timeline
      value={events}
      align="alternate"
      content={customizedContent}
    />
  );
}
