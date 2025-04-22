
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResultCard from '@/components/ResultCard';
import { Button } from '@/components/ui/button';
import { PredictionResult } from '@/lib/types';
import { ArrowLeft } from 'lucide-react';

const Results = () => {
  const [result, setResult] = useState<PredictionResult | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const storedResult = sessionStorage.getItem('predictionResult');
    
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    } else {
      // If no results available, redirect to prediction page
      navigate('/prediction');
    }
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/prediction')}
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Assessment
            </Button>
            
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Your Risk Assessment Results</h1>
              <p className="text-gray-600">
                Review your personalized heart health analysis and recommendations below
              </p>
            </div>
            
            {result && <ResultCard result={result} />}
            
            <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">What to do next?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-medical-100 text-medical-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 font-semibold">1</span>
                  <span>Review your results carefully and save them for your records.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-medical-100 text-medical-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 font-semibold">2</span>
                  <span>Share your assessment with your healthcare provider at your next visit.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-medical-100 text-medical-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 font-semibold">3</span>
                  <span>Follow the personalized recommendations to improve your heart health.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-medical-100 text-medical-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 font-semibold">4</span>
                  <span>Retake the assessment in 3-6 months to track your progress.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
