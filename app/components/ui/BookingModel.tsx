"use client";

import { useEffect, useState } from "react";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultService?: string;
}

const SERVICES = [
    { key: "doctor", name: "Doctor at Home" },
    { key: "nursing", name: "Home Nursing Services" },
    { key: "wound-care", name: "Wound Care Service" },
    { key: "eldercare", name: "Eldercare" },
    { key: "veterinary", name: "Veterinary" },
    { key: "physiotherapy", name: "Physiotherapy" },
    { key: "yoga", name: "Yoga" },
    { key: "nri-care", name: "NRI Patient Care" },
    { key: "equipment", name: "Hospital Equipment" },
    { key: "renal-test", name: "Renal Blood Test" },
];

export default function BookingModal({
    isOpen,
    onClose,
    defaultService,
}: BookingModalProps) {

    const [selectedService, setSelectedService] = useState(
        defaultService || ""
    );

    // Update selected service whenever a different card is clicked
    // useEffect(() => {
    //     setSelectedService(defaultService || "");
    // }, [defaultService]);

    if (!isOpen) return null;

    const handleBookingSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const bookingData = {
            service: formData.get("service"),
            fullName: formData.get("fullName"),
            phone: formData.get("phone"),
            location: formData.get("location"),
        };

        console.log("Booking:", bookingData);

        // API call can be added here

        onClose();
    };

    return (
        <div
            className="modal-backdrop active"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className="modal-card">

                {/* Close */}
                <button
                    type="button"
                    className="modal-close-btn"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>

                {/* Header */}
                <h2 className="modal-title">
                    Book a Visit Request
                </h2>

                <p className="modal-sub">
                    Tell us what you need — we'll take it from here.
                </p>

                <form onSubmit={handleBookingSubmit}>

                    {/* Service */}
                    <div className="form-group">
                        <label
                            className="form-label"
                            htmlFor="serviceSelect"
                        >
                            Service
                        </label>

                        <select
                            id="serviceSelect"
                            name="service"
                            className="form-select"
                            value={selectedService}
                            onChange={(e) =>
                                setSelectedService(e.target.value)
                            }
                            required
                        >
                            <option value="">
                                Select a service
                            </option>

                            {SERVICES.map((service) => (
                                <option
                                    key={service.key}
                                    value={service.name}
                                >
                                    {service.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Full Name */}
                    <div className="form-group">
                        <label
                            className="form-label"
                            htmlFor="fullName"
                        >
                            Full name
                        </label>

                        <input
                            id="fullName"
                            name="fullName"
                            className="form-input"
                            type="text"
                            placeholder="Your name"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                        <label
                            className="form-label"
                            htmlFor="phone"
                        >
                            Phone number
                        </label>

                        <input
                            id="phone"
                            name="phone"
                            className="form-input"
                            type="tel"
                            placeholder="+91 98765 43210"
                            required
                        />
                    </div>

                    {/* Location */}
                    <div className="form-group">
                        <label
                            className="form-label"
                            htmlFor="location"
                        >
                            Location
                        </label>

                        <input
                            id="location"
                            name="location"
                            className="form-input"
                            type="text"
                            placeholder="Your location"
                            required
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="btn-submit-booking"
                    >
                        Request Booking
                    </button>

                </form>
            </div>
        </div>
    );
}