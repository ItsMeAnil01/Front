
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import { features } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, CheckCircle, Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Features Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Advanced Features</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our platform combines cutting-edge machine learning with medical expertise to provide accurate, personalized heart health insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">How It Works</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Get your personalized heart health assessment in three simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
                <div className="h-16 w-16 bg-medical-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-medical-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">1. Enter Your Health Data</h3>
                <p className="text-gray-400">
                  Provide basic health information and cardiac risk factors through our secure form
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
                <div className="h-16 w-16 bg-medical-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart2 className="h-8 w-8 text-medical-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">2. AI Risk Analysis</h3>
                <p className="text-gray-400">
                  Our machine learning model processes your data using clinically validated algorithms
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
                <div className="h-16 w-16 bg-medical-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-medical-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">3. Get Personalized Insights</h3>
                <p className="text-gray-400">
                  Receive your risk score and actionable recommendations for heart health
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-medical-600 hover:bg-medical-700">
                <Link to="/prediction">
                  Start Your Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
