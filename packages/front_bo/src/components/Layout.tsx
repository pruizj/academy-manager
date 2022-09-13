import { FC, ReactNode } from "react";
import { ContentStart, ErrorContent, LateralMenu } from ".";
import { sections } from "../config";

const Layout: FC<{
  children?: ReactNode;
  childrenHeader?: ReactNode;
  childrenSubHeader?: ReactNode;
  section: string;
  label?: string;
  error?: number;
  title?: string;
  children2?: ReactNode;
  children3?: ReactNode;
  children4?: ReactNode;
  children5?: ReactNode;
}> = ({
  children,
  section,
  error,
  childrenHeader,
  label,
  childrenSubHeader,
  title,
  children2,
  children3,
  children4,
  children5,
}) => {
  return (
    <div>
      <LateralMenu sections={sections} section={section} label={label} />
      {!error && (
        <ContentStart
          childrenSubHeader={childrenSubHeader}
          childrenHeader={childrenHeader}
          section={title || section}
          children2={children2}
          children3={children3}
          children4={children4}
          children5={children5}
        >
          {children}
        </ContentStart>
      )}
      {error && <ErrorContent error={error} />}
    </div>
  );
};

export default Layout;
