import { z } from "zod";

// ✅ STEP 1: CustomerInfo
export const customerInfoSchema = z.object({
  companyName: z.string().min(1, "مطلوب"),
  crNumber: z.string().min(10, "يجب أن يكون على الأقل 10 أرقام"),
  phoneNumber: z.string().min(10, "مطلوب"),
  loanAmount: z.string().min(1, "مطلوب"),
  entityCode: z.string().optional(),
  branch: z.string().min(1, "مطلوب"),
});

// ✅ STEP 2: FinancialEligibility
export const financialEligibilitySchema = z.object({
  salesVolume: z.string().min(1, "مطلوب"),
  capital: z.string().min(1, "مطلوب"),
});

// ✅ STEP 3: GeneralEligibility
export const generalEligibilitySchema = z.object({
  legalForm: z.string().min(1, "مطلوب"),
  engineAge: z.string().min(1, "مطلوب"),
  activityAge: z.string().min(1, "مطلوب"),
  activityLocation: z.string().min(1, "مطلوب"),
  activityType: z.string().optional(),
  otherCompanyActivity: z.string().min(1, "مطلوب"),
  personalAssets: z.string().min(1, "مطلوب"),
});

// ✅ STEP 4: EvaluationEligibility
export const evaluationEligibilitySchema = z.object({
  capitalStability: z.string().min(1, "مطلوب"),
  financialStatements: z.string().min(1, "مطلوب"),
  activityTypeEvaluative: z.string().min(1, "مطلوب"),
  numberOfEmployees: z.string().min(1, "مطلوب"),
  licensesAvailability: z.string().min(1, "مطلوب"),
  mainEngineExperienceYears: z.string().min(1, "مطلوب"),
  secondManagementPresence: z.string().min(1, "مطلوب"),
  bankCreditFacilities: z.string().min(1, "مطلوب"),
  annualSalesVolume: z.string().optional(),
  yearsWithOurBank: z.string().min(1, "مطلوب"),
  owners: z.array(
    z.object({
      ownerType: z.string().min(1, "مطلوب"), 
      cardNumber: z.string().min(1, "مطلوب"), 
    })
  ).optional(), 
  suppliers: z.array(z.object({
    supplierName: z.string().min(1, "مطلوب"),
    crn: z.string().min(1, "مطلوب"),
    value: z.string().min(1, "مطلوب"),
    soldGoods: z.string().min(1, "مطلوب"), 
  })
  )
  .optional(),
})

// ✅ STEP 5: ClientValidation
export const clientValidationSchema = z.object({
    topPrice: z.string().min(1, "مطلوب"),
    });

// ✅ STEP 6: Attachments (if any)
export const attachmentsSchema = z.object({
  // attachmentfile: z.instanceof(File).nullable().optional(), // ملف المرفق
checkbox: z.boolean().default(false).refine(Boolean, {
  message: "يجب الموافقة على الشروط"
})
});

