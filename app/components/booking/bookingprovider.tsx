"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";
import BookingModal from "../ui/BookingModel";

interface BookingContextType {
    openBooking: (service?: string) => void;
    closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(
    undefined
);

export function BookingProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const openBooking = (service = "") => {
        setSelectedService(service);
        setIsOpen(true);
    };

    const closeBooking = () => {
        setIsOpen(false);
    };

    return (
        <BookingContext.Provider
            value={{
                openBooking,
                closeBooking,
            }}
        >
            {children}

            <BookingModal
                isOpen={isOpen}
                onClose={closeBooking}
                defaultService={selectedService}
            />
        </BookingContext.Provider>
    );
}

export function useBooking() {
    const context = useContext(BookingContext);

    if (!context) {
        throw new Error(
            "useBooking must be used inside BookingProvider"
        );
    }

    return context;
}