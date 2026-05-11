import { useMemo } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import "./whatsappButton.css";

export type WhatsAppButtonProps = {
  phoneNumber?: string;
  className?: string;
  message?: string;
};

const DEFAULT_MESSAGE = "Hello Dashmesh Foil, I want to inquire about your packaging solutions.";

const normalizePhone = (value: string) => value.replace(/\D/g, "");

const WhatsAppButton = ({
  phoneNumber = "+919218109650",
  className,
  message = DEFAULT_MESSAGE,
}: WhatsAppButtonProps) => {
  const phone = normalizePhone(phoneNumber);

  const href = useMemo(() => {
    const encodedMessage = encodeURIComponent(message);
    // WhatsApp click-to-chat format
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  }, [phone, message]);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat With Us"
          className={
            "whatsapp-fab group fixed bottom-6 right-6 z-[9999] select-none " +
            (className ?? "")
          }
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="whatsapp-fab-ring" aria-hidden="true" />
          <span className="whatsapp-fab-pulse" aria-hidden="true" />

          <span className="whatsapp-fab-glass" aria-hidden="true" />

          <span className="whatsapp-fab-inner">
            <FaWhatsapp className="whatsapp-fab-icon" />
          </span>
        </motion.a>
      </TooltipTrigger>
      <TooltipContent side="left" align="center" className="px-3 py-1.5">
        Chat With Us
      </TooltipContent>
    </Tooltip>
  );
};

export default WhatsAppButton;

