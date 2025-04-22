
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HeartPulse, ShieldCheck, PieChart } from 'lucide-react';
import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-medical-100/10 text-medical-400 font-medium text-sm">
              AI-Powered Cardiac Risk Assessment
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Predict Heart Disease Risk with <span className="text-medical-500">Machine Learning</span>
            </h1>
            <p className="text-lg text-gray-300">
              Health Oracle analyze your health data and provide personalized heart attack risk predictions with A-grade accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-medical-600 hover:bg-medical-700">
                <Link to="/prediction">Check Your Risk</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            
            <div className="pt-6">
              <p className="text-sm text-gray-400 mb-3">Created by:</p>
              <div className="flex flex-wrap gap-6">
                <div className="text-gray-500">Anish Rana</div>
                <div className="text-gray-500">Anay Sinha</div>
                <div className="text-gray-500">Anil Kumar</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-medical-600/20 to-medical-500/20 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-gray-800 p-8 rounded-3xl shadow-xl glass-card border border-gray-700">
              <div className="absolute -top-6 -right-6 bg-medical-500 text-white p-4 rounded-2xl shadow-lg group">
                <a href="/chatbot">
                  <svg 
                    className="h-8 w-8 animate-heartbeat group-hover:scale-110 transition-transform" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="#0A84FF" 
                    stroke="#ffffff" 
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-medical-600 text-white px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    S.A.R.A.H
                  </div>
                </a>
              </div>
              
              <h3 className="text-xl font-semibold mb-6 text-white">AI Heart Risk Assessment</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-medical-600/30 p-2 rounded-lg">
                    <ShieldCheck className="h-5 w-5 text-medical-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Implemented heart attack prediction using medical dataset</h4>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-medical-600/30 p-2 rounded-lg">
                    <PieChart className="h-5 w-5 text-medical-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">90% Accuracy</h4>
                    <p className="text-gray-400 text-sm">High precision in risk assessment</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="w-full h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-medical-500 rounded-full animate-pulse-slow" style={{ width: '75%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm mt-1 text-gray-400">
                    <span>Risk Analysis</span>
                    <span>Enhanced Precision</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
