import React from "react";
import "../styles/transformer.css";

interface TransformerProps {
  color: string;
  shape: string;
}

const Transformer: React.FC<TransformerProps> = ({ color, shape }) => {
  return (
    <div
      className={`transformer ${color}`}
      style={{ borderRadius: shape === "square" ? "0" : "50%" }}
    >
      Transformer
    </div>
  );
};

export default Transformer;
