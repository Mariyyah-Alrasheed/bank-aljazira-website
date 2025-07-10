import { z } from "zod";


// ✅ STEP 1: CustomerInfo
// export const customerInfoSchema = z.object({
//   companyName: z.string().min(1, "مطلوب"),
//   crNumber: z.string().min(10, "يجب أن يكون على الأقل 10 أرقام"),
//   phoneNumber: z.string().min(10, "مطلوب"),
//   loanAmount: z.string().min(1, "مطلوب"),
//   entityCode: z.string().optional(),
//   branch: z.string().min(1, "مطلوب"),
// });

export function getCustomerInfoSchema(t? : (key:string) => string){
  return z.object({
      companyName: z.string().min(1,{
       message: t?  t("required") : "it is required !!"
      }),
      crNumber: z.string().min(10, {
       message: t?  t("required") : "it is required !!"
      }), 
      phoneNumber: z.string().min(10,{
       message: t?  t("min10Digits") : "it is required !!"
      }), 
      loanAmount: z.string().min(1,{
       message: t?  t("required") : "it is required !!"
      }),
      entityCode: z.string().optional(),
      branch: z.string().min(1,{
       message: t?  t("required") : "it is required !!"
      }), 

  })

}

export type CustomerFormValue = z.infer<
Awaited<ReturnType<typeof getCustomerInfoSchema>>
>


// ✅ STEP 2: FinancialEligibility
// export const financialEligibilitySchema = z.object({
//   salesVolume: z.string().min(1, "مطلوب"),
//   capital: z.string().min(1, "مطلوب"),
// });

export function financialEligibilitySchema(t? : (key:string) => string){
  return z.object({
  salesVolume: z.string().min(1,{
    message: t?  t("required") : "it is required !!"
  }),
  capital: z.string().min(1,{
    message: t?  t("required") : "it is required !!"
  }),
});
}

export type FinancialFormValue = z.infer<
Awaited<ReturnType<typeof financialEligibilitySchema>>
>

// ✅ STEP 3: GeneralEligibility
// export const generalEligibilitySchema = z.object({
//   legalForm: z.string().min(1, "مطلوب"),
//   engineAge: z.string().min(1, "مطلوب"),
//   activityAge: z.string().min(1, "مطلوب"),
//   activityLocation: z.string().min(1, "مطلوب"),
//   activityType: z.string().optional(),
//   otherCompanyActivity: z.string().min(1, "مطلوب"),
//   personalAssets: z.string().min(1, "مطلوب"),
// });


export function generalEligibilitySchema(t? : (key:string) => string){
   return z.object({
  legalForm: z.string().min(1,{
    message: t?  t("required") : "it is required !!"

  }),
  engineAge: z.string().min(1, {
    message: t?  t("required") : "it is required !!"

  }),
  activityAge: z.string().min(1,{
    message: t?  t("required") : "it is required !!"

  }),
  activityLocation: z.string().min(1, {
    message: t?  t("required") : "it is required !!"

  }),
  activityType: z.string().optional(),
  otherCompanyActivity: z.string().min(1, {
    message: t?  t("required") : "it is required !!"

  }),
  personalAssets: z.string().min(1, {
    message: t?  t("required") : "it is required !!"

  }),
});
}

export type GeneralEligibilityFormValue = z.infer<
Awaited<ReturnType<typeof generalEligibilitySchema>>
>

// ✅ STEP 4: EvaluationEligibility
// export const evaluationEligibilitySchema = z.object({
//   capitalStability: z.string().min(1, "مطلوب"),
//   financialStatements: z.string().min(1, "مطلوب"),
//   activityTypeEvaluative: z.string().min(1, "مطلوب"),
//   numberOfEmployees: z.string().min(1, "مطلوب"),
//   licensesAvailability: z.string().min(1, "مطلوب"),
//   mainEngineExperienceYears: z.string().min(1, "مطلوب"),
//   secondManagementPresence: z.string().min(1, "مطلوب"),
//   bankCreditFacilities: z.string().min(1, "مطلوب"),
//   annualSalesVolume: z.string().optional(),
//   yearsWithOurBank: z.string().min(1, "مطلوب"),
//   owners: z.array(
//     z.object({
//       ownerType: z.string().min(1, "مطلوب"), 
//       cardNumber: z.string().min(1, "مطلوب"), 
//     })
//   ).optional(), 
//   suppliers: z.array(z.object({
//     supplierName: z.string().min(1, "مطلوب"),
//     crn: z.string().min(1, "مطلوب"),
//     value: z.string().min(1, "مطلوب"),
//     soldGoods: z.string().min(1, "مطلوب"), 
//   })
//   )
//   .optional(),
// })

