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
          Données incorrectes :
          <br />
          reprenez vos mesures.
        </p>
        <p> + de 441 tailles : du 85 au 120 et du bonnet A au G </p>
        <p>
          Un doute sur votre taille ?
          <br />
          Contacter&nbsp;
          <a href="mailto:asymetrio.fr@gmail.com">asymetrio.fr@gmail.com</a>.
        </p>
      </div>
    );
  }

  return <div className={`${BLOCK} ${className}`}>{children}</div>;
};
