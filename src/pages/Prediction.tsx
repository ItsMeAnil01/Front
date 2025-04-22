import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PredictionForm from '@/components/PredictionForm';
import { AlertCircle } from 'lucide-react';

const Prediction = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Navbar />
      
      <main className="flex-grow py-10 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Heart Attack Risk Assessment</h1>
              <p className="text-gray-600">
                Complete the form below with your health metrics for an AI-powered cardiac risk analysis
              </p>
            </div>
            
            <div className="bg-blue-100 border border-blue-200 rounded-md p-4 mb-8">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-blue-700 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-medium text-blue-800">Important Information</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      This assessment is for informational purposes only and is not a substitute for professional medical advice or diagnosis. Always consult with a qualified healthcare provider about your health concerns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <PredictionForm />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Prediction;
