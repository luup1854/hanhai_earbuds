import { LegalPage } from "../components/LegalPage";
import { termsOfUse } from "../data/legalData";

export function Terms() {
  return <LegalPage data={termsOfUse} />;
}
