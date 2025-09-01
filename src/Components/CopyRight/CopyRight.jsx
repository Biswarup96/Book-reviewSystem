import React from "react";
import "../CopyRight/CopyRight.css";

import { FootersLinksData } from "../../Data/Data";

const CopyRight = () => {
  return (
    <div className="footer-copyright">
      <div className="container copyright-container">
        <p>© 2025 Your Company Name. All rights reserved.</p>

        <p>
          iubenda s.r.l Via San Raffaele, 1 - 20121 Milan (Italia) EU VAT No:
          IT07347120961 UK VAT No: GB370904694 Milan Chamber of Commerce SC:
          12,795.78 Eur (fully paid up)
        </p>
        <div className="footer-social">
          {FootersLinksData.socials.map((item, index) => {
            return (
              <a href={item.link} key={index}>
                <item.icon />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
