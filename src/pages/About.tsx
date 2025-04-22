import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutModel from '@/components/AboutModel';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">About CardioMetrics</h1>
              <p className="text-xl text-gray-600 mb-8">
                Our mission is to revolutionize cardiac care through accessible, AI-powered early risk detection and personalized health insights.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="default" size="lg" className="bg-medical-600 hover:bg-medical-700">
                  <Link to="/prediction">Try Risk Assessment</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#model">Learn About Our Model</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Company Info */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  CardioMetrics was founded in 2022 by a team of cardiologists and AI researchers with a shared vision: to make advanced cardiac risk assessment accessible to everyone.
                </p>
                <p className="text-gray-600 mb-4">
                  After witnessing too many preventable cardiac events, our founders recognized that early detection through AI could save countless lives by identifying risk factors before they lead to critical conditions.
                </p>
                <p className="text-gray-600">
                  Today, our platform combines cutting-edge machine learning with clinical expertise to provide accurate, personalized heart health insights for individuals and healthcare providers alike.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-medical-50 p-6 rounded-lg">
                  <div className="mb-2">
                    <Heart className="h-8 w-8 text-medical-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">50K+</h3>
                  <p className="text-gray-600">Assessments Completed</p>
                </div>
                <div className="bg-medical-50 p-6 rounded-lg">
                  <div className="mb-2">
                    <FileText className="h-8 w-8 text-medical-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">95%</h3>
                  <p className="text-gray-600">Prediction Accuracy</p>
                </div>
                <div className="bg-medical-50 p-6 rounded-lg">
                  <div className="mb-2">
                    <Users className="h-8 w-8 text-medical-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">25+</h3>
                  <p className="text-gray-600">Medical Experts</p>
                </div>
                <div className="bg-medical-50 p-6 rounded-lg">
                  <div className="mb-2">
                    <Heart className="h-8 w-8 text-medical-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">15+</h3>
                  <p className="text-gray-600">Research Publications</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* ML Model */}
        <section id="model" className="py-16 bg-blue-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <AboutModel />
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Check Your Heart Health?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Take our comprehensive assessment to receive your personalized cardiac risk analysis and recommendations.
              </p>
              <Button asChild size="lg" className="bg-medical-600 hover:bg-medical-700">
                <Link to="/prediction">Start Your Assessment Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
