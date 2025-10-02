import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const formSchema = z.object({
  name: z.string().min(1, { message: "이름을 입력해주세요." }),
  email: z.string().email({ message: "올바른 이메일 주소를 입력해주세요." }),
  phone: z.string().min(1, { message: "연락처를 입력해주세요." }),
  referrer: z.string().optional(),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집 및 이용에 동의해주세요.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const SolutionContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      referrer: "",
      privacyConsent: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", data);
      
      toast.success("상담 신청이 완료되었습니다!", {
        description: "담당자가 곧 연락드리겠습니다.",
      });
      
      form.reset();
    } catch (error) {
      toast.error("오류가 발생했습니다.", {
        description: "잠시 후 다시 시도해주세요.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="w-full bg-gradient-to-b from-gray-900 to-black py-20 md:py-32 px-6 md:px-10 lg:px-[154px]">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Request Free Consultation
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          무료 상담 신청
        </motion.p>

        <motion.div
          className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-lg">이름 (Name) *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="홍길동"
                        className="bg-gray-900/50 border-cyan-500/30 text-white h-12 rounded-xl focus:border-cyan-500 transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-lg">이메일 (Email) *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="example@email.com"
                        className="bg-gray-900/50 border-cyan-500/30 text-white h-12 rounded-xl focus:border-cyan-500 transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-lg">연락처 (Phone Number) *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="tel"
                        placeholder="010-1234-5678"
                        className="bg-gray-900/50 border-cyan-500/30 text-white h-12 rounded-xl focus:border-cyan-500 transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Referrer */}
              <FormField
                control={form.control}
                name="referrer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-lg">추천인 (Referrer)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="없으면 비워두고 신청해주세요"
                        className="bg-gray-900/50 border-cyan-500/30 text-white h-12 rounded-xl focus:border-cyan-500 transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Privacy Consent */}
              <FormField
                control={form.control}
                name="privacyConsent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="border-cyan-500/50 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-white">
                        개인정보 수집 및 이용에 동의합니다 *
                      </FormLabel>
                      <Link to="/privacy-policy" className="text-cyan-400 text-sm hover:underline block">
                        개인정보 처리방침 보기
                      </Link>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white h-14 text-lg font-semibold rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]"
              >
                {isSubmitting ? "제출 중..." : "상담 신청하기"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SolutionContactForm;
