import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { events } from 'data/content';

const customizedContent = ({ status, date }) => {
  return (
    <Card
      title={status}
      subTitle={date}
      className="max-w-lg"
    />
  );
};

export default function TheTimeline() {
  return (
    <Timeline
      value={events}
      align="alternate"
      content={customizedContent}
    />
  );
}
