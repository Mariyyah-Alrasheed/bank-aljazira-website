import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Step1_CustomerInfo from "./pages/formPages/Step1_CustomerInfo";
import FormLayout from "./layouts/FormLayout";
import Step2_FinancialEligibility from "./pages/formPages/Step2_FinancialEligibility";
import Step3_GeneralEligibility from "./pages/formPages/Step3_GeneralEligibility";
import Step4_EvaluativeEligibility from "./pages/formPages/Step4_EvaluativeEligibility";
import Step5_Verification from "./pages/formPages/Step5_Verification";
import Step6_Attachments from "./pages/formPages/Step6_Attachments";
import PastRequests from "./pages/PastRequests";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="form" element={<FormLayout />}>
            <Route path="customer-info" element={<Step1_CustomerInfo />} />
            <Route path="financial" element={<Step2_FinancialEligibility />} />
            <Route path="general" element={<Step3_GeneralEligibility />} />
            <Route
              path="evaluation"
              element={<Step4_EvaluativeEligibility />}
            />
            <Route path="verification" element={<Step5_Verification />} />
            <Route path="Attachments" element={<Step6_Attachments />} />
          </Route>
          <Route path="past-requests" element={<PastRequests />} />
        </Route>
      </Routes>
    </>
  );
}
