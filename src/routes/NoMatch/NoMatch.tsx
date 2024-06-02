import { useTranslation } from "react-i18next";

const NoMatch = () => {
  const { t } = useTranslation();
  
  return <>{ t('page-not-exist-text') }</>;
};

export default NoMatch;
