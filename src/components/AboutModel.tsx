
import { Progress } from "@/components/ui/progress";

const AboutModel = () => {
  return (
    <div className="glass-card rounded-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold text-white">Our AI Model</h2>
      
      <div className="space-y-4">
        <div>
          <p className="text-gray-300 mb-4">
            Health Oracle uses advanced machine learning algorithms to predict cardiovascular disease risk 
            with high accuracy. Our model has been trained on comprehensive medical datasets and validated 
            by healthcare professionals.
          </p>
          
          <p className="text-gray-300 mb-4">
            The algorithm analyzes various risk factors, including age, gender, blood pressure, 
            cholesterol levels, and lifestyle factors to provide personalized risk assessments.
          </p>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Model Performance</h3>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Accuracy</span>
              <span className="text-white font-medium">90%</span>
            </div>
            <Progress value={92} className="h-2" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Precision</span>
              <span className="text-white font-medium">89%</span>
            </div>
            <Progress value={89} className="h-2" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Recall</span>
              <span className="text-white font-medium">87%</span>
            </div>
            <Progress value={87} className="h-2" />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white">Continuous Improvement</h3>
          <p className="text-gray-300 mt-2">
            Our model undergoes continuous training and improvement as new medical research emerges. 
            We collaborate with leading cardiologists and data scientists to ensure our predictions 
            remain state-of-the-art.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutModel;
