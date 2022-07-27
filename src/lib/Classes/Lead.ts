import type { ILead } from "./interfaces/ILead";
import { classToPlain } from "class-transformer";
import axios from "axios";

class Lead implements ILead {
  _id: string;
  name: string;
  phone: string;
  email: string;
  created_date: Date;
  status : "em andamento" | "abandonado" | "convertido" | string;
  last_update_date: Date;
  message: string;
  //@ts-ignore
  constructor({_id = "", name, phone, email, created_date = new Date(), last_update_date = new Date(), message, status ="pending"}) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.created_date = created_date;
    this.last_update_date = last_update_date;
    this.message = message;
    this._id = _id;
    this.status = status;
  }

  async sendToDatabase() {
    if (this._id === "") {
      let aux = classToPlain(this);
      delete aux._id;
      let { data } = await axios.post("https://pragente-api.vercel.app/api/leads/insert", aux);
      return data;
    } else {
      return (await axios.put("https://pragente-api.vercel.app/api/leads/edit", classToPlain(this))).data;
    }
  }

  async deleteFromDatabase() {
    return (await axios.delete("https://pragente-api.vercel.app/api/leads/delete", classToPlain(this))).data;
  }

  static async getAllFromDatabase() {
    return (await axios.get("https://pragente-api.vercel.app/api/leads/get")).data;
  }
}

export default Lead;
