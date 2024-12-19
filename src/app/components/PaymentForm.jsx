"use client";

import { useState } from "react";
import PaymentCard from "../components/PaymentCard";

export default function TicketSelection() {
  return (
    <div>
      <h2 className="text-8xl font-GermaniaOneRegular text-heading mb-10">Payment Information</h2>
      <PaymentCard />
    </div>
  );
}