export function evaluationEligibilitySchema (t? : (key:string) => string){ 
  return z.object({
  capitalStability: z.string().min(1, {
    message: t?  t("required") : "it is required !!"

  }),
  financialStatements: z.string().min(1,{
    message: t?  t("required") : "it is required !!"

  }),
  activityTypeEvaluative: z.string().min(1,{
    message: t?  t("required") : "it is required !!"
  }),
  numberOfEmployees: z.string().min(1, {
    message: t?  t("required") : "it is required !!"
  }),
  licensesAvailability: z.string().min(1, {
    message: t?  t("required") : "it is required !!"
  }),
  mainEngineExperienceYears: z.string().min(1, {
    message: t?  t("required") : "it is required !!"
  }),
  secondManagementPresence: z.string().min(1, {
    message: t?  t("required") : "it is required !!"
  }),
  bankCreditFacilities: z.string().min(1, {
    message: t?  t("required") : "it is required !!"
  }),
  annualSalesVolume: z.string().optional(),
  yearsWithOurBank: z.string().min(1, {
    message: t?  t("required") : "it is required !!"
  }),
  owners: z.array(
    z.object({
      ownerType: z.string().min(1, {
        message: t?  t("required") : "it is required !!"
      }), 
      cardNumber: z.string().min(1, {
        message: t?  t("required") : "it is required !!"
      }), 
    })
  ).optional(), 
  suppliers: z.array(z.object({
    supplierName: z.string().min(1, {
      message: t?  t("required") : "it is required !!"
    }),
    crn: z.string().min(1, {
      message: t?  t("required") : "it is required !!"
    }),
    value: z.string().min(1, {
      message: t?  t("required") : "it is required !!"
    }),
    soldGoods: z.string().min(1, {
      message: t?  t("required") : "it is required !!"
    }), 
  })
  )
  .optional(),
})
}

export type EvaluationEligibilityFormValue = z.infer<
Awaited<ReturnType<typeof evaluationEligibilitySchema>>
>


// ✅ STEP 5: ClientValidation
// export const clientValidationSchema = z.object({
//     topPrice: z.string().min(1, "مطلوب"),
//     });
export function clientValidationSchema (t? : (key:string) => string){ 
  return z.object({
  topPrice: z.string().min(1, {
    message: t?  t("required") : "it is required !!"
  }),
});
}

export type ClientValidationFormValue = z.infer<
Awaited<ReturnType<typeof clientValidationSchema>>
>
// ✅ STEP 6: Attachments (if any)
// export const attachmentsSchema = z.object({
//   // attachmentfile: z.instanceof(File).nullable().optional(), // ملف المرفق
// checkbox: z.boolean().default(false).refine(Boolean, {
//   message: "يجب الموافقة على الشروط"
// })
// });

export function attachmentsSchema(t? : (key:string) => string) {
  const message = t ? t("acceptTerms") : "it is required !!";
  console.log({ message }); // ← تطبع الرسالة هنا

  return z.object({
  // attachmentfile: z.instanceof(File).nullable().optional(), // ملف المرفق
checkbox: z.boolean().default(false).refine(Boolean, {
    message: t?  t("acceptTerms") : "it is required !!",
})
});
}

export type AttachmentsFormValue = z.infer<
Awaited<ReturnType<typeof attachmentsSchema>>
>


// const fullFormSchema = getCustomerInfoSchema()
//   .merge(financialEligibilitySchema())
//   .merge(generalEligibilitySchema())
//   .merge(evaluationEligibilitySchema())
//   .merge(clientValidationSchema())
//   .merge(attachmentsSchema());

// export type FormValues = z.infer<typeof fullFormSchema>;
