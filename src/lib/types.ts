
export interface UserHealthData {
  age: number;
  sex: string;
  cp: number; // chest pain type
  trestbps: number; // resting blood pressure
  chol: number; // serum cholesterol
  fbs: number; // fasting blood sugar
  restecg: number; // resting electrocardiographic results
  thalach: number; // maximum heart rate achieved
  exang: number; // exercise induced angina
  oldpeak: number; // ST depression induced by exercise relative to rest
  slope: number; // slope of the peak exercise ST segment
  ca: number; // number of major vessels colored by fluoroscopy
  thal: number; // thalassemia
}

export interface PredictionResult {
  userId?: string;
  riskScore: number;
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Very High';
  date: string;
  recommendations: string[];
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: string; // This would be a component name
}

export interface ModelFactor {
  name: string;
  description: string;
  importance: number; // 0-100
}
