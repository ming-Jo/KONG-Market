export const idRegExp = '^[A-Za-z0-9]{3,21}$';

export const passwordRegExp = '^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$';

export const nameRegExp = '^[ㄱ-ㅎ가-힣a-zA-Z]{1,10}$';

export const phone1RegExp = '^[0-9]{3}$';

export const phone2RegExp = '^[0-9]{3,4}$';

export const phone3RegExp = '^[0-9]{4}$';

export const emailRegExp =
  "[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(.[-a-zA-Z0-9_]+)*.([cC][oO][mM]))(:[0-9]{1,5})?";

export const email1RegExp = '^[a-zA-Z0-9]*$';

export const email2RegExp = '([a-zA-Z0-9_][-a-zA-Z0-9_]*(.[-a-zA-Z0-9_]+)*.([cC][oO][mM]))(:[0-9]{1,5})?';
