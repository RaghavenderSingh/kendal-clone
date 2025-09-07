interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: "telegram" | "website" | "referral" | "facebook" | "google";
  status:
    | "new"
    | "contacted"
    | "qualified"
    | "viewing"
    | "negotiating"
    | "closed"
    | "lost";
  score: number;
  budget: {
    min: number;
    max: number;
  };
  propertyType: "apartment" | "villa" | "townhouse" | "commercial" | "land";
  location: string;
  notes: string;
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
  interactions: Interaction[];
}
interface Interaction {
  id: string;
  type: "call" | "email" | "telegram" | "meeting" | "whatsapp";
  content: string;
  timestamp: string;
  agentId: string;
}
