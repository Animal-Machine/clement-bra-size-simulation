import React from "react";
import "./Result.css";

export interface ResultProps {
  className?: string;
  children: React.ReactNode;
  hasError: boolean;
  hasValue: boolean;
}

const BLOCK = "Result";

export const Result: React.FunctionComponent<ResultProps> = ({
  className,
  children,
  hasValue,
  hasError,
}) => {
  if (!hasValue) {
    return null;
  }
  if (hasError) {
    return (
      <div className={`${BLOCK} ${BLOCK}--is-error ${className}`}>
        <p>
          Données incorrectes : reprenez vos mesures
          <br />
          + de 441 tailles : du 85 au 120
          <br />
          et du bonnet A au G
        </p>
        <p>
          Un doute sur votre taille ?
          <br />
          Contacter&nbsp;
          <a href="mailto:asymetrio.fr@gmail.com">asymetrio.fr@gmail.com</a>
          &nbsp;ou prendre rendez-vous sur&nbsp;
          <a href="https://calendly.com/asymetrio-fr">Calendly</a>
        </p>
      </div>
    );
  }

  return <div className={`${BLOCK} ${className}`}>{children}</div>;
};
