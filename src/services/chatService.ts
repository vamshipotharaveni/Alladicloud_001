export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const KNOWLEDGE_BASE = {
  company: "Alladi Cloud Solutions (ACS) is an innovative IT company and a subsidiary of Brainy Way Solutions Inc, USA. We specialize in software development, cloud solutions, and enterprise applications.",
  ceo: "Our CEO & Founder is Malleshaiah (Mal) Alladi, a computer engineer with 30+ years of experience, certified PMP, and AWS Solution Architect.",
  products: [
    "Smartest Cab: Complete taxi ecosystem with 90% fare retention.",
    "My Ride: Innovative ride-sharing solution.",
    "Buddy Poker: High-performance gaming app.",
    "POS System: Retail ERP management.",
    "Paperless Classroom: EdTech document compliance platform."
  ],
  services: [
    "Web Development (Java, Spring, Angular)",
    "Mobile App Development (Flutter, Android)",
    "Cloud Solutions (AWS)",
    "Enterprise Software & API Development"
  ],
  contact: "Email: hr@alladicloudsolutions.com | Phone: +91 90009 30077 | Address: Begumpet, Hyderabad."
};

export async function getChatResponse(messages: Message[]) {
  const lastMessage = messages[messages.length - 1].content.toLowerCase();

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));

  if (lastMessage.includes('service') || lastMessage.includes('offer')) {
    return `We offer a wide range of services including: ${KNOWLEDGE_BASE.services.join(', ')}. How can we help you today?`;
  }
  
  if (lastMessage.includes('product') || lastMessage.includes('project')) {
    return `Some of our key products include: ${KNOWLEDGE_BASE.products.join(' ')}`;
  }

  if (lastMessage.includes('contact') || lastMessage.includes('email') || lastMessage.includes('phone') || lastMessage.includes('address')) {
    return `You can reach us at: ${KNOWLEDGE_BASE.contact}`;
  }

  if (lastMessage.includes('who') || lastMessage.includes('ceo') || lastMessage.includes('founder')) {
    return KNOWLEDGE_BASE.ceo;
  }

  if (lastMessage.includes('about') || lastMessage.includes('company')) {
    return KNOWLEDGE_BASE.company;
  }

  return "I am Alladi AI, your assistant for Alladi Cloud Solutions. I can tell you about our services, products, or how to contact us. What would you like to know?";
}
