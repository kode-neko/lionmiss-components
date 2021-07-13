import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { LMMainFooterOpt, LMMainFooterProps } from "./types";
import style from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { createPath } from "../LMMainBar/utils";
import { IconName } from "@fortawesome/fontawesome-svg-core";

const LMMainFooter: React.FC<LMMainFooterProps> = ({
  isMobile,
  columnsInfo,
  socialMedia,
  credits,
}) => {
  const { t: tMM } = useTranslation("mainFooter");
  const { t: tP } = useTranslation("paths");

  const colInfo = (col: LMMainFooterOpt) => {
    const { title, submenu } = col;
    return (
      <div className={style.info}>
        <div className={style.title}>{tMM(title as string)}</div>
        <ul>
          {submenu?.map((opt, index) => (
            <li key={index}>
              <a href={createPath(opt.path || [], tP)}>
                {typeof opt.title === 'string' ? tMM(opt.title) : opt.title}
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
                  <FontAwesomeIcon icon={["fab", social.icon as IconName]} />
                </a>
              ))}
            </div>
            <div className={style.about}>
              <span className={style.text}>About Us</span>
              <span className={style.icon}>
                <FontAwesomeIcon icon="smile" />
              </span>
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
