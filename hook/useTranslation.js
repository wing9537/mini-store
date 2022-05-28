import { useCallback } from "react";
import { useRouter } from "next/router";
import { get, template } from "lodash-es";

function useTranslation(source) {
  const { locale } = useRouter();
  const deps = [source, locale];

  const t = useCallback((path, args = {}) => {
    return template(obj(path))(args);
  }, deps);

  const obj = useCallback((path) => {
    return get(source[locale], path) || {};
  }, deps);

  return { locale, t, obj };
}

export default useTranslation;
