
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PredictionResult } from '@/lib/types';
import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle, Download, FileText, Info } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

type ResultCardProps = {
  result?: PredictionResult;
};

const ResultCard = ({ result }: ResultCardProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  
  // Retrieve result from storage if not provided as prop
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);
  
  useEffect(() => {
    if (result) {
      setPredictionResult(result);
    } else {
      const storedResult = sessionStorage.getItem('predictionResult');
      if (storedResult) {
        setPredictionResult(JSON.parse(storedResult));
      }
    }
  }, [result]);
  
  useEffect(() => {
    if (predictionResult) {
      const targetScore = predictionResult.riskScore * 100;
      const animationDuration = 1000; // ms
      const framesPerSecond = 60;
      const increment = targetScore / (animationDuration / 1000 * framesPerSecond);
      let currentScore = 0;
      
      const interval = setInterval(() => {
        currentScore += increment;
        if (currentScore >= targetScore) {
          setAnimatedScore(targetScore);
          clearInterval(interval);
        } else {
          setAnimatedScore(currentScore);
        }
      }, 1000 / framesPerSecond);
      
      return () => clearInterval(interval);
    }
  }, [predictionResult]);
  
  if (!predictionResult) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardContent className="py-10 text-center">
          <Info className="inline h-8 w-8 text-gray-400 mb-4" />
          <p>No prediction results available. Please complete the assessment form.</p>
          <Button asChild className="mt-6 bg-medical-600 hover:bg-medical-700">
            <Link to="/prediction">Take Assessment</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }
  
  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Low':
        return 'text-green-600';
      case 'Moderate':
        return 'text-yellow-600';
      case 'High':
        return 'text-orange-600';
      case 'Very High':
        return 'text-critical-500';
      default:
        return 'text-gray-600';
    }
  };
  
  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'Low':
        return <CheckCircle className="h-6 w-6 text-green-600" />;
      case 'Moderate':
        return <Info className="h-6 w-6 text-yellow-600" />;
      case 'High':
      case 'Very High':
        return <AlertTriangle className="h-6 w-6 text-critical-500" />;
      default:
        return <Info className="h-6 w-6 text-gray-600" />;
    }
  };
  
  const getProgressColor = (riskScore: number) => {
    if (riskScore < 0.25) return 'bg-green-500';
    if (riskScore < 0.5) return 'bg-yellow-500';
    if (riskScore < 0.75) return 'bg-orange-500';
    return 'bg-critical-500';
  };
  
  const scorePercentage = (predictionResult.riskScore * 100).toFixed(1);
  const formattedDate = new Date(predictionResult.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg">
      <CardHeader className="text-center border-b pb-6">
        <CardTitle className="text-2xl">Your Heart Health Risk Assessment</CardTitle>
        <p className="text-muted-foreground mt-2">Completed on {formattedDate}</p>
      </CardHeader>
      
      <CardContent className="pt-8 pb-6 px-6">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center mb-2">
            {getRiskIcon(predictionResult.riskLevel)}
            <h3 className={`text-xl font-bold ml-2 ${getRiskColor(predictionResult.riskLevel)}`}>
              {predictionResult.riskLevel} Risk
            </h3>
          </div>
          
          <div className="relative h-4 w-full bg-gray-100 rounded-full mt-4 mb-2">
            <div 
              className={`absolute h-4 rounded-full transition-all duration-1000 ease-out ${getProgressColor(predictionResult.riskScore)}`}
              style={{ width: `${animatedScore}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between text-xs text-gray-600">
            <span>Low Risk</span>
            <span>Moderate Risk</span>
            <span>High Risk</span>
          </div>
          
          <p className="mt-4 text-2xl font-bold">
            {scorePercentage}%
            <span className="text-sm font-normal text-gray-500 ml-1">Risk Score</span>
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-lg mb-4">Recommendations:</h4>
          <ul className="space-y-2">
            {predictionResult.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block bg-medical-100 text-medical-700 rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5 text-xs font-bold">
                  {index + 1}
                </span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Please note: This assessment is for informational purposes only and does not substitute for professional medical advice.
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col sm:flex-row gap-4 justify-between bg-gray-50 border-t p-6">
        <Button variant="outline" className="w-full sm:w-auto">
          <FileText className="mr-2 h-4 w-4" /> View Full Report
        </Button>
        <Button variant="outline" className="w-full sm:w-auto">
          <Download className="mr-2 h-4 w-4" /> Download PDF
        </Button>
        <Button asChild className="w-full sm:w-auto bg-medical-600 hover:bg-medical-700">
          <Link to="/prediction">Retake Assessment</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
