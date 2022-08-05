import styled from "@emotion/styled";
import { FC, Fragment, useState } from "react";
import {
  BQLogo,
  colors,
  Icon,
  styles,
  useTranslate,
} from "@academy-manager/ui";

type LateralMenuProps = {
  changeSection: (section: string) => void;
  changeLabel: (label: string) => void;
  sections: {
    title: string;
    links: {
      label: string;
      href: string;
    }[];
  }[];
};

const LateralMenu: FC<LateralMenuProps> = ({
  sections,
  changeLabel,
  changeSection,
}) => {
  const t = useTranslate();

  return (
    <LateralContainer>
      <LateralMenuItem top={35} left={43} bottom={26}>
        <BQLogo />
      </LateralMenuItem>

      {sections?.map((elem) => {
        const [clicked, setClicked] = useState<boolean>(false);
        return (
          <Fragment key={elem.title}>
            <LateralMenuItem
              top={15}
              left={45}
              bottom={14}
              clicked={clicked}
              onClick={() => {
                setClicked(!clicked);
                changeSection(elem.title);
                {
                  elem.links[0] && changeLabel(elem.links[0].label);
                }
              }}
            >
              <P4Lateral>{t(elem.title)}</P4Lateral>
              <TriangleLateral name="triangle" clicked={clicked} />
            </LateralMenuItem>
            {clicked && (
              <LinksLateral top={15} left={45} bottom={15}>
                {clicked &&
                  elem.links.map((link) => {
                    return (
                      <ALateral
                        key={link.label}
                        onClick={() => {
                          changeLabel(link.label);
                          changeSection(elem.title);
                        }}
                      >
                        {t(link.label)}
                      </ALateral>
                    );
                  })}
              </LinksLateral>
            )}
          </Fragment>
        );
      })}
    </LateralContainer>
  );
};

export default LateralMenu;

const LateralContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 250px;
  background-color: ${colors.colors.blackBackground};
  color: ${colors.colors.white};
`;

const LateralMenuItem = styled.div<{
  left: number;
  top: number;
  bottom: number;
  clicked?: boolean;
}>`
  width: 100%;
  transition: border-bottom 0.3s ease-in-out;
  ${(props) =>
    props.clicked
      ? `border-bottom: 1px solid ${colors.colors.gray80Transparent}`
      : `border-bottom: 1px solid ${colors.colors.gray80}`};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > * {
    margin-left: ${(props) => props.left}px;
    margin-top: ${(props) => props.top}px;
    margin-bottom: ${(props) => props.bottom}px;
  }
`;

const P4Lateral = styled(styles.P4)`
  color: ${colors.colors.white};
  &:hover {
    cursor: pointer;
  }
`;

const TriangleLateral = styled(Icon)<{ clicked: boolean }>`
  color: ${colors.colors.white};
  transform-origin: center;
  transition: transform 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
  }
  transform: ${(props) => (props.clicked ? "rotate(-90deg)" : "rotate(0deg)")};
  margin-right: 20px;
`;

const LinksLateral = styled.div<{
  left: number;
  top: number;
  bottom: number;
  clicked?: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${colors.colors.gray80};
  margin-top: ${(props) => props.top}px;
  padding-bottom: ${(props) => props.bottom}px;
  & > * {
    margin: 5px 0 5px ${(props) => props.left}px;
  }
`;

const ALateral = styled(styles.A)`
  color: ${colors.colors.white};
  font-size: 14px;
  font-weight: normal;
  line-height: 1.43;
`;
