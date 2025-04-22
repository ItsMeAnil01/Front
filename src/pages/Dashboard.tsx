
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HealthMetricsCard from '@/components/HealthMetricsCard';
import { Card } from '@/components/ui/card';
import { 
  Heart, 
  Activity, 
  Thermometer, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Calendar,
  User
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('heart');

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left sidebar */}
          <div className="md:w-20 bg-gray-800 rounded-xl p-4 flex flex-row md:flex-col items-center justify-start gap-6">
            <button className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-medical-600">
              <User className="h-6 w-6" />
            </button>
            <button 
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${activeTab === 'heart' ? 'bg-medical-600' : 'bg-gray-700 hover:bg-gray-600'}`}
              onClick={() => setActiveTab('heart')}
            >
              <Heart className="h-6 w-6" />
            </button>
            <button 
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${activeTab === 'activity' ? 'bg-medical-600' : 'bg-gray-700 hover:bg-gray-600'}`}
              onClick={() => setActiveTab('activity')}
            >
              <Activity className="h-6 w-6" />
            </button>
            <button 
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${activeTab === 'temperature' ? 'bg-medical-600' : 'bg-gray-700 hover:bg-gray-600'}`}
              onClick={() => setActiveTab('temperature')}
            >
              <Thermometer className="h-6 w-6" />
            </button>
            <button 
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${activeTab === 'history' ? 'bg-medical-600' : 'bg-gray-700 hover:bg-gray-600'}`}
              onClick={() => setActiveTab('history')}
            >
              <Clock className="h-6 w-6" />
            </button>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-1">Overview</h1>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Conditions</h2>
              
              {activeTab === 'heart' && (
                <div className="relative mb-8">
                  <div className="flex justify-center">
                    <img 
                      src="/lovable-uploads/08de06ba-88f8-48a5-8ea2-d321679f514b.png" 
                      alt="Heart Anatomy" 
                      className="max-h-80 object-contain"
                    />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                    <div className="text-white text-sm mb-1">Heart Rate</div>
                    <div className="text-white font-bold text-xl mb-2">120 bpm</div>
                    <div className="w-32 h-10 bg-gray-900 rounded-md">
                      <svg viewBox="0 0 100 30" className="w-full h-full">
                        <path 
                          d="M 0,15 Q 10,5 20,15 T 40,15 T 60,15 T 80,15 T 100,15" 
                          fill="none" 
                          stroke="#0A84FF" 
                          strokeWidth="2" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-medical-500 rounded-full mr-2"></div>
                <h3 className="text-xl font-semibold text-white">My Heart Condition</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <HealthMetricsCard
                  title="Blood Status"
                  value="116/70"
                  chart={
                    <div className="h-12 flex items-center justify-center space-x-1">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div 
                          key={i}
                          className="w-1 bg-gray-600 rounded-full"
                          style={{ 
                            height: `${20 + Math.random() * 30}px`,
                          }}
                        ></div>
                      ))}
                    </div>
                  }
                  highlight="116/70"
                  icon={<Activity />}
                />
                
                <HealthMetricsCard
                  title="Heart Rate"
                  value="120 bpm"
                  chart={
                    <svg viewBox="0 0 100 30" className="w-full h-12">
                      <path 
                        d="M 0,15 Q 5,5 10,15 T 20,10 T 30,20 T 40,5 T 50,15 T 60,10 T 70,15 T 80,5 T 90,15 T 100,10" 
                        fill="none" 
                        stroke="#0A84FF" 
                        strokeWidth="2" 
                      />
                    </svg>
                  }
                  highlight="120 bpm"
                  highlightColor="bg-medical-600"
                  icon={<Heart />}
                />
                
                <HealthMetricsCard
                  title="Blood Count"
                  value="80-90"
                  chart={
                    <svg viewBox="0 0 100 30" className="w-full h-12">
                      <path 
                        d="M 0,15 Q 10,20 20,10 T 40,20 T 60,10 T 80,20 T 100,10" 
                        fill="none" 
                        stroke="#0A84FF" 
                        strokeWidth="2" 
                      />
                    </svg>
                  }
                  highlight="80"
                  icon={<Activity />}
                />
                
                <HealthMetricsCard
                  title="Glucose Level"
                  value="230/ml"
                  chart={
                    <svg viewBox="0 0 100 30" className="w-full h-12">
                      <path 
                        d="M 0,15 Q 10,10 20,20 T 40,10 T 60,20 T 80,10 T 100,20" 
                        fill="none" 
                        stroke="#0A84FF" 
                        strokeWidth="2" 
                      />
                    </svg>
                  }
                  highlight="230"
                  icon={<Activity />}
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-medical-500 rounded-full mr-2"></div>
                  <h3 className="text-xl font-semibold text-white">My Schedule</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-4 mb-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-medical-500 mr-2" />
                  <div className="text-white">
                    <div className="font-semibold">Next Checkup</div>
                    <div className="text-sm text-gray-300">Fri, 24 Mar</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: "Dr. Henzer Jon", time: "20-March-23" },
                    { name: "Dr. Steve Alex", time: "" },
                    { name: "Dr. Johan Frizz", time: "" }
                  ].map((doctor, index) => (
                    <div key={index} className="flex items-center bg-gray-700 rounded-lg p-3">
                      <div className="w-10 h-10 bg-gray-500 rounded-full mr-3"></div>
                      <div className="text-white flex-1">
                        <div className="font-medium">{doctor.name}</div>
                        {doctor.time && (
                          <div className="text-sm text-gray-300">{doctor.time}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="mt-4 w-full py-3 bg-medical-600 hover:bg-medical-700 text-white font-medium rounded-lg flex items-center justify-center">
                  Consult Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
