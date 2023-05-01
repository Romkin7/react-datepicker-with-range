import { fi, ru, enUS } from "date-fns/locale";

function getLocale(locale) {
  return locale === "ru" ? ru : locale === "en" ? enUS : fi;
}

export default getLocale;
