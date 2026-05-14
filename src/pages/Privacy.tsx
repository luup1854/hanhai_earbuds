import { LegalPage } from "../components/LegalPage";
import { privacyPolicy } from "../data/legalData";

export function Privacy() {
  return <LegalPage data={privacyPolicy} />;
}
