import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Stepper from "../components/formComponents/Stepper";
import { Button } from "@/components/ui/button";
import {
  customerInfoSchema,
  financialEligibilitySchema,
  generalEligibilitySchema,
  evaluationEligibilitySchema,
  clientValidationSchema,
  attachmentsSchema,
} from "@/schemas/formSchemas";
// import CloseButton from "@/components/CloseButton";
import CardHeaderWithClose from "@/components/CardHeaderWithClose";
import { useTranslation } from "react-i18next";

// ✅ تعريف خطوات التقديم
const stepPathMap: Record<string, number> = {
  "customer-info": 0,
  financial: 1,
  general: 2,
  evaluation: 3,
  verification: 4,
  attachments: 5,
};

const steps = Object.keys(stepPathMap);

const schemas = [
  customerInfoSchema,
  financialEligibilitySchema,
  generalEligibilitySchema,
  evaluationEligibilitySchema,
  clientValidationSchema,
  attachmentsSchema, // إذا كان لديك سكيمة للمرفقات
  // افترض وجود سكيمة للتحقق من العميل
] as const;

type CustomerInfo = z.infer<typeof customerInfoSchema>;
type FinancialEligibility = z.infer<typeof financialEligibilitySchema>;
type GeneralEligibility = z.infer<typeof generalEligibilitySchema>;
type EvaluationEligibility = z.infer<typeof evaluationEligibilitySchema>;
type ClientValidation = z.infer<typeof clientValidationSchema>;
type Attachments = z.infer<typeof attachmentsSchema>; // إذا كان لديك سكيمة للمرفقات

type FormValues = CustomerInfo &
  FinancialEligibility &
  GeneralEligibility &
  EvaluationEligibility &
  ClientValidation &
  Attachments;

export default function FormLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("form");
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const currentStep =
    Object.entries(stepPathMap).find(([key]) =>
      location.pathname.includes(key)
    )?.[1] ?? 0;

  const currentSchema = schemas[currentStep] ?? customerInfoSchema; // مثلاً، افتراضيًا أول سكيمة
  const methods = useForm<FormValues>({
    resolver: zodResolver(currentSchema as any),
    defaultValues: {
      companyName: "",
      crNumber: "",
      phoneNumber: "",
      loanAmount: "",
      entityCode: "",
      branch: "",

      // //STEP_2
      salesVolume: "",
      capital: "",

      //step_3
      legalForm: "",
      engineAge: "",
      activityAge: "",
      activityLocation: "",
      activityType: "",
      otherCompanyActivity: "",
      personalAssets: "",

      //STEP_4
      capitalStability: "",
      financialStatements: "",
      activityTypeEvaluative: "",
      numberOfEmployees: "",
      licensesAvailability: "",
      mainEngineExperienceYears: "",
      secondManagementPresence: "",
      bankCreditFacilities: "",
      annualSalesVolume: "",
      yearsWithOurBank: "",
      owners: [{ cardNumber: "", ownerType: "" }],
      suppliers: [{ supplierName: "", crn: "", value: "", soldGoods: "" }],
      // //STEP_5
      topPrice: "",

      // //STEP_6

      // attachmentfile: null, // ملف المرفق
      checkbox: false, // خانة الموافقة على الشروط
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("errors:", methods.formState.errors);

    console.log("✅ تم الإرسال:", data);
    alert(t("validationComplete"));

    // ✅ ننتقل للخطوة التالية
    const nextStep = currentStep + 1;
    if (nextStep < steps.length) {
      const nextPath = steps[nextStep];
      navigate(`/form/${nextPath}`);
    } else {
      console.log("🚀 النموذج النهائي:", methods.getValues());
      localStorage.setItem(
        "finalFormData",
        JSON.stringify(methods.getValues())
      );

      navigate("/"); // إعادة التوجيه إلى صفحة النجاح

      alert(t("formSubmitted"));
    }
  };

  return (
    <>
      <div className="" dir="rtl">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col w-4/5 mx-auto py-4 gap-4"
            dir="rtl"
          >
            <CardHeaderWithClose text={t("title")} />

            <Stepper currentStep={currentStep} />

            <Outlet />

            <div className=" bottom-0 bg-white py-2 flex ">
              <div className="w-full flex justify-between px-4" dir={dir}>
                {currentStep !== 0 ? (
                  <Button
                    type="button"
                    className="bg-gray-200 text-gray-700 h-6 text-[10px]"
                    onClick={() => {
                      const prevStep = currentStep - 1;
                      if (prevStep >= 0) {
                        const prevPath = steps[prevStep];
                        navigate(`/form/${prevPath}`);
                      }
                    }}
                  >
                    {t("back")}
                  </Button>
                ) : (
                  <div />
                )}

                <Button
                  type="submit"
                  className="bg-[#F58232] text-white h-6 text-[10px]"
                >
                  {t("next")}{" "}
                </Button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
