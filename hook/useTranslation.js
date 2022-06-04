import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { get, template, isEmpty } from "lodash-es";

function useTranslation(source) {
  const { locale } = useRouter();
  const deps = [source, locale];

  const t = useCallback((path, args = {}, lang) => {
    return template(get(source[lang || locale], path) || path)(args);
  }, deps);

  const obj = useCallback((path, lang) => {
    return get(source[lang || locale], path) || {};
  }, deps);

  const msg = useCallback(
    (path, args = {}, isObj = false) => {
      const msgObj = {
        en: t(path, args, "en"),
        tc: t(path, args, "tc"),
        sc: t(path, args, "sc"),
      };
      return isObj ? msgObj : JSON.stringify(msgObj);
    },
    [source]
  );

  return { locale, t, obj, msg };
}

export default useTranslation;
