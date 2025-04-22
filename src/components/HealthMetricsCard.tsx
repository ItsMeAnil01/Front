
import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface HealthMetricsCardProps {
  title: string;
  value: string;
  chart: ReactNode;
  highlight: string;
  highlightColor?: string;
  icon: ReactNode;
}

const HealthMetricsCard = ({
  title,
  value,
  chart,
  highlight,
  highlightColor = 'bg-gray-700',
  icon
}: HealthMetricsCardProps) => {
  return (
    <Card className="bg-gray-800/80 border-gray-700 text-white p-4">
      <div className="flex items-start justify-between mb-2">
        <div>
          <div className="text-gray-300 text-sm mb-1">{title}</div>
          <div className="font-bold text-lg">{value}</div>
        </div>
        <div className="h-8 w-8 bg-gray-700 rounded-full flex items-center justify-center text-medical-500">
          {icon}
        </div>
      </div>
      
      <div className="mt-4">
        {chart}
      </div>
      
      <div className={`mt-2 ${highlightColor} rounded-lg w-12 h-12 flex items-center justify-center font-bold`}>
        {highlight.split('/')[0]}
      </div>
    </Card>
  );
};

export default HealthMetricsCard;
