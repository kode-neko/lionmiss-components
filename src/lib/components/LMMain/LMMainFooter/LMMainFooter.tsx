import React from "react";
import style from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { createPath } from "../../../utils";
import { LMMainFooterProps } from "./types";
import { LMMenuOpt } from "../../../types";
import { smileIconLM } from "../../LMIcons";

const LMMainFooter: React.FC<LMMainFooterProps> = ({
  isMobile,
  columnsInfo,
  socialMedia,
  credits,
}) => {
  const { t: tMM } = useTranslation("mainFooter");
  const { t: tP } = useTranslation("paths");

  const colInfo = (col: LMMenuOpt) => {
    const { title, submenu } = col;
    return (
      <div className={style.info}>
        <div className={style.title}>{tMM(title as string)}</div>
        <ul>
          {submenu?.map(opt => (
            <li key={opt.title as string}>
              <a href={createPath(opt.path || [], tP)}>
                {typeof opt.title === "string" ? tMM(opt.title) : opt.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={style.cont}>
      {!isMobile && (
        <div className={style.infoCont}>
          <div className={style.columnsInfo}>
            {columnsInfo.map((col) => colInfo(col))}
          </div>
          <div className={style.socialMedia}>
            <div className={style.socialList}>
              {socialMedia.map((social) => (
                <a
                  key={social.title as string}
                  href={createPath(social.path || [], tP)}
                  title={social.title as string}
                >
                  {social.title}
                </a>
              ))}
            </div>
            <div className={style.about}>
              <a href={tP('about-us')}>
                <span className={style.text}>{tMM('about-us')}</span>
                <span className={style.icon}>
                  {smileIconLM}
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
      <div className={style.credits}>
        {credits.map((ele, index) => (
          <span key={index}>{ele}</span>
        ))}
      </div>
    </div>
  );
};

export default LMMainFooter;
