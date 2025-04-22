import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface PredictionResult {
  'Heart Attack Risk': string;
}

const ResultCard = () => {
  const [result, setResult] = useState<PredictionResult | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedResult = sessionStorage.getItem('predictionResult');
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    }
  }, []);

  return (
    <Card className="w-full max-w-3xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-center">Heart Disease Risk Prediction</CardTitle>
        <CardDescription className="text-center">
          Your AI-powered risk assessment result
        </CardDescription>
      </CardHeader>
      <CardContent>
        {result ? (
          <div className="text-center">
            <h3 className="text-lg font-semibold">Prediction Result</h3>
            <p className="text-2xl text-green-600 mt-2">Heart Attack Risk: {result['Heart Attack Risk']}</p>
            <p className="mt-4 text-gray-600">
              This is an AI-generated prediction. Consult a healthcare professional for a comprehensive evaluation.
            </p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-red-600">No prediction result available.</p>
            <p className="mt-2">Please complete the risk assessment form first.</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          onClick={() => navigate('/')}
          className="px-8 bg-medical-600 hover:bg-medical-700"
        >
          Back to Assessment
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;