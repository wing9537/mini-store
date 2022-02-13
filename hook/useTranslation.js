import { useRouter } from "next/router";

function useTranslation(source) {
  const { locale } = useRouter();

  const t = (path, args = {}) => {
    let val = obj(path);
    return val;
  };

  const obj = (path) => {
    return path.split(".").reduce((src, key) => {
      return src && src[key] ? src[key] : path;
    }, source[locale]);
  };

  return { locale, t, obj };
}

export default useTranslation;
