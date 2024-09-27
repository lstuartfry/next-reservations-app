"use client";

import { Reservation } from "@/types";
import confirmReservation from "@/actions/client/confirm-reservation";

export default function ReservationList({
  reservations,
}: {
  reservations?: Reservation[];
}) {
  if (reservations && reservations.length === 0) return "no reservations";
  return reservations?.map((reservation) => (
    <div className="flex gap-4 text-left" key={reservation.id}>
      <span key={reservation.id}>
        {reservation.date} - {reservation.clientName} with{" "}
        {reservation.providerName}
      </span>
      {reservation.pending && (
        <button
          className="bg-emerald-600 text-white px-4 py-2"
          onClick={() => confirmReservation(reservation.id)}
        >
          Confirm
        </button>
      )}
    </div>
  ));
}
