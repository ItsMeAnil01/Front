
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const ChatbotPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">S.A.R.A.H - Health Oracle AI</h1>
          <p className="text-gray-400">
            Meet S.A.R.A.H (Strategic Artificial Reasoning and Assistant for Health), 
            your specialized cardiology AI assistant. Ask questions about heart health, 
            symptoms, prevention, and treatment options.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Chatbot />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ChatbotPage;
