import { FC } from "react";
import { Children } from "../../interfaces";
import "../../styles/app.scss";

interface Props extends Children {
  /** Height must be a number. ex: "14". default value: 32 */
  height?: string;
  /** Width must be a number. ex: "14". default value: 100 */
  width?: string;
  /** Is Loading */
  isLoading?: boolean;
  classCustom?: string;
}

export const Skeletton: FC<Props> = ({ height = "32", width = "100", children, isLoading = true, classCustom }) => {
  return (
    <>
      {isLoading ? (
        children
      ) : (
        <div
          className={`skeletton ${classCustom}`}
          style={{ width: `${width}px`, margin: "0.5rem 0", height: `${height}px` }}></div>
      )}
    </>
  );
};
