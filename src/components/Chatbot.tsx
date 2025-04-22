import { useState, useRef, useEffect } from "react";
import { Send, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from 'sonner';
import ChatMessage from "./ChatMessage";

const cardioResponses: Record<string, string> = {
  "heart attack symptoms": "Common heart attack symptoms include chest pain or discomfort, shortness of breath, pain or discomfort in the jaw, neck, back, arm, or shoulder, and feeling nauseous, light-headed, or unusually tired.",
  "blood pressure": "Normal blood pressure is typically around 120/80 mmHg. Hypertension (high blood pressure) is generally considered to be 130/80 mmHg or higher.",
  "cholesterol": "There are two main types of cholesterol: LDL (bad) and HDL (good). High levels of LDL cholesterol can build up in your arteries and increase your risk of heart disease.",
  "exercise": "Regular physical activity can lower your risk of heart disease. Aim for at least 150 minutes of moderate-intensity aerobic exercise per week.",
  "diet": "A heart-healthy diet includes fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit sodium, saturated fats, added sugars, and alcohol.",
  "arrhythmia": "Arrhythmia refers to an irregular heartbeat. It occurs when the electrical signals that coordinate your heartbeat don't work properly.",
  "ecg": "An electrocardiogram (ECG or EKG) records the electrical signals in your heart and can detect abnormalities in heart rhythm and structure.",
  "stroke": "A stroke occurs when the blood supply to part of your brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients.",
};

const suggestionPrompts = [
  "What are heart attack symptoms?",
  "What is a healthy blood pressure?",
  "How can I lower my cholesterol?",
  "What exercises are good for heart health?",
  "Is coffee bad for my heart?",
  "What is arrhythmia?",
  "How often should I get an ECG?"
];

type Message = {
  id: number;
  text: string;
  isBot: boolean;
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "Hello! I'm S.A.R.A.H (Strategic Artificial Reasoning and Assistant for Health). How can I help you with your heart health questions today?", 
      isBot: true 
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue("");

    const newUserMessageId = messages.length + 1;
    setMessages([...messages, { id: newUserMessageId, text: userMessage, isBot: false }]);

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      
      const response = generateResponse(userMessage.toLowerCase());
      
      const newBotMessageId = messages.length + 2;
      setMessages(prev => [...prev, { id: newBotMessageId, text: response, isBot: true }]);
    }, Math.random() * 1000 + 1000);
  };

  const generateResponse = (input: string): string => {
    for (const [keyword, response] of Object.entries(cardioResponses)) {
      if (input.includes(keyword)) {
        return response;
      }
    }

    return "I don't have specific information about that. Please ask a question related to heart health, or consult with a healthcare professional for personalized advice.";
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    const inputElement = document.getElementById('chat-input');
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <Card className="flex flex-col h-[calc(100vh-8rem)] bg-gray-900 border-gray-700">
      <div className="p-4 border-b border-gray-700 flex items-center">
        <div className="h-10 w-10 bg-medical-600/20 rounded-full flex items-center justify-center mr-3">
          <Heart className="h-5 w-5 text-medical-400" />
        </div>
        <div>
          <h3 className="font-semibold text-white">S.A.R.A.H - Health Assistant</h3>
          <p className="text-xs text-gray-400">Strategic AI for Cardiovascular Insights</p>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto p-4 bg-gray-800/50">
        {messages.map((message) => (
          <ChatMessage 
            key={message.id} 
            message={message.text} 
            isBot={message.isBot} 
          />
        ))}
        
        {isTyping && (
          <div className="flex items-center mt-2 ml-12">
            <div className="bg-gray-700 rounded-full h-2 w-2 mx-1 animate-bounce"></div>
            <div className="bg-gray-700 rounded-full h-2 w-2 mx-1 animate-bounce" style={{animationDelay: "0.2s"}}></div>
            <div className="bg-gray-700 rounded-full h-2 w-2 mx-1 animate-bounce" style={{animationDelay: "0.4s"}}></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="px-4 py-3 border-t border-gray-700 flex flex-wrap gap-2">
        {suggestionPrompts.map((suggestion, index) => (
          <Button 
            key={index} 
            variant="outline" 
            size="sm" 
            className="bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 rounded-full py-1 px-3 text-xs"
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </Button>
        ))}
      </div>

      <div className="p-4 border-t border-gray-700 flex gap-2">
        <Textarea 
          id="chat-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Ask a question about heart health..."
          className="flex-grow bg-gray-800 border-gray-700 text-white resize-none h-12 max-h-48"
        />
        <Button 
          onClick={handleSendMessage}
          className="shrink-0 h-12 w-12 bg-medical-600 hover:bg-medical-700 rounded-full p-2"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </Card>
  );
};

export default Chatbot;
