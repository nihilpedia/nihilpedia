type Time = (string | number);

export const getTimeString = (dateNumber: number): string => {
  const date = new Date(dateNumber);
  const UTC = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const UTC9Time = new Date(UTC + KR_TIME_DIFF);

  const YYYY = UTC9Time.getFullYear();

  let MM: Time = UTC9Time.getMonth() + 1;
  MM = MM >= 10 ? MM : `0${MM}`;

  let DD: Time = UTC9Time.getDate();
  DD = DD >= 10 ? DD : `0${DD}`;

  let HH: Time = UTC9Time.getHours();
  HH = HH >= 10 ? HH : `0${HH}`;

  let mm: Time = UTC9Time.getMinutes();
  mm = mm >= 10 ? mm : `0${mm}`;

  let ss: Time = UTC9Time.getSeconds();
  ss = ss >= 10 ? ss : `0${ss}`;

  return `${YYYY}-${MM}-${DD} ${HH}:${mm}:${ss}`;
};
