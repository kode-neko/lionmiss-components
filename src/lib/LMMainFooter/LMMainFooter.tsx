import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { LMMainFooterColInfoProps, LMMainFooterProps } from "./types";
import style from "./styles.module.scss";

const LMMainFooterColInfo: React.FC<LMMainFooterColInfoProps> = ({ col }) => {
  return (
    <div className={style.info}>
      <div className={style.title}>{col.title}</div>
      <ul>
        {col.info.map((ele, index) => (
          <li key={index}>
            <a href={ele.path}>{ele.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const LMMainFooter: React.FC<LMMainFooterProps> = ({
  isMobile,
  columnsInfo,
  socialMedia,
  credits,
}) => {
  return (
    <div className={style.cont}>
      {!isMobile && (
        <div className={style.infoCont}>
          <div className={style.columnsInfo}>
            {columnsInfo.map((col, index) => (
              <LMMainFooterColInfo key={index} col={col} />
            ))}
          </div>
          <div className={style.socialMedia}>
            <div className={style.socialList}>
              {socialMedia.map((ele) => (
                <a key={ele.title} href={ele.path} title={ele.title}>
                  <FontAwesomeIcon icon={["fab", ele.icon]} />
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
