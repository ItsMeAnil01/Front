
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type ChatMessageProps = {
  message: string;
  isBot: boolean;
  avatar?: string;
};

const ChatMessage = ({ message, isBot, avatar }: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex w-full gap-3 p-4",
      isBot ? "justify-start" : "justify-end"
    )}>
      {isBot && (
        <Avatar className="h-8 w-8 border bg-medical-600/20">
          <img src={avatar || "/lovable-uploads/08de06ba-88f8-48a5-8ea2-d321679f514b.png"} 
               alt="Health Oracle AI" 
               className="h-8 w-8 rounded-full object-cover" />
        </Avatar>
      )}
      <div className={cn(
        "rounded-xl px-4 py-3 max-w-[80%]",
        isBot 
          ? "bg-gray-800 text-white border border-gray-700" 
          : "bg-medical-600 text-white"
      )}>
        <p className="text-sm">{message}</p>
      </div>
      {!isBot && (
        <Avatar className="h-8 w-8 bg-gray-700 border border-gray-600">
          <img src={avatar || "https://randomuser.me/api/portraits/men/32.jpg"} 
               alt="User" 
               className="h-8 w-8 rounded-full object-cover" />
        </Avatar>
      )}
    </div>
  );
};

export default ChatMessage;
