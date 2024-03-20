export type TimelineItemProps = {
  id: number;
  dateStart: string;
  dateEnd: string;
  title: string;
  description: string;
  pill?: 'Educacion' | 'Trabajo' | 'Proyecto';
  icon?: string;
};

export type TimelineProps = TimelineItemProps & { index: number };


