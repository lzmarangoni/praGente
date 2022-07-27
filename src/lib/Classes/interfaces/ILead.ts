export interface ILead {
  _id?: string;
  name: string;
  phone: string;
  email: string;
  created_date: Date;
  status: "em andamento" | "abandonado" | "convertido" | string;
  last_update_date: Date;
  message: string; 
}
