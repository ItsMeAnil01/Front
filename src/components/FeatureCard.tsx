
import { Brain, Clipboard, Heart, HeartPulse, User } from "lucide-react";
import { FeatureCard as FeatureCardType } from "@/lib/types";

const iconMap: Record<string, React.ReactNode> = {
  "Brain": <Brain className="h-6 w-6" />,
  "User": <User className="h-6 w-6" />,
  "HeartPulse": <HeartPulse className="h-6 w-6" />,
  "Clipboard": <Clipboard className="h-6 w-6" />,
  "Heart": <Heart className="h-6 w-6" />,
};

const FeatureCard: React.FC<{ feature: FeatureCardType }> = ({ feature }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-md p-6 transition-all hover:shadow-lg border border-gray-700">
      <div className="h-12 w-12 flex items-center justify-center bg-medical-600/20 rounded-lg text-medical-400 mb-4">
        {iconMap[feature.icon] || <Heart className="h-6 w-6" />}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
      <p className="text-gray-400">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
