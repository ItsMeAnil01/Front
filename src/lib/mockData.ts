
import { FeatureCard, ModelFactor, PredictionResult } from "./types";

export const features: FeatureCard[] = [
  {
    title: "AI-Powered Analysis",
    description: "Our advanced machine learning algorithms analyze your health data to provide accurate risk assessments.",
    icon: "Brain",
  },
  {
    title: "Personalized Insights",
    description: "Receive tailored recommendations based on your specific health metrics and risk factors.",
    icon: "User",
  },
  {
    title: "Early Detection",
    description: "Identify potential heart health issues before they become critical emergencies.",
    icon: "HeartPulse",
  },
  {
    title: "Evidence-Based Medicine",
    description: "Our predictions are based on validated clinical research and large-scale health studies.",
    icon: "Clipboard",
  },
];

export const modelFactors: ModelFactor[] = [
  {
    name: "Age",
    description: "The risk of heart disease increases significantly with age, particularly after 45 for men and 55 for women.",
    importance: 85,
  },
  {
    name: "Blood Pressure",
    description: "High blood pressure forces the heart to work harder, increasing the risk of heart attack and stroke.",
    importance: 90,
  },
  {
    name: "Cholesterol Levels",
    description: "Elevated LDL cholesterol contributes to plaque buildup in arteries, increasing heart attack risk.",
    importance: 88,
  },
  {
    name: "Diabetes",
    description: "Diabetes can damage blood vessels and the nerves that control your heart, increasing risk.",
    importance: 82,
  },
  {
    name: "Smoking Status",
    description: "Smoking damages blood vessels and reduces oxygen in the blood, significantly increasing heart attack risk.",
    importance: 87,
  },
  {
    name: "Family History",
    description: "Genetic factors can predispose individuals to heart conditions regardless of lifestyle.",
    importance: 75,
  },
];

export const sampleResult: PredictionResult = {
  riskScore: 0.35,
  riskLevel: "Moderate",
  date: new Date().toISOString(),
  recommendations: [
    "Consider scheduling a follow-up with your healthcare provider",
    "Aim to reduce sodium intake in your diet",
    "Incorporate 30 minutes of moderate exercise at least 5 days a week",
    "Monitor your blood pressure regularly"
  ]
};
