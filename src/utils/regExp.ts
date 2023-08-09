export const idRegExp = '^[A-Za-z0-9]{3,21}$';

export const passwordRegExp = '^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$';

export const nameRegExp = '^[가-힣a-zA-Zs]{2,10}$';

export const phoneRegExp = '^[0-9]*$';

export const emailRegExp =
  "[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(.[-a-zA-Z0-9_]+)*.([cC][oO][mM]))(:[0-9]{1,5})?";

export const email1RegExp = '^[a-zA-Z0-9]*$';

export const email2RegExp =
  '([a-zA-Z0-9_][-a-zA-Z0-9_]*(.[-a-zA-Z0-9_]+)*.([cC][oO][mM]|[nN][eE][tT]))(:[0-9]{1,5})?';
